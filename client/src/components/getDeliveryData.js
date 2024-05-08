export function generateUniqueArray(number) {
  const array = [];

  // Generate unique random floats and add them to the array
  var i = 4
  var j = 0
  var addnum = 4.25
  while (j < 4) {
    array.push((number % i) + addnum)
    number += 1
    j++
    addnum += 0.25
  }
  
  return array;
}