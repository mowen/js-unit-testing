// Implementation of Roy Osherove's TDD Kata http://osherove.com/tdd-kata-1/

var StringCalculator = function () {
	var _delimiterRegexp = /\/\/(.*)\n/;
	
	var _splitter = function(numbers) {
		var defaultDelimiter = /[,\n]/;
		if (_hasDelimiter(numbers)) {
			var delimiter = _extractDelimiter(numbers);
			numbers = _removeDelimiter(numbers);
			return numbers.split(new RegExp(delimiter));
		}
		else {
			return numbers.split(defaultDelimiter);
		}
	};
		
	var _sumNumbers = function(numbers) {
		var sum = 0;
			for (var i = 0; i < numbers.length; i++) {
				sum += Number(numbers[i]);
			}
			return sum;
	};
	
	var _hasDelimiter = function(numbers) {
		return _delimiterRegexp.test(numbers);
	};
	
	var _extractDelimiter = function(numbers) {
		var match = numbers.match(_delimiterRegexp);
		if (match.length > 0) {
			return match[1];
		}
		else {
			return "";
		}
	};
	
	var _removeDelimiter = function(numbers) {
		return numbers.replace(_delimiterRegexp, '');
	};
	
	return {
		add: function(numberString) {
			if (numberString == "") {
				return 0;
			}
			else {
				var numbers = _splitter(numberString);
				var sum = _sumNumbers(numbers);
				return sum;
			}
		}
	};
}();