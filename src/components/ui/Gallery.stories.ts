import type { Meta, StoryObj } from '@storybook/vue3';
import Gallery from './Gallery.vue';
import Stocks1 from '@/assets/images/gallery/stocks-1.png'
import Stocks2 from '@/assets/images/gallery/stocks-2.jpeg'
import Stocks3 from '@/assets/images/gallery/stocks-3.jpeg'
import Stocks4 from '@/assets/images/gallery/stocks-4.png'

const meta = {
  title: 'UI/Gallery',
  component: Gallery,
  tags: ['autodocs'],
  args: {
    images: [{index: 0, src: Stocks1, alt: ''}, {index: 1, src: Stocks2, alt: ''}, {index: 2, src: Stocks3, alt: ''}, {index: 3, src: Stocks4, alt: ''}],
    numVisible: 4,
    pt: {
      items: { class: 'flex justify-center' },
      thumbnailitems: { class: 'flex mt-5 justify-center gap-3 md:gap-5' },
      thumbnailitem: { class: 'cursor-pointer', style: {flex: 'unset'} }
    }
  },
} satisfies Meta<typeof Gallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    images: [{index: 0, src: Stocks1, alt: ''}, {index: 1, src: Stocks2, alt: ''}, {index: 2, src: Stocks3, alt: ''}, {index: 3, src: Stocks4, alt: ''}],
    numVisible: 4,
    pt: {
      items: { class: 'flex justify-center' },
      thumbnailitems: { class: 'flex mt-5 justify-center gap-3 md:gap-5' },
      thumbnailitem: { class: 'cursor-pointer', style: {flex: 'unset'} }
    }
  },
};