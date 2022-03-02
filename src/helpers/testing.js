import { create } from 'react-test-renderer';
import { render } from '@testing-library/react-native';

export const sum = (a, b) => {
  return a + b;
};

export const matchSnapshotWithTheme = component => {
  const tree = create({ component }).toJSON();
  expect(tree).toMatchSnapshot;
};

export const renderWithTheme = (component, options) => {
  return render({ component }, options);
};
