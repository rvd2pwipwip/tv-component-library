import type { Preview } from "@storybook/react";
import React from 'react';

// Import design system styles in correct order
import '../src/styles/design-tokens.css';
import '../src/styles/base.css';
import '../src/styles/utilities.css';

// Add custom CSS for Storybook
const storybookStyles = `
  .sb-show-main {
    overflow: auto !important;
    height: 100vh !important;
  }
  
  .sb-main-padded {
    padding: 1rem !important;
  }
  
  .docs-story {
    overflow: visible !important;
  }
`;

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
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>{storybookStyles}</style>
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
      </>
    ),
  ],
};

export default preview; 