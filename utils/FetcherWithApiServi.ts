"use server";
import axios, { AxiosResponse, Method } from "axios";

export const FetcherWithApiServi = async (
  url: string,
  method: Method,
  bearer: boolean,
  params?: any
): Promise<any> => {
  const newUrl = `http://${process.env.V2_MAIN_SERVICE_URL}${url}`;
  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjIsInN1YiI6Imx1Y2EiLCJpYXQiOjE3MDYzOTYzMDIsImV4cCI6MTcwNjQ4MjcwMn0.EoOlk6p2yCjssfmtg29OJS5XC20tLPkbtQ5c4358jr5S2LNeg77bB8j2MDvW3k4xhHmvagyNe6y-IpOln7QPcg";

  const options = bearer
    ? {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      }
    : {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      };

  try {
    let response: AxiosResponse;

    if (method === "GET") {
      response = await axios.get(newUrl, options);
    } else if (method === "POST") {
      response = await axios.post(newUrl, params, options);
    } else if (method === "PUT") {
      response = await axios.put(newUrl, params, options);
    } else {
      throw new Error(`Unsupported HTTP method: ${method}`);
    }

    console.log(response);

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error in Fetcher:", error.message);
      if (error.response) {
        console.error("Server Response Data:", error.response.data);
      }
    } else {
      console.error("Non-Axios Error in Fetcher:", error.message);
    }
    throw error;
  }
};
