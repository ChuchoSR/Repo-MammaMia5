import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Estado para almacenar los datos de la pizza
  const [error, setError] = useState(null); // Estado para manejar errores
  const pizzaId = "p001"; // ID fijo de la pizza, por ahora es estático

  // Fetch de la pizza al montar el componente
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        if (!response.ok) {
          throw new Error("Error al obtener la pizza");
        }
        const data = await response.json();
        setPizza(data); // Guardamos los datos de la pizza en el estado
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPizza();
  }, []);

  // Si hay un error, mostrar mensaje de error
  if (error) {
    return <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>;
  }

  // Si aún no se han cargado los datos, mostrar un mensaje de carga
  if (!pizza) {
    return <p style={{ textAlign: 'center' }}>Cargando pizza...</p>;
  }

  // Renderizar los detalles de la pizza
  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: '300px', borderRadius: '8px', marginBottom: '16px' }}
      />
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#ff6347',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={() => alert("Añadir al carrito aún no está implementado.")}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
