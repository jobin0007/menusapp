import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMenusAPI } from "../services/menuItemServices";

const Menu = () => {
  const navigate = useNavigate();

  const {
    data: menus,
    isLoading: isMenusLoading,
    error: menusError,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: getMenusAPI,
  });

  const handleAddMenuItem = (menuId) => {
    navigate(`/add-menu-items/${menuId}`);
  };

  if (isMenusLoading) {
    return <p className="text-center text-white">Loading menus...</p>;
  }

  if (menusError) {
    return <p className="text-center text-red-500">Error fetching menus.</p>;
  }

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100">
      {menus && (
        <div className="w-full max-w-2xl">
          {menus.map((menu) => (
            <div
              key={menu._id}
              className="mb-6 p-6 rounded-md border-2 border-[#0796EF] shadow-md"
            >
              <p className="text-lg font-semibold text-black text-center mb-4">
                {menu.name}
              </p>

              <button
                onClick={() => handleAddMenuItem(menu._id)}
                className="w-full py-4 px-4 rounded-md border-[0.32px] text-lg font-semibold transition-all border-[#0796EF] bg-[#000000] text-white hover:bg-[#0796EF] hover:text-black"
              >
                Add Menu Item
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
