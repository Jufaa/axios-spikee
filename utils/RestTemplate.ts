import { iRestTemplate } from "@/interface/IRestTemplate";
import { Environment } from "@/model/Environment";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const handleRequest = (response: AxiosResponse<any>) => {
  try {
    return response.data;
  } catch (error: any) {
    console.error(error);
    if (axios.isAxiosError(error)) {
      console.error("Axios Error in Fetcher:", error);
      if (error.response) {
        console.error("Server Response Data:", error.response.data);
        return error.response.data;
      }
    } else {
      console.error("Non-Axios Error in Fetcher:", error.message);
      return error.message;
    }
    return error;
  }
};

export class RestTemplate implements iRestTemplate {
  constructor(environment: Environment) {
    const url = environment.toString();
    axios.defaults.baseURL = url;
  }

  async get<T>(url: string, params?: any, headers?: any): Promise<T> {
    const config: AxiosRequestConfig = {
      params,
      headers,
    };
    const response: AxiosResponse = await axios.get(url, config);
    return handleRequest(response);
  }

  async post<T>(url: string, body?: any, headers?: any): Promise<T> {
    try {
      const response: AxiosResponse = await axios.post(url, body, {
        headers: headers || {},
      });

      return response.data;
    } catch (error: any) {
      return handleRequest(error.response);
    }
  }

  async put<T>(url: string, body?: any, headers?: any): Promise<T> {
    try {
      const response: AxiosResponse = await axios.put(url, body, {
        headers: headers || {},
      });
      return response.data;
    } catch (error: any) {
      return handleRequest(error.response);
    }
  }
}
