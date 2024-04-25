//using express for further operations
const express = require("express");
const fs = require("fs");

//Creating a router
const router = express.Router();

//reading JSON data and parsing it to store under 'data' variable
const data2 = fs.readFileSync('/workspaces/CRUD/node-CRUD-app/routes/data.json','utf8');
const data = JSON.parse(data2)

//when a request to this page comes, this code presents entries of JSON as rows using HTML
router.get("/", function(req, res) {
    
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

    res.send(html);
});


module.exports = router;