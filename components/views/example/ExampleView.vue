<template>
  <div class="flex flex-col gap-2">
    <ExampleForm />

    <ExampleFilter />

    <ExampleTable />
    <!-- or <ExampleBody /> -->

    <Pagination :filterParams="filterParams" />
  </div>
</template>

<script setup lang="ts">

const filterParams = ref({ currentPage: 1, pageSize: 10 })

</script>