//? ============================ Load funtion cho header & footer
// ! ----------------------------------------- LOAD HEADER ALL PAGE
function loadHeader() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("header-container").innerHTML = this.responseText;

      const navOpen = document.querySelector(".nav__hamburger");
      const navClose = document.querySelector(".close__toggle");
      const menu = document.querySelector(".nav__menu");
      const scrollLink = document.querySelectorAll(".scroll-link");
      const navContainer = document.querySelector(".nav__menu");

      navOpen.addEventListener("click", () => {
        menu.classList.add("open");
        document.body.classList.add("active");
        navContainer.style.left = "0";
        navContainer.style.width = "30rem";
      });

      navClose.addEventListener("click", () => {
        menu.classList.remove("open");
        document.body.classList.remove("active");
        navContainer.style.left = "-30rem";
        navContainer.style.width = "0";
      });

      /*
=============
Fixed Navigation
=============
 */

      const navBar = document.querySelector(".navigation");

      // Fix NavBar

      window.addEventListener("scroll", (e) => {
        const scrollHeight = window.pageYOffset;
        const navHeight = navBar.getBoundingClientRect().height;
        if (scrollHeight > navHeight) {
          navBar.classList.add("fix__nav");
        } else {
          navBar.classList.remove("fix__nav");
        }
      });

      //?-----------------------------------------------------------Smooth Scroll
      // Array.from(scrollLink).map((link) => {
      //   link.addEventListener("click", (e) => {
      //     // Prevent Default
      //     e.preventDefault();

      //     const id = e.currentTarget.getAttribute("href").slice(1);
      //     const element = document.getElementById(id);
      //     const navHeight = navBar.getBoundingClientRect().height;
      //     const fixNav = navBar.classList.contains("fix__nav");
      //     let position = element.offsetTop - navHeight;

      //     if (!fixNav) {
      //       position = position - navHeight;
      //     }

      //     window.scrollTo({
      //       left: 0,
      //       top: position,
      //     });
      //     navContainer.style.left = "-30rem";
      //     document.body.classList.remove("active");
      //   });
      // });
      //?-----------------------------------------------------------NAV ICON
      //   Login form
      let login = document.querySelector(".login-form");

      document.querySelector("#login-btn").onclick = () => {
        login.classList.toggle("active");
        searchForm.classList.remove("active");
        shoppingCart.classList.remove("active");
      };
      // shopping cart
      let shoppingCart = document.querySelector(".shopping-cart");

      document.querySelector("#cart-btn").onclick = () => {
        shoppingCart.classList.toggle("active");
        searchForm.classList.remove("active");
        login.classList.remove("active");
      };
      //   search form
      let searchForm = document.querySelector(".search-form");

      document.querySelector("#search-btn").onclick = () => {
        searchForm.classList.toggle("active");
        shoppingCart.classList.remove("active");
        login.classList.remove("active");
      };
    }
  };
  xhttp.open("GET", "header.html", true);
  xhttp.send();
}
// ! ----------------------------------------- LOAD FOOTER ALL PAGE
function loadFooter() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if ((this.readyState == 4) & (this.status == 200)) {
      document.getElementById("footer-container").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "footer.html", true);
  xhttp.send();
}

window.onload = function () {
  loadHeader();
  loadFooter();
};
// AJAX, readyState la gi  co 5 bien  0 > 4, status la gi co 3 status la 101 200 404
