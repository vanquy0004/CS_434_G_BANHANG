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
// Cập nhật sản phẩm
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, category_id } = req.body;
    const updatedProduct = await productService.updateProduct(
      id,
      name,
      description,
      price,
      stock,
      category_id
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.json(updatedProduct);
  } catch (err) {
    console.error("❌ Lỗi khi cập nhật sản phẩm:", err.message);
    res.status(500).json({ error: "Server error" });
  }
}
// Xoá sản phẩm
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.json({ message: "Xóa thành công", product: deletedProduct });
  } catch (err) {
    console.error("❌ Lỗi khi xoá sản phẩm:", err.message);
    res.status(500).json({ error: "Server error" });
  }
}

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
