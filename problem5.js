function    smallestMult(n)
{
	let smallest, temp;

	if (n === 1)
	{
		return (1);
	}
	temp = n;
	smallest = 2;
	while (temp > 0)
	{
		if (smallest % temp != 0)
		{
			temp = n;
		}
		else
		{
			temp--;
		}
		smallest++;
	}
	return (smallest);
}

console.log('Result: ', smallestMult(1));
console.log('Result: ', smallestMult(5));
console.log('Result: ', smallestMult(7));
console.log('Result: ', smallestMult(10));
console.log('Result: ', smallestMult(13));
console.log('Result: ', smallestMult(20));
