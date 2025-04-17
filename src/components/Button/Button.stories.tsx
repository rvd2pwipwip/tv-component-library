import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'TV/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A button component that follows TV design system guidelines.',
      },
    },
    options: {
      storySort: {
        order: [
          'Default',
          ['Size Variants', ['ButtonSmall', 'ButtonMedium', 'ButtonLarge']],
          ['Style Variants', ['ButtonPrimary', 'ButtonSecondary']],
          ['Combined Variants', ['ButtonSmallSecondary', 'ButtonLargeSecondary']],
        ],
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    label: {
      control: 'text',
      description: 'The text content of the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Optional click handler',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Base button
export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

// Size variants
export const ButtonSmall: Story = {
  args: {
    label: 'Small',
    variant: 'primary',
    size: 'small',
  },
};

export const ButtonMedium: Story = {
  args: {
    label: 'Medium',
    variant: 'primary',
    size: 'medium',
  },
};

export const ButtonLarge: Story = {
  args: {
    label: 'Large',
    variant: 'primary',
    size: 'large',
  },
};

// Style variants
export const ButtonPrimary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'medium',
  },
};

export const ButtonSecondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
    size: 'medium',
  },
};

// Combined variants
export const ButtonSmallSecondary: Story = {
  args: {
    label: 'Small Secondary',
    variant: 'secondary',
    size: 'small',
  },
};

export const ButtonLargeSecondary: Story = {
  args: {
    label: 'Large Secondary',
    variant: 'secondary',
    size: 'large',
  },
}; 