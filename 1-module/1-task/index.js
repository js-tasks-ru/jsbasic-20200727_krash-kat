/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
	
	return result = (n == 0) ? 1 : (n != 1) ? n * factorial(n-1) : 1;
}
 console.log(factorial(0));
 console.log(factorial(1));
 console.log(factorial(3));
 console.log(factorial(5));