import React, { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';
import { fetchPizzas } from '../data/pizzas'; // Importar la función para obtener las pizzas

const Home = () => {
  const [pizzas, setPizzas] = useState([]); // Estado para las pizzas
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    const getPizzas = async () => {
      const data = await fetchPizzas(); // Llamada a la función de pizzas.js
      if (data.length === 0) {
        setError("No se pudieron cargar las pizzas.");
      } else {
        setPizzas(data); // Actualiza el estado con las pizzas obtenidas
      }
    };

    getPizzas();
  }, []);

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  }

  if (pizzas.length === 0) {
    return <p style={{ textAlign: 'center' }}>Cargando pizzas...</p>;
  }

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '16px',
      padding: '16px',
    }}>
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          desc={pizza.desc}
          ingredients={pizza.ingredients}
          img={pizza.img}
          price={pizza.price}
        />
      ))}
    </div>
  );
};

export default Home;
