const express = require("express");
const fs = require("fs");

const router = express.Router();
router.get("/:id", function(req, res) {
    const unParseddata = '/workspaces/CRUD/node-CRUD-app/routes/data.json';
    try {
        const data = JSON.parse(fs.readFileSync(unParseddata, 'utf8'));
        const idToDelete = parseInt(req.params.id);
        
        const indexToDelete = data.findIndex(user => user.id === idToDelete);

        if (indexToDelete !== -1) {

            data.splice(indexToDelete, 1);

            const updatedJsonData = JSON.stringify(data, null, 2); 
            
            fs.writeFile(unParseddata, updatedJsonData, (err) => {
                if (err) {
                  console.error(err);
                   res.status(500).json({error:"Failed to update the data file"});

                } else {
                   res.status(200).json({message:"Item deleted successfully", deletedItem: idToDelete});
                }
            });

        } else {
            res.status(404).json({error:"Item not found"});
        }

    } catch (error) {
        console.error("Error reading data file:", error);
        res.status(500).json({ error: "Failed to read data file" });
    }
});

module.exports = router;
