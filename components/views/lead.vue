<script setup lang="ts">
import image from "@/assets/images/lead-image.jpg";
import RoundedIcon from "@/assets/icons/rounded.svg";

const itemKeys = ['lead.item1', 'lead.item2', 'lead.item3', 'lead.item4'];
</script>

<template>
  <section class="bg-[#1447e6] py-12 sm:py-16 md:py-20 lg:py-[64px] px-4 sm:px-6 md:px-12 lg:px-20">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20">

      <!-- Text -->
      <div class="flex-1 text-white text-center md:text-left">
        <h2 class="text-white font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[55px] lg:leading-[75px]">
          {{ $t('lead.title') }}
        </h2>
        <p class="text-blue-100 mt-4 text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed">
          {{ $t('lead.description') }}
        </p>
        <ul class="mt-6 flex flex-col gap-4 list-none p-0">
          <li v-for="key in itemKeys" :key="key" class="flex items-center gap-3 text-sm sm:text-[15px] font-medium justify-center md:justify-start">
            <span class="flex-shrink-0 flex items-center justify-center bg-white rounded-full w-6 h-6">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.5 10.5L8.5 13.5L14.5 7.5"
                  stroke="#1447e6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>{{ $t(key) }}</span>
          </li>
        </ul>
      </div>

      <!-- Image -->
      <div class="relative flex-shrink-0 w-full max-w-[420px] sm:max-w-[480px] md:w-[400px] lg:w-[480px]">
        <img
          :src="image"
          alt="Lead the frontier"
          class="w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] object-cover rounded-2xl block"
        />
        <div class="absolute -top-4 -right-4 md:-top-5 md:-right-5">
          <RoundedIcon class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]" />
        </div>
      </div>

    </div>
  </section>
</template>
