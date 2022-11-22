import { http } from "./config";

export default {
  getItems: () => {
    return http.get("motorcycle");
  },

  saveItem: (motorcycle) => {
    return http.post("motorcycle", motorcycle);
  },

  updateItem: (motorcycle) => {
    return http.put("motorcycle", motorcycle);
  },

  deleteItem: (id) => {
    return http.delete("motorcycle/" + id)
  }
};
