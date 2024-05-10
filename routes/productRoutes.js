const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/").get(getAllProducts);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
