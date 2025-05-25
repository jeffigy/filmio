import { BASE_MOVIES_URL } from "@/utils/config";
import axiosInstance from ".";

export const getMovies = async () => {
  return (await axiosInstance.get(BASE_MOVIES_URL)).data;
};

export const getMovie = async (id: string) => {
  return (await axiosInstance.get(`${BASE_MOVIES_URL}/${id}`)).data;
};
