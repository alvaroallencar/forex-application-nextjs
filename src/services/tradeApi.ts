import axios from "axios";

const tradeApi = axios.create({
  baseURL: "http://localhost:3333/",
  timeout: 10000,
});

export { tradeApi };
