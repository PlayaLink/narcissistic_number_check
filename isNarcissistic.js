function isNarcissistic (value) {
  var sum = 0;
  var digits = value.toString().split("");
  var totalDigits = digits.length;
  digits.map( num => (
    sum += (Math.pow(num, totalDigits))
  ));
  return value === sum;
}
