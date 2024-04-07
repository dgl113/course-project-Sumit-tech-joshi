// Define the product data
const product = [
  {
    image: "images/product_01.jpeg",
    name: "Classic Black Suit",
    price: "$79.99",
  },
  {
    image: "images/product_02.jpg",
    name: "Elegant Navy Blue Suit",
    price: "$99.99",
  },
  {
    image: "images/product_03.jpg",
    name: "Modern Gray Blazer",
    price: "$99.99",
  },
  {
    image: "images/product_04.jpg",
    name: "Premium Stretch Suit - Charcoal",
    price: "$55.99",
  },
  {
    image: "images/product_05.jpg",
    name: "Double Breasted Tan Suit",
    price: "$89.99",
  },
  {
    image: "images/product_06.jpg",
    name: "Slim Fit Charcoal Suit",
    price: "$99.99",
  },
  {
    image: "images/product_07.jpg",
    name: "Wool Blend Business Suit - Black",
    price: "$99.99",
  },
  {
    image: "images/product_08.jpg",
    name: "Three-Piece Burgundy Suit",
    price: "$99.99",
  },
  {
    image: "images/product_09.jpg",
    name: "Stylish Checked Blazer",
    price: "$79.99",
  },
  {
    image: "images/product_10.jpg",
    name: "Formal Pinstripe Suit",
    price: "$99.99",
  },
  {
    image: "images/product_11.jpg",
    name: "Slim Fit Tweed Suit",
    price: "$89.99",
  },
  {
    image: "images/product_12.jpg",
    name: "Casual Linen Blazer",
    price: "$69.99",
  },
  {
    image: "images/product_13.jpg",
    name: "Cotton Slim Fit Suit",
    price: "$59.99",
  },
  {
    image: "images/product_14.jpg",
    name: "Luxury Velvet Tuxedo",
    price: "$129.99",
  },
  {
    image: "images/product_15.jpg",
    name: "Double-Breasted Camel Suit",
    price: "$79.99",
  },
  {
    image: "images/product_16.jpg",
    name: "Two-Tone Slim Fit Suit",
    price: "$99.99",
  },
  {
    image: "images/product_17.jpg",
    name: "Casual Denim Blazer",
    price: "$89.99",
  },
  {
    image: "images/product_18.jpg",
    name: "Formal Velvet Suit",
    price: "$69.99",
  },
  {
    image: "images/product_19.jpg",
    name: "Trendy Corduroy Blazer",
    price: "$59.99",
  },
  {
    image: "images/product_20.jpg",
    name: "Tailored Wool Tuxedo",
    price: "$129.99",
  },
];

// Add an event listener to execute the code when the DOM content is loaded
addEventListener("DOMContentLoaded", (event) => {
  // Get the section-product-list element
  const productList = document.getElementById("section-product-list");
  // Add a CSS class to the productList element
  productList.classList.add("section-product-list");

  // Iterate over each product in the product array
  product.forEach((product) => {
    // Create a new article element for each product
    const article = document.createElement("article");
    // Set the inner HTML of the article element with product information
    article.innerHTML = `
            <img src="${product.image}" alt="Product Image">
            <h5>${product.name}</h5>
            <p class="section-product__para-price">${product.price}</p>
        `;
    // Append the article element to the productList
    productList.appendChild(article);
  });

  // Get the search input element
  const searchInput = document.getElementById("searchInput");

  // Function to filter products based on search input
  function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const filteredProducts = product.filter((product) => {
      return product.name.toLowerCase().includes(searchText);
    });

    // Clear the product list before displaying filtered products
    productList.innerHTML = "";

    // Iterate over each filtered product and display it
    filteredProducts.forEach((product) => {
      const article = document.createElement("article");
      article.innerHTML = `
              <img src="${product.image}" alt="Product Image">
              <h5>${product.name}</h5>
              <p class="section-product__para-price">${product.price}</p>
          `;
      productList.appendChild(article);
    });
  }

  // Initial call to filter products when the page loads
  filterProducts();

  // Add event listener for the input field to trigger filtering on input change
  searchInput.addEventListener("input", filterProducts);
});
