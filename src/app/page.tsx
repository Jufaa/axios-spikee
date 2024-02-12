"use client";

/**
 Example of use of the restTemplate function
 This code can be further factored, it is a practical example so that everything remains in a file to be able to understand it better
 */

import React from "react";

import { getPost } from "@/services/PostsServices";
import { TypeReviews } from "@/types/Reviews";
import { reviewsUser } from "@/services/ReviewsServices";
import { TypeDataPut } from "@/types/Order";
import { ordersInbox } from "@/services/OrdersServices";

// These types are the ones that you will be using as the body

const Page = () => {
  // GET CASE
  const handleGet = async () => {
    const data = await getPost();
    console.log(data);
  };

  // POST CASE
  const handlePost = async (body: TypeReviews) => {
    const data = await reviewsUser(body);
    console.log(data);
  };

  // PUT CASE
  const handlePut = async (body: TypeDataPut) => {
    const data = await ordersInbox(body);
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
