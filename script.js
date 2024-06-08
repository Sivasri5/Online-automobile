document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.getElementById("homeLink");
    var mainContent = document.getElementById("mainContent");
    var cartItems = []; // Array to store cart items

    // Dummy data for car listings (for home page)
    var homeCarListings = [
        { brand: "Brand 1", model: "Model A", image: "car1.jpg", price: "$30,000", description: "Description for Model A" },
        { brand: "Brand 2", model: "Model B", image: "audi.jpg", price: "$25,000", description: "Description for Model B" },
        { brand: "Brand 3", model: "Model C", image: "ford.jpg", price: "$35,000", description: "Description for Model C" },
        { brand: "Brand 4", model: "Model D", image: "hyndai.jpg", price: "$40,000", description: "Description for Model D" }
        // Add more car listings here
    ];

    // Load home content by default
    loadHomeContent();

    // Home link event listener
    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        loadHomeContent();
    });
    // Get the selected location span
// Get all location links in the "Locations" dropdown
// Get the selected location span
var selectLocation = document.getElementById("selectLocation");

// Get all location links in the "Locations" dropdown
var locationLinks = document.querySelectorAll(".nav-link .dropdown-content a");

// Add event listeners to each location link in the "Locations" dropdown
locationLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        // Update the text content of the selected location span
        selectLocation.textContent = link.textContent;
    });
});



    // Function to load home content
    function loadHomeContent() {
        var homeContent = '<h2>Car Collection</h2><div class="car-list">';
        homeCarListings.forEach(function(car, index) {
            homeContent += `
                <div class="car">
                    <img src="${car.image}" alt="${car.brand} ${car.model}" data-index="${index}">
                    <h3>${car.brand} ${car.model}</h3>
                    <p>${car.price}</p>
                    <button class="add-to-cart" data-brand="${car.brand}" data-model="${car.model}" data-price="${car.price}">Add to Cart</button>
                    <button class="buy-now" data-brand="${car.brand}" data-model="${car.model}" data-price="${car.price}">Buy</button>
                </div>
            `;
        });
        homeContent += '</div>';
        mainContent.innerHTML = homeContent;

        // Add to cart functionality
        var addToCartBtns = document.querySelectorAll(".add-to-cart");
        addToCartBtns.forEach(function(btn) {
            btn.addEventListener("click", function() {
                var brand = btn.getAttribute("data-brand");
                var model = btn.getAttribute("data-model");
                var price = btn.getAttribute("data-price");
                var item = { brand: brand, model: model, price: price, image: btn.parentElement.querySelector('img').src };
                addToCart(item);
            });
        });

        // Add event listener to "Buy" buttons
        var buyNowBtns = document.querySelectorAll(".buy-now");
        buyNowBtns.forEach(function(btn) {
            btn.addEventListener("click", function() {
                var brand = btn.getAttribute("data-brand");
                var model = btn.getAttribute("data-model");
                var price = btn.getAttribute("data-price");
                alert("Buying " + brand + " " + model + " for " + price);
            });
        });

        // Add event listener to car images for detail view
        var carImages = document.querySelectorAll(".car img");
        carImages.forEach(function(img) {
            img.addEventListener("click", function() {
                var carIndex = img.getAttribute("data-index");
                loadCarDetailPage(carIndex);
            });
        });
    }

    // Function to add item to cart
    function addToCart(item) {
        cartItems.push(item);
        updateCart();
        alert(item.brand + " " + item.model + " added to cart!");
    }

    // Function to update the cart UI
    function updateCart() {
        var cartItemsContainer = document.querySelector(".cart-items");
        cartItemsContainer.innerHTML = ''; // Clear existing items

        cartItems.forEach(function(item) {
            var cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.brand} ${item.model}">
                <h3>${item.brand} ${item.model}</h3>
                <p>${item.price}</p>
                <button class="buy-now-btn">Buy Now</button>
            `;
            cartItemElement.querySelector('.buy-now-btn').addEventListener('click', function() {
                alert('Buying ' + item.brand + " " + item.model);
            });
            cartItemsContainer.appendChild(cartItemElement);
        });
    }

    // Navbar "Cart" button event listener
    var cartBtn = document.getElementById("cartBtn");
    cartBtn.addEventListener("click", function(event) {
        event.preventDefault();
        loadCartContent();
    });

    // Function to load cart content
    function loadCartContent() {
        var cartContent = '<h2>Shopping Cart</h2><div class="cart-items">';
        cartItems.forEach(function(item) {
            cartContent += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.brand} ${item.model}">
                <h3>${item.brand} ${item.model}</h3>
                <p>${item.price}</p>
                <button class="buy-now-btn">Buy Now</button>
            </div>
        `;
    });
    cartContent += '</div>';
    mainContent.innerHTML = cartContent;

    // Buy now button event listener for each cart item
    document.querySelectorAll('.buy-now-btn').forEach(function(buyNowBtn, index) {
        buyNowBtn.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Buying ' + cartItems[index].brand + " " + cartItems[index].model);
        });
    });
}

// Function to load car detail page
function loadCarDetailPage(carIndex) {
    var car = homeCarListings[carIndex];
    var carDetailUrl = `car-detail.html?brand=${car.brand}&model=${car.model}&image=${car.image}&price=${car.price}&description=${car.description}`;
    window.location.href = carDetailUrl;
}

// Open login dropdown menu
var loginBtn = document.querySelector('.dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');
loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Open login modal when "User" or "Manager" option is clicked
document.getElementById('userLogin').addEventListener('click', function(event) {
    event.preventDefault();
    openLoginModal('user');
});

document.getElementById('managerLogin').addEventListener('click', function(event) {
    event.preventDefault();
    openLoginModal('manager');
});

// Function to open login modal with the selected role
function openLoginModal(role) {
    if (role === 'user') {
        document.getElementById('userLoginModal').style.display = 'block';
    } else if (role === 'manager') {
        document.getElementById('managerLoginModal').style.display = 'block';
    }
}

// Close modals
document.querySelectorAll('.icon-close').forEach(function(closeIcon) {
    closeIcon.addEventListener('click', function(event) {
        event.target.closest('.modal').style.display = 'none';
    });
});

// Open registration modal
document.querySelector('.register-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('userLoginModal').style.display = 'none';
    document.getElementById('registerModal').style.display = 'block';
});

// Open login modal from registration modal
document.querySelector('.login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerModal').style.display = 'none';
    document.getElementById('userLoginModal').style.display = 'block';
});
});