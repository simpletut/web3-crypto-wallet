import { render, screen } from '@testing-library/react';
import LandingPage from './index';

test('Landing Page Renders without Error', () => {
  const { queryByTestId } = render(<LandingPage />);
  const component = queryByTestId('landingPage');
  expect(component).toBeTruthy();
});
