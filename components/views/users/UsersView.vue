<template>
  <div class="flex flex-col gap-5 h-full">
    <UsersForm v-model="formDialog" />
    <UsersFilter :filterParams="filterParams" @openFormDialog="openFormDialog" />
    <div class="flex flex-col gap-4 justify-between h-full border rounded-md">
      <div class="p-2">
        <UsersList :rows="data?.data" @openFormDialog="openFormDialog" />
      </div>
      <div class="p-3 border-t">
        <Pagination :filterParams="filterParams" @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange" :total="21" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { data } = useApiService().Users.UsersController_getAll()

const filterParams = ref({ name: '', currentPage: 1, pageSize: 10 })
const formDialog = ref<boolean>(false)

const handleSizeChange = (newSize: number) => {
  filterParams.value.pageSize = newSize
}

const handleCurrentChange = (newPage: number) => {
  filterParams.value.currentPage = newPage
}

const openFormDialog = (isEdit: boolean) => {
  formDialog.value = true
}

</script>