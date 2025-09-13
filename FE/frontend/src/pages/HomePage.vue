<template>
  <div id="app">
    <Header />

    <!-- Carousel -->
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div style="height: 530px" class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://zusammengebaut.com/wp-content/uploads/2022/08/brick-tales-2022.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ytimg.com/vi/ZKDardFql_c/maxresdefault.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000052111/63a452f1d53d141207afe195f21a064f51e96559ed1406df743582308c515870"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Category Banner -->
    <section class="category-banner">
      <div class="tabs">
        <button class="tab" :class="{ active: activeTab === 'trending' }" @click="activeTab = 'trending'">Trending</button>
        <button class="tab" :class="{ active: activeTab === 'themes' }" @click="activeTab = 'themes'">Themes</button>
        <button class="tab" :class="{ active: activeTab === 'age' }" @click="activeTab = 'age'">Age</button>
      </div>
      <div class="horizontal-scroll">
        <div class="category-card" v-for="category in categories[activeTab]" :key="category.id">
          <img :src="category.image" :alt="category.title" />
          <div class="card-title">{{ category.title }}</div>
        </div>
      </div>
    </section>

    <!-- Danh sách sản phẩm -->
    <section class="products">
      <h2>Sản phẩm nổi bật</h2>
      <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="product-list">
              <div class="product-card">
                <img
                  src="https://www.lego.com/cdn/cs/set/assets/blt7d8c39b23e6c2e0b/21336.png"
                  alt="LEGO 1"
                />
                <h3>LEGO Bộ Thành Phố</h3>
                <p>1,200,000đ</p>
                <button class="btn-custom">Thêm vào giỏ</button>
              </div>
              <div class="product-card">
                <img
                  src="https://www.lego.com/cdn/cs/set/assets/bltf0679ec75a4c8d4b/10302.png"
                  alt="LEGO 2"
                />
                <h3>LEGO Xe Cổ Điển</h3>
                <p>2,300,000đ</p>
                <button class="btn-custom">Thêm vào giỏ</button>
              </div>
              <div class="product-card">
                <img
                  src="https://www.lego.com/cdn/cs/set/assets/bltad9e48e0c10fc9c0/75341.png"
                  alt="LEGO 3"
                />
                <h3>LEGO Star Wars</h3>
                <p>3,500,000đ</p>
                <button class="btn-custom">Thêm vào giỏ</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="product-list">
              <div class="product-card">
                <img
                  src="https://www.lego.com/cdn/cs/set/assets/bltad9e48e0c10fc9c0/75341.png"
                  alt="LEGO 3"
                />
                <h3>LEGO Star Wars</h3>
                <p>3,500,000đ</p>
                <button class="btn-custom">Thêm vào giỏ</button>
              </div>
              <div class="product-card">
                <img
                  src="https://www.lego.com/cdn/cs/set/assets/bltad9e48e0c10fc9c0/75341.png"
                  alt="LEGO 3"
                />
                <h3>LEGO Star Wars</h3>
                <p>3,500,000đ</p>
                <button class="btn-custom">Thêm vào giỏ</button>
              </div>
              <div class="product-card">
                <img
                  src="https://www.lego.com/cdn/cs/set/assets/bltad9e48e0c10fc9c0/75341.png"
                  alt="LEGO 3"
                />
                <h3>LEGO Star Wars</h3>
                <p>3,500,000đ</p>
                <button class="btn-custom">Thêm vào giỏ</button>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      activeTab: "trending",
      categories: {
        trending: [
          {
            id: 1,
            title: "New",
            image: "/src/assets/images/category-new.jpg",
          },
          {
            id: 2,
            title: "Exclusives",
            image: "/src/assets/images/category-exclusives.jpg",
          },
          {
            id: 3,
            title: "Offers",
            image: "/src/assets/images/category-offers.jpg",
          },
          {
            id: 4,
            title: "All sets",
            image: "/src/assets/images/category-allsets.jpg",
          },
          {
            id: 5,
            title: "18+",
            image: "/src/assets/images/category-18plus.jpg",
          },
    {
            id: 6,
            title: "Gaming",
            image: "/src/assets/images/category-gaming.jpg",
          },
          {
            id: 7,
            title: "Custom Minifigures",
            image: "/src/assets/images/category-custom-minifigures.jpg",
          },
          {
            id: 8,
            title: "Unlock Rewards",
            image: "/src/assets/images/category-unlock-rewards.jpg",
          },
        ],
        themes: [
                   {
            id: 6,
            title: "Gaming",
            image: "/src/assets/images/category-gaming.jpg",
          },
          {
            id: 7,
            title: "Custom Minifigures",
            image: "/src/assets/images/category-custom-minifigures.jpg",
          },
          {
            id: 8,
            title: "Unlock Rewards",
            image: "/src/assets/images/category-unlock-rewards.jpg",
          },
        ],
        age: [
                 {
            id: 1,
            title: "New",
            image: "/src/assets/images/category-new.jpg",
          },
          {
            id: 2,
            title: "Exclusives",
            image: "/src/assets/images/category-exclusives.jpg",
          },
          {
            id: 3,
            title: "Offers",
            image: "/src/assets/images/category-offers.jpg",
          },
          {
            id: 4,
            title: "All sets",
            image: "/src/assets/images/category-allsets.jpg",
          },
          {
            id: 5,
            title: "18+",
            image: "/src/assets/images/category-18plus.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
/* giữ nguyên CSS của bạn */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

    /* Banner */
    .banner {
      text-align: center;
      padding: 80px 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #fff;
    }

    .banner h1 {
      font-size: 40px;
      margin-bottom: 15px;
    }

    .banner p {
      font-size: 18px;
      margin-bottom: 25px;
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
      background: #e6b800;
    }

    /* Products */
    .products {
      padding: 50px;
      text-align: center;
    }

    .products h2 {
      margin-bottom: 30px;
      font-size: 28px;
    }

    .product-list {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: nowrap;
    }

    .product-card {
      background: #fff;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      width: 350px;
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
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";

.category-banner {
  background-color: #1a1a1a;
  padding: 10px 0;
  color: white;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 15px;
}

.tab {
  background: none;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 8px 15px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
}

.tab.active {
  font-weight: 700;
  color: #00aaff;
}

.tab.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 15%;
  width: 70%;
  height: 3px;
  background-color: #00aaff;
  border-radius: 2px;
}

.horizontal-scroll {
  display: flex;
  overflow-x: auto;
  gap: 15px;
  padding: 10px 20px;
  scroll-behavior: smooth;
}

.horizontal-scroll::-webkit-scrollbar {
  height: 8px;
}

.horizontal-scroll::-webkit-scrollbar-thumb {
  background-color: #00aaff;
  border-radius: 4px;
}

.category-card {
  flex: 0 0 auto;
  width: 200px;
  height: 250px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  padding: 10px;
  background: #ffffff;
}

.category-card img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  z-index: 0;
}

.category-card .card-title {
  position: relative;
  z-index: 1;
  text-shadow: 0 0 5px rgba(0,0,0,0.7);
}

.category-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.5);
}

/* Responsive */
@media (min-width: 1024px) {
  .horizontal-scroll {
    gap: 20px;
    padding: 10px 40px;
  }
  .category-card {
    width: 180px;
    height: 240px;
  }
}

@media (max-width: 600px) {
  .horizontal-scroll {
    gap: 10px;
    padding: 10px 10px;
  }
  .category-card {
    width: 120px;
    height: 180px;
    font-size: 1rem;
  }
}
</style>
