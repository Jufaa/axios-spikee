# **AXIOS - SPIKE**

### WHAT IS AXIOS

Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic. On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

### WHAT IS HTTPS

HTTP (Hypertext Transfer Protocol) is the protocol used for data transmission on the web. HTTPS is the secure version of HTTP, employing SSL/TLS encryption to protect information between the browser and server, adding a layer of security to web communication.

### WHAT IS A METHOD AND WHATS METHODS EXIST

There are several methods but the most common are usually GET, POST, DELETE, PATCH, PUT

### WHAT METHODS ARE WE GOING TO USE?

We are going to use mostly GET PUT and POST but axios offers us a great variety in addition to these
[![Methods Axios](Methods Axios "Methods Axios")]

### HOW TO MAKE A CALL TO AN EXTERNAL ENDPOINT

Common calls have no problem in axios, since there should be no problems with the endpoints, or the use client, however in our case it is a problem, which is why we will use another solution.
Examples of calls in axios with this endpoint: https://jsonplaceholder.typicode.com/
Endpoints that we will use to test : IMAGE

### HOW ARE WE GOING TO MAKE THE CALL TO THE SERVI ENDPOINTS?

We will use these functions IMAGE:
It will have some parameters, endpoint, method to use, if you are going to wanto to use the token, and if the endpoint requires a body, it can be sent to it.
Example: IMAGE

Why do i use server in FetcherWithApiServi? Since if we do not use a use server, we have complications with cors, and the endpoints since the process.env would come as undefined if we do not use this, a use server is that the code that is in the file will be executed on the server side.

Why do we use this way? If you review v1, the services and API part in the files is 90 percent practically the same, and if we take this on a large scale it is detrimental, since it is complicated to maintain, that is why we created this way, since it is going to be easier in the long term.
