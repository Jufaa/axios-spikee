import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {iRestTemplate} from "@/interface/IRestTemplate";

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

export class RestTemplate implements iRestTemplate{

  // TODO: Replace String with Environment, in order to encapsulate the environment (currently we're supporting any string as environment, that's not OK)
  constructor(environment: string) {
    axios.defaults.baseURL = environment;
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
