import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/6860545013e0a63ba8cb7e94004971f7.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        <div className="border border-white p-6 rounded-lg flex flex-col items-center">
          <h3 className=" text-[#0796EF] text-[16px] font-oswald font-medium px-4 py-2 rounded mb-4 oswald">Connect with Us</h3>
          <div className="flex text-gray-500 items-center gap-2 kelly">
            <FaPhoneAlt />
            <span>+91 9567843340</span>
          </div>
          <div className="flex items-center text-gray-500 kelly gap-2 mt-2">
            <FaEnvelope />
            <span>info@deepnetsoft.com</span>
          </div>
        </div>

        <div className="border border-white p-6 rounded-lg relative flex flex-col items-center">
          <img src={logo} alt="Deep Net Soft" className="absolute -top-10 w-40 h-20" />
          <h3 className="text-[35px] oswald mt-10 ">DEEP NET SOFT</h3>
          <div className="flex justify-center gap-4 mt-4">
            <FaFacebookF className="text-gray-500 kelly text-xl" />
            <FaTwitter className="text-gray-500 kelly text-xl" />
            <FaYoutube className="text-gray-500 kelly text-xl" />
            <FaInstagram className="text-gray-500 kelly text-xl" />
          </div>
        </div>

        <div className="border border-white p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-[#0796EF] text-[16px] font-oswald font-medium mb-4 oswald">Find Us</h3>
          <div className="flex items-center gap-2 text-gray-500 kelly">
            <FaMapMarkerAlt />
            <p className="text-[16px] font-oswald font-normal text-center">
              First floor, Geo Infopark, Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-10 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p className="mb-2 md:mb-0 kelly">© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline kelly">Terms & Conditions</a>
          <a href="#" className="hover:underline kelly">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
