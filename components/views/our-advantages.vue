<template>
  <section id="about" class="section-anchor bg-white py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <h2 class="text-center text-4xl md:text-5xl font-black mb-12">
        <span class="text-[#101828] text-[48px]">{{ $t('advantages.heading1') }} </span>
        <span class="text-[#1447E6] text-[48px]">{{ $t('advantages.heading2') }}</span>
      </h2>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="item in advantages"
          :key="item.titleKey"
          class="group border border-gray-200 rounded-2xl p-6 flex flex-col gap-6 hover:border-[#1447E6] hover:shadow-md transition-all duration-200"
        >
          <!-- Icon box -->
          <div
            class="w-14 h-14 bg-[#1a3fbb] rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
          >
            <component :is="item.icon" class="w-6 h-6 text-white" />
          </div>

          <!-- Text -->
          <div class="flex flex-col gap-3">
            <h3 class="text-[#0d1b3e] font-bold text-lg leading-snug">
              {{ $t(item.titleKey) }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ $t(item.descKey) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconAdventures1Icon, IconAdventures2Icon, IconAdventures3Icon, IconAdventures4Icon} from '#components';

const advantages = [
  { icon: IconAdventures1Icon, titleKey: 'advantages.item1_title', descKey: 'advantages.item1_desc' },
  { icon: IconAdventures2Icon, titleKey: 'advantages.item2_title', descKey: 'advantages.item2_desc' },
  { icon: IconAdventures3Icon, titleKey: 'advantages.item3_title', descKey: 'advantages.item3_desc' },
  { icon: IconAdventures4Icon, titleKey: 'advantages.item4_title', descKey: 'advantages.item4_desc' },
];
</script>
