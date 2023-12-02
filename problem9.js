function squareTo(number)
{
	return number * number;
}

function checker(a, b, c)
{
	if (squareTo(a) + squareTo(b) == squareTo(c))
	{
		return true;
	}
	return false;
}

// Return a * b *c given a² + b² = c² and a + b + c = n
function specialPythagoreanTriplet(n)
{
	let set = [];
	for (let a = 1; a < n; a++)
	{
		for (let b = a + 1; b < n; b++)
		{
			for (let c = b + 1; c < n; c++)
			{
				if (checker(a, b, c) == true)
				{
					if (a + b + c == n)
					{
						return (a * b * c)
					}
				}
			}
		}
	}
	return 0;
}

console.log(specialPythagoreanTriplet(1000));
