import React from 'react';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';

// Initialize spatial navigation
initNavigation();

export const withSpatialNavigation = (Story: React.ComponentType) => {
  return (
    <div>
      <Story />
    </div>
  );
}; 