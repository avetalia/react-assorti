import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 00b933f882db2577163156bc5efee722f3f17d7aedcd3a8088e83dbe91cc873d"
  }
});
