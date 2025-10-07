const { expect } = require('chai');
const capitalizeNames = require('../src/findOdd');

const { describe } = require('mocha');

describe("findOdd", () => {

it("[7] devrait renvoyer 7, car il apparaît 1 fois (ce qui est impair).", () => {
const input = [7];
const expected = [7];
expect(capitalizeNames(input)).to.deep.equal(expected);
});

it("[0] devrait renvoyer 0, car il apparaît 1 fois (ce qui est impair).", () => {
const input = [0];
const expected = [0];
expect(capitalizeNames(input)).to.deep.equal(expected);
});

it("[1,1,2] devrait renvoyer 2, car il apparaît 1 fois (ce qui est impair).", () => {
const input = [1,1,2];
const expected = [2];
expect(capitalizeNames(input)).to.deep.equal(expected);
});

it("[0,1,0,1,0] devrait renvoyer 0, car il apparaît 3 fois (ce qui est impair).", () => {
const input = [0,1,0,1,0];
const expected = [0];
expect(capitalizeNames(input)).to.deep.equal(expected);
});

it("[0,1,0,1,0] devrait renvoyer 0, car il apparaît 3 fois (ce qui est impair).", () => {
const input = [0,1,0,1,0];
const expected = [0];
expect(capitalizeNames(input)).to.deep.equal(expected);
});



it("[1,2,2,3,3,3,4,3,3,3,2,2,1] devrait renvoyer 4, car il apparaît 1 fois (ce qui est impair).", () => {
const input = [1,2,2,3,3,3,4,3,3,3,2,2,1];
const expected = [4];
expect(capitalizeNames(input)).to.deep.equal(expected);
});

});