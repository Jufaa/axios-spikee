"use client";

/**
 Example of use of the restTemplate function
 This code can be further factored, it is a practical example so that everything remains in a file to be able to understand it better
 */

import React from "react";

import { getFetch, postFetch, putFetch } from "../../utils/restTemplate";
import { headWithToken } from "../../utils/headersList";

// This types are the ones that the you will be using as the body
type TypeReviews = {
  sellerId: number;
  comment: string;
};

type TypeDataPut = {
  orderId: number;
  message: string;
};

const Page = () => {
  const urlApiGet = `/posts?postId=1`;

  // GET CASE
  const handleGet = async () => {
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

  return (
      <>
        <button onClick={() => handleGet()}>METHOD GET</button>
        <button
            onClick={() =>
                handlePost({
                  sellerId: 2,
                  comment: "Nice!",
                })
            }
        >
          METHOD POST
        </button>
        <button onClick={() => handlePut({ orderId: 1, message: "hi" })}>
          METHOD PUT
        </button>
      </>
  );
};

export default Page;