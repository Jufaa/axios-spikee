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

We will use these functions / methods:

```
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
```
This would be the use of these functions, to make it more generic.

Basically the functions will obtain the endpoint, a body (if necessary) and a header, which be the types mentioned later
```
  // GET CASE
  const handleGet = async () => {
    const urlApiGet = `/posts?postId=1`;
    const data = await getFetch(urlApiGet, {}, headWithToken);
    console.log(data);
  };

  // POST CASE
  const handlePost = async (body: TypeReviews) => {
    const urlApiPost = "/reviews/user";

    const data = await postFetch(urlApiPost, body, headWithToken);
    console.log(data);
  };

  // PUT CASE
  const handlePut = async (body: TypeDataPut) => {
    const urlPut = "/orders/inbox";

    const data = await putFetch(urlPut, body, headWithToken);
    console.log(data);
  };

```
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

Why do i use server in restTemplate.ts? Since if we do not use a use server, we have complications with cors, and the endpoints since the process.env would come as undefined if we do not use this, a use server is that the code that is in the file will be executed on the server side.

Why do we use this way? If you review v1, the services and API part in the files is 90 percent practically the same, and if we take this on a large scale it is detrimental, since it is complicated to maintain, that is why we created this way, since it is going to be easier in the long term.
