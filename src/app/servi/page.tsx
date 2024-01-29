'use client';
// Example of use of the FetcherWithApiServi function
// ************************************************************************************************************************************************************************************************
// ****************This code can be further factored, it is a practical example so that everything remains in a file to be able to understand it better.****************
// ************************************************************************************************************************************************************************************************
//**************************************************************************************************************************************************************************************************

import React from 'react';
import { FetcherWithApiServi } from '../../../utils/FetcherWithApiServi';

// This types they sould be in a file types.ts
interface TypeReviews {
  sellerId: number;
  comment: string;
}

interface TypeDataPut {
  orderId: number;
  message: string;
}

const Page = () => {
  // This endpoint they could be improved, since it allows you to create the endpoints before sending them, in case you need  parameters
  const urlApiGet = `/posts?postId=1`;

  const handleGet = async () => {
    try {
      const data = await FetcherWithApiServi({
        url: urlApiGet,
        method: 'GET',
        bearer: true,
      });
      console.log(data);
    } catch (error) {
      console.error('Error in handleGet:', error);
    }
  };

  const handlePostLogin = async () => {
    const body: TypeReviews = {
      sellerId: 0,
      comment: 'Nice!',
    };

    const urlApiPost = '/reviews/user';
    try {
      const data = await FetcherWithApiServi({
        url: urlApiPost,
        method: 'POST',
        bearer: true,
        params: body,
      });
      console.log(data);
    } catch (error) {
      console.error('Error in handleGet:', error);
    }
  };

  const handlePut = async (body: TypeDataPut) => {
    const urlPut = '/orders/inbox';

    try {
      const data = await FetcherWithApiServi({
        url: urlPut,
        method: 'PUT',
        bearer: true,
        params: body,
      });
      console.log(data);
    } catch (error) {
      console.error('Error in handleGet:', error);
    }
  };

  return (
    <>
      <button onClick={() => handleGet()}>Get post id 1</button>
      <button onClick={() => handlePostLogin()}>Login POST</button>
      <button onClick={() => handlePut({ orderId: 1, message: 'hi' })}>
        Order Inbox PUT
      </button>
    </>
  );
};

export default Page;
