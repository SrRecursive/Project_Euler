function getFirstNineteen(n)
{
	let x = ["", "one", "two", "three", "four", "five",
		"six", "seven", "eight", "nine", "ten",
		"eleven", "twelve", "thirteen", "fourteen", "fifteen",
		"sixteen", "seventeen", "eighteen", "nineteen"];

	return x[n];
}

function getLessHundred(n)
{
	let str = "";
	let x = ["", "", "twenty", "thirty", "forty", "fifty",
		"sixty", "seventy", "eighty", "ninety"];

	if (n < 20)
		return getFirstNineteen(n);
	str += x[Math.floor(n / 10)];
	if (n % 10 != 0)
		str += getFirstNineteen(n % 10);
	return str;
}

function getLessThousand(n)
{
	let str = "";
	
	if (n < 100)
		return getLessHundred(n);
	str += getFirstNineteen(Math.floor(n / 100)) + "hundred";
	n = n - (Math.floor(n / 100) * 100);
	if (n != 0)
		str += "and" + getLessHundred(n);
	return str;
}

function getThousand(n)
{
	let str = "";

	if (n < 1000)
		return getLessThousand(n);
	str += getLessThousand(Math.floor(n / 1000)) + "thousand";
	n = n - (Math.floor(n / 1000) * 1000);
	if (n % 100 != 0)
		str += getLessThousand(n);
	return str;
}

function numberLetterCounts(limit)
{
	let counter = 0;
	let str = "";

	for (let i = 1; i <= limit; i++)
	{
		str = getThousand(i);
		counter += str.length;
	}
	return counter;
}

console.log(numberLetterCounts(5));
console.log(numberLetterCounts(150));
console.log(numberLetterCounts(1000));
