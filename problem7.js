function isPrime(n)
{
	for (let divisor = 2; divisor <= Math.sqrt(n); divisor++)
	{
		if (n % divisor == 0)
		{
			return false;
		}
	}
	return true;
}

function nthPrime(n)
{
	if (n < 1)
	{
		return 0;
	}
	else if (n == 1)
	{
		return 2;
	}
	else if (n == 2)
	{
		return 3;
	}
	let counter = 2;
	let number = 5;
	while (counter < n)
	{
		if (isPrime(number) == true)
		{
			counter++;
		}
		number += 2;
	}
	number -= 2;
	return number;
}

console.log('Result: ', nthPrime(1));
console.log('Result: ', nthPrime(5));
console.log('Result: ', nthPrime(7));
console.log('Result: ', nthPrime(10));
console.log('Result: ', nthPrime(13));
console.log('Result: ', nthPrime(10001));
