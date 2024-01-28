import axios from "axios";
import { Post, typePost } from "./types";

export const methodGet = (url: string, params?: any) => {
  return axios.get(url, { params });
};

export const methodPost = (url: string, data: typePost) => {
  return axios.post(url, data);
};

export const methodPut = (url: string, data: Post) => {
  const resp = axios.put(url, data);
  try {
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const methodDelete = (url: string) => {
  return axios.delete(url);
};
