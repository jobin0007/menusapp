const { Router } = require("express");

const menuController = require("../controllers/menuController");
const authentication = require("../middleware/authentication");

const menuRoutes = Router();

menuRoutes.post("/create-menu",authentication ,menuController.createMenu);
menuRoutes.get("/get-menu", menuController.getMenus);

module.exports = menuRoutes;