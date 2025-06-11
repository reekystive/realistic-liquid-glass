import type { Meta, StoryObj } from '@storybook/react-vite';
import { LiquidGlass } from './liquid-glass.tsx';

const meta: Meta = {
  title: 'Components/LiquidGlass',
};

export default meta;

export const Default: StoryObj = {
  render: () => <LiquidGlass />,
};
