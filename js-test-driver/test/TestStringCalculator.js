TestCase("TestStringCalculator", {
    testAddEmptyString: function() {
      assertEquals(0, StringCalculator.add(""));
    },

    testAddOne: function() {
      assertEquals(1, StringCalculator.add("1"));
    },

    testAddThree: function() {
      assertEquals(3, StringCalculator.add("1,2"));
    },

    testUnknownAmountOfNumbers: function() {
      assertEquals(31, StringCalculator.add('1,2,6,10,12'));
    },

    testNewlinesCanBeTheDelimiter: function() {
      assertEquals(6, StringCalculator.add('1\n2,3'));
    },

    testDifferentDelimiter: function() {
      assertEquals(7, StringCalculator.add('//;\n1;2;4'));
    },

    testNegativeNumbersThrowAnException: function() {
      expectAsserts(2);
      try {
	StringCalculator.add('2,-3,4,-4,5');
      } catch (e) {
	assertEquals('NegativeNumberException', e.name);
	assertEquals("negative numbers are not allowed: '-3, -4'", e.message);
      }
    },

    testThatNumbersGreaterThan1000AreIgnored: function() {
      assertEquals(2021, StringCalculator.add('15,999,1000,1001,1020,7'));
    },

    testThatDelimitersCanBeOfAnyLength: function() {
      assertEquals(6, StringCalculator.add('//***\n1***2***3'));
    }
});

