<template>
  <div class="flex max-h-[100vh]">
    <div class="shrink-0 basis-auto">
      <AppSidebar :isCollapse="isSidebarCollapsed" />
    </div>

    <div class="grow basis-auto overflow-hidden bg-gray-0 dark:bg-gray-90">
      <AppNavbar @toggle-sidebar="toggleSidebar" :collapsible="isSidebarCollapsed" />
      <div class="p-6 bg-gray-100 dark:bg-gray-90 relative">
        <NuxtPage />
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
