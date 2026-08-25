import React from 'react';
import { render, screen } from '@testing-library/react';

import HeroDetails from '.';

jest.mock('./styles/hero-details', () => ({
  useStyles: () => ({
    root: 'hero-details-root',
    'MuiBottomNavigationAction-root': 'MuiBottomNavigationAction-root',
  }),
}));

const MockIcon = () => <svg data-testid="mock-icon"></svg>;

describe('HeroDetails Component', () => {
  const contacts = [
    {
      id: 1,
      icon: MockIcon,
      name: 'GitHub',
      link: 'https://github.com/username',
      username: 'GitHubUser',
    },
    {
      id: 2,
      icon: MockIcon,
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/username',
      username: 'LinkedInUser',
    },
  ];

  it('renders the BottomNavigation component', () => {
    render(<HeroDetails contacts={contacts} />);
    const bottomNavigation = screen.getByTestId('hero-details');
    expect(bottomNavigation).toBeInTheDocument();
  });

  it('renders each BottomNavigationAction for the contacts', () => {
    render(<HeroDetails contacts={contacts} />);
    const actions = screen.getAllByTestId('hero-details-action');
    expect(actions).toHaveLength(contacts.length);

    contacts.forEach((contact) => {
      const action = screen.getByTitle(contact.username);
      expect(action).toBeInTheDocument();
      expect(action).toHaveAttribute('href', contact.link);
    });
  });

  it('renders the correct icon for each contact', () => {
    render(<HeroDetails contacts={contacts} />);
    const icons = screen.getAllByTestId('mock-icon');
    expect(icons).toHaveLength(contacts.length);
  });

  it('applies the correct root class to BottomNavigation', () => {
    render(<HeroDetails contacts={contacts} />);
    const bottomNavigation = screen.getByTestId('hero-details');
    expect(bottomNavigation).toHaveClass('hero-details-root');
  });

  it('applies the correct class to BottomNavigationAction components', () => {
    render(<HeroDetails contacts={contacts} />);
    const actions = screen.getAllByTestId('hero-details-action');
    actions.forEach((action) => {
      expect(action).toHaveClass('MuiBottomNavigationAction-root');
    });
  });
});
