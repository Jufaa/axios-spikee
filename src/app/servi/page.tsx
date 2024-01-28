"use client";

import React from "react";
import { FetcherWithApiServi } from "../../../utils/FetcherWithApiServi";
interface TypeDataLogin {
  username: string;
  password: string;
}

interface TypeDataPut {
  orderId: number;
  message: string;
}

const Page = () => {
  const urlApiGet = `/posts?postId=1`;

  const handleGet = async () => {
    try {
      const data = await FetcherWithApiServi(urlApiGet, "GET", true, null);
      console.log(data);
    } catch (error) {
      console.error("Error in handleGet:", error);
    }
  };

  const handlePostLogin = async () => {
    const body: TypeDataLogin = {
      username: "luca",
      password: "mypassword",
    };

    const urlApiPost = "/login";
    try {
      const data = await FetcherWithApiServi(urlApiPost, "POST", false, body);
      console.log(data);
    } catch (error) {
      console.error("Error in handleGet:", error);
    }
  };

  const handlePut = async (body: TypeDataPut) => {
    const urlPut = "/orders/inbox";

    try {
      const data = await FetcherWithApiServi(urlPut, "PUT", true, body);
      console.log(data);
    } catch (error) {
      console.error("Error in handleGet:", error);
    }
  };

  return (
    <>
      <button onClick={() => handleGet()}>Get post id 1</button>
      <button onClick={() => handlePostLogin()}>Login POST</button>
      <button onClick={() => handlePut({ orderId: 1, message: "hi" })}>
        Order Inbox PUT
      </button>
    </>
  );
};

export default Page;
