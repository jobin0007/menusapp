import axios from "axios";
import {  getAdminToken } from "../utilities/handleToken";
import { BASE_URL } from "../utilities/url";


export const fetchMenuItemsAPI = async (menuId) => {
  const response = await axios.get(`${BASE_URL}/menuItem/get-menu-items/${menuId}`);
  return response.data;
};

export const createMenuItemAPI = async (data, menuId) => {
  const token = getAdminToken(); 
  const response = await axios.post(
    `${BASE_URL}/menuItem/add-item/${menuId}`, 
    data, 
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
