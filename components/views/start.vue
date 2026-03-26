<template>
  <section class="py-20 px-6 bg-white relative overflow-hidden">
    <div
      class="absolute top-8 left-12 w-24 h-24 rounded-full bg-[#b3b3e6] opacity-70 pointer-events-none"
    />

    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-[48px] font-extrabold text-[#1447E6] uppercase mb-3">
          OSON START
        </h2>
        <p class="text-gray-500 text-base">
          Oddiy 4 bosqichda biznesingizni O'zbekistonda boshlang
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div
          v-for="step in steps"
          :key="step.id"
          class="flex flex-col items-center text-center gap-4"
        >
          <div
            class="w-20 h-20 rounded-2xl bg-[#1a3fbb] flex items-center justify-center cursor-pointer select-none transition-transform duration-300"
            :class="activeStep === step.id ? 'scale-125' : 'hover:scale-110'"
            @click="toggleStep(step.id)"
          >
            <span class="text-white text-2xl font-extrabold">{{ step.number }}</span>
          </div>

          <h3 class="text-[20px] font-bold text-gray-900 leading-snug">
            {{ step.title }}
          </h3>

          <p class="text-[16px] text-gray-500 leading-relaxed max-w-[180px]">
            {{ step.description }}
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
  {
    id: 1,
    number: "01",
    title: "Onlayn uchrashuv",
    description:
      "Biznesingiz haqida gaplashib, imkoniyatlarni muhokama qilamiz",
  },
  {
    id: 2,
    number: "02",
    title: "Yo'nalishni belgilash",
    description: "Aniq strategiya va yo'l xaritasini ishlab chiqamiz",
  },
  {
    id: 3,
    number: "03",
    title: "Rejalashtirish",
    description: "Batafsil reja va resurslarni tayyorlaymiz",
  },
  {
    id: 4,
    number: "04",
    title: "Biznesni boshlash",
    description: "O'zbekiston bozorida faoliyatni boshlaymiz",
  },
];
</script>
