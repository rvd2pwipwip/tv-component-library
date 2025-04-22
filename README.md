# @smtv/tv-component-library

A TV-optimized React component library for audio streaming applications.

## Features

- TV-specific UI components
- Remote control navigation support
- Accessibility-focused design
- Dark mode by default
- Built with TypeScript
- Storybook documentation

## Installation

```bash
npm install @smtv/tv-component-library
```

## Usage

```jsx
import { ChannelCard } from '@smtv/tv-component-library';

function App() {
  return (
    <ChannelCard
      title="Channel Name"
      description="Channel description"
      // Add other props as needed
    />
  );
}
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Storybook:
   ```bash
   npm run storybook
   ```
4. Build the library:
   ```bash
   npm run build
   ```

## Documentation

Visit our [Storybook documentation](https://smtv.github.io/tv-component-library) for detailed component documentation and examples.

## License

ISC 