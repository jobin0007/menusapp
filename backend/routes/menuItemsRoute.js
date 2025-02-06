const { Router } = require("express");

const  menuItemsController  = require("../controllers/menuItemsController");
const authentication = require("../middleware/authentication");

const menuItemsRoutes = Router();

menuItemsRoutes.post("/add-item/:menu_id",authentication, menuItemsController.createMenuItem);
menuItemsRoutes.get("/get-menu-items/:menuId", menuItemsController.getMenuItems);

module.exports = menuItemsRoutes;