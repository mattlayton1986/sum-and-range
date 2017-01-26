// Parameters: start and end of range
// Return value: Array of all numbers from start to end parameters
// Note: range() is starting- and ending-value inclusive, i.e., [start, end] rather than [start, end).
function range(start, end) {
  if (typeof start != "number" || typeof end != "number") {
    try {
      throw new TypeError("Parameters must be of type 'number'.");
    } catch (e) {
      console.log(e.message);
    }
  }
  var numberRange = [];
  for (var i=start; i <= end; i++) {
    numberRange.push(i);
  }
  return numberRange;
}

// Parameters: Array-based range of numbers
// Return value: total sum of array values
function sum(range) {
  var total = 0;
  for (var i=0; i < range.length; i++) {
    total += range[i];
  }
  return total;
}

function product(range) {
  var total = 1;
  for (var i = 0; i < range.length; i++) {
    total *= range[i];
  }
  return total;
}

// When page is loaded, calculate the sum of
// the given range and display it in div#sum.
window.onload = function() {
  var test = document.getElementById("sum");
  test.innerHTML = "Sum: " + sum(range(1,20)) + "<br />";
  test.innerHTML += "Product: " + product(range(1,20)) + "<br />";
};
