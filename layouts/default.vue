<template>
  <div class="flex min-h-[100vh] flex-col">
    <div class="shrink-0 basis-auto border-b box-content border-[#dfdfdf]">
      <AppNavbar @toggle-sidebar="toggleSidebar" :collapsible="isSidebarCollapsed" />
    </div>

    <div class="min-h-[calc(100vh-80px)] flex">
      <AppSidebar :isCollapse="isSidebarCollapsed" />
      <div class="dark:bg-gray-700 relative min-h-[calc(100vh-80px)] p-6 w-full">
        <NuxtPage class="h-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarCollapsed = ref(false)

function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>
