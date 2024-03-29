var request = require('request');
var http = require('http');
var port2 = 5000
var fs = require('fs');


//We need a function which handles requests and send response
function handleRequest(req, res) {
    request.get({
        url: 'http://rainbowapi.washingtonpost.com/rainbow-data-service/rainbow/pb-section-by-url.json',
        qs: {
            url: 'http://rainbowtool.wpprivate.com/pb/newsletter/?content=true'
        }
    }, function (err, result) {
        //Allow access on local
        //res.setHeader('Access-Control-Allow-Origin', 'http://0.0.0.0:3000');
        //Allow acccess on prod
        res.setHeader('Access-Control-Allow-Origin', '*');
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
server.listen(port2, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://0.0.0.0:%d", port2);
});
