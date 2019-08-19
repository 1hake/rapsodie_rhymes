export function redirect(url) {
	document.location.href = url;
}

export function convertValue(min, max, value) {
	const interval = max - min;
	const moderate = interval / 100;
	return min + moderate * value;
}

export function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}
