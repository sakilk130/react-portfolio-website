import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '.';
import { heroInfo } from '../../data/data';

jest.mock('./styles/footer', () => ({
  useStyles: () => ({
    root: 'footer-root',
  }),
}));

describe('Footer Component', () => {
  it('should render the correct content', () => {
    render(<Footer />);

    const icon = screen.getByTestId('favorite-icon');
    expect(icon).toBeInTheDocument();

    const nameElement = screen.getByText(
      new RegExp(`by ${heroInfo.name}`, 'i'),
    );
    expect(nameElement).toBeInTheDocument();

    const footerElement = screen.getByText(
      new RegExp(`by ${heroInfo.name}`, 'i'),
    );
    expect(footerElement).toHaveClass('footer-root');
  });
});
