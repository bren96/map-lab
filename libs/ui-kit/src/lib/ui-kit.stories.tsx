import type { Meta, StoryObj } from '@storybook/react';
import { UiKit } from './ui-kit';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiKit> = {
  component: UiKit,
  title: 'UiKit',
};
export default meta;
type Story = StoryObj<typeof UiKit>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiKit!/gi)).toBeTruthy();
  },
};
