module('StringCalculator.add()');

test('that empty string returns 0', function() {
	equals(StringCalculator.add(''), 0);
});

test('that "1" returns 1', function() {
	equals(StringCalculator.add('1'), 1);
});

test('that "1,2" returns 3', function() {
	equals(StringCalculator.add('1,2'), 3);
});

test('that an unknown amount of numbers can be passed', function() {
	equals(StringCalculator.add('1,2,6,10,12'), 31);
});

test('that newlines can be the delimiter', function() {
	equals(StringCalculator.add('1\n2,3'), 6);
}); 

test('that a different delimiter can be specified', function() {
	equals(StringCalculator.add('//;\n1;2;4'), 7);
});

test('that negative numbers throw an exception', function() {
	expect(2);
	try {
		StringCalculator.add('2,-3,4,-4,5');
	} catch (e) {
		equals(e.name, 'NegativeNumberException');
		equals(e.message, "negative numbers are not allowed: '-3, -4'");
	}
});

test('that numbers greater than 1000 are ignored', function() {
	equals(StringCalculator.add('15,999,1000,1001,1020,7'), 2021);
});

test('that delimiters can be of any length', function() {
	equals(StringCalculator.add('//***\n1***2***3'), 6);
});
