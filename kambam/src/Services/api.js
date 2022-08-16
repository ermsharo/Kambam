import axios from "axios";

const URL = "http://localhost:5000";
const AUTH = `${URL}/login`;
const CARD = `${URL}/card`;

const CREDENTIALS = { login: 'letscode', senha: 'lets@123' };



const api = axios.create({
    baseURL: CARD,
});



api.interceptors.request.use(async config => {
    // Declaramos um token manualmente para teste.
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibGV0c2NvZGUiLCJpYXQiOjE2NjA2ODkwMTUsImV4cCI6MTY2MDY5MjYxNX0.EEC26r8-vWJD8i8OF79rqU7t6lHVhTQdhF0VvHm8XNY";

    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
    }

    return config;
});


export default api;