var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {}

//welcomePage
handle['/'] = requestHandlers.welcomePage;

//loginPage
handle['/pages/loginPage.html'] = requestHandlers.loginPage;
handle['/pagesStyle/specificPagesStyles/loginPageStyle.css'] = requestHandlers.loginPageStyle;
handle['/pagesCode/specificPagesCodes/loginPageCode.js'] = requestHandlers.loginPageCode;

//registerPage
handle['/pages/registerPage.html'] = requestHandlers.registerPage;
handle['/pagesStyle/specificPagesStyles/registerPageStyle.css'] = requestHandlers.registerPageStyle;
handle['/pagesCode/specificPagesCodes/registerPageCode.js'] = requestHandlers.registerPageCode;

//homePage
handle['/pages/homePage.html'] = requestHandlers.homePage;
handle['/pagesStyle/specificPagesStyles/homePageStyle.css'] = requestHandlers.homePageStyle;
handle['/pagesCode/specificPagesCodes/homePageCode.js'] = requestHandlers.homePageCode;

server.start (router.route, handle);