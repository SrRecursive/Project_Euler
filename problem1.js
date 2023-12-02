function    multiplesOf3and5(number)
{
	let sum;

	sum = 0;
	while (number--)
	{
		if (number % 3 == 0 || number % 5 == 0)
		{
			sum += number;
		}
	}	
	return (sum);
}

console.log("Number 10\nMy output:\t\t",multiplesOf3and5(10),"\nExpected output:\t 23\n\n");
console.log("Number 49\nMy output:\t\t",multiplesOf3and5(49),"\nExpected output:\t 543\n\n");
console.log("Number 1000\nMy output:\t\t",multiplesOf3and5(1000),"\nExpected output:\t 233168\n\n");
console.log("Number 8456\nMy output:\t\t",multiplesOf3and5(8456),"\nExpected output:\t 16687353\n\n");
console.log("Number 19564\nMy output:\t\t",multiplesOf3and5(19564),"\nExpected output:\t 89301183\n\n");
