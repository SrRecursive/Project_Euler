function latticePaths(gridSize)
{
	let result = 1;
	let n = gridSize * 2
	let k = gridSize

	for (let i = 1; i <= k; i++)
		result *= (n + 1 - i) / i;
	return result;
}

console.log(latticePaths(2));
console.log(latticePaths(3));
console.log(latticePaths(4));
console.log(latticePaths(20));
