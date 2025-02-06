const asyncHandler= require ('express-async-handler');
const Menu = require('../model/MenuScehma')



const menuController = {
  createMenu: asyncHandler(async (req, res) => {
    const id = req.admin;
        if (!id) {
          throw new Error("Authentication failed");
        }
  
   
      const { name, description } = req.body;
    

      const menu = new Menu({ name, description });
      await menu.save();
      res.status(201).json(menu);
   
  }),

  getMenus: asyncHandler(async (req, res, next) => {
    try {
      const menus = await Menu.find();
      res.json(menus);
    } catch (error) {
      next(error);
    }
  }),
}

module.exports= menuController
