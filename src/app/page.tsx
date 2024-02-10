"use client";

/**
 Example of use of the restTemplate function
 This code can be further factored, it is a practical example so that everything remains in a file to be able to understand it better
 */

import React from "react";

import { headWithToken } from "../../utils/headersList";
import {getAllMemberships} from "../service/MembershipService";

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
    // GET CASE
    const handleGet = async () => {
        getAllMemberships()
            .then(r => console.log(r));
    };

    // TODO: redo the other methods POST and PUT
  return (
      <>
        <button onClick={() => handleGet()}>METHOD GET</button>
      </>
      // TODO: redo the other methods POST and PUT
  );
};

export default Page;