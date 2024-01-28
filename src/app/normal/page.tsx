"use client";
import React from "react";
import {
  methodGet,
  methodPost,
  methodPut,
} from "../../../utils/methodsResponse";
import { Post, typePost } from "../../../utils/types";

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

  const putCreate: Post = {
    id: 101,
    title: "gooodd",
    body: "bar",
    userId: 1,
  };

  const handlePut = async (put: Post) => {
    const apiPut = "https://jsonplaceholder.typicode.com/posts/1";
    const data = await methodPut(apiPut, put);
    console.log(data);
  };

  return (
    <>
      <button onClick={() => handleGet()}>GET</button>
      <button onClick={() => handlePost(postCreate)}>POST</button>
      <button onClick={() => handlePut(putCreate)}>PUT</button>
    </>
  );
};

export default page;
