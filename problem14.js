let dict = new Map();

function getSeries(n)
{
	let counter = 0;
	let temp = n;

	while (temp != 1)
	{
		if (dict.has(temp))
		{
			counter += dict.get(temp);
			break;
		}
		if (temp % 2 == 0)
			temp /= 2;
		else
			temp = 3 * temp + 1;
		counter++;
	}
	dict.set(n, counter);
	return counter;
}

function longestCollatzSequence(limit)
{
	let index = 0;
	let result = 0;
	for (let i = 1; i <= limit; i++)
	{
		if (getSeries(i) > result)
		{
			result = getSeries(i);
			index = i;
		}
	}
	return index;
}

for (let i = 1; i <= 1000; i++)
{
	console.log(i, "->", longestCollatzSequence(i));
}
console.log(100000, "->", longestCollatzSequence(100000));
console.log(1000000, "->", longestCollatzSequence(1000000));
