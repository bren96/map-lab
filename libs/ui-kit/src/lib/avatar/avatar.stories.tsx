import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'Brendan Cullen',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('BC')).toBeTruthy();
  },
};

export const Tooltip: Story = {
  args: {
    name: 'Brendan Cullen',
    tooltip: true,
  },
  // TO-DO: add tests for tooltip
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('BC')).toBeTruthy();
  },
};
