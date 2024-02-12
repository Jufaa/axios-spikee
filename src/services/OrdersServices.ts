"use server";
import { Environment } from "../model/Environment";
import { RestTemplate } from "../../utils/RestTemplate";
import { headWithToken } from "../../utils/headersList";
import { TypeDataPut } from "@/types/Order";

const restTemplate = new RestTemplate(Environment.MAIN_SERVICE);

export const ordersInbox = async (body: TypeDataPut) => {
  return await restTemplate.put(`/orders/inbox`, body, headWithToken);
};
