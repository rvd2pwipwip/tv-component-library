import React from 'react';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';

// Initialize with development configuration
// Note: In production TV app, set useMouse: false
initNavigation({
  debug: true, // Enable during development
  useMouse: true, // Enable mouse support for development
  throttle: 100, // Performance optimization
  mouseSmoothScroll: false, // Disable smooth scrolling
  mouseFocusElement: false, // Don't focus on mouse hover
});

export const withSpatialNavigation = (Story: React.ComponentType) => {
  return (
    <div>
      <Story />
    </div>
  );
}; 