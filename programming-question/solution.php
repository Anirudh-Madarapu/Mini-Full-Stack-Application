<?php

/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits($n) {
    $x = 0;
    $y = $n;
    //iterating until we run out of all digits in a given 
    while($y!=0){
        //checking if the given digit is zero and is a factor of n
        if($y%10 !=0 && $n % ($y%10)==0){
            $x = $x + 1;//if the given digit divides the number passed in the input
        }
        //moving to the next digiti in the given number
        $y = intdiv($y,10);
    }
    //returning the number of digits that divide the given number
    return $x;

}

//this is the starter code given by hackerank
$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$t = intval(trim(fgets(STDIN)));

for ($t_itr = 0; $t_itr < $t; $t_itr++) {
    $n = intval(trim(fgets(STDIN)));

    $result = findDigits($n);

    fwrite($fptr, $result . "\n");
}

fclose($fptr);
