import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_API_KEY;
const API_URL = import.meta.env.VITE_APP_API_URL;

export const fetchPhones = async (search = "", limit = "20", offset = "0") => {
  let url = `${API_URL}/`;

  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (limit) params.append("limit", limit);
  if (offset) params.append("offset", offset);

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const response = await axios.get(url, {
    headers: { "x-api-key": API_KEY },
  });

  return response.data;
};
