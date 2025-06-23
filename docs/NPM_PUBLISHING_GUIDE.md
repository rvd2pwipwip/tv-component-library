# NPM Library Publishing Guide

## Overview

This guide provides step-by-step instructions for publishing updates to the `@smtv/tv-component-library` npm package. Follow this process when new components are added or existing components are updated.

## Prerequisites

### 1. NPM Account Setup

- Ensure you have an npm account with publishing permissions
- Verify you're logged into npm: `npm whoami`
- If not logged in: `npm login`

### 2. Repository Access

- Ensure you have push access to the GitHub repository
- All changes should be committed and pushed to the main branch

## Pre-Publishing Checklist

### 1. Code Quality Verification

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check

# Run tests (if available)
npm test
```

### 2. Build Verification

```bash
# Clean previous build
rm -rf dist/

# Build the library
npm run build

# Verify build output
ls -la dist/
```

Expected build outputs:

- `dist/index.esm.js` - ES modules build
- `dist/index.umd.js` - UMD build
- `dist/style.css` - Compiled CSS

### 3. Component Export Verification

Verify that new components are properly exported in `src/components/index.ts`:

```typescript
// Example for CategoryCard
export {
  CategoryCard,
  type CategoryCardProps,
} from "./CategoryCard/CategoryCard";
```

### 4. Storybook Testing (Optional but Recommended)

```bash
# Start Storybook to verify components render correctly
npm run storybook

# Test in browser:
# - All stories load without errors
# - New components display correctly
# - Focus states work as expected
# - No console errors
```

## Version Management

### 1. Determine Version Type

Choose the appropriate version bump based on changes:

- **Patch (x.x.X)**: Bug fixes, minor improvements
- **Minor (x.X.x)**: New components, new features, backwards compatible
- **Major (X.x.x)**: Breaking changes, API changes

### 2. Update Version

#### Option A: Automatic Version Bump

```bash
# For patch version (recommended for bug fixes)
npm version patch

# For minor version (recommended for new components)
npm version minor

# For major version (breaking changes)
npm version major
```

#### Option B: Manual Version Update

1. Edit `package.json` and update the version field
2. Commit the change:

```bash
git add package.json
git commit -m "chore: bump version to X.X.X"
git tag vX.X.X
```

### 3. Update Version History

Update `CHANGELOG.md` or `docs/DEVELOPMENT_LOG.md` with:

- Version number and date
- List of new components/features
- Bug fixes
- Breaking changes (if any)

Example entry:

```markdown
## v2.2.0 - [YYYY-MM-DD]

### Added

- CategoryCard component with text overlay functionality
- Support for optional thumbnail images with fallback styling
- Storybook stories for CategoryCard component

### Changed

- Updated exports in components/index.ts

### Dependencies

- No dependency changes
```

## Publishing Process

### 1. Final Pre-Publish Verification

```bash
# Verify package.json contents
cat package.json | grep -E '"name"|"version"|"main"|"module"|"types"'

# Verify files that will be published
npm pack --dry-run
```

### 2. Publish to NPM

```bash
# Publish to npm registry
npm publish

# If publishing a pre-release version
npm publish --tag beta

# If publishing to a specific registry
npm publish --registry https://registry.npmjs.org/
```

### 3. Verify Publication

```bash
# Check that the package was published successfully
npm view @smtv/tv-component-library

# Verify the latest version
npm view @smtv/tv-component-library version

# Check package contents
npm view @smtv/tv-component-library files
```

## Post-Publishing Steps

### 1. Git Repository Updates

```bash
# Push version tag to GitHub
git push origin main
git push origin --tags

# Or push everything at once
git push origin main --follow-tags
```

### 2. GitHub Release (Recommended)

1. Go to GitHub repository releases page
2. Click "Create a new release"
3. Select the version tag you just created
4. Add release title: `v2.2.0 - CategoryCard Component`
5. Add release notes (copy from changelog)
6. Publish release

### 3. Update Documentation

- Update README.md if new installation instructions are needed
- Update component documentation
- Notify team members of the new release

### 4. Test Installation

Test the published package in a separate project:

```bash
# In a test project
npm install @smtv/tv-component-library@latest

# Verify import works
import { CategoryCard } from '@smtv/tv-component-library';
```

## Troubleshooting

### Common Issues

#### 1. Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 2. Permission Errors

```bash
# Verify npm login
npm whoami

# Re-login if needed
npm logout
npm login
```

#### 3. Version Conflicts

```bash
# Check current published version
npm view @smtv/tv-component-library version

# Ensure your local version is higher
grep '"version"' package.json
```

#### 4. File Not Included in Package

Check `package.json` files array or `.npmignore`:

```json
{
  "files": ["dist", "README.md"]
}
```

### Rollback Process

If you need to rollback a published version:

```bash
# Deprecate a version (doesn't unpublish)
npm deprecate @smtv/tv-component-library@2.2.0 "Use version 2.1.12 instead"

# Unpublish (only possible within 24 hours)
npm unpublish @smtv/tv-component-library@2.2.0
```

## Best Practices

### 1. Version Strategy

- Use semantic versioning (semver)
- New components = minor version bump
- Bug fixes = patch version bump
- Breaking changes = major version bump

### 2. Testing Strategy

- Always test the build before publishing
- Verify Storybook renders correctly
- Test installation in a separate project

### 3. Documentation

- Keep changelog updated
- Update README.md for new components
- Include migration notes for breaking changes

### 4. Automation Considerations

For future improvements, consider:

- GitHub Actions for automated publishing
- Automated testing before publishing
- Automated changelog generation

## Example Complete Workflow

```bash
# 1. Verify everything is working
npm run build
npm run lint

# 2. Update version (for new component)
npm version minor

# 3. Update changelog
# Edit docs/DEVELOPMENT_LOG.md

# 4. Commit changelog
git add docs/DEVELOPMENT_LOG.md
git commit -m "docs: update changelog for CategoryCard component"

# 5. Publish
npm publish

# 6. Push to GitHub
git push origin main --follow-tags

# 7. Verify publication
npm view @smtv/tv-component-library version
```

## Package Information Reference

Current package details:

- **Name**: `@smtv/tv-component-library`
- **Current Version**: Check `package.json`
- **Registry**: npm (https://registry.npmjs.org/)
- **Repository**: GitHub
- **Build Tool**: Vite
- **Main Entry**: `dist/index.esm.js`
- **Types**: `dist/index.d.ts`
