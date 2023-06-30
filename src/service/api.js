import axios from "axios";

// const api = "https://api.rajaongkir.com/starter/province?key=1feb04075e76d2f209f0a1142efc4d31"

export const getBerita = () => {
  return axios
    .get(api)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
const api = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=3c3fec3ba03344b4990ba080b3a0e99b";
