function    isPalindrome(n3)
{
	let n3String, length, i;

	i = 0;
	n3String = String(Math.abs(n3));
	length = n3String.length;
	while (i < n3String.length / 2)
	{
		if (n3String[i] !== n3String[n3String.length - i - 1])
		{
			return (false);
		}
	}
	return (true);
}

function    product(n1, n2, n)
{
	let temp, length, palindrome, n3;

	length = 1;
	temp = n2;
	palindrome = 0;
	while (n--)
	{
		length *= 10;
	}
	while (n1 < length)
	{
		n2 = temp;
		while (n2 < length)
		{
			n3 = n1 * n2;
			if (isPalindrome(n3) === true)
			{
				palindrome = n3;
			}
			n2++;
		}
		n1++;
	}
	return (palindrome);
}

function    largestPalindromeProduct (n)
{
	let palindrome, n1, n2, temp;
	
	temp = n;
	n1 = 9;
	n2 = 9;
	while (temp-- > 1)
	{
		n1 *= 10;
		n2 *= 10;
	}
	n2++;
	palindrome = product(n1, n2, n);
	return (palindrome);
}

console.log("The number is: ",largestPalindromeProduct(2));
console.log("The number is: ",largestPalindromeProduct(3));
console.log("The number is: ",largestPalindromeProduct(4));
console.log("The number is: ",largestPalindromeProduct(5));
