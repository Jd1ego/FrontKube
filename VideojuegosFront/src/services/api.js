import axios from "axios";

const API_URL = "http://localhost:8080"; 

export const getJuegos = async () => {
  const response = await axios.get(`${API_URL}/Juegos`);
  return response.data;
};

export const addJuego = async (juego) => {
  await axios.post(`${API_URL}/Juego`, juego);
};
