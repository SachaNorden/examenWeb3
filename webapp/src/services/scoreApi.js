import axios from 'axios';

const baseURL = 'http://localhost:3001'; // Remplacez par l'URL de votre API

const scoreApi = axios.create({
  baseURL: `${baseURL}/api/scores`
});

const retrieveAll = ()=>{
  return scoreApi.get("/").then((r)=> r.data);
}

const addScore = (newScore)=>{
  return scoreApi.post("/", newScore);
}

export  {
  retrieveAll,addScore
}

