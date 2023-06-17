import React from 'react';
import { render } from '@testing-library/react';

import Footer from './';

describe('Footer component', () => {
  it('renders the footer text correctly', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText(/Made with/i);
    expect(footerText).toBeInTheDocument();
  });

  it('renders the favorite icon', () => {
    const { getByTestId } = render(<Footer />);
    const favoriteIcon = getByTestId('favorite-icon');
    expect(favoriteIcon).toBeInTheDocument();
  });

  it('renders the hero name correctly', () => {
    const { getByText } = render(<Footer />);
    const heroName = getByText(/Sakil Khan/i);
    expect(heroName).toBeInTheDocument();
  });
});
