import axios from "axios";

const URL = "http://localhost:5000";
const AUTH_URL = `${URL}/login`;
const CARD = `${URL}/cards`;

const CREDENTIALS = { login: 'letscode', senha: 'lets@123' };



const authApi = axios.create({
    baseURL: AUTH_URL,
});

const getToken = async ()=>{
    authApi
    .post("/",
        CREDENTIALS
)
    .then((response) => {
        console.log(response.data)
        return (`Bearer ${response.data}`)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}

const api =  axios.create({
    baseURL: CARD,
    headers: {
     'Authorization': getToken()
      }
});









export default api;
