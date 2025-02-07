const mongoose = require('mongoose')

const menuItemScehma =new mongoose.Schema({
  menu: { type: String, ref: "Menu", required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
}, { timestamps: true });

const MenuItem = mongoose.model("MenuItem",menuItemScehma);
module.exports = MenuItem

