import { render } from '@testing-library/react';

import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Tooltip content="This is a tooltip">Test</Tooltip>
    );
    expect(baseElement).toBeTruthy();
  });
});
