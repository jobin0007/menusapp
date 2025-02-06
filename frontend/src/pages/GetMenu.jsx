import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Back from "../assets/f81b6208cb3da0f5ecc0f0d109ca4bd0.jpg";
import { getMenusAPI } from "../services/menuItemServices";
import ShowMenu from "./ShowMenu";

const GetMenu = () => {
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [selectedMenuDes, setSelectedMenuDes] = useState(""); 

  const {
    data: menus,
    isLoading: isMenusLoading,
    error: menusError,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: getMenusAPI,
  });

  useEffect(() => {
    if (menus && menus.length > 0) {
      setSelectedMenuId(menus[0]._id);
      setSelectedMenuDes(menus[0].description); 
    }
  }, [menus]);

  const handleClick = (menuId, menuDescription) => {
    setSelectedMenuId(menuId);
    setSelectedMenuDes(menuDescription); 
  };

  return (
    <div>
      <div
        className="w-full h-[70vh] flex items-center justify-center relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Back})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative text-center text-white px-6 lg:px-12 z-10">
          <h1 className="font-serif text-[40px] md:text-[60px] font-semibold mb-4 menu-hea">
            Menu
          </h1>
          <p className="text-gray-500 text-[16px] md:text-[18px] p-4 max-w-2xl menu-des mx-auto">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button below.
          </p>
        </div>
      </div>

      {isMenusLoading && (
        <p className="text-center text-white">Loading menus...</p>
      )}
      {menusError && (
        <p className="text-center text-red-500">Error fetching menus.</p>
      )}

      {menus && (
        <div className="py-10 bg-black">
          <div className="flex flex-wrap justify-center gap-6">
            {menus.map((menu) => (
              <div key={menu._id} className="w-full sm:w-auto max-w-xs">
                <button
                  onClick={() => handleClick(menu._id, menu.description)}
                  className={`w-full oswald py-4 px-6 rounded-lg border border-[#0796EF] text-sm font-bold transition-all ${
                    selectedMenuId === menu._id
                      ? "bg-[#0796EF] text-black"
                      : "bg-[#000000] text-white"
                  } hover:bg-[#0796EF] hover:text-black`}
                >
                  {menu.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedMenuId && <ShowMenu menuId={selectedMenuId} menuDes={selectedMenuDes} />}
    </div>
  );
};

export default GetMenu;
