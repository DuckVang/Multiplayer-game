import express from "express";

//set up express app

const app = express();

//listen for requests


//set up routes

app.get("/", function (req, res) {
    res.send("hello world");
}
);


app.listen(process.env.port || 4000, function () {
    console.log("now listening for requests");
    }
);