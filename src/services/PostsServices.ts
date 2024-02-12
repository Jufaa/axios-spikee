"use server";
import { Environment } from "@/model/Environment";
import { RestTemplate } from "../../utils/RestTemplate";
import { AuthorizedHeader } from "../../utils/headersList";

const restTemplate = new RestTemplate(Environment.MAIN_SERVICE.toString());

export const getPost = async () => {
  const params = {
    "postId": 1
  }
  return await restTemplate.get("/posts", params, AuthorizedHeader);
};
