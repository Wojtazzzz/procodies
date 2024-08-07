<script setup lang="ts">
import Form from '@/components/ui/Form.vue';
import Section from '@/components/ui/Section.vue';
import Heading from '@/components/ui/Heading.vue';
import Label from '@/components/ui/Label.vue';
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
import Image from '@/components/ui/Image.vue';
import McafeeLogo from '@/assets/images/payments-secure/mcafee.png';
import Bit256Logo from '@/assets/images/payments-secure/256bit.png';
import TrusteLogo from '@/assets/images/payments-secure/truste.png';
import FormRow from '@/modules/home/hero/paymentForm/FormRow.vue'
</script>

<template>
  <Section>
    <div class="border border-[#DBDBDB] rounded-[20px] px-4 sm:px-7 py-6 text-center">
      <Heading type="h2">
        <span class="text-primary-dark text-[32px] font-medium leading-9 text-center">
          Enter details
        </span>
      </Heading>

      <div class="mt-6">
        <Form>
          <div class="space-y-4">
            <FormRow variant="1/2">
              <template #first>
                <Label>
                  <span class="sr-only">First name</span>
                  <Input type="text" placeholder="First name" autocomplete="given-name"  />
                </Label>
              </template>
              <template #second>
                <Label>
                  <span class="sr-only">Last name</span>
                  <Input type="text" placeholder="Last name" autocomplete="family-name" />
                </Label>
              </template>
            </FormRow>
            <FormRow variant="full">
              <Label>
                <span class="sr-only">Street</span>
                <Input type="text" placeholder="Street" autocomplete="street-address" />
              </Label>
            </FormRow>
            <FormRow variant="1/2">
              <template #first>
                <Label>
                  <span class="sr-only">Postal code</span>
                  <Input type="text" placeholder="Postal code" autocomplete="postal-code" />
                </Label>
              </template>
              <template #second>
                <Label>
                  <span class="sr-only">City</span>
                  <Input type="text" placeholder="City" autocomplete="address-level2" />
                </Label>
              </template>
            </FormRow>
            <FormRow variant="full">
              <Label>
                <span class="sr-only">Phone number</span>
                <Input type="text" placeholder="Phone number" autocomplete="tel" />
              </Label>
            </FormRow>
            <FormRow variant="full">
              <Label>
                <span class="sr-only">E-mail</span>
                <Input type="email" placeholder="E-mail" autocomplete="email" />
              </Label>
            </FormRow>
          </div>

          <div class="mt-8">
            <FormRow variant="full">
              <Button type="submit" label="PROCEED TO PAYMENT" variant="primary" />
            </FormRow>
          </div>

          <div class="mt-8">
            <Heading type="h3">
              <span class="sr-only">
                Secured by:
              </span>
            </Heading>

            <div class="w-full flex gap-x-4 flex-wrap justify-center">
              <Image :src="McafeeLogo" alt="McAfee secure" />
              <Image :src="TrusteLogo" alt="TRUSTe verified" />
              <Image :src="Bit256Logo" alt="256 Bit encryption" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  </Section>
</template>
