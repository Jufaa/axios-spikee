import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { iRestTemplate } from './iRestTemplate';
import {Environment} from "@/model/Environment";

export class RestTemplate implements iRestTemplate {
  constructor(environment: Environment) {
    axios.defaults.baseURL = environment.toString();
  }

  async get<T>(url: string, params?: any, headers?: any): Promise<T> {
    const config: AxiosRequestConfig = {
      params,
      headers,
    };

    const response: AxiosResponse<T> = await axios.get(url, config);
    return response.data;
  }

  async post<T>(url: string, body?: any, headers?: any): Promise<T> {
    const config: AxiosRequestConfig = {
      headers,
    };

    const response: AxiosResponse<T> = await axios.post(url, body, config);
    return response.data;
  }

  async put<T>(url: string, body?: any, headers?: any): Promise<T> {
    const config: AxiosRequestConfig = {
      headers,
    };

    const response: AxiosResponse<T> = await axios.put(url, body, config);
    return response.data;
  }
}