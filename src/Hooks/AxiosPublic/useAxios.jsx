import axios from "axios";


const axioss = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
})

const useAxios = () => {

    return axioss;

};

export default useAxios;