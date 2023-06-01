const getProducts = async () => {
  try {
    const results = await fetch("products.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

const productContainer = document.querySelector(".product__container");

window.addEventListener("DOMContentLoaded", async function () {
  const products = await getProducts();
  displayProductItems(products);
});

function displayProductItems(items) {
  items.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.classList.add("glide__slide");
    productItem.innerHTML = `
        <div class="product">
          <div class="product__header">
            <img src="${product.image}" alt="product">
          </div>
          <div class="product__footer">
            <h3>${product.title}</h3>
            <div class="rating">
              <svg>
                <use xlink:href="./images/sprite.svg#icon-star-full"></use>
              </svg>
              <svg>
                <use xlink:href="./images/sprite.svg#icon-star-full"></use>
              </svg>
              <svg>
                <use xlink:href="./images/sprite.svg#icon-star-full"></use>
              </svg>
              <svg>
                <use xlink:href="./images/sprite.svg#icon-star-full"></use>
              </svg>
              <svg>
                <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
              </svg>
            </div>
            <div class="product__price">
              <h4>$${product.price}</h4>
            </div>
            <a href="#" data-id="${product.id}" class="product__btn">Add To Cart</a>
          </div>
          <ul>
            <li>
              <a data-tip="Quick View" data-place="left" href="#">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-eye"></use>
                </svg>
              </a>
            </li>
            <li>
              <a data-tip="Add To Wishlist" data-place="left" href="#">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                </svg>
              </a>
            </li>
            <li>
              <a data-tip="Add To Compare" data-place="left" href="#">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      `;
    productContainer.appendChild(productItem);
  });
}

//--------------------------------------------------------

const addToCartButtons = document.querySelectorAll(".product__btn");
const cartContainer = document.querySelector(".cart__container");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart(event) {
  const productElement = event.target.closest(".product");
  const productImage = productElement.querySelector(".product__header img");
  const productTitle = productElement.querySelector(
    ".product__footer h3"
  ).innerText;
  const productPrice =
    productElement.querySelector(".product__price h4").innerText;

  const cartItem = document.createElement("tr");
  cartItem.innerHTML = `
    <td class="product__thumbnail">
        <a href="#">
            <img src="${productImage.src}" alt="">
        </a>
    </td>
    <td class="product__name">
        <a href="#">${productTitle}</a>
    </td>
    <td class="product__price">
        <div class="price">
            <span class="new__price">${productPrice}</span>
        </div>
    </td>
    <td class="product__quantity">
        <div class="input-counter">
            <div>
                <span class="minus-btn">
                    <svg>
                        <use xlink:href="./images/sprite.svg#icon-minus"></use>
                    </svg>
                </span>
                <input type="text" min="1" value="1" max="10" class="counter-btn">
                <span class="plus-btn">
                    <svg>
                        <use xlink:href="./images/sprite.svg#icon-plus"></use>
                    </svg>
                </span>
            </div>
        </div>
    </td>
    <td class="product__subtotal">
        <div class="price">
            <span class="new__price">${productPrice}</span>
        </div>
        <a href="#" class="remove__cart-item">
            <svg>
                <use xlink:href="./images/sprite.svg#icon-trash"></use>
            </svg>
        </a>
    </td>
  `;

  cartContainer.appendChild(cartItem);
}
//!-----------------------------------------------
// Lấy thông tin sản phẩm từ file JSON
const getProducts = async () => {
  try {
    const response = await fetch("./data/products.json");
    const data = await response.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

// Hiển thị sản phẩm trên trang
const displayProduct = async () => {
  const products = await getProducts();
  const productContainer = document.querySelector(".product-info");

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product");

    productItem.innerHTML = `
        <div class="product__header">
          <img src="${product.image}" alt="product">
        </div>
        <div class="product__footer">
          <h3>${product.title}</h3>
          <div class="rating">
            ${getRatingStars(product.rating)}
          </div>
          <div class="product__price">
            <h4>$${product.price}</h4>
          </div>
          <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
        </div>
      `;

    productContainer.appendChild(productItem);
  });
};

//?---------------------------------------------------------- Tạo chuỗi HTML cho đánh giá sản phẩm
const getRatingStars = (rating) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  let starsHTML = "";

  for (let i = 0; i < filledStars; i++) {
    starsHTML += `<svg>
        <use xlink:href="./images/sprite.svg#icon-star-full"></use>
      </svg>`;
  }

  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<svg>
        <use xlink:href="./images/sprite.svg#icon-star-empty"></use>
      </svg>`;
  }

  return starsHTML;
};

// Sự kiện DOMContentLoaded để hiển thị sản phẩm khi trang tải xong
window.addEventListener("DOMContentLoaded", () => {
  displayProduct();
});
//?--------------------------------------------------
// Lấy thông tin sản phẩm từ Local Storage
const getCartItems = () => {
  const cartItems = localStorage.getItem("cartItems");
  return cartItems ? JSON.parse(cartItems) : [];
};

// Hiển thị thông tin giỏ hàng trên trang
const displayCartItems = () => {
  const cartItems = getCartItems();
  const cartTable = document.querySelector(".cart__table");

  cartItems.forEach((item) => {
    const cartRow = document.createElement("tr");
    cartRow.innerHTML = `
        <td class="product__thumbnail">
          <a href="#">
            <img src="${item.image}" alt="">
          </a>
        </td>
        <td class="product__name">
          <a href="#">${item.title}</a>
          <br><br>
          <small>${item.variant}</small>
        </td>
        <td class="product__price">
          <div class="price">
            <span class="new__price">$${item.price}</span>
          </div>
        </td>
        <td class="product__quantity">
          <div class="input-counter">
            <div>
              <span class="minus-btn">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-minus"></use>
                </svg>
              </span>
              <input type="text" min="1" value="${item.quantity}" max="10" class="counter-btn">
              <span class="plus-btn">
                <svg>
                  <use xlink:href="./images/sprite.svg#icon-plus"></use>
                </svg>
              </span>
            </div>
          </div>
        </td>
        <td class="product__subtotal">
          <div class="price">
            <span class="new__price">$${item.subtotal}</span>
          </div>
          <a href="#" class="remove__cart-item">
            <svg>
              <use xlink:href="./images/sprite.svg#icon-trash"></use>
            </svg>
          </a>
        </td>
      `;

    cartTable.appendChild(cartRow);
  });
};

// Sự kiện DOMContentLoaded để hiển thị giỏ hàng khi trang tải xong
window.addEventListener("DOMContentLoaded", () => {
  displayCartItems();
});
// ?-------------------------------------------------------------------------------------------------
// !-------------------------------------------------------------------------------------------------
// TODO-------------------------------------- product.html ------------------------------------------
// !-------------------------------------------------------------------------------------------------
// ? ------------------------------------------------------------------------------------------------

//! ----------- HTML --------------------- <div class="product__container__main"></div>

//TODO ------------------------------------------------------ Hàm lấy dữ liệu từ file products.json
async function getProductData() {
  try {
    const response = await fetch("products.json");
    const data = await response.json();
    const products = data.products;

    // ? ---------------------------------------------------Tạo HTML cho từng sản phẩm
    const productContainer = document.querySelector(
      ".product__container__main"
    );
    products.forEach((product) => {
      const { id, title, image, price } = product;

      //? ------------------------------------------------- Tạo phần tử li.glide__slide
      const listItem = document.createElement("li");
      listItem.classList.add("glide__slide");

      //?---------------------------------------------------- Tạo phần tử div.product
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      //?--------------------------------------------------- Tạo phần tử div.product__header
      const headerDiv = document.createElement("div");
      headerDiv.classList.add("product__header");

      //?------------------------------------------------------ Tạo phần tử img
      const imageElement = document.createElement("img");
      imageElement.src = image;
      imageElement.alt = "product";

      //?------------------------------------------------- Gắn img vào div.product__header
      headerDiv.appendChild(imageElement);

      //? ------------------------------------------------- Tạo phần tử div.product__footer
      const footerDiv = document.createElement("div");
      footerDiv.classList.add("product__footer");

      //? ---------------------------------------------------- Tạo phần tử h3
      const titleElement = document.createElement("h3");
      titleElement.textContent = title;

      //?----------------------------------------------------- Tạo phần tử div.rating
      const ratingDiv = document.createElement("div");
      ratingDiv.classList.add("rating");

      // ? ---------------------------------------------------- Tạo phần tử svg đánh giá bằng sao
      for (let i = 0; i < 4; i++) {
        const starSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const useElement = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        useElement.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          "./images/sprite.svg#icon-star-full"
        );
        starSvg.appendChild(useElement);
        ratingDiv.appendChild(starSvg);
      }

      //?-------------------------------------------------------- Tạo phần tử div.product__price
      const priceDiv = document.createElement("div");
      priceDiv.classList.add("product__price");

      //? -------------------------------------------------------------------- Tạo phần tử h4
      const priceElement = document.createElement("h4");
      priceElement.textContent = `$${price}`;

      //? -------------------------------------------------------- Tạo phần tử a (button Add To Cart)
      const addToCartButton = document.createElement("a");
      addToCartButton.href = "#";

      const addButton = document.createElement("button");
      addButton.type = "submit";
      addButton.classList.add("product__btn");
      addButton.textContent = "Add To Cart";

      addToCartButton.appendChild(addButton);

      //?----------------------------------------------- Gắn các phần tử con vào div.product__footer
      footerDiv.appendChild(titleElement);
      footerDiv.appendChild(ratingDiv);
      priceDiv.appendChild(priceElement);
      footerDiv.appendChild(priceDiv);
      footerDiv.appendChild(addToCartButton);

      //?-------------------------------------------------------------------- Tạo phần tử ul
      const ulElement = document.createElement("ul");

      // ? ------------------------------------------------------------Tạo phần tử li (Quick View)
      const quickViewLi = document.createElement("li");
      const quickViewLink = document.createElement("a");
      quickViewLink.href = "#";
      quickViewLink.dataset.tip = "Quick View";
      quickViewLink.dataset.place = "left";

      const quickViewSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      const quickViewUse = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "use"
      );
      quickViewUse.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        "./images/sprite.svg#icon-eye"
      );

      quickViewSvg.appendChild(quickViewUse);
      quickViewLink.appendChild(quickViewSvg);
      quickViewLi.appendChild(quickViewLink);

      //? -------------------------------------------------------- Tạo phần tử li (Add To Wishlist)
      const wishlistLi = document.createElement("li");
      const wishlistLink = document.createElement("a");
      wishlistLink.href = "#";
      wishlistLink.dataset.tip = "Add To Wishlist";
      wishlistLink.dataset.place = "left";

      const wishlistSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      const wishlistUse = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "use"
      );
      wishlistUse.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        "./images/sprite.svg#icon-heart-o"
      );

      wishlistSvg.appendChild(wishlistUse);
      wishlistLink.appendChild(wishlistSvg);
      wishlistLi.appendChild(wishlistLink);

      //?-------------------------------------------------------- Tạo phần tử li (Add To Compare)
      const compareLi = document.createElement("li");
      const compareLink = document.createElement("a");
      compareLink.href = "#";
      compareLink.dataset.tip = "Add To Compare";
      compareLink.dataset.place = "left";

      const compareSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      const compareUse = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "use"
      );
      compareUse.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        "./images/sprite.svg#icon-loop2"
      );

      compareSvg.appendChild(compareUse);
      compareLink.appendChild(compareSvg);
      compareLi.appendChild(compareLink);

      // ? ------------------------------------------------------Gắn các phần tử li vào ul
      ulElement.appendChild(quickViewLi);
      ulElement.appendChild(wishlistLi);
      ulElement.appendChild(compareLi);

      // ?--------------------------------------------------- Gắn các phần tử vào div.product
      productDiv.appendChild(headerDiv);
      productDiv.appendChild(footerDiv);
      productDiv.appendChild(ulElement);

      // ? -------------------------------------------------Gắn div.product vào li.glide__slide
      listItem.appendChild(productDiv);

      //? ---------------------------------------Gắn li.glide__slide vào div.product__container__main
      productContainer.appendChild(listItem);
    });
  } catch (error) {
    console.log(error);
  }
}

getProductData();

//!  --------EVENT HANDLER----------------------

// ? Tạo phần tử li (Quick View)
const quickViewLi = document.createElement("li");
const quickViewLink = document.createElement("a");
quickViewLink.href = "detail.html"; // Điều hướng đến trang detail.html

// ? Tạo phần tử li (Add To Wishlist)
const wishlistLi = document.createElement("li");
const wishlistLink = document.createElement("a");
wishlistLink.href = "detail.html"; // Điều hướng đến trang detail.html

// ? Tạo phần tử li (Add To Compare)
const compareLi = document.createElement("li");
const compareLink = document.createElement("a");
compareLink.href = "compare.html"; // Điều hướng đến trang compare.html

//*---------------------------------- Thêm sự kiện click vào các phần tử SVG
quickViewLink.addEventListener("click", (event) => {
  event.preventDefault();
  // Xử lý khi nhấp vào biểu tượng Quick View
  // Chuyển hướng người dùng đến trang detail.html
});

wishlistLink.addEventListener("click", (event) => {
  event.preventDefault();
  // Xử lý khi nhấp vào biểu tượng Add To Wishlist
  // Chuyển hướng người dùng đến trang detail.html
});

compareLink.addEventListener("click", (event) => {
  event.preventDefault();
  // Xử lý khi nhấp vào biểu tượng Add To Compare
  // Chuyển hướng người dùng đến trang compare.html
});

//! ######################### BACK UP #####################################
//* Lấy data từ file JSON
async function getProductData() {
  // const getProductData = async () => {
  try {
    const response = await fetch("products.json");
    const data = await response.json();
    const products = data.products;

    const productContainer = document.querySelector(
      ".category__container__main"
    );
    //!-------------------------------------- Function to filter products by category
    // function filterProducts(category) {
    //   productContainer.innerHTML = ""; //? Dẹp thẻ chứa qua một bên
    //   const filteredProducts = products.filter(
    //     (product) => product.category === category
    //   );
    //   populateProducts(filteredProducts);
    // }
    // ! -------------------------------------------------- END Filter ****************
    function populateProducts(products) {
      products.forEach((product) => {
        const { id, title, image, price } = product;
        //? ------------------------------------------- Tạo phần tử li.glide__slide
        const listItem = document.createElement("li");
        listItem.classList.add("glide__slide");
        //?---------------------------------------------------- Tạo phần tử div.product
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        //?--------------------------------------------------- Tạo phần tử div.product__header
        const headerDiv = document.createElement("div");
        headerDiv.classList.add("product__header");
        //?------------------------------------------------------ Tạo phần tử img
        const imageElement = document.createElement("img");
        imageElement.src = image;
        imageElement.alt = "product";
        //?------------------------------------------------- Gắn img vào div.product__header
        headerDiv.appendChild(imageElement);
        //? ------------------------------------------------- Tạo phần tử div.product__footer
        const footerDiv = document.createElement("div");
        footerDiv.classList.add("product__footer");
        //? ---------------------------------------------------- Tạo phần tử h3
        const titleElement = document.createElement("h3");
        titleElement.textContent = title;
        //?----------------------------------------------------- Tạo phần tử div.rating
        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("rating");
        // ? ---------------------------------------------------- Tạo phần tử svg đánh giá bằng sao
        for (let i = 0; i < 5; i++) {
          const starSvg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          const useElement = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "use"
          );
          useElement.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            "./images/sprite.svg#icon-star-full"
          );
          starSvg.appendChild(useElement);
          ratingDiv.appendChild(starSvg);
        }
        //?-------------------------------------------------------- Tạo phần tử div.product__price
        const priceDiv = document.createElement("div");
        priceDiv.classList.add("product__price");
        //? -------------------------------------------------------------------- Tạo phần tử h4
        const priceElement = document.createElement("h4");
        priceElement.textContent = `$${price}`;
        //? -------------------------------------------------------- Tạo phần tử a (button Add To Cart)
        const addToCartButton = document.createElement("a");
        addToCartButton.href = "#";
        //?----------------------------------------------- Gắn các phần tử con vào div.product__footer
        const addButton = document.createElement("button");
        addButton.type = "submit";
        addButton.classList.add("product__btn");
        addButton.textContent = "Add To Cart";

        addToCartButton.appendChild(addButton);
        //?----------------------------------------------- Gắn các phần tử con vào div.product__footer
        footerDiv.appendChild(titleElement);
        footerDiv.appendChild(ratingDiv);
        priceDiv.appendChild(priceElement);
        footerDiv.appendChild(priceDiv);
        footerDiv.appendChild(addToCartButton);
        //?-------------------------------------------------------------------- Tạo phần tử ul
        const ulElement = document.createElement("ul");
        ulElement.classList.add("product__actions");
        // ? ------------------------------------------------------------Tạo phần tử li (Quick View)
        const quickViewLi = document.createElement("li");
        const quickViewLink = document.createElement("a");
        quickViewLink.href = "detail.html";
        //! ---------------------------------------  NHẤP VÀO ĐỂ CHUYỂN LINK
        quickViewLink.dataset.tip = "Quick View";
        quickViewLink.dataset.place = "left";

        const quickViewSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const quickViewUse = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        quickViewUse.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          "./images/sprite.svg#icon-eye"
        );

        quickViewSvg.appendChild(quickViewUse);
        quickViewLink.appendChild(quickViewSvg);
        quickViewLi.appendChild(quickViewLink);
        //? -------------------------------------------------------- Tạo phần tử li (Add To Wishlist)
        const wishlistLi = document.createElement("li");
        const wishlistLink = document.createElement("a");
        wishlistLink.href = "detail.html";
        //! ---------------------------------------  NHẤP VÀO ĐỂ CHUYỂN LINK

        wishlistLink.dataset.tip = "Add To Wishlist";
        wishlistLink.dataset.place = "left";

        const wishlistSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const wishlistUse = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        wishlistUse.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          "./images/sprite.svg#icon-heart-o"
        );

        wishlistSvg.appendChild(wishlistUse);
        wishlistLink.appendChild(wishlistSvg);
        wishlistLi.appendChild(wishlistLink);

        const compareLi = document.createElement("li");
        const compareLink = document.createElement("a");
        compareLink.href = "compare.html";
        //! ---------------------------------------  NHẤP VÀO ĐỂ CHUYỂN LINK

        compareLink.dataset.tip = "Add To Compare";
        compareLink.dataset.place = "left";

        const compareSvg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        const compareUse = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        compareUse.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          "./images/sprite.svg#icon-loop2"
        );
        // ? ------------------------------------------------------Gắn các phần tử li vào ul
        compareSvg.appendChild(compareUse);
        compareLink.appendChild(compareSvg);
        compareLi.appendChild(compareLink);
        // ? ------------------------------------------------------Gắn các phần tử li vào ul
        ulElement.appendChild(quickViewLi);
        ulElement.appendChild(wishlistLi);
        ulElement.appendChild(compareLi);
        // ?--------------------------------------------------- Gắn các phần tử vào div.product
        productDiv.appendChild(headerDiv);
        productDiv.appendChild(footerDiv);
        productDiv.appendChild(ulElement);
        // ? -------------------------------------------------Gắn div.product vào li.glide__slide
        listItem.appendChild(productDiv);
        //? ---------------------------------------Gắn li.glide__slide vào div.product__container__main
        productContainer.appendChild(listItem);
      });
    }
    // !------------------------------------------------------------- ADD hàm filter vào trong sản phẩm
    function filterProducts(category) {
      productContainer.innerHTML = ""; //? Dẹp thẻ chứa qua một bên
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      populateProducts(filteredProducts);
    }
    //? *********** Hiển thị sản phẩm khi load lại trang
    populateProducts(products);

    //? ******** Xử lý các sự kiện nút <div .... filter-btn ...." data-id="">
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
      /* xử lý từng nút button */
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-id");
        filterProducts(category);
      });
    });

    // Event listener for dot buttons
    const dotBtns = document.querySelectorAll(".dot");
    dotBtns.forEach((dot) => {
      dot.addEventListener("click", () => {
        const activeDot = document.querySelector(".dot.active");
        activeDot.classList.remove("active");
        dot.classList.add("active");
        const category = dot.parentNode.getAttribute("data-id");
        filterProducts(category);
      });
    });
    // !------------------------------------------------------------- ADD hàm filter vào trong sản phẩm
  } catch (error) {
    console.log(error);
  }
}

getProductData();
//? ---------------------- BACK UP LẦN 2
function filterProducts(category) {
  productContainer.innerHTML = ""; // Xóa nội dung sản phẩm hiện tại
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  populateProducts(filteredProducts);

  // Chuyển lớp "active" từ nút hiện tại sang nút được nhấp vào
  const activeDot = document.querySelector(".dot.active");
  activeDot.classList.remove("active");
  const dotBtn = document.querySelector(`.dot[data-id="${category}"]`);
  dotBtn.classList.add("active");
}

// Hiển thị sản phẩm khi trang được tải lại
populateProducts(products);

// Xử lý sự kiện cho các nút filter
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-id");
    filterProducts(category);
  });
});

// Xử lý sự kiện cho các nút dot
const dotBtns = document.querySelectorAll(".dot");
dotBtns.forEach((dot) => {
  dot.addEventListener("click", () => {
    const category = dot.getAttribute("data-id");
    filterProducts(category);
  });
});
//!-- -----GPT sửa
async function filterProducts(category) {
  productContainer.innerHTML = ""; // Dẹp thẻ chứa sản phẩm hiện tại
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  populateProducts(filteredProducts);
}

// Hiển thị sản phẩm khi trang được tải lại
populateProducts(products);

// Xử lý sự kiện cho các nút filter
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-id");
    filterProducts(category);
  });
});

// Xử lý sự kiện cho các nút dot
const dotBtns = document.querySelectorAll(".dot");
dotBtns.forEach((dot) => {
  dot.addEventListener("click", async () => {
    const activeDot = document.querySelector(".dot.active");
    activeDot.classList.remove("active");
    dot.classList.add("active");
    const category = dot.parentNode.getAttribute("data-id");

    if (category === "All Products") {
      await populateProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      await populateProducts(filteredProducts);
    }
  });
});

// TODO ==================================================================
//! --------------------------- FINAL FILTER ----------------------------
// TODO ==================================================================
function filterProducts(category) {
  productContainer.innerHTML = ""; // Xóa nội dung sản phẩm hiện tại
  if (category === "All Products") {
    populateProducts(products); // Hiển thị tất cả sản phẩm
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    populateProducts(filteredProducts); // Hiển thị sản phẩm đã lọc
  }

  // Chuyển lớp "active" từ nút hiện tại sang nút được nhấp vào
  const activeBtn = document.querySelector(".filter-btn.active");
  activeBtn.classList.remove("active");
  const clickedBtn = document.querySelector(
    `.filter-btn[data-id="${category}"]`
  );
  clickedBtn.classList.add("active");
}

// Hiển thị sản phẩm khi trang được tải lại
populateProducts(products);

// Xử lý sự kiện cho các nút filter
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-id");
    filterProducts(category);
  });
});
//Liên kết trang
const quickViewLink = document.createElement("a");
quickViewLink.href = "detail.html?id=" + id;

// Trích xuất thông tin ID sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Sử dụng thông tin ID để lấy thông tin chi tiết sản phẩm và hiển thị trên trang
async function getProductDetail(productId) {
  try {
    const response = await fetch("products.json");
    const data = await response.json();
    const products = data.products;

    const productDetail = products.find((product) => product.id === productId);

    // Sử dụng thông tin sản phẩm để hiển thị trên trang
    // ...
  } catch (error) {
    console.error(error);
  }
}

getProductDetail(productId);

/// Làn 2

// Trích xuất thông tin ID sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Sử dụng thông tin ID để lấy thông tin chi tiết sản phẩm và hiển thị trên trang
async function getProductDetail(productId) {
  try {
    const response = await fetch("products.json");
    const data = await response.json();
    const products = data.products;

    const productDetail = products.find((product) => product.id === productId);

    // Hiển thị thông tin sản phẩm trên trang
    const productContainer = document.querySelector(".product-container");

    // Tạo các phần tử HTML để hiển thị thông tin sản phẩm
    const titleElement = document.createElement("h2");
    titleElement.textContent = productDetail.title;

    const imageElement = document.createElement("img");
    imageElement.src = productDetail.image;
    imageElement.alt = productDetail.title;

    const priceElement = document.createElement("h3");
    priceElement.textContent = `$${productDetail.price}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = productDetail.description;

    // Thêm các phần tử vào container
    productContainer.appendChild(titleElement);
    productContainer.appendChild(imageElement);
    productContainer.appendChild(priceElement);
    productContainer.appendChild(descriptionElement);
  } catch (error) {
    console.error(error);
  }
}

