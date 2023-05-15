const express = require("express");

const router = express.Router();

const productsController = require(`./controllers/productsController`);

router.get("/products", productsController.listar);
router.get("/product/:code", productsController.product);
router.post("/products", productsController.insert);
router.put("/product", productsController.alter);
router.put("/product/alterPrice", productsController.alterPrice);

module.exports = router;
