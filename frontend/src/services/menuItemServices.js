import axios from "axios";
import {  getAdminToken } from "../utilities/handleToken";
import { BASE_URL } from "../utilities/url";


export const createMenuAPI  = async(data)=>{
  const token = getAdminToken()
  
  const response = await axios.post(`${BASE_URL}/menu/create-menu`,data,{
    
    headers:{
      Authorization:`Bearer ${token}`
    }
  });
  console.log(response?.data);
  return response?.data

}


export const getMenusAPI = async () => {

  const response = await axios.get(`${BASE_URL}/menu/get-menu`);
  return response.data;
};
