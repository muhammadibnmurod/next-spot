<template>
  <div class="flex items-center justify-between">
    <div>
      <n-input placeholder="Search users..." v-model:value="filterParams.name" />
    </div>

    <n-button @click="$emit('openFormDialog', false)" type="primary"
      class="!bg-indigo-500 !border-indigo-500 hover:!bg-indigo-600">
      Add User
    </n-button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  filterParams: {
    type: Object as () => { name: string },
    required: true,
  },
})
</script>
