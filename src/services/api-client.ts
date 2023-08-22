import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c3ea41dddc644a89a28bbd5e8da88b74",
  },
});
