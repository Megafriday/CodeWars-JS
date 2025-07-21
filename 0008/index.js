// 0008
// https://www.codewars.com/kata/514a024011ea4fb54200004b

// url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// url = "http://www.zombie-bites.com" -> domain name = "zombie-bites"
// url = "https://www.cnet.com" -> domain name = cnet"

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

/**
 * @param {String} str 
 */
function domainName5(str) {
	return str.match(/(https?:\/\/)*(www\.)*(.+?)\./)[3];
}

module.exports = {
	domainName,
	domainName1,
	domainName2,
	domainName3,
	domainName4,
	domainName5
}