let products = JSON.parse(localStorage.getItem("products")) || [];

const list = document.getElementById("adminProductList");

function renderAdminProducts() {
  list.innerHTML = "";

  products.forEach(product => {
    list.innerHTML += `
      <div class="admin-product">
        <img src="${product.image}">
        <div>
          <strong>${product.name}</strong><br>
          ₹${product.price}
        </div>
        <button onclick="editProduct(${product.id})">Edit</button>
        <button onclick="deleteProduct(${product.id})">Delete</button>
      </div>
    `;
  });
}

function saveProduct() {
  const id = document.getElementById("productId").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  if (!name || !price || !image) {
    alert("Fill all fields");
    return;
  }

  if (id) {
    // EDIT
    products = products.map(p =>
      p.id == id ? { ...p, name, price, image } : p
    );
  } else {
    // ADD
    products.push({
      id: Date.now(),
      name,
      price,
      image
    });
  }

  localStorage.setItem("products", JSON.stringify(products));
  resetForm();
  renderAdminProducts();
}

function editProduct(id) {
  const product = products.find(p => p.id === id);

  document.getElementById("productId").value = product.id;
  document.getElementById("name").value = product.name;
  document.getElementById("price").value = product.price;
  document.getElementById("image").value = product.image;
}

function deleteProduct(id) {
  if (!confirm("Delete this product?")) return;

  products = products.filter(p => p.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
  renderAdminProducts();
}

function resetForm() {
  document.getElementById("productId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
}

renderAdminProducts();
