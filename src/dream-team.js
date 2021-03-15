const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let letters = members.map(name => {
      if (typeof name === 'string') {
        return name.trim().charAt(0).toUpperCase();
      }
    });
    return letters.sort().join('');
  } else {
    return false;
  }
};
