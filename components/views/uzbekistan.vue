<template>
  <section class="bg-[#2952e3] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Title -->
      <h2
        class="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6"
      >
        {{ $t('uzbekistan_cta.title') }}
      </h2>

      <!-- Subtitle -->
      <p
        class="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-7 sm:mb-10"
      >
        {{ $t('uzbekistan_cta.subtitle') }}
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <button
          class="w-full sm:w-auto bg-white text-[#2952e3] font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-xl hover:bg-white/90 transition-colors duration-200 sm:min-w-[220px]"
        >
          {{ $t('uzbekistan_cta.btn_meeting') }}
        </button>
        <button
          class="w-full sm:w-auto bg-transparent text-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-colors duration-200 sm:min-w-[220px]"
        >
          {{ $t('uzbekistan_cta.btn_info') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
