import type { Meta, StoryObj } from '@storybook/react';
import TokenTest from './TokenTest';

const meta: Meta<typeof TokenTest> = {
  title: 'Design System/TokenTest',
  component: TokenTest,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TokenTest>;

export const Default: Story = {
  args: {},
}; 