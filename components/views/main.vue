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

    <!-- Vector.svg — large circle behind left content -->
    <div
      class="absolute top-[500px] -translate-y-1/2 w-[300px] h-[520px] pointer-events-none select-none"
    >
      <img src="../../assets/icons/Vector.svg" alt="" class="w-full h-full " />
    </div>

    <!-- Rounded.svg — top right decoration -->
    <div
      class="absolute top-20 right-12 w-52 h-52 pointer-events-none select-none"
    >
      <img src="../../assets/icons/rounded.svg" alt="" class="w-full h-full" />
    </div>

    <div
      class="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12 py-24"
    >
      <!-- LEFT: Text content -->
      <div class="flex-1 flex flex-col gap-6">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 w-fit bg-white/80 border border-blue-200 rounded-full px-4 py-2 text-sm text-blue-700 font-medium shadow-sm"
        >
          <span>🇺🇿</span>
          <span>O'zbekiston bozoriga kirish uchun ishonchli hamkor</span>
        </div>

        <!-- Heading -->
        <div class="flex flex-col gap-1">
          <h1
            class="text-4xl md:text-5xl font-black text-[#0d1b3e] leading-tight tracking-tight"
          >
            NEXT SPOT
          </h1>
          <h1
            class="text-4xl md:text-5xl font-black text-[#1a3fbb] leading-tight tracking-tight"
          >
            LEAD THE FRONTIER
          </h1>
        </div>

        <!-- Description -->
        <p
          class="text-[#364153] text-base text-[20px] leading-relaxed max-w-md"
        >
          O'zbekiston — "Next ASEAN" sifatida tan olingan, Osiyoning yangi
          rivojlanayotgan bozori. Yosh aholi, strategik joylashuv va iqtisodiy
          islohotlar yangi imkoniyatlar yaratmoqda.
        </p>

        <!-- Buttons -->
        <div class="flex items-center gap-4 mt-2">
          <button
            class="bg-[#1a3fbb] hover:bg-[#0a2c91] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Bozorga kirish
          </button>
          <button
            class="border-2 border-[#1a3fbb] text-[#1a3fbb] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 bg-transparent"
          >
            Batafsil ma'lumot
          </button>
        </div>
      </div>

      <!-- RIGHT: Image card -->
      <div class="flex-1 flex justify-center items-center">
        <div class="relative w-full max-w-[580px]">
          <!-- Main image -->
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <img
              :src="BgImage"
              alt="Background"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Rounded.svg — bottom left of image -->
          <div
            class="absolute -bottom-6 -left-6 w-16 h-16 pointer-events-none select-none"
          >
            <img src="../../assets/icons/rounded.svg" class="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BgImage from "@/assets/images/background.png";
import RoundedIcon from "@/assets/icons/rounded.svg";
import VectorIcon from "@/assets/icons/Vector.svg";
</script>
