var request = require('request');
var http = require('http');
var port = process.env.PORT || 15000
var fs = require('fs');


//We need a function which handles requests and send response
function handleRequest(req, res) {
    request.get({
        url: 'http://rainbowapi.washingtonpost.com/rainbow-data-service/rainbow/pb-section-by-url.json',
        qs: {
            url: 'http://rainbowtool.wpprivate.com/pb/newsletter/?content=true'
        }
    }, function (err, result) {
        res.end(result.body);

        fs.writeFile('app/data.json', result.body, function (err) {
            if (err) return console.log(err);
            console.log('API data > data.json');
        });

    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(port, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://0.0.0.0:%d", port);
});