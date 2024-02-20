import { render } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render', () => {
    const { baseElement } = render(<Button>Example</Button>);
    expect(baseElement).toBeTruthy();
  });
});