getProductDetail(productId);
// Lần 3

const productData = {
  title: "Apple iPhone XR",
  price: "$250.99",
  rating: 4,
  reviewCount: 3,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a doloribus iste natus et facere?",
  colors: ["blue", "red"],
  sizes: [6.65, 7.5],
  subtotal: "$250.99",
  brand: "Apple",
  productType: "Phone",
  availability: "In Stock (7 Items)",
};

document.querySelector(".product-detail__content h3").textContent =
  productData.title;
document.querySelector(".price .new__price").textContent = productData.price;

const ratingStars = document.querySelectorAll(".product__review .rating svg");
ratingStars.forEach((star, index) => {
  if (index < productData.rating) {
    star.classList.add("icon-star-full");
    star.classList.remove("icon-star-empty");
  } else {
    star.classList.add("icon-star-empty");
    star.classList.remove("icon-star-full");
  }
});

document.querySelector(".product__review .rating__quatity").textContent =
  productData.reviewCount + " reviews";
document.querySelector(".product-detail__content p").textContent =
  productData.description;

const colorSelect = document.querySelector("#colors");
colorSelect.innerHTML = "";
productData.colors.forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color;
  colorSelect.appendChild(option);
});

const sizeSelect = document.querySelector("#size");
sizeSelect.innerHTML = "";
productData.sizes.forEach((size) => {
  const option = document.createElement("option");
  option.value = size;
  option.textContent = size;
  sizeSelect.appendChild(option);
});

