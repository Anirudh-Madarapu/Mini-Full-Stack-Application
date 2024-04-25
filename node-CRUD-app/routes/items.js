//using express for further operations
const express = require("express");


//Creating a router
const router = express.Router();


let data = [
    {
        id: 1,
        Name:"IBM",
        location:"Chicago",
    },
    {
        id: 2,
        Name:"Microsoft",
        location:"Dallas",
    },
    {
        id: 3,
        Name:"Nvidia",
        location:"New york",
    },
];

router.get("/",function(req,res){
    res.status(200).json(data);
});

module.exports = router;