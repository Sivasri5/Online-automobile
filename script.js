// script.js
document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.getElementById("homeLink");
    var locationLinks = document.querySelectorAll(".locationLink");
    var brandLinks = document.querySelectorAll(".brandLink");
    var mainContent = document.getElementById("mainContent");

    // Dummy data for car listings (for home page)
    var homeCarListings = [
        { brand: "Brand 1", model: "Model A", image: "car1.jpg", price: "$30,000" },
        { brand: "Brand 2", model: "Model B", image: "car2.jpg", price: "$25,000" },
        { brand: "Brand 3", model: "Model C", image: "car3.jpg", price: "$35,000" },
        { brand: "Brand 4", model: "Model D", image: "car4.jpg", price: "$40,000" },
        // Add more car listings here
    ];

    // Load home content by default
    loadHomeContent();

    // Home link event listener
    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        loadHomeContent();
    });

    // Function to load home content
    function loadHomeContent() {
        var homeContent = '<h2>Car Collection</h2><div class="car-list">';
        homeCarListings.forEach(function(car, index) {
            homeContent += `
                <div class="car">
                    <img src="${car.image}" alt="${car.brand} ${car.model}">
                    <h3>${car.brand} ${car.model}</h3>
                    <p>${car.price}</p>
                    <button class="add-to-cart" data-index="${index}">Add to Cart</button>
                </div>
            `;
        });
        homeContent += '</div>';
        mainContent.innerHTML = homeContent;

        // Add to cart functionality
        var addToCartBtns = document.querySelectorAll(".add-to-cart");
        addToCartBtns.forEach(function(btn) {
            btn.addEventListener("click", function() {
                var index = btn.getAttribute("data-index");
                var itemName = homeCarListings[index].brand + " " + homeCarListings[index].model;
                alert(itemName + " added to cart!");
            });
        });
    }

    // Location links event listeners
    locationLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var location = link.getAttribute("data-location");
            // Load content based on location
            mainContent.innerHTML = `<h2>Cars available at ${location}</h2>`;
            // You can dynamically fetch data for this location and populate the content
        });
    });

    // Brand links event listeners
    brandLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var brand = link.getAttribute("data-brand");
            // Load content based on brand
            mainContent.innerHTML = `<h2>Cars available for ${brand}</h2>`;
            // You can dynamically fetch data for this brand and populate the content
        });
    });

    // Additional functionality (login, cart, etc.) can be added here
});
