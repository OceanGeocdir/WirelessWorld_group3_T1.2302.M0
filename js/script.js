//? ============================ Load funtion cho header & footer
// ! ----------------------------------------- LOAD HEADER ALL PAGE
// Function to load the header section of the page
function loadHeader() {
  // Create a new XMLHttpRequest object
  var xhttp = new XMLHttpRequest();

  // Define the function to be executed when the readyState changes
  xhttp.onreadystatechange = function () {
    // Check if the readyState is 4 (request finished) and the status is 200 (successful response)
    if (this.readyState == 4 && this.status == 200) {
      // Insert the response HTML into the "header-container" element
      document.getElementById("header-container").innerHTML = this.responseText;

      // Get the necessary DOM elements for the navigation functionality
      const navOpen = document.querySelector(".nav__hamburger");
      const navClose = document.querySelector(".close__toggle");
      const menu = document.querySelector(".nav__menu");
      const scrollLink = document.querySelectorAll(".scroll-link");
      const navContainer = document.querySelector(".nav__menu");

      // Add event listener to open the navigation menu
      navOpen.addEventListener("click", () => {
        menu.classList.add("open");
        document.body.classList.add("active");
        navContainer.style.left = "0";
        navContainer.style.width = "30rem";
      });

      // Add event listener to close the navigation menu
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

      /*
      ---------------------------
      NAV ICON Functionality
      ---------------------------
      */

      // Login form
      let login = document.querySelector(".login-form");

      document.querySelector("#login-btn").onclick = () => {
        login.classList.toggle("active");
        searchForm.classList.remove("active");
        shoppingCart.classList.remove("active");
      };
    }
  };

  // Open a GET request to fetch the header HTML file
  xhttp.open("GET", "header.html", true);

  // Send the request
  xhttp.send();
}

// Function to load the footer section of the page
function loadFooter() {
  // Create a new XMLHttpRequest object
  var xhttp = new XMLHttpRequest();

  // Define the function to be executed when the readyState changes
  xhttp.onreadystatechange = function () {
    // Check if the readyState is 4 (request finished) and the status is 200 (successful response)
    if (this.readyState == 4 && this.status == 200) {
      // Insert the response HTML into the "footer-container" element
      document.getElementById("footer-container").innerHTML = this.responseText;
    }
  };

  // Open a GET request to fetch the footer HTML file
  xhttp.open("GET", "footer.html", true);

  // Send the request
  xhttp.send();
}

// Execute the following functions when the window is fully loaded
window.onload = function () {
  loadHeader();
  loadFooter();
};


