"use client";
import React from "react";
import { methodGet, methodPost } from "../../utils/methodsResponse";
import { typePost } from "../../utils/types";

const page = () => {
  const apiGet = "https://jsonplaceholder.typicode.com/posts";
  const handleGet = async () => {
    const data = await methodGet(apiGet);
    console.log(data);
  };

  const handlePost = async (post: typePost) => {
    const apiPost = "https://jsonplaceholder.typicode.com/posts";
    const data = await methodPost(apiPost, post);
    console.log(data);
  };

  const postCreate: typePost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  return (
    <>
      <button onClick={() => handleGet()}>GET</button>
      <button onClick={() => handlePost(postCreate)}>POST</button>
      <button>PUT</button>
    </>
  );
};

export default page;
