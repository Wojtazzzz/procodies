import type { Meta, StoryObj } from '@storybook/vue3';
import HGroup from './HGroup.vue';
import Heading from './Heading.vue';
import Paragraph from './Paragraph.vue';

const meta = {
	title: 'UI/HGroup',
	component: HGroup,
	tags: ['autodocs'],
	render: () => ({
		components: { HGroup, Heading, Paragraph },
		setup() {
			return {};
		},
		template:
			'<HGroup><Heading type="h1">Heading</Heading><Paragraph>Paragraph</Paragraph></HGroup>',
	}),
} satisfies Meta<typeof HGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
