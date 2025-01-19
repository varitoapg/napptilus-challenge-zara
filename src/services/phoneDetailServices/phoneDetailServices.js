import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_URL = import.meta.env.VITE_APP_API_URL;

export const fetchPhoneDetail = async (id) => {
  const url = `${API_URL}/${id}`;

  const response = await axios.get(url, {
    headers: { "x-api-key": API_KEY },
  });

  return response.data;
};
