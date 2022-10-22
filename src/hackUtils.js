const seedrandom = require("seedrandom");

const getArray = (length, gap, seed = "42") => {
  const seededRnd = seedrandom(seed);
  const rnd = (min, max) => ~~(seededRnd() * max) + min;
  let last = 0;
  return [...Array(length)].map((e) => {
    last = rnd(last, last + gap);
    return last;
  }).sort(function(a, b){return a - b});
};
exports.getArray = getArray;
