const http = require('http');
const fs = require('fs');
const port = 8000;


//reading the file
function requestHandler(req , res) {
    console.log(req.url);


fs.readFile('./home.html' , function(err , data){
    if(err){
        console.log('Error' , err);
        return res.end('<h1>Error</h1>')
    }
    return res.end(data);
});
}

//creating server
const server = http.createServer(requestHandler);

server.listen(port , function(err){
    if(err){
        console.log(`Error in creating server ${err}`);
    }
    console.log(`Server is running on the port::${port}`)
})

