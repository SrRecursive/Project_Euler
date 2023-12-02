function    fiboEvenSum(n)
{
	let evenSum, n1, n2, temp;

	n1 = 1;
	n2 = 2;
	evenSum = 0;
	while (n1 < n)
	{
		temp = n1;
		n1 = n2;
		n2 = temp + n1;
		if (n1 % 2 == 0)
		{
			evenSum += n1;
		}
	}
	return (evenSum);
}
console.log("Number 8\nMy output:\t\t", fiboEvenSum(8), "\nExpected output:\t 10\n\n");
console.log("Number 10\nMy output:\t\t", fiboEvenSum(10), "\nExpected output:\t 44\n\n");
console.log("Number 34\nMy output:\t\t", fiboEvenSum(34), "\nExpected output:\t 44\n\n");
console.log("Number 60\nMy output:\t\t", fiboEvenSum(60), "\nExpected output:\t 798\n\n");
console.log("Number 1000\nMy output:\t\t", fiboEvenSum(1000), "\nExpected output:\t 60696\n\n");
console.log("Number 4000000\nMy output:\t\t", fiboEvenSum(4000000), "\nExpected output:\t 4613732\n\n");
