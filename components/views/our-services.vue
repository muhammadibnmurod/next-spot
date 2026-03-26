<template>
  <section class="bg-white py-20 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <h2 class="text-center text-4xl md:text-5xl font-black mb-12">
        <span class="text-[#101828] text-[38px]">BIZNING </span>
        <span class="text-[#1447E6] text-[38px]">XIZMATLARIMIZ</span>
      </h2>

      <!-- Cards -->
      <div class="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in service"
          :key="item.title"
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
              {{ item.title }}
            </h3>
            <p class="text-gray-500 text-[16px] leading-relaxed">
              {{ item.description }}
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
  {
    img: imageService1,
    title: "Bozorga kirish strategiyasi",
    description:
      "Biznes modelingizga mos strategiya ishlab chiqamiz va amaliy reja taklif qilamiz",
  },
  {
    img: imageService2,
    title: "Hamkor topish",
    description:
      "Ishonchli mahalliy hamkorlarni topish, muzokaralar va hamkorlikni yo'lga qo'yish",
  },
  {
    img: imageService3,
    title: "Buxgalteriya xizmatlari",
    description:
      "Mahalliy qonunchilik asosida buxgalteriya va soliq hisobini yuritish",
  },
  {
    img: imageService4,
    title: "Huquqiy xizmatlar",
    description:
      "Kompaniya ro'yxatdan o'tkazish, shartnomalar va huquqiy maslahatlar",
  },
  {
    img: imageService5,
    title: "Tarjima xizmatlari",
    description: "Og'zaki tarjima, hujjatlar tarjimasi va notarial tasdiqlash",
  },
  {
    img: imageService6,
    title: "Raqamli va IT yechimlar",
    description:
      "Veb-sayt yaratish, Telegram kanallar, Instagram sahifalarini yuritish",
  },
];
</script>
