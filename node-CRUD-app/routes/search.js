const express = require('express');
const fs = require("fs");
const router = express.Router();

router.get("/:id", function(req, res) {
        const data2 = '/workspaces/CRUD/node-CRUD-app/routes/data.json';
        const data = JSON.parse(fs.readFileSync(data2, 'utf8'));
        const id = parseInt(req.params.id);
        
        let found = data.find(user => user.id === id);
        if (found) {
            const html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Search Result</title>
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
                            <tbody>
                                <tr>
                                    <td>${found.id}</td>
                                    <td>${found.name}</td>
                                    <td>${found.location}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </body>
                </html>
            `;
            
            res.send(html);
        } else {
            res.sendStatus(404);
        }
});


module.exports = router;