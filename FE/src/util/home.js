
import axios from'axios'
import { environment } from "../environment/env";
import Cookies from "js-cookie";
const apiUrl = environment.apiUrl;
export function home(response,router) {
try {

    const token = response?.data.accessToken;
    Cookies.set("myToken", token, {  expires: 20 / (24 * 60) }); 
    axios.get(apiUrl + '/home', {
      headers: {
        'Authorization': `Bearer ${token}` 
      } 
    })
    .then(response => {
      console.log("data", response.data);
     router.push("/");
    })
    .catch(error => {
      console.log("er", error.request?.response);
     router.push("/login");
    });
    
  } catch (error) {
     router.push("/login");
  }
    
    
    
}
