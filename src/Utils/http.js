import axios from "axios";
import { DecriptionData } from "./encription";

let localIP = process.env.REACT_APP_LOCAL_BASE_URL;

let NodeBaseURL = ``;
const host = window.location.hostname;

if (host && host === "liveserver domain name") {
  // set online server endpoints

  NodeBaseURL = `set online server endpoints`;
} else if (host && host === "we can use online server domain name") {
  // Staging server endpoints

  NodeBaseURL = `Staging server endpoints`;
} else {
  // local development
  NodeBaseURL = localIP;
}

const http = axios.create({
  baseURL: NodeBaseURL,
});

export const encriptionData = localStorage.getItem("auth");

let access_token = encriptionData
  ? DecriptionData(encriptionData).accessToken
  : false;

export const updateToken = (token) => {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
};

if (access_token) {
  updateToken(access_token);
}

export { NodeBaseURL };
export default http;
