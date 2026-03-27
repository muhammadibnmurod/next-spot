<template>
  <section id="why-uzbekistan" class="section-anchor bg-white py-12 sm:py-16 md:py-20 lg:py-[80px] px-4 sm:px-6">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20">

        <!-- Left: Image -->
        <div class="w-full md:flex-[0_0_45%]">
          <WhyUzbekistanImage class="w-full rounded-2xl block" />
        </div>

        <!-- Right: Text -->
        <div class="flex-1 w-full">
          <h2 class="font-extrabold text-[#1a1a2e] uppercase tracking-wide leading-tight text-2xl sm:text-3xl md:text-[36px] mb-4 sm:mb-5">
            {{ $t('why_uzbekistan.title1') }}
            <span class="text-[#2563EB]"> {{ $t('why_uzbekistan.title2') }}</span>
          </h2>

          <p class="text-[#555] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 md:mb-9">
            {{ $t('why_uzbekistan.description') }}
          </p>

          <div class="flex flex-col gap-4 sm:gap-5 md:gap-7">
            <div
              v-for="feature in features"
              :key="feature.titleKey"
              class="flex flex-col gap-2 bg-blue-50 rounded-2xl p-3 sm:p-4"
            >
              <h3 class="text-sm sm:text-[17px] font-bold text-[#1a1a2e]">
                {{ $t(feature.titleKey) }}
              </h3>
              <ul class="flex flex-col gap-2 list-none p-0 m-0">
                <li
                  v-for="itemKey in feature.itemKeys"
                  :key="itemKey"
                  class="flex items-center gap-2 sm:gap-3 text-sm text-[#444]"
                >
                  <span class="flex-shrink-0 flex items-center">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#2563EB" />
                      <path d="M6 10.5L8.5 13L14 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  {{ $t(itemKey) }}
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import WhyUzbekistanImage from '@/assets/images/why-uzbekistan.svg'

const features = [
  {
    titleKey: 'why_uzbekistan.feat1_title',
    itemKeys: [
      'why_uzbekistan.feat1_item1',
      'why_uzbekistan.feat1_item2',
      'why_uzbekistan.feat1_item3',
    ],
  },
  {
    titleKey: 'why_uzbekistan.feat2_title',
    itemKeys: ['why_uzbekistan.feat2_item1', 'why_uzbekistan.feat2_item2'],
  },
  {
    titleKey: 'why_uzbekistan.feat3_title',
    itemKeys: [
      'why_uzbekistan.feat3_item1',
      'why_uzbekistan.feat3_item2',
      'why_uzbekistan.feat3_item3',
    ],
  },
]
</script>
