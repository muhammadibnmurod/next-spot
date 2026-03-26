<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
    :class="{ 'shadow-md': isScrolled }"
  >
    <div class="mx-auto px-6 h-[68px] grid grid-cols-3 items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center no-underline">
        <div class="h-10 flex items-center justify-center">
          <img :src="Logo" alt="Logo" class="h-full w-auto object-contain" />
        </div>
      </NuxtLink>

      <!-- Desktop Nav Links (centered) -->
      <nav class="hidden md:flex items-center justify-center gap-1">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="relative px-4 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 hover:text-blue-600 hover:bg-blue-50 group whitespace-nowrap"
          active-class="text-blue-600"
        >
          {{ link.label }}
          <span
            class="absolute bottom-1 left-4 right-4 h-[2px] bg-blue-600 rounded-full scale-x-0 transition-transform duration-250 group-hover:scale-x-100"
          />
        </NuxtLink>
      </nav>

      <div class="flex justify-end">
        <!-- CTA Button (desktop) -->
        <button
          class="hidden md:flex bg-[#1a3fbb] rounded-full px-5 py-2 text-white text-sm font-semibold hover:bg-[#0a2c91] transition-colors duration-200"
          @click="handleStart"
        >
          Boshlash
        </button>

        <!-- Hamburger (mobile) -->
        <n-button
          quaternary
          circle
          class="md:hidden"
          @click="mobileOpen = !mobileOpen"
        >
          <template #icon>
            <n-icon size="22">
              <MenuOutline v-if="!mobileOpen" />
              <CloseOutline v-else />
            </n-icon>
          </template>
        </n-button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="md:hidden border-t border-gray-100 bg-white px-5 pb-5 pt-3 flex flex-col gap-1"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-4 py-3 rounded-lg text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 no-underline"
          active-class="bg-blue-50 text-blue-600"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>

        <n-button
          type="primary"
          block
          size="medium"
          class="mt-2"
          :style="{
            borderRadius: '10px',
            fontWeight: '600',
            boxShadow: '0 2px 8px rgba(37,99,235,0.3)',
          }"
          @click="handleStart"
        >
          Boshlash
        </n-button>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { NuxtLink } from "#components";
import { NButton, NIcon } from "naive-ui";
import { LocationOutline, MenuOutline, CloseOutline } from "@vicons/ionicons5";
import Logo from "@/assets/images/Logo.png";

const isScrolled = ref(false);
const mobileOpen = ref(false);

const navLinks = [
  { label: "Xizmatlar", to: "/xizmatlar" },
  { label: "Biz haqimizda", to: "/biz-haqimizda" },
  { label: "Nega O'zbekiston", to: "/nega-ozbekiston" },
  { label: "Aloqa", to: "/aloqa" },
];

function handleStart() {
  mobileOpen.value = false;
  // navigateTo('/boshlash') // yoki modal ochish
}

function onScroll() {
  isScrolled.value = window.scrollY > 10;
}

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
/* Slide-down animation for mobile menu */
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
