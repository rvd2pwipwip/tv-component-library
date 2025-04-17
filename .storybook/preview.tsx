import type { Preview } from "@storybook/react";
import React from 'react';

// Import design system styles in correct order
import '../src/styles/base.css';
import '../src/styles/utilities.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: 'tv',
      viewports: {
        tv: {
          name: 'TV',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        backgroundColor: 'var(--color-background)',
        padding: 'var(--spacing-lg)',
        color: 'var(--color-text-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '1px solid var(--color-text-secondary)',
      }}>
        <Story />
      </div>
    ),
  ],
};

export default preview; 