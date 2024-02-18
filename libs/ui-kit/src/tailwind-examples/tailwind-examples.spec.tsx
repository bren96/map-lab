import { render } from '@testing-library/react';

import TailwindExamples from './tailwind-examples';

describe('TailwindExamples', () => {
  it('should render', () => {
    const { baseElement } = render(<TailwindExamples />);
    expect(baseElement).toBeTruthy();
  });
});
