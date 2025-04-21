# TV Component Library - Project Context

## Related Projects

### TV App Prototype
- **Repository**: [SMTV02](https://github.com/rvd2pwipwip/SMTV02)
- **Purpose**: Initial prototype for TV audio streaming application
- **Key Features**:
  - Audio channel streaming
  - TV-optimized navigation
  - Spatial navigation support
  - Dark mode interface

## Design Decisions

### Component Requirements
1. **TV-Specific Considerations**
   - Fixed 1920x1080 viewport
   - Remote control navigation
   - Clear focus states
   - 10ft viewing distance

2. **Audio-Focused UI**
   - Channel cards for audio streams
   - Music/Radio mode switcher
   - Mini player bar
   - Category-based navigation

### Design System
- Dark mode by default
- Consistent spacing and typography
- TV-optimized focus states
- Accessibility requirements

### Design Tokens Architecture
- Separate repository for design tokens
- Independent versioning from components
- Single source of truth for design values
- Shared across component library and consuming projects
- Managed as a separate npm package
- Package name: `@smtv/design-tokens`
- Installed as a dependency in the component library

## Development History

### Initial Prototype (SMTV02)
- Basic component structure
- Channel card implementation
- Swimlane navigation
- Design system foundation

### Component Library Evolution
- Extract reusable components
- Document with Storybook
- Maintain TV-specific features
- Support multiple projects

## Current Focus
- Setting up component library structure
- Moving components from prototype
- Establishing documentation
- Creating development workflow
- Integrating design tokens from npm package
- Ensuring consistent token usage across components

## Next Steps
1. Set up Storybook
2. Move ChannelCard component
3. Document component usage
4. Establish testing patterns
5. Consider adding missing icon size variables to the design tokens package
6. Create additional components based on TV app prototype 