document.querySelector(".input-counter .new__price").textContent =
  productData.subtotal;
document.querySelectorAll(
  ".product__info-container li:nth-child(2) a"
)[0].textContent = productData.brand;
document.querySelectorAll(
  ".product__info-container li:nth-child(3) a"
)[0].textContent = productData.productType;
document.querySelectorAll(
  ".product__info-container li:nth-child(4) a"
)[0].textContent = productData.availability;

const svgIcons = document.querySelectorAll("svg use");
svgIcons.forEach((svgIcon) => {
  const iconHref = svgIcon.getAttribute("xlink:href");
  if (iconHref.includes("sprite.svg#")) {
    const iconName = iconHref.split("#")[1];
    if (iconName === "icon-star-full") {
      svgIcon.setAttribute(
        "xlink:href",
        "./images/sprite.svg#icon-star-filled"
      );
    } else if (iconName === "icon-star-empty") {
      svgIcon.setAttribute(
        "xlink:href",
        "./images/sprite.svg#icon-star-empty-filled"
      );
    }
  }
});

// làn 4
// ... các đoạn mã khác

const quickViewLi = document.createElement("li");
const quickViewLink = document.createElement("a");
quickViewLink.href = `detail.html?id=${productId}`; // Thêm ID sản phẩm vào URL
quickViewLink.dataset.tip = "Quick View";
quickViewLink.dataset.place = "left";

