import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Home, MagnifyingGlass, Gear } from 'stingray-icons';

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
      options: ['primary', 'secondary', 'transparent'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
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
    icon: {
      control: 'select',
      options: ['Home', 'Search', 'Settings'],
      mapping: {
        Home: <Home />,
        Search: <MagnifyingGlass />,
        Settings: <Gear />,
      },
      description: 'Icon to display in the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Base button
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    showIcon: false,
  },
};

// Size variants
export const ButtonSmall: Story = {
  args: {
    children: 'Small',
    variant: 'primary',
    size: 'small',
    showIcon: false,
  },
};

export const ButtonMedium: Story = {
  args: {
    children: 'Medium',
    variant: 'primary',
    size: 'medium',
    showIcon: false,
  },
};

export const ButtonLarge: Story = {
  args: {
    children: 'Large',
    variant: 'primary',
    size: 'large',
    showIcon: false,
  },
};

// Style variants
export const ButtonPrimary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    size: 'medium',
    showIcon: false,
  },
};

export const ButtonSecondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    size: 'medium',
    showIcon: false,
  },
};

export const ButtonTransparent: Story = {
  args: {
    children: null,
    variant: 'transparent',
    size: 'medium',
    showIcon: true,
    icon: <Home />,
    'aria-label': 'Home',
  },
};

// Combined variants
export const ButtonSmallSecondary: Story = {
  args: {
    children: 'Small Secondary',
    variant: 'secondary',
    size: 'small',
    showIcon: false,
  },
};

export const ButtonLargeSecondary: Story = {
  args: {
    children: 'Large Secondary',
    variant: 'secondary',
    size: 'large',
    showIcon: false,
  },
};

/***   */

export const ButtonSmallTransparent: Story = {
  args: {
    children: null,
    variant: 'transparent',
    size: 'small',
    showIcon: true,
    icon: <Home />,
  },
};

export const ButtonLargeTransparent: Story = {
  args: {
    children: null,
    variant: 'transparent',
    size: 'large',
    showIcon: true,
    icon: <Home />,
  },
};

// Icon variants (icon before label)
export const ButtonPreIcon: Story = {
  args: {
    children: 'Home',
    variant: 'primary',
    size: 'medium',
    showIcon: true,
    icon: <Home />,
  },
};

export const ButtonPreIconSmall: Story = {
  args: {
    children: 'Home',
    variant: 'primary',
    size: 'small',
    showIcon: true,
    icon: <Home />,
  },
};

export const ButtonPreIconLarge: Story = {
  args: {
    children: 'Home',
    variant: 'primary',
    size: 'large',
    showIcon: true,
    icon: <Home />,
  },
};

// Focused state (simulates Norigin TV navigation focus)
// @ts-ignore
export const Focused: Story = {
  args: {
    children: 'Focused Button',
    variant: 'primary',
    size: 'medium',
    showIcon: false,
    // @ts-ignore
    'data-focused': 'true',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the Button with data-focused="true" to simulate Norigin TV navigation focus styling.'
      }
    }
  }
}; 