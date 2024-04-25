const express = require("express");
const fs = require("fs");

const router = express.Router();
router.get("/:id", function(req, res) {
    console.log('Deleted');
    const data2 = fs.readFileSync('/workspaces/CRUD/node-CRUD-app/routes/data.json', 'utf8');
    const data = JSON.parse(data2);
    let indexToDelete = data.findIndex(user => user.id === parseInt(req.params.id));
    if (indexToDelete !== -1) {
        data.splice(indexToDelete, 1);
        const updatedJsonData = JSON.stringify(data, null, 2); // Use null or omit the third argument
        fs.writeFile('/workspaces/CRUD/node-CRUD-app/routes/data.json', updatedJsonData, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
        const rows = data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.location}</td>
            </tr>
            `).join('');

            const html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>JSON data presentation</title>
                </head>
                <body>

                    <div class="container">
                    
                        <table>

                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>${rows}</tbody>
                        </table>
                    </div>
                </body>
                </html>
            `;
                res.sendStatus(200);
            }
        });
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;
