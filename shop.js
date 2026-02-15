document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");

  if (!productGrid) {
    console.error("productGrid not found");
    return;
  }

  let products = [];

  try {
    products = JSON.parse(localStorage.getItem("products")) || [];
  } catch {
    products = [];
  }

  productGrid.innerHTML = "";

  if (products.length === 0) {
    productGrid.innerHTML = `
      <p style="grid-column:1/-1;text-align:center;color:#777;">
        No products available. Add products from Admin Panel.
      </p>`;
    return;
  }

  // ================= RENDER PRODUCTS =================
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "shop-card";

    // 🔥 initial animation state
    card.style.opacity = "0";
    card.style.transform =
      index % 2 === 0 ? "translateX(-60px)" : "translateX(60px)";

    card.innerHTML = `
      <div class="shop-img">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="shop-info">
        <div class="price-top">₹${product.price}</div>
        <h3>${product.name}</h3>
        <span class="category">Handmade Crochet</span>

        <div class="btn-row">
          <button class="nerone-btn buy-btn">Buy Now</button>
          <button class="nerone-btn cart-btn">Add to Cart</button>
        </div>
      </div>
    `;

    productGrid.appendChild(card);

    // ================= ANIMATION =================
    setTimeout(() => {
      card.style.transition =
        "all 0.9s cubic-bezier(0.22, 1, 0.36, 1)";
      card.style.opacity = "1";
      card.style.transform = "translateX(0)";
    }, index * 150);
  });
});
