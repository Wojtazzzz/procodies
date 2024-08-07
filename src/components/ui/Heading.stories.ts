import type { Meta, StoryObj } from '@storybook/vue3';
import Heading, { type HeadingType } from './Heading.vue';

const meta = {
	title: 'UI/Heading',
	component: Heading,
	tags: ['autodocs'],
	argTypes: {
		type: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
	},
	args: {
		type: 'h1',
	},
	render: (args: { type: HeadingType }) => ({
		components: { Heading },
		setup() {
			return { args };
		},
		template: '<Heading :type="args.type">Heading</Heading>',
	}),
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const h1: Story = {
	args: {
		type: 'h1',
	},
	render: (args: { type: HeadingType }) => ({
		components: { Heading },
		setup() {
			return { args };
		},
		template: '<Heading :type="args.type">Heading h1</Heading>',
	}),
};

export const h2: Story = {
	args: {
		type: 'h2',
	},
	render: (args: { type: HeadingType }) => ({
		components: { Heading },
		setup() {
			return { args };
		},
		template: '<Heading :type="args.type">Heading h2</Heading>',
	}),
};

export const h3: Story = {
	args: {
		type: 'h3',
	},
	render: (args: { type: HeadingType }) => ({
		components: { Heading },
		setup() {
			return { args };
		},
		template: '<Heading :type="args.type">Heading h3</Heading>',
	}),
};

export const h4: Story = {
	args: {
		type: 'h4',
	},
	render: (args: { type: HeadingType }) => ({
		components: { Heading },
		setup() {
			return { args };
		},
		template: '<Heading :type="args.type">Heading h4</Heading>',
	}),
};

export const h5: Story = {
	args: {
		type: 'h5',
	},
	render: (args: { type: HeadingType }) => ({
		components: { Heading },
		setup() {
			return { args };
		},
		template: '<Heading :type="args.type">Heading h5</Heading>',
	}),
};

export const h6: Story = {
	args: {
		type: 'h6',
	},
	render: (args: { type: HeadingType }) => ({
		components: { Heading },
		setup() {
			return { args };
		},
		template: '<Heading :type="args.type">Heading h6</Heading>',
	}),
};
