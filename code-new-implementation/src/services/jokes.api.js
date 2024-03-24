import axios from "axios";

const errorsDefValue = {
  category: "",
  icon_url: "",
  id: "error",
  url: "",
  value: "",
};

export const fetchRandom = async () => {
  try {
    const apiUrl = `https://api.chucknorris.io/jokes/random`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    return { ...errorsDefValue, value: error.response.data.message || error.message };
  }
};

export const fetchRandomByCategory = async (category) => {
  try {
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    return { ...errorsDefValue, value: error.response.data.message || error.message };
  }
};

export const fetchCategories = async () => {
  try {
    const apiUrl = `https://api.chucknorris.io/jokes/categories`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    return error.response.data.message || error.message;
  }
};

export const fetchSearch = async (query) => {
  try {
    const apiUrl = `https://api.chucknorris.io/jokes/search?query=${query}`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    return error.response.data.message || error.message;
  }
};
