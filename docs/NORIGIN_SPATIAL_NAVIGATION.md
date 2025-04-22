# Norigin Spatial Navigation Documentation

## Overview
Norigin's spatial navigation library provides a robust solution for implementing keyboard navigation in TV applications. This document serves as a reference for implementing spatial navigation in our TV component library.

## Key Concepts

### Focus Management
- Focus is managed through a focus engine that tracks the currently focused element
- Focus can be moved in four directions: up, down, left, right
- Focus boundaries are automatically detected and handled

### Component Integration
Components can be made focusable by:
1. Using the `useFocusable` hook
2. Implementing the `FocusableComponent` interface
3. Setting appropriate focus styles and states

### Focus States
- `focused`: Element currently has focus
- `focusable`: Element can receive focus
- `disabled`: Element cannot receive focus

## Implementation Guidelines

### Basic Usage
```typescript
import { useFocusable } from '@noriginmedia/spatial-navigation';

const MyComponent = () => {
  const { ref, focused } = useFocusable({
    onFocus: () => {
      // Handle focus
    },
    onBlur: () => {
      // Handle blur
    }
  });

  return (
    <div ref={ref} className={focused ? 'focused' : ''}>
      {/* Component content */}
    </div>
  );
};
```

### Focus Groups
For components that contain multiple focusable elements:
```typescript
import { FocusContext } from '@noriginmedia/spatial-navigation';

const ParentComponent = () => {
  return (
    <FocusContext.Provider value={{ focusKey: 'parent' }}>
      <ChildComponent />
    </FocusContext.Provider>
  );
};
```

### Focus Styles
- Always provide visible focus indicators
- Use CSS classes to manage focus states
- Ensure focus indicators meet accessibility requirements

## Best Practices
1. Keep focus management within components
2. Use focus groups for complex navigation patterns
3. Implement proper focus trapping where needed
4. Test navigation in all directions
5. Consider edge cases (empty states, disabled states)

## Resources
- [Norigin Spatial Navigation GitHub](https://github.com/NoriginMedia/react-spatial-navigation)
- [Norigin Documentation](https://noriginmedia.github.io/spatial-navigation/) 