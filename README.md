<img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Axios_logo_%282020%29.svg" width="400" />


# **AXIOS - SPIKE**

# 1️⃣ What is Axios❓
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic. On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

# 2️⃣ What is https❓

HTTP (Hypertext Transfer Protocol) is the protocol used for data transmission on the web. HTTPS is the secure version of HTTP, employing SSL/TLS encryption to protect information between the browser and server, adding a layer of security to web communication.

# 3️⃣ What is a method and whats methods exist❓ 🗒️

A "method" refers to a specific action or function that you can perform to interact with the backend in a simpler and more structured way.

There are several methods but the most common are usually GET, POST, DELETE, PATCH, PUT



# 4️⃣ What methods are we going to use❓ 

We are going to use mostly GET PUT and POST but axios offers us a great variety in addition to these
<br/>
Methods offered by axios:
<br/>
![Captura desde 2024-01-29 19-15-59](https://github.com/Jufaa/axios-spikee/assets/97070491/900a9c30-8034-4645-b55c-58d02d28fd61)

# 5️⃣ How to make a call to an external endpoint❓ 🤔

Common calls have no problem in axios, since there should be no problems with the endpoints, or the use client, however in our case it is a problem, which is why we will use another solution.
Examples of calls in axios with this endpoint: https://jsonplaceholder.typicode.com/
Endpoints that we will use to test


![Captura desde 2024-01-29 19-18-03](https://github.com/Jufaa/axios-spikee/assets/97070491/daf87cb9-564d-4b1c-a728-b78120960bf7)
![Captura desde 2024-01-29 19-18-32](https://github.com/Jufaa/axios-spikee/assets/97070491/c698aace-4c79-4bec-9245-ff07d434f638)


It can be improved as the errors can be more specific.


# 6️⃣ How are we goint to make the call to the servi endpoints❓ 🤔

We will use these functions:
![Captura desde 2024-01-29 19-30-44](https://github.com/Jufaa/axios-spikee/assets/97070491/33d25d92-fae8-4464-970e-882a95809152)

![Captura desde 2024-01-29 19-20-59](https://github.com/Jufaa/axios-spikee/assets/97070491/d8863058-516c-47ed-96eb-d378e9eaccfb)

It will have some parameters, endpoint, method to use, if you are going to wanto to use the token, and if the endpoint requires a body, it can be sent to it.
<br/>
Example:


![Captura desde 2024-01-29 19-21-33](https://github.com/Jufaa/axios-spikee/assets/97070491/c24c4f27-2945-429f-ad22-2ccb603364a0)


Why do i use server in FetcherWithApiServi? Since if we do not use a use server, we have complications with cors, and the endpoints since the process.env would come as undefined if we do not use this, a use server is that the code that is in the file will be executed on the server side.

Why do we use this way? If you review v1, the services and API part in the files is 90 percent practically the same, and if we take this on a large scale it is detrimental, since it is complicated to maintain, that is why we created this way, since it is going to be easier in the long term.
