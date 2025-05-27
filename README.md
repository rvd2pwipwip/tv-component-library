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

## Publishing to npm

After editing or adding components, follow these steps to publish a new version to npm:

1. **Pull the latest changes**
   ```bash
   git pull origin main
   ```
2. **Install dependencies** (if you haven't already)
   ```bash
   npm install
   ```
3. **Build the library**
   ```bash
   npm run build
   ```
4. **Update the version number** in `package.json`
   - Follow [semantic versioning](https://semver.org/):
     - Patch: bug fixes
     - Minor: new features/components
     - Major: breaking changes
   - Example: change `"version": "1.2.3"` to `"version": "1.2.4"`
   - Or use the CLI to bump the patch version:
     ```bash
     npm version patch
     ```
5. **Login to npm** (if not already logged in)
   ```bash
   npm login
   ```
6. **Publish the package**
   ```bash
   npm publish --access public
   ```
7. **Push your changes to GitHub**
   ```bash
   git add .
   git commit -m "chore: release vX.Y.Z"
   git push origin main
   ```

**Note:**
- You must have permission to publish to the npm package.
- If you encounter any issues, ask a developer for help.

## Documentation

Visit our [Storybook documentation](https://smtv.github.io/tv-component-library) for detailed component documentation and examples.

## License

ISC 