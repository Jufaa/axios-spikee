<img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Axios_logo_%282020%29.svg" width="100%" style="background-color: #ffffff" alt="Axios img"/>

# **AXIOS - SPIKE**

# 1️⃣ What is Axios❓
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic. On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

# 2️⃣ What is https❓

HTTP (Hypertext Transfer Protocol) is the protocol used for data transmission on the web. HTTPS is the secure version of HTTP, employing SSL/TLS encryption to protect information between the browser and server, adding a layer of security to web communication.

# 3️⃣ What is a method and which methods exist❓ 

A "method" refers to a specific action or function that you can perform to interact with the backend in a simpler and more structured way.

There are several methods but the most common are usually GET, POST, DELETE, PATCH, PUT

# 4️⃣ What methods are we going to use❓ 

We are going to use mostly GET, PUT and POST but axios offers us a great variety
<p>Methods offered by axios:</p>

![Captura desde 2024-01-29 19-15-59](https://github.com/Jufaa/axios-spikee/assets/97070491/900a9c30-8034-4645-b55c-58d02d28fd61)

# 5️⃣ How are we going to make the call to Servi's endpoints❓ 🤔

### First we'll need to define all the methods that we are going to implement.
``` ts
export interface iRestTemplate {
  get<T>(url: string, params?: any, headers?: any): Promise<T>;
  post<T>(url: string, body?: any, headers?: any): Promise<T>;
  put<T>(url: string, body?: any, headers?: any): Promise<T>;
}
```

### Then we'll set up all the environments that are available from backend side:
``` ts
export const Environment = {
  MAIN_SERVICE: `http://${process.env.NEXT_PUBLIC_V2_MAIN_SERVICE_URL}`,
  ADS_SERVICE: `http://${process.env.NEXT_PUBLIC_V2_ADS_SERVICE_URL}`,
} as const;
```

### And we'll define the headers that we are going to use in the calls.
``` ts
export const AuthorizedHeader = {
  "Content-Type": "application/json",
  Accept: "*/*",
  Authorization: `Bearer ${token}`,
};

export const UnauthorizedHeader = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

export const AuthorizedHeaderWithMultipart = {
  "Content-Type": "multipart/form-data",
  Accept: "*/*",
  Authorization: `Bearer ${token}`,
};
```

### Now we can create the RestTemplate class, which will implement the iRestTemplate interface.
- This class will be in charge of making the calls to the backend.
- It will have the methods that we defined in the interface.
- It will have a constructor that will receive the environment to which we are going to make the calls.
``` ts
export class RestTemplate implements iRestTemplate{
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

### Finally, this is how we would use the RestTemplate class to make a call to the backend.
- We will create a dedicated Service file for each controller in the backend.
  - i.e: **_PostService.ts_** would contain the following methods: createPost, getPostById, updatePostById, deletePostById, etc.
- We will create a new instance of the RestTemplate class and pass the environment to the constructor.
- We will call the method that we want to use and pass the url, the body and the headers.
- This Service methods will be called from the components to make the calls to the backend.
``` ts
const restTemplate = new RestTemplate(Environment.MAIN_SERVICE.toString());

export const ordersInbox = async (body: TypeDataPut) => {
  return await restTemplate.put("/orders/inbox", body, AuthorizedHeader
  );
};
```
---
Why will we use interfaces and so on? This is to have a good level of architecture and also much better scalability than in v1. In addition, an interface is used so that there can be no typing errors or data errors since we are under a contract.

Why do we use this way? If you review v1, the services and API part in the files is 90 percent practically the same, and if we take this on a large scale it is detrimental, since it is complicated to maintain, that is why we created this way, since it is going to be easier in the long term.
