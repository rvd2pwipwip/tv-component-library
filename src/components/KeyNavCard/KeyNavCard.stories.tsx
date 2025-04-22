import type { Meta, StoryObj } from '@storybook/react';
import { KeyNavCard } from './KeyNavCard';

const meta: Meta<typeof KeyNavCard> = {
  title: 'TV/KeyNavCard',
  component: KeyNavCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card component for displaying audio channels with keyboard navigation support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Channel name or title (max 2 lines)',
    },
    thumbnailUrl: {
      control: 'text',
      description: 'Channel thumbnail image URL',
    },
    isPlaying: {
      control: 'boolean',
      description: 'Whether the channel is currently playing',
    },
    onClick: {
      action: 'clicked',
      description: 'Optional click handler',
    },
    onFocus: {
      action: 'focused',
      description: 'Optional focus handler for TV navigation',
    },
    onBlur: {
      action: 'blurred',
      description: 'Optional blur handler for TV navigation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof KeyNavCard>;

// Base keynav card
export const Default: Story = {
  args: {
    title: 'Adult Alternative US',
    thumbnailUrl: 'https://picsum.photos/300/300',
    isPlaying: false,
  },
};

// Playing state
export const Playing: Story = {
  args: {
    title: 'Pop Adult',
    thumbnailUrl: 'https://picsum.photos/300/300',
    isPlaying: true,
  },
};

// Long title
export const LongTitle: Story = {
  args: {
    title: 'This is a very long channel title that should be truncated after two lines of text',
    thumbnailUrl: 'https://picsum.photos/300/300',
    isPlaying: false,
  },
};

// Without thumbnail
export const NoThumbnail: Story = {
  args: {
    title: 'Channel Without Thumbnail',
    isPlaying: false,
  },
};

// Navigation test story
export const NavigationTest: Story = {
  args: {
    title: 'Navigation Test Card',
    thumbnailUrl: 'https://picsum.photos/300/300',
    isPlaying: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Test story for keyboard navigation. Use arrow keys, Enter, and B key to test navigation.',
      },
    },
  },
}; 