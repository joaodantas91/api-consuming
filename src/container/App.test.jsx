import { fireEvent, getByLabelText, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom'
import App from './App';

it('should load and displays post api', () => {
  render(<App />);
  const h1Element = screen.getByText(/posts api/i);
  expect(h1Element).toBeInTheDocument()
});

it('should be able to fetch API', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  expect(res.ok).toBeTruthy();
})

it('should change page/items when has been clicked', async () => {
  render(<App />);
  await waitFor(()=>expect(screen.getByLabelText('Page 2')))
  
})
