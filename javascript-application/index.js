
//This function calculates the perimter of the given square/rectangle
const readline = require('readline');

function calculatePerimeter(length, width){
    return 2*(length+width);
}

//This function calculates the area of the given square/rectangle
function calculateArea(length, width){
    return (length*width);
}

//Let us define the main method which takes inputs and produces 
function main(){
    //creating an interface for readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //Taking inputs from the user
    rl.question('Enter a number for length: ', function(length) {
        rl.question('Enter a number for width: ', function(width) {
            length = parseFloat(length);
            width = parseFloat(width);
            
            //error handling
            //We will throw an error message if the user gave invalid inputs
            if(length <=0 || width <=0 || isNaN(length) || isNaN(width)){
                console.log("Both length and width have to be numbers greater than zero");
                return;
            }
            
            //calculating methods
            let perimeter = calculatePerimeter(length,width);
            let area = calculateArea(length,width);
            
            
            //printing area and perimeter
            console.log("The perimeter of the square/rectangle is: ", perimeter);
            console.log("The area of the square/rectangle is: ", area);
            console.log("Main method has been executed succesfully. Area and perimeter have been computed for the given inputs. Run the program again to feed new inputs");
            rl.close();
        });
    });
}

main();

