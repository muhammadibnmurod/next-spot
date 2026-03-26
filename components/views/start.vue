<template>
  <section class="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
    <div
      class="absolute top-8 left-4 sm:left-12 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#b3b3e6] opacity-70 pointer-events-none"
    />

    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-10 sm:mb-12 md:mb-14">
        <h2 class="text-3xl sm:text-4xl md:text-[48px] font-extrabold text-[#1447E6] uppercase mb-3">
          {{ $t('start.heading') }}
        </h2>
        <p class="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
          {{ $t('start.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div
          v-for="step in steps"
          :key="step.id"
          class="flex flex-col items-center text-center gap-3 sm:gap-4"
        >
          <div
            class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-[#1a3fbb] flex items-center justify-center cursor-pointer select-none transition-transform duration-300"
            :class="activeStep === step.id ? 'scale-125' : 'hover:scale-110'"
            @click="toggleStep(step.id)"
          >
            <span class="text-white text-lg sm:text-xl md:text-2xl font-extrabold">{{ step.number }}</span>
          </div>

          <h3 class="text-base sm:text-[18px] md:text-[20px] font-bold text-gray-900 leading-snug">
            {{ $t(step.titleKey) }}
          </h3>

          <p class="text-sm md:text-[16px] text-gray-500 leading-relaxed max-w-[160px] sm:max-w-[180px]">
            {{ $t(step.descKey) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeStep = ref<number | null>(null);

function toggleStep(id: number) {
  activeStep.value = activeStep.value === id ? null : id;
}

const steps = [
  { id: 1, number: "01", titleKey: "start.step1_title", descKey: "start.step1_desc" },
  { id: 2, number: "02", titleKey: "start.step2_title", descKey: "start.step2_desc" },
  { id: 3, number: "03", titleKey: "start.step3_title", descKey: "start.step3_desc" },
  { id: 4, number: "04", titleKey: "start.step4_title", descKey: "start.step4_desc" },
];
</script>
