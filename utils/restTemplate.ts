"use server";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const DEFAULT_URL = `http://${process.env.V2_MAIN_SERVICE_URL}`;

const handleRequest = (response: any) => {
  try {
    return response.data;
  } catch (error: any) {
    console.log(error);
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

export const getFetch = async (
  url: string,
  params?: any,
  headers?: any
): Promise<AxiosResponse> => {
  const apiUrl = `${DEFAULT_URL}${url}`;

  const config: AxiosRequestConfig = {
    params,
    headers,
  };

  const response: AxiosResponse = await axios.get(apiUrl, config);
  return handleRequest(response);
};

export const postFetch = async (
  url: string,
  params?: any,
  headers?: any
): Promise<any> => {
  const apiUrl = `${DEFAULT_URL}${url}`;

  try {
    const response: AxiosResponse = await axios.post(apiUrl, params, {
      headers: headers || {},
    });
    console.log("response:", response);

    return response.data;
  } catch (error: any) {
    return handleRequest(error.response);
  }
};

export const putFetch = async (
  url: string,
  params?: any,
  headers?: any
): Promise<AxiosResponse> => {
  const apiUrl = `${DEFAULT_URL}${url}`;
  try {
    const response: AxiosResponse = await axios.put(apiUrl, params, {
      headers: headers || {},
    });
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return handleRequest(error.response);
  }
};
