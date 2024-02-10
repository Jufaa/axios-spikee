import {RestTemplate} from "../../utils/RestTemplate";
import {Environment} from "@/model/Environment";

const restTemplate = new RestTemplate(Environment.MAIN_SERVICE);

export const getAllMemberships = async () => {
    return await restTemplate.get(`/membership/all`, {}, {});
}

export const getMembershipById = async () => {
    return await restTemplate.get(`/membership/id`, {}, {});
}

//...