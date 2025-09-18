<template>
  <aside
    class="flex flex-col justify-between min-h-[calc(100vh-80px)] border-r border-gray-100 dark:border-gray-600 shadow-md"
    :class="{ 'is-collapsed': isCollapse }">
    <div class="flex flex-col gap-5 h-full bg-white dark:bg-slate-800 w-64 px-2 pt-8 pb-2">

      <div class="flex flex-col gap-1">
        <ul class="flex flex-col gap-1">
          <li v-for="item in navigation" :key="item.title">
            <router-link :to="item.route"
              class="flex transition-all items-center gap-3 p-3 !pl-5 dark:bg-gray-800 dark:hover:bg-gray-500"
              :class="{ 'bg-[#7152F30D] border-l-[5px] text-[#605BFF] border-[#605BFF] dark:bg-gray-700': route.fullPath.includes(item.route) }">
              <component :is="item.icon" class="size-5" />
              <span class="dark:text-gray-300">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>

      <div
        class="mt-auto mb-4 flex items-center gap-3 p-3 rounded-md dark:text-white hover:bg-gray-100 dark:hover:bg-gray-80 cursor-pointer">
        {{ displayName }}
      </div>
    </div>
  </aside>
</template>


<script lang="ts" setup>
import { computed } from 'vue'
import { navigation } from '@/navigation'

const route = useRoute()
defineProps({
  isCollapse: { type: Boolean, default: false },
})

const displayName = computed(() => 'User Name')
</script>
