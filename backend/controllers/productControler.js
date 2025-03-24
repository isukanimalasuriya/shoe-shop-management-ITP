import mongoose from "mongoose";
import Shoes from "../modeles/shoe.js";

export function addProduct(req, res) {
  const data = req.body;

  const newShoe = new Shoes(data);

  newShoe
    .save()
    .then(() => {
      res.json({
        message: "Product added sucessfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: "Product addition failed",
        error,
      });
    });
}

export async function getShoes(req, res) {
  try {
    const shoes = await Shoes.find({});
    res.json(shoes);
    // return;
  } catch (e) {
    res.status(500).json({
      message: "Failed to get products",
    });
  }
}

export async function getOneShoeDetail(req, res) {
  try {
    const { id } = req.params;
    const shoeObjId = new mongoose.Types.ObjectId(id);
    const shoeDetail = await Shoes.findById(shoeObjId);
    res.json(shoeDetail);
  } catch (err) {
    res.status(500).json({
      message: "Failed to get product details",
    });
  }
}
