"use server";
import axios, { AxiosResponse, Method } from "axios";

export const FetcherWithApiServi = async (
  url: string,
  method: Method,
  bearer: boolean,
  params?: any
): Promise<any> => {
  const newUrl = `http://${process.env.V2_MAIN_SERVICE_URL}${url}`;

  // This is hardcoded  ought is automatic with nookies o something like that
  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjIsInN1YiI6Imx1Y2EiLCJpYXQiOjE3MDY1NDE1NzgsImV4cCI6MTcwNjYyNzk3OH0.epRLchd3kDjB2QjQdI4uhU0RxbTuEy1GBNc1xXpczriNzGMxCZ31C-mqIRcf3C8CczMWLrRQVcUnfhRRoMk5BA";

  // Can agg one header more for images
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

    return response.data;
  } catch (error: any) {
    // This can be greatly improved to be more specific.

    if (axios.isAxiosError(error)) {
      console.error("Axios Error in Fetcher:", error);
      if (error.response) {
        console.error("Server Response Data:", error.response.data);
        return error.response.data;
      }
    } else {
      console.error("Non-Axios Error in Fetcher:", error.message);
    }
    throw error;
  }
};
