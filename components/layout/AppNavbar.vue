<template>
  <el-header height="80px"
    class="flex justify-between sticky top-0 !py-4 !px-8 items-center w-full bg-white dark:bg-gray-800 z-0">
    <!-- <div class="flex items-center gap-4">
      <el-button @click="$emit('toggle-sidebar')">Toggle Sidebar</el-button>
      <div v-if="collapsible" @click="$emit('toggle-sidebar')"
        class="w-12 h-12 dark:bg-gray-80 bg-gray-5 flex items-center justify-center cursor-pointer rounded-full transition-all duration-1000"
        :class="{ 'rotate-180': collapsed }">
        <icon-caret-left class="size-6 dark:text-gray-0" />
      </div>

      <BreadCrumb :items="items" />
    </div> -->

    <div class="flex items-center gap-2">
      <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />

      <div class="flex flex-col gap-1">
        <span class="font-semibold dark:text-gray-200">{{ displayName }}</span>
        <span class="text-sm text-gray-500 dark:text-gray-300">Administrator</span>
      </div>
    </div>

    <div class="flex items-center gap-8">
      <div class="flex items-center gap-2">
        <div @click="toggleDarkMode" v-if="!isDark"
          class="w-12 h-12 rounded-full bg-gray-5 flex items-center transition-all justify-center cursor-pointer hover:bg-gray-10">
          <icon-sun class="w-6 h-6" />
        </div>
        <div @click="toggleDarkMode" v-else
          class="w-12 h-12 rounded-full dark:bg-gray-70 bg-gray-5 flex items-center transition-all justify-center cursor-pointer hover:bg-gray-10 dark:hover:bg-gray-60">
          <icon-half-moon class="w-6 h-6 dark:text-gray-0" />
        </div>
        <!-- <div
          class="w-12 h-12 rounded-full dark:bg-gray-70 bg-gray-5 flex items-center transition-all justify-center cursor-pointer hover:bg-gray-10 dark:hover:bg-gray-60"
        >
          <icon-gmail class="w-6 h-6 dark:text-gray-0" />
        </div> -->
        <div
          class="w-12 h-12 rounded-full dark:bg-gray-70 bg-gray-5 flex items-center transition-all justify-center cursor-pointer hover:bg-gray-10 dark:hover:bg-gray-60">
          <icon-notification class="w-6 h-6 dark:text-gray-0" />
        </div>
      </div>
      <el-dropdown type="primary" trigger="click">
        <div class="flex items-center gap-2">
          <img :src="flags[locale]?.flag" :alt="flags[locale]?.code" class="w-5 h-5" />
          <span class="uppercase dark:text-gray-0">{{
            flags[locale]?.code
          }}</span>
          <IconCaretDown class="w-4 h-4 dark:text-gray-0" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item, key) in flags" :key="key" @click="changeLocale(item.code)">
              <div class="flex items-center gap-2">
                <img :src="item.flag" alt="" class="w-5 h-5" />
                <span>{{ item.name }}</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown v-if="user.userInfo" trigger="click" placement="bottom-end" teleported>
        <div class="flex items-center gap-3 cursor-pointer select-none">
          <div class="w-10 h-10 rounded-full bg-brand-60 text-white flex items-center justify-center font-semibold">
            {{ initials }}
          </div>
          <span class="hidden sm:inline dark:text-gray-0 max-w-[180px] truncate">
            {{ displayName }}
          </span>
          <IconCaretDown class="w-4 h-4 dark:text-gray-0" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="min-w-40">
            <el-dropdown-item divided @click="handleLogout">
              <span class="text-red-600">{{ $t("action.logout") }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import flagUzbek from "@/assets/images/flag/flagUzbekistan.png";
import flagRussia from "@/assets/images/flag/flagRussia.png";
import flagEngland from "@/assets/images/flag/flagEngland.png";

import { useUserStore } from "@/store/auth";

const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: v => (colorMode.preference = v ? 'dark' : 'light')
})

const user = useUserStore();
const router = useRouter();

const { locale, setLocale } = useI18n();

const items = useBreadcrumb();

function changeLocale(code) {
  setLocale(code);
}

const props = defineProps({
  collapsed: Boolean,
  collapsible: {
    type: Boolean,
    default: true,
  },
});

const displayName = computed(() => user.userInfo?.firstName ? user.userInfo?.firstName : "Boboqulov Ulug'bek");

const initials = computed(() => {
  const parts = String(displayName.value).trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p?.[0]?.toUpperCase() || "").join("") || "U";
});

const handleLogout = async () => {
  try {
    if (useApiService()?.Auth?.logout) {
      await useApiService()
        .Auth.logout()
        .catch(() => { });
    }
  } finally {
    user.clearUser();
    user.isAuthenticated = false;
    user.forbidden = false;
    router.replace("/auth");
  }
};

const flags = {
  uz: {
    name: "O'zbekcha",
    flag: flagUzbek,
    code: "uz",
  },
  kril: {
    name: "Криллча",
    flag: flagUzbek,
    code: "kril",
  },
  ru: {
    name: "Русский",
    flag: flagRussia,
    code: "ru",
  },
  en: {
    name: "English",
    flag: flagEngland,
    code: "en",
  },
};

const isDarkMode = ref(
  localStorage.getItem("theme") === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorage.getItem("theme"))
);

watchEffect(() => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
};
</script>
