var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {}

//loginPage
handle['/'] = requestHandlers.loginPage;
handle['/pages/loginPage.html'] = requestHandlers.loginPage;
handle['/pagesStyle/loginPageStyle.css'] = requestHandlers.loginPageStyle;
handle['/pagesCode/loginPageCode.js'] = requestHandlers.loginPageCode;

//registerPage
handle['/pages/registerPage.html'] = requestHandlers.registerPage;
handle['/pagesStyle/registerPageStyle.css'] = requestHandlers.registerPageStyle;
handle['/pagesCode/registerPageCode.js'] = requestHandlers.registerPageCode;

//homePage
handle['/pages/homePage.html'] = requestHandlers.homePage;
handle['/pagesStyle/homePageStyle.css'] = requestHandlers.homePageStyle;
handle['/pagesCode/homePageCode.js'] = requestHandlers.homePageCode;

server.start (router.route, handle);