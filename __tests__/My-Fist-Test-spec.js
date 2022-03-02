import 'react-native';
import { sum } from '../src/helpers/testing';

const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

describe('the La Croix cans on my desk', () => {
  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });

  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });

  it('adds 1 + 2 Should be to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 1 + 2 Should be to equal 3 1', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
