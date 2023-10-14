
// import router from '../router/router'
import axios from'axios'
import { environment } from "../environment/env";
const apiUrl = environment.apiUrl;
import { home } from './home';
export async function loginAcc(username, password, router) {
  console.log('Người dùng đã nhấn nút "Đăng nhập"');
  try {
    const response = await axios.post(apiUrl + '/login', { username, password });
    console.log("data", response.request?.response[0][1]);
    home(response, router);
  } catch (error) {
    console.log("er",error.request?.response);
    return error.request?.response;
  }
}
