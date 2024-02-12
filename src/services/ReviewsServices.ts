"use server";
import { Environment } from "@/model/Environment";
import { TypeReviews } from "@/types/Reviews";
import { RestTemplate } from "../../utils/RestTemplate";
import { AuthorizedHeader } from "../../utils/headersList";

const restTemplate = new RestTemplate(Environment.MAIN_SERVICE.toString());

export const reviewsUser = async (body: TypeReviews) => {
  return await restTemplate.post("/reviews/user", body, AuthorizedHeader);
};
