import { getByText, render } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card title='Header' />);
    expect( getByText(baseElement,/Header/)).toBeTruthy();
  });
});
