const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

//Get all the menus
router.get("/", async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submit a menu
router.post("/", async (req, res) => {
  const menu = new Menu({
    title: req.body.title,
  });
  try {
    const savedMenu = await menu.save();
    res.json(savedMenu);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific menu
router.get("/:menuId", async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.menuId);
    res.json(menu);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete menu
router.delete("/:menuId", async (req, res) => {
  try {
    const removedMenu = await Menu.remove({ _id: req.params.menuId });
    res.json(removedMenu);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a menu
router.patch("/:menuId", async (req, res) => {
  try {
    const updatedMenu = await Menu.updateOne(
      { _id: req.params.menuId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedMenu);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
