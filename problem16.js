function powerDigitSum(exponent)
{
	let x = Math.pow(2, exponent);
	let sum = 0;
	let xstring = BigInt(x).toString();

	for (let i in xstring)
		sum += parseInt(xstring[i]);
	return sum;
}

for (let i = 0; i < 15; i++)
	console.log(powerDigitSum(i));
console.log(powerDigitSum(128));
