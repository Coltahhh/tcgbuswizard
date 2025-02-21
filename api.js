import axios from 'axios';

export const API_URL = import.meta.env.VITE_API_URL || "https://tcgbuswizard-backend.onrender.com";

export const getTournaments = () => axios.get(`${API_URL}/tournaments`);
export const createTournament = (data) => axios.post(`${API_URL}/tournaments`, data);
export const getRankings = () => axios.get(`${API_URL}/rankings`);