"use server";
import { Environment } from "../model/Environment";
import { RestTemplate } from "../../utils/RestTemplatee";
import { headWithToken } from "../../utils/headersList";

const restTemplate = new RestTemplate({
  MAIN_SERVICE: Environment.MAIN_SERVICE,
  ADS_SERVICE: Environment.MAIN_SERVICE,
});

export const getPost = async () => {
  return await restTemplate.get(
    `${Environment.MAIN_SERVICE}/posts?postId=1`,
    {},
    headWithToken
  );
};
