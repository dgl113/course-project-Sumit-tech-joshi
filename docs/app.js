// <!-- DGL 103 CVS1 - Sumit Joshi - Project -->

// Define the product data
const product = [
  {
    image: "images/product_01.jpg",
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
    name: "Classic Black Suit",
    price: "$79.99",
  },
  {
    image: "images/product_11.jpg",
    name: "Elegant Navy Blue Suit",
    price: "$99.99",
  },
  {
    image: "images/product_12.jpg",
    name: "Formal Pinstripe Suit",
    price: "$99.99",
  },
  {
    image: "images/product_05.jpg",
    name: "Slim Fit Tweed Suit",
    price: "$89.99",
  },
  {
    image: "images/product_06.jpg",
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
  {
    image: "images/product_01.jpg",
    name: "Classic Black Suit",
    price: "$79.99",
  },
  {
    image: "images/product_02.jpg",
    name: "Elegant Navy Blue Suit",
    price: "$99.99",
  },
];

// Add an event listener to execute the code when the DOM content is loaded
addEventListener("DOMContentLoaded", (event) => {
  const productList = document.getElementById("section-product-list");
  // Add a CSS class to the productList element
  productList &&
    productList.classList &&
    productList.classList.add("section-product-list");
  // Get the search input element
  const searchInput = document.getElementById("searchInput");
  showProduct(product.slice(0, 8));

  // Function to filter products based on search input
  // Parameters: None
  // Return Value: None
  function filterProducts() {
    const searchText = searchInput && searchInput.value.toLowerCase();
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

  // Add event listener for the input field to trigger filtering on input change
  searchInput.addEventListener("input", filterProducts);
});

// Load more functionality
// Parameters: 
    // loadMoreCheck (Boolean) - Indicates whether to load more products or not
// Return Value: None
function loadmore(loadMoreCheck) {
  let loadMoreItem = document.getElementById("load-more");
  let loadLessItem = document.getElementById("load-less");

  loadMoreItem.classList.toggle("display-none");
  loadLessItem.classList.toggle("display-none");

  if (loadMoreCheck) {
    showProduct(product);
  } else {
    showProduct(product.slice(0, 8));
  }
}

// Parameters: 
    // productListItem (Array) - List of products to display
// Return Value: None
function showProduct(productListItem) {
  // Get the section-product-list element
  const productList = document.getElementById("section-product-list");
  // Add a CSS class to the productList element
  productList &&
    productList.classList &&
    productList.classList.add("section-product-list");

  // Set intial content to blank for showing product
  productList.innerHTML = "";

  // Iterate over each product in the product array
  productListItem.forEach((product) => {
    // Create a new article element for each product
    const article = document.createElement("article");
    // Set the inner HTML of the article element with product information
    article.innerHTML = `
            <img src="${product.image}" alt="Product Image">
            <h5>${product.name}</h5>
            <p class="section-product__para-price">${product.price}</p>
        `;
    // Append the article element to the productList
    productList && productList.appendChild(article);
  });
}

// Parameters: 
    // imageNumber (Number) - The number of the image to display
    // description (String) - The description of the product
// Return Value: None
function openModal(imageNumber, description) {
  let modal = document.getElementById("myModal");

  let modalImage = document.getElementById("modal-img");
  let modalDescription = document.getElementById("modal-description");
  modalImage.src = `./images/product_${imageNumber}.jpg`;
  modalDescription.innerText = description;
  modal.style.display = "block";
}

// Function to close the modal
// Parameters: None
// Return Value: None
function closeModal() {
  let modal = document.getElementById("myModal");

  modal.style.display = "none";
}
