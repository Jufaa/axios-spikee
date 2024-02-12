"use server";
import { Environment } from "../model/Environment";
import { RestTemplate } from "../../utils/RestTemplate";
import { headWithToken } from "../../utils/headersList";

const restTemplate = new RestTemplate(Environment.MAIN_SERVICE);

export const getPost = async () => {
  return await restTemplate.get(`/posts?postId=1`, {}, headWithToken);
};
