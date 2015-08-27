var request = require('request');
var http = require('http');
var PORT = 1234;
var jsonfile = require('jsonfile')
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

        fs.writeFile('/app/data.json', result.body, function (err) {
            if (err) return console.log(err);
            console.log('Hello World > helloworld.txt');
        });

        // var file = '/data.json'
            //jsonfile.writeFile(file, 'test', function (err) {
            //console.error(err)
        //})

    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});