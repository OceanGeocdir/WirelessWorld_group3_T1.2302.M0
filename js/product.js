async function getProductData() {
  try {
    // Fetch the JSON file containing product data
    const response = await fetch("products.json");
    // Parse the JSON response into JavaScript objects
    const data = await response.json();
    // Extract the "products" array from the data
    const products = data.products;

    // Select the container where the products will be displayed
    const productContainer = document.querySelector(".category__container__main");

    // Function to populate the products on the page
    function populateProducts(products) {
      products.forEach((product) => {
        // Destructure the product object to extract its properties
        const { id, title, rating, price } = product;

        // Create the necessary DOM elements for each product
        const listItem = document.createElement("li");
        listItem.classList.add("glide__slide");

        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const headerDiv = document.createElement("div");
        headerDiv.classList.add("product__header");

        // Create and set the image element
        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = "product";

        // Append the image element to the headerDiv
        headerDiv.appendChild(imageElement);

        const footerDiv = document.createElement("div");
        footerDiv.classList.add("product__footer");

        // Create and set the title element
        const titleElement = document.createElement("h3");
        titleElement.textContent = title;

        // Create and append the rating stars
        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("rating");

        // Create five star SVG elements and append them to the ratingDiv
        for (let i = 0; i < 5; i++) {
          const starSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
          useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./images/sprite.svg#icon-star-full");
          starSvg.appendChild(useElement);
          ratingDiv.appendChild(starSvg);
        }

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("product__price");

        // Create and set the price element
        const priceElement = document.createElement("h4");
        priceElement.textContent = `$${price}`;

        const addToCartButton = document.createElement("a");
        addToCartButton.href = `detail2.html?id=${id}`;
        // Set the link for adding the product to the cart

        const addButton = document.createElement("button");
        addButton.type = "submit";
        addButton.classList.add("product__btn");
        addButton.textContent = "Add To Cart";

        // Append the add to cart button to the addToCartButton link
        addToCartButton.appendChild(addButton);

        const ulElement = document.createElement("ul");
        ulElement.classList.add("product__actions");

        // Create the Quick View list item and link
        const quickViewLi = document.createElement("li");
        const quickViewLink = document.createElement("a");
        quickViewLink.href = `detail2.html?id=${id}`;
        // Set the link for quick view
        quickViewLink.dataset.tip = "Quick View";
        quickViewLink.dataset.place = "left";

        // Create and append the quick view SVG icon
        const quickViewSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const quickViewUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
        quickViewUse.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./images/sprite.svg#icon-eye");
        quickViewSvg.appendChild(quickViewUse);
        quickViewLink.appendChild(quickViewSvg);
        quickViewLi.appendChild(quickViewLink);

        // Create the Compare list item and link
        const compareLi = document.createElement("li");
        const compareLink = document.createElement("a");
        compareLink.href = "./comparison.html";
        compareLink.dataset.tip = "Add To Compare";
        compareLink.dataset.place = "left";

        // Create and append the compare SVG icon
        const compareSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const compareUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
        compareUse.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./images/sprite.svg#icon-loop2");
        compareSvg.appendChild(compareUse);
        compareLink.appendChild(compareSvg);
        compareLi.appendChild(compareLink);

        // Append the Quick View and Compare list items to the ulElement
        ulElement.appendChild(quickViewLi);
        ulElement.appendChild(compareLi);

        // Append the title, rating, price, and add to cart button elements to the footerDiv
        footerDiv.appendChild(titleElement);
        footerDiv.appendChild(ratingDiv);
        priceDiv.appendChild(priceElement);
        footerDiv.appendChild(priceDiv);
        footerDiv.appendChild(addToCartButton);

        // Append the headerDiv, footerDiv, and ulElement to the productDiv
        productDiv.appendChild(headerDiv);
        productDiv.appendChild(footerDiv);
        productDiv.appendChild(ulElement);

        // Append the productDiv to the listItem
        listItem.appendChild(productDiv);

        // Append the listItem to the productContainer
        productContainer.appendChild(listItem);

        // Add a click event listener to the listItem to handle product clicks
        listItem.addEventListener("click", () => {
          handleProductClick(id);
        });
      });
    }

    // Function to filter products based on category
    function filterProducts(category) {
      // Clear the product container
      productContainer.innerHTML = "";

      if (category === "All Products") {
        // If the category is "All Products", populate all products
        populateProducts(products);
      } else {
        // Filter the products based on the selected category
        const filteredProducts = products.filter((product) => product.category === category);
        // Populate the filtered products
        populateProducts(filteredProducts);
      }

      // Remove the "active" class from the previously active button
      const activeBtn = document.querySelector(".filter-btn.active");
      activeBtn.classList.remove("active");

      // Add the "active" class to the clicked category button
      const clickedBtn = document.querySelector(`.filter-btn[data-id="${category}"]`);
      clickedBtn.classList.add("active");
    }

    // Populate the initial products
    populateProducts(products);

    // Add click event listeners to the category filter buttons
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-id");
        // Filter the products based on the clicked category
        filterProducts(category);
      });
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

// Call the getProductData function to start loading and displaying the product data
getProductData();
