function countDivisors(n)
{
	let divisors = 0;
	for (let i = 1; i < Math.ceil(Math.sqrt(n)); i++)
		if (n % i == 0)
			divisors += 2;
	return divisors;
}

function divisibleTriangleNumber(n)
{
	let result;
	let triangleNumber = 0;

	if (n == 1)
		return 3;
	for (let i = 1; i < n * n; i++)
	{
		triangleNumber += i;
		result = countDivisors(triangleNumber);
		if (result > n)
			break;
	}
	return triangleNumber;
}

console.log(divisibleTriangleNumber(1));
console.log(divisibleTriangleNumber(2));
console.log(divisibleTriangleNumber(3));
console.log(divisibleTriangleNumber(4));
console.log(divisibleTriangleNumber(5));
console.log(divisibleTriangleNumber(500));
