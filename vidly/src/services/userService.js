import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users";

export function register(user) {
  //try{
  console.log(apiEndpoint);
  return http.post(apiEndpoint, {
    name: user.name,
    email: user.username,
    password: user.password,
  });
  //} catch(error){

  //}
}
