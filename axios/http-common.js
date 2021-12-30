import axios from "axios";

const SERVER_API_URI = process.env.NEXT_PUBLIC_SERVER_API_URI;

export default axios.create({
  baseURL: SERVER_API_URI + "/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
