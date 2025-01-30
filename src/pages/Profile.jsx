import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Email: usuario@ejemplo.com</p>
      <button onClick={() => alert("Cerrar sesión aún no implementado.")}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
