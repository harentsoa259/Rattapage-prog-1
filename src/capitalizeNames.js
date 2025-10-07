function capitalizeNames(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ').toString();
}

console.log(capitalizeNames("hello world"));
console.log(capitalizeNames("HELLO WORLD"))

module.exports = {
    capitalizeNames
}