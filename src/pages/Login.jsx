import React, { useState } from 'react';
import '../assets/css/Login.css';  // Importar los estilos CSS

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!correo || !contrasena) {
      setMensaje('Todos los campos son obligatorios.');
      return;
    }

    if (contrasena.length < 6) {
      setMensaje('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setMensaje('¡Inicio de sesión exitoso!');
  };

  return (
    <div className="form-container">
      <h2>Formulario de Login</h2>
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Introduce tu correo electrónico"
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Introduce tu contraseña"
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Login;