# TV Input Components - Considerations and Recommendations

## Overview

This document outlines the challenges and considerations when implementing text input components for TV interfaces, based on learnings from the SearchField component implementation in SMTV03.

## The Native HTML Input Problem

### Core Issue

Native HTML input elements were designed for mouse and touch interactions, not remote control navigation. This fundamental mismatch creates several challenges for TV interfaces:

1. **Focus Management Complexity**

   - Focus rings behave inconsistently with spatial navigation
   - Browser focus and custom focus states conflict
   - Requires complex state tracking to coordinate focus between input and adjacent elements

2. **Navigation Patterns**

   - Arrow key navigation conflicts with text cursor movement
   - Remote control directional input competes with text editing
   - Unclear when arrow keys should move cursor vs. navigate away from input

3. **Visual Feedback**
   - Browser focus styles don't align with TV focus ring requirements
   - Focus ring visibility during navigation transitions requires manual management
   - Cursor visibility and text selection not optimized for 10ft viewing

## Real-World Example: SearchField Implementation

### The Challenge

The SearchField component in SMTV03 demonstrates these issues:

```jsx
// Complex focus state management required
const [isOnClearButton, setIsOnClearButton] = useState(false);

// Multiple focus handlers needed
const handleClearButtonFocus = () => setIsOnClearButton(true);
const handleClearButtonBlur = () => setIsOnClearButton(false);

// Conditional class application for focus ring
className={`search-field ${focused && !isOnClearButton ? 'tv-focused' : ''}`}
```

### Complexity Indicators

- 50+ lines of focus management code
- Multiple state variables to track focus location
- Complex conditional logic for focus ring display
- Fragile coordination between native input focus and custom navigation

## Recommended Alternatives

### Option A: ContentEditable Approach

```jsx
const TVTextInput = ({ value, onChange, placeholder }) => {
  const { ref, focused } = useFocusable();

  return (
    <div
      ref={ref}
      contentEditable
      className={`tv-text-input ${focused ? "tv-focused" : ""}`}
      onInput={(e) => onChange(e.target.textContent)}
    >
      {value || placeholder}
    </div>
  );
};
```

**Benefits:**

- Full control over styling and focus behavior
- No conflicts with browser input handling
- Simplified focus management with spatial navigation

**Challenges:**

- More complex text selection handling
- Need to implement cursor positioning
- Accessibility considerations for screen readers

### Option B: Custom React Component (Recommended)

```jsx
const TVTextInput = ({ value, onChange, placeholder }) => {
  const { ref, focused } = useFocusable();
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleKeyPress = (key) => {
    if (key.length === 1) {
      // Insert character at cursor position
      const newValue =
        value.slice(0, cursorPosition) + key + value.slice(cursorPosition);
      onChange(newValue);
      setCursorPosition(cursorPosition + 1);
    }
  };

  return (
    <div
      ref={ref}
      className={`tv-text-input ${focused ? "tv-focused" : ""}`}
      onKeyDown={handleKeyPress}
    >
      {renderTextWithCursor(value, cursorPosition, placeholder)}
    </div>
  );
};
```

**Benefits:**

- Complete control over behavior and styling
- Designed specifically for remote control input
- Simplified focus management
- Consistent with other TV components

**Implementation Requirements:**

- Custom keyboard event handling
- Text cursor positioning and display
- Text selection management
- Backspace/delete functionality
- Copy/paste support (if needed)

### Option C: Canvas-Based Input

For scenarios requiring pixel-perfect control or complex text rendering:

```jsx
const CanvasTVTextInput = ({ value, onChange }) => {
  const canvasRef = useRef();
  const { ref, focused } = useFocusable();

  useEffect(() => {
    renderTextToCanvas(canvasRef.current, value, focused);
  }, [value, focused]);

  return (
    <div ref={ref} className={focused ? "tv-focused" : ""}>
      <canvas ref={canvasRef} width={400} height={60} />
    </div>
  );
};
```

**Use Cases:**

- Custom fonts or text effects
- Complex text rendering requirements
- Performance-critical scenarios

## Design Considerations

### TV-Specific Requirements

1. **Focus Ring**

   - Clear, consistent focus indication
   - No conflicts with browser focus styles
   - Proper scaling for 10ft viewing distance

2. **Text Visibility**

   - Large enough font size for TV viewing
   - High contrast for readability
   - Clear cursor indication

3. **Navigation**
   - Predictable arrow key behavior
   - Clear entry/exit points
   - Integration with spatial navigation

### Accessibility

- Screen reader compatibility
- Keyboard navigation support
- ARIA labels and roles
- Focus management for assistive technologies

## Implementation Roadmap

### Phase 1: Research and Prototyping

- Create proof-of-concept implementations
- Test different approaches with real TV hardware
- Evaluate performance and accessibility

### Phase 2: Component Development

- Build production-ready TVTextInput component
- Comprehensive testing across TV platforms
- Documentation and examples

### Phase 3: Migration

- Replace native input usage with TV-specific components
- Update existing implementations
- Performance optimization

## Current Workaround Guidelines

Until a dedicated TVTextInput component is available:

1. **Minimize Complexity**

   - Keep focus management as simple as possible
   - Avoid deep nesting of focus states
   - Document complex focus interactions

2. **Encapsulation**

   - Isolate native input complexity within component
   - Provide clean API to consuming components
   - Hide implementation details

3. **Testing**
   - Test extensively with remote control hardware
   - Verify focus behavior across different TV platforms
   - Document known limitations

## Conclusion

Native HTML input elements create significant complexity in TV interfaces due to their design for different interaction patterns. Future development should prioritize custom TV-specific input components that are designed from the ground up for remote control navigation and 10ft viewing experiences.

The investment in custom components will pay dividends in:

- Simplified implementation
- Better user experience
- Reduced maintenance overhead
- Consistent behavior across the component library

## Related Documents

- [Component Architecture](./COMPONENT_ARCHITECTURE.md)
- [Component Documentation](../SMTV03/docs/COMPONENT_DOCUMENTATION.md)
- [Development Log](./DEVELOPMENT_LOG.md)
