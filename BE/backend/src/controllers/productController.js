import productService from "../services/productService.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    console.error("❌ Lỗi khi lấy sản phẩm:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.json(product);
  } catch (err) {
    console.error("❌ Lỗi khi lấy sản phẩm theo ID:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category_id } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Tên và giá sản phẩm là bắt buộc" });
    }

    const newProduct = await productService.createProduct(
      name,
      description,
      price,
      stock || 0,
      category_id || null
    );

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("❌ Lỗi khi thêm sản phẩm:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
};
