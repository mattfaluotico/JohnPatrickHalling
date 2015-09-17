// HELPER function

function MappingValue(v) {
	this.value = v;
	this.oldUpper;
	this.oldLower;
	this.newUpper;
	this.newLower;
}

var map = function map(v) {
	return new MappingValue(v);
}

MappingValue.prototype.fromRange = function(x,y) {
	this.oldLower = x;
	this.oldUpper = y;
	return this;
}

MappingValue.prototype.toRange = function(a,b) {
  this.newUpper = b;
  this.newLower = a;

  var sign = (this.value > 0) ? 1 : -1;
  this.value = Math.abs(this.value);

	var oldRange = this.oldUpper - this.oldLower;
  var newRange = this.newUpper - this.newLower;
  return sign * ((((this.value - this.oldLower) * newRange) / oldRange) + this.newLower);
}
