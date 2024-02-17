import type { Meta, StoryObj } from '@storybook/react';
import { TailwindTest } from './tailwind-test';

const meta: Meta<typeof TailwindTest> = {
  component: TailwindTest,
  title: 'TailwindTest',
};
export default meta;

type Story = StoryObj<typeof TailwindTest>;
export const Default: Story = {};
