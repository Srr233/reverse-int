module.exports = function reverse (n) {
  let str = n.toString().split('').reverse();

  if (str[str.length - 1] !== '-') {
      return +str.join('');
  } else {
      return +`${str.slice(0, str.length - 1).join('')}`;
  }
}
