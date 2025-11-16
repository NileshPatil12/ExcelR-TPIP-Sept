// Sample product data
const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 200, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Laptop", category: "electronics", price: 800, image: "https://via.placeholder.com/150" },
    { id: 3, name: "T-shirt", category: "fashion", price: 20, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Jeans", category: "fashion", price: 45, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Blender", category: "home", price: 70, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Table Lamp", category: "home", price: 30, image: "https://via.placeholder.com/150" }
  ];
  
  // Function to display products
  function displayProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ""; // Clear the previous products
  
    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  // Initial display of all products
  displayProducts(products);
  
  // Function to filter products based on search and selected filters
  function filterProducts() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const categoryValue = document.getElementById('category').value;
    const priceValue = document.getElementById('price').value;
  
    const filteredProducts = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchValue);
      const matchesCategory = categoryValue === "all" || product.category === categoryValue;
  
      let matchesPrice = true;
      if (priceValue !== "all") {
        const [min, max] = priceValue.split("-").map(Number);
        matchesPrice = product.price >= min && product.price <= max;
      }
  
      return matchesSearch && matchesCategory && matchesPrice;
    });
  
    displayProducts(filteredProducts);
  }
  