var request = require('request');
var http = require('http');
var PORT = 1234;
//We need a function which handles requests and send response
function handleRequest(req, res) {
    request.get({
        url: 'http://rainbowapi.washingtonpost.com/rainbow-data-service/rainbow/pb-section-by-url.json',
        qs: {
            url: 'http://rainbowtool.wpprivate.com/pb/newsletter/?content=true'
        }
    }, function (err, result) {
        res.end(JSON.stringify(result));
    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});