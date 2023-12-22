import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-minder-server-one.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
