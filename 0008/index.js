// https://www.codewars.com/kata/514a024011ea4fb54200004b

/**
 * @param {string} str 
 */
function domainName(str) {
	if (!str.includes("http")) str = "http://" + str;

	const url = new URL(str);
	return url.hostname
		.split(".")
		.filter(s => !s.includes("www"))[0];
}

/**
 * @param {string} str
 */
function domainName1(str) {
	str = str.replace("https://", "");
	str = str.replace("http://", "");
	str = str.replace("www.", "");
	return str.split(".")[0];
}

/**
 * @param {string} str
 */
function domainName2(str) {
	return str.replace("https://", "")
		.replace("http://", "")
		.replace("www.", "")
		.split(".")[0];
}

/**
 * @param {string} str
 */
function domainName3(str) {
	return str.replace(/(https?:\/\/)?(www\.)?/g, "")
		.split(".")[0];
}

/**
 * @param {string} str
 */
function domainName4(str) {
	return str.replace(/.+\/\/|www\.|\..+/g, "");
}

module.exports = {
	domainName,
	domainName1,
	domainName2,
	domainName3,
	domainName4
}