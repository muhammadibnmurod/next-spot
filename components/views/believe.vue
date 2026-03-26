<template>
  <section class="relative bg-[#0d1b3e] py-20 px-6 overflow-hidden">
    <!-- Decorative circle -->
    <div
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-64 rounded-full border border-white/10 pointer-events-none"
    />

    <div class="max-w-4xl mx-auto text-center relative z-10">
      <!-- Title -->
      <h2
        class="text-white text-4xl md:text-5xl font-black uppercase mb-6 tracking-wide"
      >
        {{ $t('believe.title') }}
      </h2>

      <!-- Subtitle -->
      <p
        class="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14"
      >
        {{ $t('believe.subtitle') }}
      </p>

      <!-- Icons row -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-10">
        <div
          v-for="item in items"
          :key="item.labelKey"
          class="flex flex-col items-center gap-4"
        >
          <div
            class="w-16 h-16 bg-[#1a2e5a] rounded-2xl flex items-center justify-center"
          >
            <component :is="item.icon" class="w-8 h-8" />
          </div>
          <span class="text-white text-sm font-medium">{{ $t(item.labelKey) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon1, Icon2, Icon3 } from "@/assets/icons/believe";

const items = [
  { icon: Icon1, labelKey: "believe.item1" },
  { icon: Icon2, labelKey: "believe.item2" },
  { icon: Icon3, labelKey: "believe.item3" },
];
</script>
