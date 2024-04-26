const express = require('express');
const fs = require('fs');
const readline = require('readline');

const router = express.Router();

//updating our entry using this method
router.get('/:id', function(req, res) {
    //reading inputs from our user
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //
    const updateFile = '/workspaces/CRUD/node-CRUD-app/routes/data.json';
    const data = JSON.parse(fs.readFileSync(updateFile, 'utf8'));
    const id = parseInt(req.params.id);

    //find the user whom we would like to update
    let foundIndex = data.findIndex(user => user.id === id);
    if (foundIndex !== -1) {
        const userToUpdate = data[foundIndex];

        rl.question(`Enter new name for user with ID ${id}: `, function(name) {
            rl.question(`Enter new location for user with ID ${id}: `, function(location) {
                //updating the user's information
                userToUpdate.name = name;
                userToUpdate.location = location;

                //writing the updated data back to the JSON file
                fs.writeFileSync(updateFile, JSON.stringify(data, null, 2));


                //making sure we updated the user succefully by printing message and sending 200 status code
                console.log(`User with ID ${id} updated successfully!`);
                res.sendStatus(200);
                rl.close();
            });
        });
    } else {
        //if the user is not found we shall replace throw a 404 error
        res.sendStatus(404);
        rl.close();
    }
});

module.exports = router;
