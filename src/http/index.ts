import * as axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const $api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export {$api};