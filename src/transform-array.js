const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  const controlsSeq = ['--double-prev', '--double-next', '--discard-prev', '--discard-next'];
  return arr.reduce((accumulator, currentValue, index) => {
    if (controlsSeq.includes(currentValue)) {
      return accumulator;
    }
    if (arr[index - 1] == `--discard-next`) {
      return accumulator;
    }

    if (arr[index - 1] == `--double-next`) {
      accumulator.push(currentValue, currentValue);
    } else {
      accumulator.push(currentValue);
    }

    if (arr[index + 1] == `--discard-prev`) {
      accumulator.splice(accumulator.length - 1, 1)
    }

    if (arr[index + 1] == `--double-prev`) {
      accumulator.push(currentValue)
    }
    return accumulator;
  }, []);
};