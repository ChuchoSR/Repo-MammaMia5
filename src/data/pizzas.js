// pizzas.js

export const fetchPizzas = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/pizzas"); // Llamada a la API
    if (!response.ok) {
      throw new Error("Error al obtener las pizzas");
    }
    const pizzas = await response.json(); // Datos obtenidos de la API
    return pizzas;
  } catch (error) {
    console.error("Error al obtener las pizzas:", error);
    return []; // En caso de error, retorna un array vacío
  }
};
export const pizzaCart = [
  {
    id: "P001",
    name: "Napolitana",
    price: 5950,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  },
  {
    id: "P002",
    name: "Española",
    price: 7250,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
  },
  {
    id: "P003",
    name: "Salame",
    price: 5990,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
  },
];
