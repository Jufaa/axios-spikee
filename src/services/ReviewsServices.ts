"use server";
import { Environment } from "../model/Environment";
import { TypeReviews } from "../types/Reviews";
import { RestTemplate } from "../../utils/RestTemplatee";
import { headWithToken } from "../../utils/headersList";

const restTemplate = new RestTemplate({
  MAIN_SERVICE: Environment.MAIN_SERVICE,
  ADS_SERVICE: Environment.MAIN_SERVICE,
});

export const reviewsUser = async (body: TypeReviews) => {
  return await restTemplate.post(
    `${Environment.MAIN_SERVICE}/reviews/user`,
    body,
    headWithToken
  );
};
