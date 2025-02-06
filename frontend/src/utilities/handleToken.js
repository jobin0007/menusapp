import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export const getAdminData = () => {
  return Cookies.get('AdminData'), Cookies.get('AdminData') ? jwtDecode(Cookies.get('AdminData')) : null
}
export const getAdminToken = () => {
  return Cookies.get('AdminData') ? Cookies.get('AdminData') : null
}
