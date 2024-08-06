<script setup lang="ts">
import Section from '@/components/ui/Section.vue'
import Heading from '@/components/ui/Heading.vue'
import Paragraph from '@/components/ui/Paragraph.vue'
import Container from '@/components/ui/Container.vue'

const articles = [
  {
    title: "How can I win?",
    content: 'Thanks to your membership, you also participate in our contest to win the iPhone15. We sellect a winner among every 600 participants. The next winner will be selected on 06.10.2023, and will be notified directly by e-mail. If the reward is out of stock, the winner will receive a similar product of equal or greater value instead.',
  },
  {
    title: "No hidden fees?",
    content: 'We ensure that our members are provided with a detailed history of transactions so that they know exactly what they are paying for. Credit card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not upgrade to PREMIUM membership and do not make a purchase.',
  },
  {
    title: "Why do we need your billing information?",
    content: 'By joining this service, you will receive a 5-day trial of our partner\'s program. If you continue with a subscription beyond the 5-day trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for members of our partner\'s website.',
  }
] as const
</script>

<template>
  <div class="bg-[#F5F5F5] w-full py-8">
    <Container>
      <Section>
        <Heading type="h2">
          <span class="sr-only">
            Faq
          </span>
        </Heading>

        <div class="flex flex-col md:flex-row gap-10">
          <template v-for="(article, index) in articles" :key="index">
            <div class="basis-1/3 text-primary-dark">
              <article>
                <Heading type="h3">
                  <span class="text-xs font-medium">
                    {{ article.title }}
                  </span>
                </Heading>

                <Paragraph>
                  <span class="leading-4 text-[10px]">{{ article.content }}</span>
                </Paragraph>
              </article>
            </div>
          </template>
        </div>
      </Section>
    </Container>
  </div>
</template>