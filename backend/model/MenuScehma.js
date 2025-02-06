const mongoose = require('mongoose')

const menuScehma =new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

const Menu = mongoose.model("Menu",menuScehma);

module.exports = Menu