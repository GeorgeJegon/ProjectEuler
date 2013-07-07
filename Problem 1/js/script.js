/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function getExecutionTime(start){
	return (typeof(start)=='undefined')?new Date():(new Date()).getTime()-start.getTime();
}//END FUNCTION

function result(limitNumber){
	limitNumber = (typeof(limitNumber)=='number' && limitNumber>0)?limitNumber:10;
	for(var i=0,s=0;i<limitNumber;i++){
		if((i%3)==0 || (i%5)==0){
			s+=i;
		}//END IF
	}//END FOR
	return s;
}//END FUNCTION
var now = getExecutionTime();
var r = result(1000);
alert(getExecutionTime(now)+' ms');
alert('O resultado é: '+r);