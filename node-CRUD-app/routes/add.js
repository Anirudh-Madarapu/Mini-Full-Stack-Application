const readline = require('readline');
const fs = require('fs');
const express = require('express');
const router = express.Router();

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

router.get("/", function(req, res) {
    rl.question('Enter name: ', function(name) {
      rl.question('Enter location: ', function(location) {
        // Read existing data from JSON file
        const data = JSON.parse(fs.readFileSync('/workspaces/CRUD/node-CRUD-app/routes/data.json', 'utf8'));
  
        // Generate a new ID for the entry
        const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  
        // Create a new entry object
        const newEntry = { id, name, location };
  
        // Add the new entry to the data array
        data.push(newEntry);
  
        // Write the updated data back to the JSON file
        fs.writeFileSync('/workspaces/CRUD/node-CRUD-app/routes/data.json', JSON.stringify(data, null, 2));
  
        console.log('Entry added successfully!');
        res.sendStatus(200);
        rl.close();
      });
    });
  });
  
  module.exports = router;