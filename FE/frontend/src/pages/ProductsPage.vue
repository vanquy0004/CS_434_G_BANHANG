<template>
  <div id="app">
    <Header />
    <section class="products container">
      <h2>Sản phẩm nổi bật</h2>
      <div class="row">
        <div class="col-md-3 filter-section">
          <h4>Bộ lọc sản phẩm</h4>
          <div class="filter-group">
            <h5>Danh mục</h5>
            <div v-for="category in categories" :key="category">
              <input
                type="checkbox"
                :id="category"
                :value="category"
                v-model="selectedCategories"
              />
              <label :for="category">{{ category }}</label>
            </div>
          </div>
          <div class="filter-group">
            <h5>Giá</h5>
            <label for="minPrice">Từ:</label>
            <input
              type="number"
              id="minPrice"
              v-model.number="minPrice"
              placeholder="Giá thấp nhất"
            />
            <label for="maxPrice">Đến:</label>
            <input
              type="number"
              id="maxPrice"
              v-model.number="maxPrice"
              placeholder="Giá cao nhất"
            />
          </div>
        </div>
<div class="col-md-9 product-list" >
  <div class="row">
    <div
      class="col-md-3"
      v-for="product in filteredProducts"
      :key="product.id"
    >
      <div class="product-card">
        <img :src="product.img" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price.toLocaleString() }}đ</p>
        <button class="btn-custom">Thêm vào giỏ</button>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { fetchProducts, uploadImage } from "../services/productService";

export default {
  name: "ProductPage",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      products: [],
      selectedCategories: [],
      minPrice: null,
      maxPrice: null,
      loading: true,
      error: null,
      selectedFile: null,
      uploadStatus: '',
    };
  },
  async mounted() {
    await this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.loading = true;
      this.error = null;
      try {
        this.products = await fetchProducts();
      } catch (error) {
        this.error = "Failed to load products";
      } finally {
        this.loading = false;
      }
    },
    handleFileSelect(event) {
      this.selectedFile = event.target.files[0];
      this.uploadStatus = '';
    },
    async uploadImage() {
      if (!this.selectedFile) {
        this.uploadStatus = 'Please select a file.';
        return;
      }
      this.uploadStatus = 'Uploading...';
      try {
        const imageUrl = await uploadImage(this.selectedFile);
        this.uploadStatus = 'Upload successful!';
        console.log('Image uploaded:', imageUrl);
        this.selectedFile = null;
      } catch (error) {
        this.uploadStatus = 'Upload failed. See console for details.';
      }
    },
  },
  computed: {
    categories() {
      const cats = this.products.map((p) => p.category);
      return [...new Set(cats)];
    },
    filteredProducts() {
      return this.products.filter((product) => {
        const inCategory =
          this.selectedCategories.length === 0 ||
          this.selectedCategories.includes(product.category);
        const inMinPrice =
          this.minPrice === null || product.price >= this.minPrice;
        const inMaxPrice =
          this.maxPrice === null || product.price <= this.maxPrice;
        return inCategory && inMinPrice && inMaxPrice;
      });
    },
  },
};
</script>

<style scoped>
.products {
  padding: 50px 15px;
  text-align: left;
}

.products h2 {
  margin-bottom: 30px;
  font-size: 28px;
  text-align: center;
}

.row {
  display: flex;
  gap: 20px;
}

.filter-section {
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
}

.filter-group {
  margin-bottom: 20px;
}

.filter-group h5 {
  margin-bottom: 10px;
}

.filter-group input[type="checkbox"] {
  margin-right: 8px;
}

.filter-group input[type="number"] {
  width: 100%;
  padding: 6px 8px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.product-list {
  /* display: block; */
}

.product-card {
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: max-content;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-card img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
}

.product-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.product-card p {
  font-size: 16px;
  margin-bottom: 15px;
  color: #666;
}

.btn-custom {
  padding: 12px 25px;
  background: #ffcc00;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.btn-custom:hover {
  background: #f47d20;
}
</style>
