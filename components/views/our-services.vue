<template>
  <section id="services" class="section-anchor bg-white py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <h2 class="text-center text-4xl md:text-5xl font-black mb-12">
        <span class="text-[#101828] text-[38px]">{{ $t('services.heading1') }} </span>
        <span class="text-[#1447E6] text-[38px]">{{ $t('services.heading2') }}</span>
      </h2>

      <!-- Cards -->
      <div class="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in service"
          :key="item.titleKey"
          class="group border border-gray-200 rounded-2xl p-6 flex flex-col gap-2 hover:border-[#1447E6] hover:shadow-md transition-all duration-200"
        >
          <!-- Icon box -->
          <div
            class="w-12 h-12 rounded-xl items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
          >
            <img :src="item.img" class="w-7 h-7 object-contain" alt="" />
          </div>

          <!-- Text -->
          <div class="gap-10">
            <h3 class="text-[#0d1b3e] font-bold pb-6 text-[24px] leading-snug">
              {{ $t(item.titleKey) }}
            </h3>
            <p class="text-gray-500 text-[16px] leading-relaxed">
              {{ $t(item.descKey) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  imageService1,
  imageService2,
  imageService3,
  imageService4,
  imageService5,
  imageService6,
} from "@/assets/images/our-service";

const service = [
  { img: imageService1, titleKey: "services.item1_title", descKey: "services.item1_desc" },
  { img: imageService2, titleKey: "services.item2_title", descKey: "services.item2_desc" },
  { img: imageService3, titleKey: "services.item3_title", descKey: "services.item3_desc" },
  { img: imageService4, titleKey: "services.item4_title", descKey: "services.item4_desc" },
  { img: imageService5, titleKey: "services.item5_title", descKey: "services.item5_desc" },
  { img: imageService6, titleKey: "services.item6_title", descKey: "services.item6_desc" },
];
</script>
