<img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Axios_logo_%282020%29.svg" width="400" />


# **AXIOS - SPIKE**

# 1️⃣ What is Axios❓
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic. On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

# 2️⃣ What is https❓

HTTP (Hypertext Transfer Protocol) is the protocol used for data transmission on the web. HTTPS is the secure version of HTTP, employing SSL/TLS encryption to protect information between the browser and server, adding a layer of security to web communication.

# 3️⃣ What is a method and what methods exist❓ 🗒️

A "method" refers to a specific action or function that you can perform to interact with the backend in a simpler and more structured way.

There are several methods but the most common are usually GET, POST, DELETE, PATCH, PUT



# 4️⃣ What methods are we going to use❓ 

We are going to use mostly GET PUT and POST but axios offers us a great variety 
<br/>
Methods offered by axios:
<br/>
![Captura desde 2024-01-29 19-15-59](https://github.com/Jufaa/axios-spikee/assets/97070491/900a9c30-8034-4645-b55c-58d02d28fd61)


# 5️⃣ How are we going to make the call to the servi endpoints❓ 🤔

We will use these interface

```
export interface iRestTemplate {
  get<T>(url: string, params?: any, headers?: any): Promise<T>;
  post<T>(url: string, body?: any, headers?: any): Promise<T>;
  put<T>(url: string, body?: any, headers?: any): Promise<T>;
}

```
And this environment, what that cannot be changed
```
export const Environment = {
  MAIN_SERVICE: `http://${process.env.NEXT_PUBLIC_V2_MAIN_SERVICE_URL}`,
  ADS_SERVICE: `http://${process.env.NEXT_PUBLIC_V2_ADS_SERVICE_URL}`,
} as const;
```

And we will use this template that will have the interface mentionen above
```
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

```

 We going to use this template in the order services section example.
```
"use server";
import { Environment } from "@/model/Environment";
import { RestTemplate } from "../../utils/RestTemplate";
import { AuthorizedHeader } from "../../utils/headersList";
import { TypeDataPut } from "@/types/Order";

const restTemplate = new RestTemplate(Environment.MAIN_SERVICE.toString());

export const ordersInbox = async (body: TypeDataPut) => {
  return await restTemplate.put("/orders/inbox", body, AuthorizedHeader
  );
};

```
This would be the use of these functions, to make it more generic.
What type of headers can we use?
```
  "Content-Type": "application/json",
  Accept: "*/*",
  Authorization: `Bearer ${token}`,
};

export const headWithoutToken = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

export const headWithTokenFormData = {
  "Content-Type": "multipart/form-data",
  Accept: "*/*",
  Authorization: `Bearer ${token}`,
};
```

<br/>

Why will we use interfaces and so on? This is to have a good level of architecture and also much better scalability than in v1. In addition, an interface is used so that there can be no typing errors or data errors since we are under a contract.

Why do we use this way? If you review v1, the services and API part in the files is 90 percent practically the same, and if we take this on a large scale it is detrimental, since it is complicated to maintain, that is why we created this way, since it is going to be easier in the long term.
