const readline = require('readline');
const fs = require('fs');
const express = require('express');
const router = express.Router();

//Creating a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

router.get("/", function(req, res) {
    rl.question('Enter name: ', function(name) {
      rl.question('Enter location: ', function(location) {
        //Reading an existing data from JSON file
        const data = JSON.parse(fs.readFileSync('/workspaces/CRUD/node-CRUD-app/routes/data.json', 'utf8'));
  
        //Generating a new ID for the entry
        const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
        //Creating a new entry object
        const newEntry = { id, name, location };


        //Adding a new entry to the data array
        data.push(newEntry);
        //Writing the updated data back to the JSON file
        fs.writeFileSync('/workspaces/CRUD/node-CRUD-app/routes/data.json', JSON.stringify(data, null, 2));
  
        //Printing successfull entry addition
        console.log('Entry added successfully!');
        res.sendStatus(200);
      });
    });
  });
  
  module.exports = router;