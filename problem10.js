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

function primeSummation(n)
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
		return 5;
	}
	let sum = 5;
	let number = 5;
	while (number < n)
	{
		if (isPrime(number) == true)
		{
			sum += number;
		}
		number++;
	}
	return sum;
}

primeSummation(2000000);
console.log(primeSummation(17));