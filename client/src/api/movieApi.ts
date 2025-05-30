import { BASE_MOVIES_URL } from "@/utils/config";
import axiosInstance from ".";

export const getMovies = async (
  filter: "now_showing" | "upcoming" | undefined,
) => {
  return (await axiosInstance.get(`${BASE_MOVIES_URL}?filter=${filter}`)).data;
};

export const getMovie = async (id: string) => {
  return (await axiosInstance.get(`${BASE_MOVIES_URL}/${id}`)).data;
};

export const createMovie = async (payload: any) => {
  return (await axiosInstance.post(BASE_MOVIES_URL, payload)).data;
};
