import axios from 'axios';

const baseURL = 'http://localhost:3001'; // Remplacez par l'URL de votre API

const jokeApi = axios.create({
  baseURL: `${baseURL}/api/jokes`
});

const retrieveAll = ()=>{
  return jokeApi.get("/").then((r)=> r.data);
}

const create = (newVolume) => {
  return jokeApi.post("/", newVolume);
}

const remove = (resourceId) => {
  return jokeApi.delete(`/${resourceId}`);
}

export  {
  retrieveAll,
  create,
  remove
}
