
function checkPassword() {
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (password === "1434Jill") {
        window.location.href ="dashboard.html";
    } else {
        errorMessage.textContent = "Oops! Try again, queen 👑";
    }
}
