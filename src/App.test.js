import { render, screen } from '@testing-library/react';
import App from './App';
<script src="https://kit.fontawesome.com/fb31a7b69e.js" crossorigin="anonymous"></script>
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
