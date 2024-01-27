"use client";
import React from "react";
import { methodGet } from "../../../utils/methodsResponse";
import { llamada } from "../../../utils/nuevo";

const page = () => {
  const apiGet = "http://main2.qa-servi.com:8080/api/v2/posts?postId=1";

  const handleGet = async () => {
    const data = await llamada(apiGet);
    console.log(data);
  };
  return <button onClick={() => handleGet()}>Get post id 1</button>;
};

export default page;
