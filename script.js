// Manager login form
document.getElementById("manager-login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = this.querySelector('input[type="text"]').value;
    var password = this.querySelector('input[type="password"]').value;
    // Perform authentication and redirect to manager dashboard
    console.log("Manager login:", username, password);
});

// Customer login form
document.getElementById("customer-login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = this.querySelector('input[type="text"]').value;
    var password = this.querySelector('input[type="password"]').value;
    // Perform authentication and redirect to customer dashboard
    console.log("Customer login:", username, password);
});
