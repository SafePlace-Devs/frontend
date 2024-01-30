import { fireEvent, render, screen } from '@testing-library/react';
import Navigation from './routes/Navigation';

test('renders Home in nav correctly', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/Home/, { selector: 'a' });
  expect(linkElement).toBeInTheDocument();
});

test('renders Home Page correctly', () => {
  render(<Navigation />);

  fireEvent.click(screen.getByText(/Home/, { selector: 'a' }));

  const homePageText = screen.getByText(/Home Page/);
  expect(homePageText).toBeInTheDocument();
});

test('renders About in nav correctly', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/About/, { selector: 'a' });
  expect(linkElement).toBeInTheDocument();
});

test('renders About Page correctly', () => {
  render(<Navigation />);

  fireEvent.click(screen.getByText(/About/, { selector: 'a' }));

  const homePageText = screen.getByText(/About Page/);
  expect(homePageText).toBeInTheDocument();
});

test('renders Profile in nav correctly', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/Profile/, { selector: 'a' });
  expect(linkElement).toBeInTheDocument();
});

test('renders Profile Page correctly', () => {
  render(<Navigation />);

  fireEvent.click(screen.getByText(/Profile/, { selector: 'a' }));

  const homePageText = screen.getByText(/Profile Page/);
  expect(homePageText).toBeInTheDocument();
});
