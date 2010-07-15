var StringCalculator = function () {
	var _defaultDelimiter = /[,\n]/;
	var _optionalDelimiter = /\/\/(.*)\n/;

	var _sumNumbers = function(numbers) {
		var sum = 0;
		var negativeNumbers = [];

		for (var i=0; i < numbers.length; i++) {
			var number = parseInt(numbers[i], 10);
			if (number < 0) {
				negativeNumbers.push(number);
			}
			else if (number <= 1000) {
				sum += number;
			}
		}

		if (negativeNumbers.length > 0) {
			_throwNegativeNumberException(negativeNumbers);
		}

		return sum;
	};

	var _throwNegativeNumberException = function(negativeNumbers) {
		var message = "negative numbers are not allowed: '" + negativeNumbers.join(', ') + "'";
		throw {
			name: 'NegativeNumberException',
			message: message
		}
	};

	var _splitNumbers = function(numberString) {
		if (_hasDelimiter(numberString)) {
			var delimiter = _extractDelimiter(numberString);
			numberString = _removeDelimiter(numberString);
			return numberString.split(delimiter);
		}
		else {
			return numberString.split(_defaultDelimiter);
		}
	};

	var _hasDelimiter = function(numberString) {
		return _optionalDelimiter.test(numberString);
	};

	var _extractDelimiter = function(numberString) {
		var match = numberString.match(_optionalDelimiter);
		var delimiter = match[1];
		return delimiter;
	};

	var _removeDelimiter = function(numberString) {
		return numberString.replace(_optionalDelimiter, '');
	};

	return {
		add: function(numberString) {
			var sum = 0;

			if (numberString.length > 0) {
				var numbers = _splitNumbers(numberString);
				sum = _sumNumbers(numbers);
			}

			return sum;
		}
	};
}();