// ... các đoạn mã khác

// Lắng nghe sự kiện nhấp chuột vào nút Quick View
quickViewLink.addEventListener("click", (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

  // Chuyển hướng đến trang detail.html với ID sản phẩm được truyền qua URL
  window.location.href = quickViewLink.href;
});

// ... các đoạn mã khác

quickViewLi.appendChild(quickViewLink);
quickViewList.appendChild(quickViewLi);

// ... các đoạn mã khác

// ! ------------------------------------------ Lần 5
// Lấy các phần tử liên quan trong trang
const productTitle = document.querySelector(".product-detail__right h3");
const productPrice = document.querySelector(
  ".product-detail__right .new__price"
);

// Thêm các phần tử vào các phần tử liên quan trong trang
const productReviewCount = document.querySelector(
  ".product-detail__content .rating__quatity"
);
const productDescription = document.querySelector(".product-detail__content p");
const productColorsSelect = document.querySelector("#colors");
const productSizesSelect = document.querySelector("#size");
const productSubtotal = document.querySelector(
  ".product__info li:nth-child(4) a"
);
const productBrand = document.querySelector(".product__info li:nth-child(5) a");
const productType = document.querySelector(".product__info li:nth-child(6) a");
const productAvailability = document.querySelector(
  ".product__info li:nth-child(7) a"
);

