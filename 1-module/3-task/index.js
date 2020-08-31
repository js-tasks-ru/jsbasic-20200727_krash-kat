/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
	let a = str.charAt(0).toUpperCase();
	let b = str.substr(1, str.lenght);
	return a + b;
}
