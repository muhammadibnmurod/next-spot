<template>
  <div class="flex items-center justify-between">
    <div>
      <el-input placeholder="Search users..." v-model="filterParams.name" />
    </div>

    <el-button @click="$emit('openFormDialog', false)" type="primary" :icon="ElIconPlus"
      class="!bg-indigo-500 !border-indigo-500 hover:!bg-indigo-600">
      Add User
    </el-button>
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