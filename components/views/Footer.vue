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
              :key="item.labelKey ?? item.label"
              class="text-sm"
            >
              <component
                :is="item.href ? 'a' : 'div'"
                :href="item.href"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noreferrer noopener' : undefined"
                class="group flex items-center gap-3 text-white/60 no-underline transition-colors duration-200 hover:text-white"
              >
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-200 group-hover:border-white/30 group-hover:bg-white/10"
                >
                  <svg
                    v-if="item.icon === 'location'"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s6-4.35 6-11a6 6 0 1 0-12 0c0 6.65 6 11 6 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <svg
                    v-else-if="item.icon === 'mail'"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  <svg
                    v-else-if="item.icon === 'phone'"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.47-1.29a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <svg
                    v-else
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M21.944 4.557a1 1 0 0 0-1.153-.188L2.883 12.197a1 1 0 0 0 .088 1.857l4.96 1.653 2.14 5.884a1 1 0 0 0 1.814.17l2.72-3.822 4.788 3.93a1 1 0 0 0 1.62-.576l2.996-15.74a1 1 0 0 0-.065-.996ZM9.09 14.892l-.86 3.43-1.205-3.315 8.694-5.853-6.629 5.738Zm9.95 4.073-4.061-3.332a1 1 0 0 0-1.482.186l-1.527 2.146.856-3.414L18.78 8.4l-9.363 6.304-3.09-1.03L20.63 7.07 19.04 18.965Z" />
                  </svg>
                </span>

                <span class="leading-relaxed">
                  {{ item.labelKey ? $t(item.labelKey) : item.label }}
                </span>
              </component>
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
  { icon: "location", labelKey: "footer.contact1" },
  { icon: "mail", label: "info@nextspot.uz", href: "mailto:info@nextspot.uz" },
  { icon: "phone", label: "+998 (70) 228 72 23", href: "tel:+998702287223" },
  {
    icon: "telegram",
    label: "@NEXTSPOT_UZ",
    href: "https://t.me/NEXTSPOT_UZ",
    external: true,
  },
];
</script>
