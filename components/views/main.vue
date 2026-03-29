<template>
  <section
    class="relative min-h-screen bg-[#f0f3fc] overflow-hidden flex items-center"
  >
    <!-- Bottom wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full"
      >
        <path
          d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
          fill="white"
          opacity="0.5"
        />
      </svg>
    </div>

    <!-- Vector.svg — hidden on mobile, visible from md -->
    <div
      class="hidden md:block absolute top-1/2 -translate-y-1/2 -left-10 w-[220px] h-[400px] lg:w-[300px] lg:h-[520px] pointer-events-none select-none opacity-60"
    >
      <VectorIcon class="w-full h-full" />
    </div>

    <!-- Rounded.svg — top right, scaled per breakpoint -->
    <div
      class="absolute top-16 right-4 w-28 h-28 sm:w-36 sm:h-36 md:top-20 md:right-12 md:w-44 md:h-44 lg:w-52 lg:h-52 pointer-events-none select-none opacity-70"
    >
      <RoundedIcon class="w-full h-full" />
    </div>

    <div
      class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-28 pb-16 sm:pt-32 md:py-24"
    >
      <!-- LEFT: Text content -->
      <div class="flex-1 flex flex-col gap-5 md:gap-6 text-center md:text-left items-center md:items-start">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 w-fit bg-white/80 border border-blue-200 rounded-full px-4 py-2 text-xs sm:text-sm text-blue-700 font-medium shadow-sm"
        >
          <span>🇺🇿</span>
          <span>{{ $t('main.badge') }}</span>
        </div>

        <!-- Heading -->
        <div class="flex flex-col gap-1">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d1b3e] leading-tight tracking-tight"
          >
            {{ $t('main.heading1') }}
          </h1>
          <h1
            class="text-2xl sm:text-4xl md:text-4xl font-black text-[#1a3fbb] leading-tight tracking-tight"
          >
            {{ $t('main.heading2') }}
          </h1>
        </div>

        <!-- Description -->
        <p
          class="text-[#364153] text-sm sm:text-base md:text-[18px] lg:text-[20px] leading-relaxed max-w-sm sm:max-w-md"
        >
          {{ $t('main.description') }}
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center gap-3 mt-1 w-full sm:w-auto">
          <button
            class="w-full sm:w-auto bg-[#1a3fbb] hover:bg-[#0a2c91] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            {{ $t('main.enter_market') }}
          </button>
          <button
            class="w-full sm:w-auto border-2 border-[#1a3fbb] text-[#1a3fbb] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 bg-transparent text-sm sm:text-base"
          >
            {{ $t('main.learn_more') }}
          </button>
        </div>
      </div>

      <!-- RIGHT: Image card -->
      <div class="flex-1 flex justify-center items-center w-full md:w-auto">
        <div class="relative w-full max-w-[34.5rem] sm:max-w-[31.25rem] md:max-w-[40.25rem]">
          <!-- Main image -->
          <div class="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
            <img :src="BgImage" alt="" class="w-full h-full">
          </div>

          <!-- Rounded.svg — bottom left of image -->
          <div
            class="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-10 h-10 md:w-16 md:h-16 pointer-events-none select-none"
          >
            <RoundedIcon class="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BgImage from '@/assets/images/main.jpg'
import RoundedIcon from "@/assets/icons/rounded.svg";
import VectorIcon from "@/assets/icons/Vector.svg";
</script>
