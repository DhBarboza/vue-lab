import { http } from "./config";

export default {
  getItems: () => {
    return http.get("motorcycle");
  },

  saveItem: (motorcycle) => {
    return http.post("motorcycle", motorcycle);
  },
};
