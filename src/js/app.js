import Bowman from './Bowman.js';
import Daemon from './Daemon.js';
import Magician from './Magician.js';
import Swordsman from './Swordsman.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';

console.log('app worked', Bowman, Daemon, Magician, Swordsman, Undead, Zombie);

export default function orderByProps(obj, sort) {
  const objCopy = {};
  Object.assign(objCopy, obj);
  const newArrObj = [];

  for (let i = 0; i < sort.length; i += 1) {
    for (const propObj in obj) {
      if (sort[i] === propObj) {
        const newObj = {};
        newObj.key = propObj;
        newObj.value = obj[propObj];
        newArrObj.push(newObj);
        delete objCopy[propObj];
      }
    }
  }
  const sortedList = [];
  for (const propObj in objCopy) {
    // if (Object.hasOwn(objCopy, propObj)) {
    sortedList.push(propObj);
    // }
  }
  sortedList.sort();

  for (let y = 0; y < sortedList.length; y += 1) {
    const newObj = {};
    newObj.key = sortedList[y];
    newObj.value = obj[sortedList[y]];
    newArrObj.push(newObj);
  }

  return newArrObj;
}
