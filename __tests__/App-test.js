import React from 'react';
import 'react-native';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

describe('renders correctly components', () => {
  it('Should create App component', () => {
    renderer.create(<App />);
  });

  it('Should create App component with render from @testing-library/react-native', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<App />);

    const addButton = getByText('Add');
    const placeHolder = getByPlaceholderText('Insert the name');
    const txtResult = getByTestId('txtResult');

    fireEvent.changeText(placeHolder, 'My Name');
    fireEvent.press(addButton);

    expect(txtResult).not.toBeNull();
  });

  it('Test error and Should show a error message', () => {
    const { getByText, queryByText } = render(<App />);

    const addButton = getByText('Add');
    const errorMessage = queryByText('Please, fill the name');

    fireEvent.press(addButton);
    expect(errorMessage).toBeNull();
  });
});
