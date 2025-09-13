<template>
  <div class="px-2 py-3 h-[56px] flex items-center gap-2 bg-gray-0 dark:bg-gray-80">
    <IconHouseBreadCrump class="dark:text-gray-40" />
    <template v-for="(item, index) in items" :key="index">
      <span>
        <icon-caret-right class="size-5 text-gray-30 dark:text-gray-50" />
      </span>

      <span v-if="item.link"
        class="text-text-sm font-bold text-brand-60 dark:text-gray-0 dark:hover:text-gray-10 hover:text-brand-70 transition-all cursor-pointer hover:text-primary-500"
        @click="router.push(item.link)">
        {{
          item.names
            ? useTranslation(item.names)
            : item.label
              ? $t(item.label)
              : item.translated
        }}
      </span>

      <span v-else class="text-text-sm font-bold text-gray-60 dark:text-gray-40">
        {{
          item.names
            ? useTranslation(item.names)
            : item.label
              ? $t(item.label)
              : item.translated
        }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { IconHouseBreadCrump } from "#components";

const router = useRouter();

interface Props {
  items: Array<any>;
}

defineProps<Props>();
</script>
