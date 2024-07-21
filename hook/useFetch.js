import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const randomkeys = [
    "4623f30635mshf5cae49fcfdde53p15ea9fjsn46f2b96b4eb9",
    "21ec022084msh2ff9057288e2dd7p19ed24jsn65e7ee529081",
    "e80e4f9fb1msh167b44330e2cbe7p1db747jsn92df0ecbf86b",
    '652e59f1c5msh3ebb263dd2710ffp11b729jsn3e4b0e8af9d1',
    '4862e2960dmsh508f3e3a90001b6p1d0377jsna44db54d8549',
    '0eeb4ecc71msh0cef7fcf55eabe7p1f2803jsn42dbab86d733',
    "03cf8ae892msh7fe945e844ae9d0p188471jsn14653d54c567",
    '29fc2c0f28msh5d13a156ee2f715p15d9edjsndaa2b4db73be',
  ]
  const getRandomKey = (keys) => {
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  };
  
  const selectedKey = getRandomKey(randomkeys);
  

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": selectedKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
