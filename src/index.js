
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];

  let sortedTowel = new Array();

  matrix.forEach((element, index) => {
    if (index % 2 != 0) {
      element.reverse();
    }
  sortedTowel = sortedTowel.concat(element);
})

  return sortedTowel;
}
