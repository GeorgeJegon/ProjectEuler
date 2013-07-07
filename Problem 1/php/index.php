<?php
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function result($star=0,$limit=1000){
	$soma = 0;
	$i=$star;	
	while($i<$limit){
		if(!($i%3) || !($i%5)){
			$soma += $i;	
		}//END IF
		$i++;
	}//END IF
	return $soma;
}//END FUNCTION


echo result(1);
?>