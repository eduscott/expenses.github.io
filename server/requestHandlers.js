//welcomePage

function welcomePage (response) {
    console.log('Request handler "welcomePage" was called.');
    fs = require('fs');
    fs.readFile('../pages/welcome.html', function read (err, data){
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(html);
        response.end();
    });
}
exports.welcomePage = welcomePage;

//loginPage

function loginPage (response) {
    console.log('Request handler "loginPage" was called.');
    fs = require('fs');
    fs.readFile('../pages/login.html', function read (err, data) {
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

function loginStyle (response) {
    console.log('Request handler "loginStyle" was called.');
    fs = require('fs');
    fs.readFile('../styles/login.css', function read (err, data){
        if (err) {
            throw err;
        }
        css = data;
        response.writeHead(200, {'Content-Type':'text/css'});
        response.write(css);
        response.end();
    });
};
exports.loginStyle = loginStyle;

function loginCode (response) {
    console.log('Request handler "loginCode" was called.');
    fs = require('fs');
    fs.readFile('../code/login.js', function read (err, data){
        if (err) {
            throw err;
        }
        js = data;
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(js);
        response.end();
    });
};
exports.loginCode = loginCode;

//registerPage

function registerPage (response) {
    console.log('Request handler "registerPage" was called.');
    fs = require('fs');
    fs.readFile('../pages/register.html', function read (err, data) {
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

function registerStyle (response) {
    console.log('Request handler "registerStyle" was called.');
    fs = require('fs');
    fs.readFile('../styles/register.css', function read (err, data){
        if (err) {
            throw err;
        }
        css = data;
        response.writeHead(200, {'Content-Type':'text/css'});
        response.write(css);
        response.end();
    });
};
exports.registerStyle = registerStyle;

function registerCode (response) {
    console.log('Request handler "registerCode" was called.');
    fs = require('fs');
    fs.readFile('../codes/register.js', function read (err, data){
        if (err) {
            throw err;
        }
        js = data;
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(js);
        response.end();
    });
};
exports.registerCode = registerCode;

//homePage

function homePage (response) {
    console.log('Request handler "homePage" was called.');
    fs = require('fs');
    fs.readFile('../pages/home.html', function read (err, data) {
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

function homeStyle (response) {
    console.log('Request handler "homeStyle" was called.');
    fs = require('fs');
    fs.readFile('../styles/home.css', function read (err, data){
        if (err) {
            throw err;
        }
        css = data;
        response.writeHead(200, {'Content-Type':'text/css'});
        response.write(css);
        response.end();
    });
};
exports.homeStyle = homeStyle;

function homeCode (response) {
    console.log('Request handler "homeCode" was called.');
    fs = require('fs');
    fs.readFile('../codes/home.js', function read (err, data){
        if (err) {
            throw err;
        }
        js = data;
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(js);
        response.end();
    });
};
exports.homeCode = homeCode;