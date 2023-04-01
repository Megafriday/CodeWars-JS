// https://www.codewars.com/kata/52761ee4cffbc69732000738

/**
 * @param {string} good 
 * @param {string} evil 
 */
function goodVsEvil(good, evil) {
	const goodResult = 'Battle Result: Good triumphs over Evil';
	const evilResult = 'Battle Result: Evil eradicates all trace of Good';
	const tieResult = 'Battle Result: No victor on this battle field';

	const goodValue = good.split(" ")
		.reduce((acc, i) => acc + parseInt(i), 0);

	const evilValue = evil.split(" ")
		.reduce((acc, i) => acc + parseInt(i), 0);

	// console.dir({ goodValue, evilValue });

	if (goodValue > evilValue) return goodResult;
	if (goodValue < evilValue) return evilResult;
	return tieResult;
}

module.exports = { goodVsEvil };