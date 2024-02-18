import type { Meta, StoryObj } from '@storybook/react';
import { TailwindExamples } from './tailwind-examples';

const meta: Meta<typeof TailwindExamples> = {
  component: TailwindExamples,
  title: 'TailwindExamples',
};
export default meta;

type Story = StoryObj<typeof TailwindExamples>;
export const Default: Story = {};
