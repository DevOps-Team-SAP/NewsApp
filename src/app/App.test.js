import { fireEvent, render } from '@testing-library/react';
import Sources from './components/Sources';
import { navbar } from './components/Navbar';

// test('renders sources', () => {
//   const { getByText } = render(<Sources />);
//   const a = getByText(/ABC News (AU)/)
//   // const linkElement = screen.getByText(/learn react/i);
//   expect(a).toHaveTextContent("ABC News (AU)");
// });

test('renders Navbar', () => {
    const { getByText } = render(<navbar />);
    const h1 = getByText(/Welcome/)
    // const linkElement = screen.getByText(/learn react/i);
    expect(h1).toHaveTextContent("Welcome");
  });
