import React, { useState } from 'react';
import '../assets/css/Registro.css';  

const Registro = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!correo || !contrasena || !confirmarContrasena) {
      setMensaje('Todos los campos son obligatorios.');
      return;
    }

    if (contrasena.length < 6) {
      setMensaje('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      setMensaje('La contraseña y la confirmación no coinciden.');
      return;
    }

    setMensaje('¡Registro exitoso!');
  };

  return (
    <div className="form-container">
      <h2>Formulario de Registro</h2>
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

        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            placeholder="Confirma tu contraseña"
          />
        </div>

        <button type="submit">Registrar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Registro;
