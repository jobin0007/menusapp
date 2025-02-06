import { useQuery } from "@tanstack/react-query";
import { fetchMenuItemsAPI } from "../services/menuServices";
import LeftImage from "../assets/09e436820849a421ec0b1fe5126bf9b5.png";
import RightImage from "../assets/f07a69022d4c64e313237eadaceb997f.png";

const ShowMenu = ({ menuId, menuDes }) => {
  const {
    data: menuItems,
    isLoading: isMenuLoading,
    error: menuItemsError,
  } = useQuery({
    queryKey: ["menuItems", menuId],
    queryFn: () => fetchMenuItemsAPI(menuId),
    enabled: !!menuId,
  });

  return (
    <div className="relative flex justify-center items-center py-16 bg-black px-6">
      <div className="relative w-full max-w-full md:max-w-6xl border border-gray-500 p-6 md:p-8 bg-[#121212] text-white text-center rounded-lg shadow-lg jack-box flex flex-col items-center">
        
        <img
          src={LeftImage}
          alt="Left Decoration"
          className="absolute top-[-40px] left-[-40px] md:top-[-100px] md:left-[-20px] w-[60px] md:w-[130px] h-auto"
        />

        <h2 className="font-oswald font-semibold relative inline-block text-[24px] md:text-[50px]">
          {menuDes}
          <div className="absolute left-[-80px] top-1/2 w-[60px] border-t-4 border-gray-500 hidden md:block"></div>
          <div className="absolute right-[-80px] top-1/2 w-[60px] border-t-4 border-gray-500 hidden md:block"></div>
        </h2>

        {isMenuLoading && <p className="text-center mt-4">Loading menu items...</p>}
        {menuItemsError && <p className="text-center text-red-500">Error fetching menu items.</p>}

        {menuItems?.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <div key={item._id} className="w-full bg-[#1a1a1a] p-4 rounded-lg shadow-md text-left">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold">{item.name}</h3>
                  <p className="text-md md:text-lg font-bold text-[#0796EF]">${item.price}</p>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-4">No items available for this menu.</p>
        )}

        <img
          src={RightImage}
          alt="Right Decoration"
          className="absolute bottom-[-60px] right-[-40px] md:bottom-[-40px] md:right-[-50px] w-[60px] md:w-[130px] h-auto"
        />
      </div>
    </div>
  );
};

export default ShowMenu;
