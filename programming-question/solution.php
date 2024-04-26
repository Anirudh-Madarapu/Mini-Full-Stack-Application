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
    while($y!=0){
        
        if($y%10 !=0 && $n % ($y%10)==0){
            $x = $x + 1;
        }
        
        $y = intdiv($y,10);
    }
    return $x;
    // Write your code here

}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$t = intval(trim(fgets(STDIN)));

for ($t_itr = 0; $t_itr < $t; $t_itr++) {
    $n = intval(trim(fgets(STDIN)));

    $result = findDigits($n);

    fwrite($fptr, $result . "\n");
}

fclose($fptr);