// Kiểm tra xem sản phẩm có tồn tại hay không
if (product) {
  // Điền thông tin sản phẩm vào các phần tử tương ứng
  productTitle.textContent = product.title; // title
  productPrice.textContent = product.price; // price
  productReviewCount.textContent = `${product.reviewCount} reviews`; // reviewCount
  productDescription.textContent = product.description; // description

  // Điền thông tin về màu sắc và kích cỡ
  product.colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    productColorsSelect.appendChild(option);
  }); // colors

  product.sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    productSizesSelect.appendChild(option);
  }); // sizes

  // Điền thông tin các mục khác
  productSubtotal.textContent = product.subtotal; // subtotal
  productBrand.textContent = product.brand; // brand
  productType.textContent = product.productType; // productType
  productAvailability.textContent = product.availability; // availability
}

// ? ==========================================
//! lần 6
// Lấy các phần tử liên quan trong trang
const productTitle = document.querySelector(".product-detail__right h3");
const productPrice = document.querySelector(
  ".product-detail__right .new__price"
);
const productReviewCount = document.querySelector(
  ".product-detail__content .rating__quatity"
);
const productDescription = document.querySelector(".product-detail__content p");
const productColorsSelect = document.querySelector("#colors");
const productSizesSelect = document.querySelector("#size");
const productSubtotal = document.querySelector(
  ".product__info li:nth-child(4) a"
);
const productBrand = document.querySelector(".product__info li:nth-child(5) a");
const productType = document.querySelector(".product__info li:nth-child(6) a");
const productAvailability = document.querySelector(
  ".product__info li:nth-child(7) a"
);
const productPictures = document.querySelectorAll(
  ".product__pictures .picture"
);
const productPictureMain = document.querySelector(
  ".product__picture .picture__container img"
);

// Kiểm tra xem sản phẩm có tồn tại hay không
if (product) {
  // Hiển thị hình ảnh chính
  productPictureMain.src = product.image;

  // Hiển thị các hình ảnh phụ
  product.images.forEach((image, index) => {
    if (index < 4) {
      productPictures[index].src = image;
    }
  });

  // Điền thông tin sản phẩm vào các phần tử tương ứng
  productTitle.textContent = product.title;
  productPrice.textContent = product.price;
  productReviewCount.textContent = `${product.reviewCount} reviews`;
  productDescription.textContent = product.description;

  // Điền thông tin về màu sắc và kích cỡ
  product.colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    productColorsSelect.appendChild(option);
  });

  product.sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    productSizesSelect.appendChild(option);
  });

  // Điền thông tin các mục khác
  productSubtotal.textContent = product.subtotal;
  productBrand.textContent = product.brand;
  productType.textContent = product.productType;
  productAvailability.textContent = product.availability;
}
