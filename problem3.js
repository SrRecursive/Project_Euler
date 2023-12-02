function    isPrime(n)
{
	let divisor, ndivisor;

	divisor = 3;
	ndivisor = 1;
	if (n == 2 || n == 3)
	{
		return (true);
	}
	else if (n > 3)
	{
		while (divisor <= n)
		{
			if (n % divisor == 0)
			{
				ndivisor++;
			}
			divisor++;
		}
		if (ndivisor == 2)
		{
			return (true);
		}
	}
	return (false);
}

function    largestPrimeFactor(number)
{
	let largest, n;
	
	n = 2;
	while (number > 1)
	{
		if (isPrime(n) == true)
		{
			while (number % n == 0)
			{
				number /= n;
			}
			largest = n;
		}
		n++;
	}
	return (largest);
}

console.log("Number 2\nMy output:\t\t", largestPrimeFactor(2), "\nExpected output:\t 2\n\n");
console.log("Number 3\nMy output:\t\t", largestPrimeFactor(3), "\nExpected output:\t 3\n\n");
console.log("Number 5\nMy output:\t\t", largestPrimeFactor(5), "\nExpected output:\t 5\n\n");
console.log("Number 7\nMy output:\t\t", largestPrimeFactor(7), "\nExpected output:\t 7\n\n");
console.log("Number 8\nMy output:\t\t", largestPrimeFactor(8), "\nExpected output:\t 2\n\n");
console.log("Number 13195\nMy output:\t\t", largestPrimeFactor(13195), "\nExpected output:\t 29\n\n");
console.log("Number 60085147143\nMy output:\t\t", largestPrimeFactor(600851475143), "\nExpected output:\t 6857\n\n");
