import type { Meta, StoryObj } from '@storybook/react';
import { PlayingAnimation } from './PlayingAnimation';

const meta: Meta<typeof PlayingAnimation> = {
  title: 'TV/PlayingAnimation',
  component: PlayingAnimation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An animated equalizer component for indicating playing state.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'Width of the animation in pixels',
    },
    height: {
      control: 'number',
      description: 'Height of the animation in pixels',
    },
    loop: {
      control: 'boolean',
      description: 'Whether the animation should loop',
    },
    autoplay: {
      control: 'boolean',
      description: 'Whether the animation should autoplay',
    },
    color: {
      control: 'color',
      description: 'Color override for the animation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlayingAnimation>;

// Default animation
export const Default: Story = {
  args: {
    width: 60,
    height: 60,
    loop: true,
    autoplay: true,
    color: '#FFFFFF',
  },
};

// Large size
export const Large: Story = {
  args: {
    width: 120,
    height: 120,
    loop: true,
    autoplay: true,
    color: '#FFFFFF',
  },
};

// Custom color
export const CustomColor: Story = {
  args: {
    width: 60,
    height: 60,
    loop: true,
    autoplay: true,
    color: '#007AFF',
  },
}; 