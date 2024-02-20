import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { EnvelopeOpenIcon, ReloadIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

const renderButton = (args: any) => <Button {...args}>Example Button</Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: renderButton,
};

export const LargeDefault: Story = {
  args: {
    variant: 'default',
    size: 'lg',
  },
  render: renderButton,
};

export const SmallDefault: Story = {
  args: {
    variant: 'default',
    size: 'sm',
  },
  render: renderButton,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
  },
  render: renderButton,
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
  },
  render: renderButton,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
  },
  render: renderButton,
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
  },
  render: renderButton,
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
  },
  render: renderButton,
};

export const Icon: Story = {
  args: {
    variant: 'default',
    size: 'icon',
  },
  render: (args: any) => (
    <Button {...args}>
      <EnvelopeOpenIcon className="h-4 w-4" />
    </Button>
  ),
};

export const IconWithText: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: (args: any) => (
    <Button {...args}>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" />
      Example Button
    </Button>
  ),
};

export const Loading: Story = {
  args: {
    variant: 'default',
    size: 'default',
  },
  render: (args: any) => (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait ...
    </Button>
  ),
};
