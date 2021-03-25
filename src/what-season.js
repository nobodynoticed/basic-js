const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
	if (!date) return 'Unable to determine the time of year!';
	try {
		const month = date.toJSON().split('-')[1];

		if (Math.floor(month / 3) === 0) return 'winter';
		if (Math.floor(month / 3) === 1) return 'spring';
		if (Math.floor(month / 3) === 2) return 'summer';
		if (Math.floor(month / 3) === 3) return 'autumn';
		if (Math.floor(month / 3) === 4) return 'winter';
	} catch {
		throw 'Error';
	}
};
