function squaredTo(number)
{
	return number * number;
}

function sumSquareDifference(n)
{
	let sum = 0;
	let squaredSum = 0;
	for (let x = 1; x <= n; x++)
	{
		sum += x;
		squaredSum += squaredTo(x);
		console.log(squaredSum);
	}
	return squaredTo(sum) - squaredSum;
}

console.log('Result: ', sumSquareDifference(1));
console.log('Result: ', sumSquareDifference(5));
console.log('Result: ', sumSquareDifference(7));
console.log('Result: ', sumSquareDifference(10));
console.log('Result: ', sumSquareDifference(13));
console.log('Result: ', sumSquareDifference(20));
