JSpec.describe('StringCalculator', function() {
	describe('.add()', function () {
    	it('should return 0', function() {
      		expect(StringCalculator.add("")).to(be, 0);
    	});
		it('should return 1', function() {
			expect(StringCalculator.add("1")).to(be, 1);
		});
		it('should return 5', function() {
			expect(StringCalculator.add("2,3")).to(be, 5);
		});
		it('should return 7', function() {
			expect(StringCalculator.add('2,3\n2')).to(be, 7);
		});
		it('should return 9', function(){
			expect(StringCalculator.add('//;\n2;3;4')).to(be, 9);
		});
		it('should return 19', function() {
			expect(StringCalculator.add('//delim\n3delim6delim5delim5')).to(be, 19);
		});
	});
});