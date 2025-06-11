import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Demo',
};

export default meta;

export const Default: StoryObj = {
  render: () => <div className="text-pink-800 dark:text-pink-200">Hello</div>,
};
