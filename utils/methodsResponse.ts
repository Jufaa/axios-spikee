import axios from "axios";

export const methodGet = (url: string, params?: any) => {
  return axios.get(url, { params });
};

export const methodPost = (url: string, data: any) => {
  return axios.post(url, data);
};

export const methodPut = (url: string, data: any) => {
  return axios.put(url, data);
};

export const methodDelete = (url: string) => {
  return axios.delete(url);
};
