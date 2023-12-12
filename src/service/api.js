import axios from "axios";

const api = axios.create({
    baseURL: "https://rest-api-desafio-minicusrso.vercel.app"
    //baseURL: "http://localhost:3001"
    });

export const getCategories = async () => {
  const response = await api.post("/categoria", {name: 'Ivan'});
  console.log('resposta',response)
  return response.data;
}

export const createCategory = async (userName, name, description) => {
  const response = await api.post("/categoria/new", {userName, name, description});
  console.log('resposta2',response);
  return response.data;
}