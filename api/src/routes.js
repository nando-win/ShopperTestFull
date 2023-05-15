const express = require("express");

const router = express.Router();

const productsController = require(`./controllers/productsController`);

router.get("/products", productsController.listar);
router.get("/product/:code", productsController.product);
router.post("/products", productsController.insert);

module.exports = router;
