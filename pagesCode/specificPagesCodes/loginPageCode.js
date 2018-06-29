window.onload = function () {
    var loginElements = document.getElementById('loginElements');
    var loginInput = document.getElementById('loginInput');
    var makeAccountButton = document.getElementById('makeAccountButton');
    var loginButton = document.getElementById('loginButton');
}

function checkUsername () {
    if (loginInput.value == 'admin') {
        loginInput.value = "";
        loginInput.placeholder = "Password";
        loginButton.onclick = checkPassword;
        makeAccountButton.innerHTML = "Voltar";
        makeAccountButton.onclick = reset;
        loginInput.focus();
    }
}

function checkPassword () {
    if (loginInput.value == 'admin'){
        goToHomePage();
    }
}

function reset () {
    loginInput.value = "";
    loginInput.placeholder = "Email, Username or phone number";
    loginButton.onclick = checkUsername;
    makeAccountButton.innerHTML = "Create a Account";
    makeAccountButton.onclick = goToRegisterPage;
    loginInput.focus();
}

function goToHomePage () {
    window.location.replace("../pages/homePage.html");
}

function goToRegisterPage () {
    window.location.assign("../pages/registerPage.html");
}