import type { Meta, StoryObj } from "@storybook/react";
import { CategoryCard } from "./CategoryCard";

const meta: Meta<typeof CategoryCard> = {
  title: "TV/CategoryCard",
  component: CategoryCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card component for displaying categories with text overlay on thumbnail.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Category name or title (displayed as overlay on thumbnail)",
    },
    thumbnailUrl: {
      control: "text",
      description: "Category thumbnail image URL (optional)",
    },
    onClick: {
      action: "clicked",
      description: "Optional click handler",
    },
    onFocus: {
      action: "focused",
      description: "Optional focus handler for TV navigation",
    },
    onBlur: {
      action: "blurred",
      description: "Optional blur handler for TV navigation",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

// Base category card
export const Default: Story = {
  args: {
    title: "Music",
    thumbnailUrl: "https://picsum.photos/300/300",
  },
};

// Long title
export const LongTitle: Story = {
  args: {
    title: "Alternative Rock & Indie Music",
    thumbnailUrl: "https://picsum.photos/300/300",
  },
};

// Very long title (3 lines)
export const VeryLongTitle: Story = {
  args: {
    title:
      "This is a very long category title that should be truncated after three lines of text for better readability",
    thumbnailUrl: "https://picsum.photos/300/300",
  },
};

// Without thumbnail (uses placeholder background)
export const NoThumbnail: Story = {
  args: {
    title: "Podcasts",
  },
};

// Focused state (simulates Norigin TV navigation focus)
export const Focused: Story = {
  args: {
    title: "Sports",
    thumbnailUrl: "https://picsum.photos/300/300",
    focused: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the CategoryCard with the universal .tv-focus-ring utility class for the focus ring. This demonstrates the single source of truth for TV focus styling.",
      },
    },
  },
};
