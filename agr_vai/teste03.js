const express = require(express);

const app = express();

app.get("/", (request, response) =>{
    return response("hello world");
})

app.listen(3333);