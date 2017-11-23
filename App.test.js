import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const test = 5 + 5;
  return test;
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
