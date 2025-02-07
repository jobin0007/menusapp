
const asyncHandler= require( "express-async-handler");
const MenuItem = require("../model/MenuItemsScehma");


const menuItemsController = {
   createMenuItem : asyncHandler(async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const { menu_id } = req.params; 
      const adminId = req.admin; 
  
      if (!adminId) {
        throw new Error("Authentication failed");
      }
  
      if (!menu_id) {
        return res.status(400).json({ message: "Menu ID is required" });
      }
  
      const menuItem = new MenuItem({ menu: menu_id, name, description, price });
  
      await menuItem.save();
  
      res.status(201).json(menuItem);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  }),
  
  

  getMenuItems: asyncHandler(async (req, res, next) => {
    try {
      const { menuId } = req.params;
      const items = await MenuItem.find({ menu: menuId }).populate("menu", "name");
      res.json(items);
    } catch (error) {
      next(error);
    }
  }),
};

module.exports= menuItemsController;