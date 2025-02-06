import axios from "axios";
import { getAdminToken } from "../utilities/handleToken";
import { BASE_URL } from "../utilities/url";



export const adminLoginAPI = async(data)=>{
    const response = await axios.post(`${BASE_URL}/admin/login`,data)
    console.log(
        response.data
        );
    return response?.data
   
}
export const getOneAdminAPI = async(adminId)=>{
    const token = getAdminToken()
    
    const response = await axios.get(`${BASE_URL}/admin/getoneadmin/${adminId}`,{
      
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    console.log(response?.data);
    return response?.data
  
  }