//loginPage

function loginPage (response) {
    console.log('Request handler "loginPage" was called.');
    fs = require('fs');
    fs.readFile('../pages/loginPage.html', function read (err, data) {
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(html);
        response.end();
    });
};
exports.loginPage = loginPage;

function loginPageStyle (response) {
    console.log('Request handler "loginPageStyle" was called.');
    fs = require('fs');
    fs.readFile('../pagesStyle/loginPageStyle.css', function read (err, data){
        if (err) {
            throw err;
        }
        css = data;
        response.writeHead(200, {'Content-Type':'text/css'});
        response.write(css);
        response.end();
    });
};
exports.loginPageStyle = loginPageStyle;

function loginPageCode (response) {
    console.log('Request handler "loginPageCode" was called.');
    fs = require('fs');
    fs.readFile('../pagesCode/loginPageCode.js', function read (err, data){
        if (err) {
            throw err;
        }
        js = data;
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(js);
        response.end();
    });
};
exports.loginPageCode = loginPageCode;

//registerPage

function registerPage (response) {
    console.log('Request handler "registerPage" was called.');
    fs = require('fs');
    fs.readFile('../pages/registerPage.html', function read (err, data) {
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(html);
        response.end();
    });
};
exports.registerPage = registerPage;

function registerPageStyle (response) {
    console.log('Request handler "registerPageStyle" was called.');
    fs = require('fs');
    fs.readFile('../pagesStyle/registerPageStyle.css', function read (err, data){
        if (err) {
            throw err;
        }
        css = data;
        response.writeHead(200, {'Content-Type':'text/css'});
        response.write(css);
        response.end();
    });
};
exports.registerPageStyle = registerPageStyle;

function registerPageCode (response) {
    console.log('Request handler "registerPageCode" was called.');
    fs = require('fs');
    fs.readFile('../pagesCode/registerPageCode.js', function read (err, data){
        if (err) {
            throw err;
        }
        js = data;
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(js);
        response.end();
    });
};
exports.registerPageCode = registerPageCode;

//homePage

function homePage (response) {
    console.log('Request handler "homePage" was called.');
    fs = require('fs');
    fs.readFile('../pages/homePage.html', function read (err, data) {
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(html);
        response.end();
    });
};
exports.homePage = homePage;

function homePageStyle (response) {
    console.log('Request handler "homePageStyle" was called.');
    fs = require('fs');
    fs.readFile('../pagesStyle/homePageStyle.css', function read (err, data){
        if (err) {
            throw err;
        }
        css = data;
        response.writeHead(200, {'Content-Type':'text/css'});
        response.write(css);
        response.end();
    });
};
exports.homePageStyle = homePageStyle;

function homePageCode (response) {
    console.log('Request handler "homePageCode" was called.');
    fs = require('fs');
    fs.readFile('../pagesCode/homePageCode.js', function read (err, data){
        if (err) {
            throw err;
        }
        js = data;
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(js);
        response.end();
    });
};
exports.homePageCode = homePageCode;