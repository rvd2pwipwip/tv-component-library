import type { Meta, StoryObj } from '@storybook/react';
import { ChannelCard } from './ChannelCard';

const meta: Meta<typeof ChannelCard> = {
  title: 'TV/ChannelCard',
  component: ChannelCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card component for displaying audio channels with a square thumbnail and 2-line title.',
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
type Story = StoryObj<typeof ChannelCard>;

// Base channel card
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

// Focused state (simulates Norigin TV navigation focus)
export const Focused: Story = {
  args: {
    title: 'Focused Channel',
    thumbnailUrl: 'https://picsum.photos/300/300',
    isPlaying: false,
    focused: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the ChannelCard with the universal .tv-focus-ring utility class for the focus ring. This demonstrates the single source of truth for TV focus styling.'
      }
    }
  }
}; 