import type { Meta, StoryObj } from '@storybook/vue3';
import Input from './Input.vue';

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text','email'] },
  },
  args: {
    type: 'text',
    placeholder: 'First name',
    autocomplete: 'given-name',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const text: Story = {
  args: {
    type: 'text',
  }
};

export const email: Story = {
  args: {
    type: 'email',
    placeholder: 'E-mail',
    autocomplete: 'email'
  }
};