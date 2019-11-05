import axios from "axios";

const KEY = "AIzaSyCYiTNDSsUh1b1Ofk9_oTKYelfotiUOzPI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
