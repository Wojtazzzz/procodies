<script setup lang="ts">
import Section from '@/components/ui/Section.vue';
import Container from '@/components/ui/Container.vue';
import Heading from '@/components/ui/Heading.vue';
import Paragraph from '@/components/ui/Paragraph.vue';
import HGroup from '@/components/ui/HGroup.vue';
import Image from '@/components/ui/Image.vue';
import InfoSection from '@/modules/home/about/InfoSection.vue';
import Stocks1Image from '@/assets/images/stocks-1.png';
import Stocks2Image from '@/assets/images/stocks-2.png';
</script>

<template>
	<Container>
		<Section>
			<div class="space-y-14">
				<div class="text-center">
					<HGroup>
						<Heading type="h2">
							<span class="font-bold text-5xl text-primary-dark leading-[55px]">
								Top Tech Mystery Box
								<br />
								at Unbeatable Prices
							</span>
						</Heading>
						<Paragraph>
							<span class="text-primary-base text-xl leading-6">
								Fast shipping | Easy returns | Special discounts for students
							</span>
						</Paragraph>
					</HGroup>
				</div>

				<InfoSection>
					<template #left>
						<div class="max-w-lg lg:max-w-none">
							<Image :src="Stocks1Image" alt="" />
						</div>
					</template>
					<template #right>
						<Heading type="h3">
							<span class="text-[42px] font-bold leading-[55px]"
								>Curious about the
								<span class="text-primary-base">StockX</span> Mystery Box?</span
							>
						</Heading>

						<div class="space-y-2.5">
							<Paragraph>
								<span class="leading-6">
									Experience the thrill of unboxing cutting-edge gadgets with
									Stockx Mystery Boxes. Each box is a treasure trove of
									high-quality electronics, handpicked to elevate your tech game.
								</span>
							</Paragraph>

							<Paragraph>
								<span class="leading-6">
									Expect the unexpected! Our boxes are packed with the latest
									gadgets, from smartphones to gaming consoles, ensuring you get
									the best tech surprises every time.
								</span>
							</Paragraph>
						</div>
					</template>
				</InfoSection>

				<InfoSection>
					<template #left>
						<Heading type="h3">
							<span class="text-[42px] font-bold leading-[55px]"
								>Why is everyone buzzing about these boxes?</span
							>
						</Heading>

						<div class="space-y-2.5">
							<Paragraph>
								<span class="leading-6">
									StockX Mystery Boxes are not just about products; they’re about
									the experience. Imagine the excitement of unveiling top-tier
									electronics at a fraction of the cost.
								</span>
							</Paragraph>

							<Paragraph>
								<span class="leading-6">
									Our boxes include a variety of premium tech items, making it a
									must-have for every tech enthusiast. Join the buzz and see why
									everyone is raving about the unbeatable value and surprise
									factor of Stockx Mystery Boxes!
								</span>
							</Paragraph>
						</div>
					</template>
					<template #right>
						<div class="max-w-lg lg:max-w-none">
							<Image :src="Stocks2Image" alt="" />
						</div>
					</template>
				</InfoSection>
			</div>
		</Section>
	</Container>
</template>
