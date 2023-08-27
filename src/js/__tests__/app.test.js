import orderByProps from '../app.js';

const sortObj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const forSort = ['name', 'level'];
const result = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('Create instance', () => {
  expect(orderByProps(sortObj, forSort)).toEqual(result);
});
