<template>
  <footer id="contact" class="section-anchor bg-[#0d1b3e] px-4 sm:px-6 pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
    <div class="max-w-7xl mx-auto">
      <!-- Top grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
        <!-- Logo + tagline -->
        <div class="col-span-2 sm:col-span-1 flex flex-col gap-3 sm:gap-4">
          <div class="w-20 sm:w-24">
            <img
              :src="Logo"
              alt="NEXT SPOT"
              class="w-full h-auto object-contain rounded-xl"
            />
          </div>
          <p class="text-white/60 text-xs sm:text-sm leading-relaxed">
            {{ $t("footer.tagline") }}
          </p>
        </div>

        <!-- Xizmatlar -->
        <div class="flex flex-col gap-4">
          <h4 class="text-white font-bold text-base">
            {{ $t("footer.services_title") }}
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="itemKey in services" :key="itemKey">
              <NuxtLink
                to="/"
                class="text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline"
              >
                {{ $t(itemKey) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kompaniya -->
        <div class="flex flex-col gap-4">
          <h4 class="text-white font-bold text-base">
            {{ $t("footer.company_title") }}
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="itemKey in company" :key="itemKey">
              <NuxtLink
                to="/"
                class="text-white/60 text-sm hover:text-white transition-colors duration-200 no-underline"
              >
                {{ $t(itemKey) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Aloqa -->
        <div class="flex flex-col gap-4">
          <h4 class="text-white font-bold text-base">
            {{ $t("footer.contact_title") }}
          </h4>
          <ul class="flex flex-col gap-3">
            <li
              v-for="item in contacts"
              :key="item.key ?? item.value"
              class="text-white/60 text-sm"
            >
              <span v-if="item.type === 'i18n' && item.key">{{
                $t(item.key)
              }}</span>
              <span v-else>{{ item.value }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/10 pt-8">
        <p class="text-center text-white/40 text-sm">
          {{ $t("footer.copyright") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import Logo from "@/assets/images/Logo.png";

const services = [
  "footer.service1",
  "footer.service2",
  "footer.service3",
  "footer.service4",
];
const company = [
  "footer.company1",
  "footer.company2",
  "footer.company3",
  "footer.company4",
];
const contacts = [
  { type: "i18n", key: "footer.contact1" },
  { type: "raw", value: "info@nextspot.uz" },
  { type: "raw", value: "+998 (71) 123-45-67" },
];
</script>
