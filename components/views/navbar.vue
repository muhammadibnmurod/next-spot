<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
    :class="{ 'shadow-md': isScrolled }"
  >
    <div
      class="mx-auto px-4 sm:px-6 h-[64px] sm:h-[72px] md:h-[80px] flex items-center justify-between"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center no-underline flex-shrink-0">
        <div
          class="h-[8.55rem] sm:h-[9rem] md:h-[10rem] flex items-center justify-center"
        >
          <img :src="Logo" alt="Logo" class="h-full w-auto object-contain" />
        </div>
      </NuxtLink>

      <!-- Desktop Nav Links (centered) -->
      <nav class="hidden lg:flex items-center justify-center gap-1 flex-1 px-4">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="relative px-3 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-200 hover:text-blue-600 hover:bg-blue-50 group whitespace-nowrap"
          active-class="text-blue-600"
        >
          {{ $t(link.labelKey) }}
          <span
            class="absolute bottom-1 left-3 right-3 h-[2px] bg-blue-600 rounded-full scale-x-0 transition-transform duration-250 group-hover:scale-x-100"
          />
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <!-- Language Switcher (tablet + desktop) -->
        <div class="hidden md:flex items-center relative" ref="langDropdownRef">
          <button
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors duration-200"
            @click="langOpen = !langOpen"
          >
            <span>{{ currentLocaleLabel }}</span>
            <svg
              class="w-3 h-3 transition-transform duration-200"
              :class="{ 'rotate-180': langOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <Transition name="fade-drop">
            <div
              v-if="langOpen"
              class="absolute top-full right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden min-w-[110px] z-50"
            >
              <button
                v-for="loc in localeOptions"
                :key="loc.code"
                class="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                :class="{
                  'bg-blue-50 text-blue-600 font-semibold': locale === loc.code,
                }"
                @click="switchLang(loc.code)"
              >
                <span>{{ loc.flag }}</span>
                <span>{{ loc.label }}</span>
              </button>
            </div>
          </Transition>
        </div>

        <!-- CTA Button (tablet + desktop) -->
        <button
          class="hidden md:flex bg-[#1a3fbb] rounded-full px-4 lg:px-5 py-2 text-white text-sm font-semibold hover:bg-[#0a2c91] transition-colors duration-200 whitespace-nowrap"
          @click="handleStart"
        >
          {{ $t("navigation.start") }}
        </button>

        <!-- Hamburger (mobile + tablet nav hidden on lg) -->
        <n-button
          quaternary
          circle
          class="lg:hidden"
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

    <!-- Mobile / Tablet Drawer -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="lg:hidden border-t border-gray-100 bg-white px-4 sm:px-6 pb-5 pt-3 flex flex-col gap-1"
      >
        <!-- Nav links: 2 columns on tablet, 1 column on mobile -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-4 py-3 rounded-lg text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 no-underline"
            active-class="bg-blue-50 text-blue-600"
            @click="mobileOpen = false"
          >
            {{ $t(link.labelKey) }}
          </NuxtLink>
        </div>

        <!-- Mobile Language Switcher (hidden on tablet — already has dropdown) -->
        <div class="flex gap-2 mt-3 px-1 md:hidden">
          <button
            v-for="loc in localeOptions"
            :key="loc.code"
            class="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg border text-xs font-medium transition-colors duration-150"
            :class="
              locale === loc.code
                ? 'border-blue-500 bg-blue-50 text-blue-600'
                : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-500'
            "
            @click="switchLang(loc.code)"
          >
            <span>{{ loc.flag }}</span>
            <span>{{ loc.label }}</span>
          </button>
        </div>

        <!-- CTA — mobile only (tablet already has header button) -->
        <n-button
          type="primary"
          block
          size="medium"
          class="mt-3 md:hidden"
          :style="{
            borderRadius: '10px',
            fontWeight: '600',
            boxShadow: '0 2px 8px rgba(37,99,235,0.3)',
          }"
          @click="handleStart"
        >
          {{ $t("navigation.start") }}
        </n-button>
      </div>
    </Transition>
  </header>

  <ConsultationModal v-model="showConsultation" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { NuxtLink } from "#components";
import { NButton, NIcon } from "naive-ui";
import { MenuOutline, CloseOutline } from "@vicons/ionicons5";
import Logo from "@/assets/images/logo2.png";

const { locale, setLocale } = useI18n();

const isScrolled = ref(false);
const mobileOpen = ref(false);
const langOpen = ref(false);
const showConsultation = ref(false);
const langDropdownRef = ref<HTMLElement | null>(null);

const navLinks = [
  { labelKey: "navigation.services", to: "/#services" },
  { labelKey: "navigation.about", to: "/#about" },
  { labelKey: "navigation.why_uzbekistan", to: "/#why-uzbekistan" },
  { labelKey: "navigation.contact", to: "/#contact" },
];

const localeOptions = [
  { code: "ko", label: "JP", flag: "🇯🇵" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "uz", label: "UZ", flag: "🇺🇿" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
];

const currentLocaleLabel = computed(() => {
  return localeOptions.find((l) => l.code === locale.value)?.label ?? "UZ";
});

async function switchLang(code: string) {
  await setLocale(code as any);
  langOpen.value = false;
}

function handleStart() {
  mobileOpen.value = false;
  showConsultation.value = true;
}

function onScroll() {
  isScrolled.value = window.scrollY > 10;
}

function onClickOutside(e: MouseEvent) {
  if (
    langDropdownRef.value &&
    !langDropdownRef.value.contains(e.target as Node)
  ) {
    langOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  document.addEventListener("mousedown", onClickOutside);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  document.removeEventListener("mousedown", onClickOutside);
});
</script>

<style scoped>
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

.fade-drop-enter-active,
.fade-drop-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.fade-drop-enter-from,
.fade-drop-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
