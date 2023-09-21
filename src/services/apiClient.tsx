import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fbf22fa12b844906a968089dc3c67f7d",
  },
});
