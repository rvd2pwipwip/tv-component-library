import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

// Example icon component
const PlayIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

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
          ['With Icons', ['ButtonPreIcon', 'ButtonPreIconSmall', 'ButtonPreIconLarge']],
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
    showIcon: {
      control: 'boolean',
      description: 'Whether to show an icon',
      defaultValue: false,
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
    showIcon: false,
    icon: <PlayIcon />,
  },
};

// Size variants
export const ButtonSmall: Story = {
  args: {
    label: 'Small',
    variant: 'primary',
    size: 'small',
    showIcon: false,
    icon: <PlayIcon />,
  },
};

export const ButtonMedium: Story = {
  args: {
    label: 'Medium',
    variant: 'primary',
    size: 'medium',
    showIcon: false,
    icon: <PlayIcon />,
  },
};

export const ButtonLarge: Story = {
  args: {
    label: 'Large',
    variant: 'primary',
    size: 'large',
    showIcon: false,
    icon: <PlayIcon />,
  },
};

// Style variants
export const ButtonPrimary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'medium',
    showIcon: false,
    icon: <PlayIcon />,
  },
};

export const ButtonSecondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
    size: 'medium',
    showIcon: false,
    icon: <PlayIcon />,
  },
};

// Combined variants
export const ButtonSmallSecondary: Story = {
  args: {
    label: 'Small Secondary',
    variant: 'secondary',
    size: 'small',
    showIcon: false,
    icon: <PlayIcon />,
  },
};

export const ButtonLargeSecondary: Story = {
  args: {
    label: 'Large Secondary',
    variant: 'secondary',
    size: 'large',
    showIcon: false,
    icon: <PlayIcon />,
  },
};

// Icon variants (icon before label)
export const ButtonPreIcon: Story = {
  args: {
    label: 'Play',
    variant: 'primary',
    size: 'medium',
    showIcon: true,
    icon: <PlayIcon />,
  },
};

export const ButtonPreIconSmall: Story = {
  args: {
    label: 'Play',
    variant: 'primary',
    size: 'small',
    showIcon: true,
    icon: <PlayIcon />,
  },
};

export const ButtonPreIconLarge: Story = {
  args: {
    label: 'Play',
    variant: 'primary',
    size: 'large',
    showIcon: true,
    icon: <PlayIcon />,
  },
}; 