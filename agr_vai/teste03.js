const express = require(express);

const app = express();

app.get("/", (request, response) =>{
    return response("hello world");
})
console.log("teste");
app.listen(3333);