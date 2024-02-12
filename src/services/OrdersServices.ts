"use server";
import { Environment } from "../model/Environment";
import { RestTemplate } from "../../utils/RestTemplatee";
import { headWithToken } from "../../utils/headersList";
import { TypeDataPut } from "@/types/Order";

const restTemplate = new RestTemplate({
  MAIN_SERVICE: Environment.MAIN_SERVICE,
  ADS_SERVICE: Environment.MAIN_SERVICE,
});

export const ordersInbox = async (body: TypeDataPut) => {
  return await restTemplate.put(
    `${Environment.MAIN_SERVICE}/orders/inbox`,
    body,
    headWithToken
  );
};
