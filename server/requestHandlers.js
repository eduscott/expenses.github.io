//js

function defaultCode (response) {
    console.log('Request handler "defaultCode" was called.');
    fs = require('fs');
    fs.readFile('../codes/default.js', function read (err, data){
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/javascript'});
        response.write(html);
        response.end();
    });
}
exports.defaultCode = defaultCode;

function homeCode (response) {
    console.log('Request handler "homeCode" was called.');
    fs = require('fs');
    fs.readFile('../codes/home.js', function read (err, data){
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/javascript'});
        response.write(html);
        response.end();
    });
}
exports.homeCode = homeCode;

function initialCode (response) {
    console.log('Request handler "initialCode" was called.');
    fs = require('fs');
    fs.readFile('../codes/initial.js', function read (err, data){
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/javascript'});
        response.write(html);
        response.end();
    });
}
exports.initialCode = initialCode;

//css

function defaultStyle (response) {
    console.log('Request handler "defaultStyle" was called.');
    fs = require('fs');
    fs.readFile('../styles/default.css', function read (err, data){
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/css'});
        response.write(html);
        response.end();
    });
}
exports.defaultStyle = defaultStyle;

function homeStyle (response) {
    console.log('Request handler "homeStyle" was called.');
    fs = require('fs');
    fs.readFile('../styles/home.css', function read (err, data){
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/css'});
        response.write(html);
        response.end();
    });
}
exports.homeStyle = homeStyle;

function initialStyle (response) {
    console.log('Request handler "initialStyle" was called.');
    fs = require('fs');
    fs.readFile('../styles/initial.css', function read (err, data){
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/css'});
        response.write(html);
        response.end();
    });
}
exports.initialStyle = initialStyle;

//html

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

function initialPage (response) {
    console.log('Request handler "initialPage" was called.');
    fs = require('fs');
    fs.readFile('../pages/initial.html', function read (err, data) {
        if (err) {
            throw err;
        }
        html = data;
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(html);
        response.end();
    });
};
exports.initialPage = initialPage;
