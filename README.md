# CRUD Application documentaion

This application is desinged using ExpressJS framework. This application has 4 main operations: add, search, delete, and display.

## Documentaion to use CRUD operations:
The following packages are required to run this application:

- `readline`: Node.js module for reading input from a readable stream, commonly used for command-line interfaces.
- `fs` (File System): Node.js module for interacting with the file system, used for reading from and writing to files.
- `express`: Web application framework for Node.js, providing features for building web servers and APIs.
- `http`: Node.js module for creating HTTP servers and handling HTTP requests and responses.
- `cors`: Node.js middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications.


### Packages needed to run the application:

This application requires following the following packages to run:


### Add:

To use the add operation do the following:

1) Open your terminal.
2) Navigate to the node-CRUD-app directory.
3) Start the application by running npm start.
4) The application's landing page will be displayed, showing all entries available in the data.
5) To add a new entry, replace /items with /add in the URL.

<img src="https://github.com/Anirudh-Madarapu/CRUD/assets/123264579/6ff871a4-d050-41c0-975c-e322c9d7bb2e" align="left">

<br>

6) Later, follow the prompts in the terminal to provide the necessary input for the new entry.

<br>

### Read:
The landing page of the application byefault reads all entries from the data json file and displays them in tabular form

### Update:

To use the update operation do the following:

1) Open your terminal.
2) Navigate to the node-CRUD-app directory.
3) Start the application by running npm start.
4) The application's landing page will be displayed, showing all entries available in the data.
5) To add a new entry, replace /items with /update/:id in the URL, where :id is the entry that needs to be updated.

![alt text](image.png)

<br>

6) Later, follow the prompts in the terminal to provide the necessary input to update thea entry.


### Delete:
To use the delete operation do the following:

1) Open your terminal.
2) Navigate to the node-CRUD-app directory.
3) Start the application by running npm start.
4) The application's landing page will be displayed, showing all entries available in the data.
5) To delete an exisiting entry, replace the /items with /delete/:id in the URL, where :id is the entry that needs to be deleted An error will be thrown if there is no entry for the given input id.

![alt text](image-1.png)

<br>


## Search feature:

I have also designed a search feature which takes an entry id and displays it. To use the search feature, replace the /items with /search/:id in the URL, where :id is the entry that has to be found.

# Javascript application

## Overview
This JavaScript application calculates the area and perimeter for a given square or rectangle.

## Requirements
To run this application, you need:
- Node.js
- readline module (included in the standard Node.js environment)

## To run the application:
1. Open a terminal or command prompt.
2. Navigate to the `javascript-application` directory.
3. Run the following command: `node index.js`
4. Follow the prompts in the terminal to enter the length and width of the square or rectangle. Both length and width must be greater than 0.


# Programming question:

I selected the following question from hackerank as part of the Problem-solving Skills section: https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true

To solve this question, I returned the number of digits in the given number that divide the given input number. 

## Solution for the problem:
1. First, we initialize two variables, $x and $y, where $x is set to 0 and $y is set to the input integer $n.

2. The program enters a while loop that continues until $y becomes 0. Inside this loop:
- We check if the last digit of $y (obtained by $y % 10) is not zero and if it's a factor of $n. 
- If the condition is met, we increment the counter $x by 1.
- The program then updates $y to remove its last digit using integer division ($y = intdiv($y, 10)).

3. After the loop, the program returns the value of $x, which represents the count of digits in $n that are factors of $n.
