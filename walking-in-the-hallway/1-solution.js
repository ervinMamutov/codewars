'use strict';

function contact(hallway) {
  //Good Luck :D
  let miDistance = Infinity;
  let lastRightArrow = -1;

  for (let i = 0; i < hallway.length; i++) {
    if (hallway[i] === '>') {
      lastRightArrow = i;
    }

    if (hallway[i] === '<' && lastRightArrow !== -1) {
      miDistance = Math.min(miDistance, i - lastRightArrow);
    }
  }

  return miDistance === Infinity ? -1 : Math.round(miDistance / 2);
}

require('./test.js')(contact);
