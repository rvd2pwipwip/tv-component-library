import type { Preview } from "@storybook/react";
import React, { useEffect } from 'react';
import { withSpatialNavigation } from './spatialNavigationDecorator';

// Import design system styles in correct order
import '../src/styles/design-tokens-npm.css';
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

// Keyboard event handler
const withKeyboardEvents = (Story: React.ComponentType) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Log keyboard events for debugging
      console.log('Key pressed:', event.key);
      
      // Add specific key handlers here
      switch (event.key) {
        case 'Enter':
          console.log('Enter key pressed - Open channel info');
          break;
        case 'b':
        case 'B':
          console.log('B key pressed - Go back');
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          console.log(`${event.key} pressed - Navigate between cards`);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return <Story />;
};

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
    withSpatialNavigation,
    withKeyboardEvents,
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