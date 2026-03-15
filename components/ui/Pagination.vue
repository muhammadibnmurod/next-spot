<template>
  <div class="p-3">
    <n-pagination v-model:page="filterParams.currentPage" v-model:page-size="filterParams.pageSize"
      :page-sizes="[10, 25, 50, 100]" show-size-picker :item-count="total"
      @update:page-size="handleSizeChange" @update:page="handleCurrentChange" />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  filterParams: {
    type: Object as () => { currentPage: number; pageSize: number },
    required: true,
  },
  total: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['handleSizeChange', 'handleCurrentChange'])

const handleSizeChange = (newSize: number) => {
  emit('handleSizeChange', newSize)
}

const handleCurrentChange = (newPage: number) => {
  emit('handleCurrentChange', newPage)
}

</script>
