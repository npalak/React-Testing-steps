import React, { useMemo, useState } from "react";
function App() {
  return (
    <div>
      <p>Counter</p>
    </div>
  );
}

export default App;

// ----------------------------------------------------------------------
App.test.js
import {fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const text1 = screen.getByText(/Counter/i);
  expect(text1).toBeInTheDocument();
});
// ----------------------------------------------------------------------
