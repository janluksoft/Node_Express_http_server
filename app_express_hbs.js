//this file: [app_express_hbs.js]  Run app: [node app_express_hbs.js]
const port = 3000;
const express = require('express'); //Instaled "express" npm module
let aCounter = 0;
let aCountAb = 0;

const app_express = express(); //Norde.Express - the most popular framework for creating web applications 
 app_express.use(express.static(__dirname + '/public'));
app_express.set('view engine', 'hbs'); //Engine to html

var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

//===== Routing of pages =============================================
//request type get
app_express.get('/', function (xrequest, xresponse) { 
    jRenderPage(xresponse, 'index', aCounter, 
    'Main index.hbs', 'Start Index page');
    aCounter++;
});

app_express.get('/info2', function (xrequest, xresponse) { 
    jRenderPage(xresponse, 'info2', aCountAb, 
    'About my application', 'Start about');
    aCountAb++;
}); 

app_express.get('/structure', function (xrequest, xresponse) { 
    jRenderPage(xresponse, 'structure', aCountAb, 'Application structure', '');
});

app_express.get('/about', function (xrequest, xresponse) { 
    jRenderPage(xresponse, 'about', aCountAb, 'About application', '');
});


function jRenderPage(xres, xsPage, xCount, xTitle, xBody) {
    console.log('Ask the page: '+ xsPage+ ' (' + xCount+ ') times');//message in console

    xres.render(xsPage, { //then provide arguments
        zPageTitle: xTitle,
    });
};

//Enabling the node.http server on port 3000 (http://localhost:3000/)
app_express.listen(port, (xerr) => { 
    if (xerr)
        return (console.log('Something went wrong'));
    ServerRunning();        //callback ServerRunning()
});                         //Server work


function ServerRunning() {
    console.log('Server Node Express is running..');
};
