import axios from'axios'
import { environment } from "../environment/env";
const apiUrl = environment.apiUrl;

export async function registerAcc(fullname ,username ,password ,email ,router) {
  console.log('Người dùng đã nhấn nút "Đăng nhập"');
  try {
    const response = await axios.post(apiUrl + '/register', { fullname ,username , password,email });
    router.push("/login");
    
  } catch (error) {
    console.log("er", error.request?.response);
    return error.request?.response;
  }
}
