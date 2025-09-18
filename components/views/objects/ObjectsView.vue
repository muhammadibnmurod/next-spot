<template>
  <div class="flex flex-col gap-5 h-full">
    <ObjectsForm v-if="formDialog" v-model="formDialog" @getData="execute" :isEdit="isEdit" :editData="editData" />
    <ObjectsFilter :filterParams="filterParams" @openFormDialog="openFormDialog" />
    <div class="flex flex-col gap-4 justify-between h-full border rounded-md">
      <div class="p-2">
        <ObjectsList :rows="data?.data" @openFormDialog="openFormDialog" />
      </div>
      <div class="p-3 border-t">
        <Pagination :filterParams="filterParams" @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange" :total="21" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { data, execute } = useApiService().Objects.ObjectsController_findAll()

const filterParams = ref({ name: '', currentPage: 1, pageSize: 10 })
const formDialog = ref<boolean>(false)
const isEdit = ref<boolean>(false)
const editData = ref<any>(null)

const handleSizeChange = (newSize: number) => {
  filterParams.value.pageSize = newSize
}

const handleCurrentChange = (newPage: number) => {
  filterParams.value.currentPage = newPage
}

const openFormDialog = (value: boolean, data: any) => {
  isEdit.value = value
  editData.value = data
  formDialog.value = true
}

</script>