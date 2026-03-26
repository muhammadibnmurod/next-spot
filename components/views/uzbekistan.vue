<template>
  <section class="bg-[#2952e3] py-20 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Title -->
      <h2
        class="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
      >
        {{ $t('uzbekistan_cta.title') }}
      </h2>

      <!-- Subtitle -->
      <p
        class="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
      >
        {{ $t('uzbekistan_cta.subtitle') }}
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          class="bg-white text-[#2952e3] font-bold text-base px-10 py-4 rounded-xl hover:bg-white/90 transition-colors duration-200 min-w-[220px]"
        >
          {{ $t('uzbekistan_cta.btn_meeting') }}
        </button>
        <button
          class="bg-transparent text-white font-bold text-base px-10 py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-colors duration-200 min-w-[220px]"
        >
          {{ $t('uzbekistan_cta.btn_info') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
