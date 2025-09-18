<template>
  <div>
    <el-table :data="rows" stripe style="width: 99%">
      <el-table-column type="index" width="50" />
      <el-table-column prop="name" label="Name">
        <template #default="scope">
          <div>{{ scope?.row?.profile?.lastName }} {{ scope?.row?.profile?.firstName }} {{
            scope?.row?.profile?.middleName }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="profile.position" label="Position" />
      <el-table-column prop="profile.birthday" label="Birthday" />
      <el-table-column prop="profile.photo" label="Photo">
        <template #default="scope">
          <el-image style="width: 48px; height: 48px" :src="scope?.row?.profile?.photo" :zoom-rate="1.2" :max-scale="7"
            :min-scale="0.2" :hide-on-click-modal="true" :preview-src-list="[scope?.row?.profile?.photo]" show-progress
            :initial-index="4" :preview-teleported="true" fit="cover" />
        </template>
      </el-table-column>

      <el-table-column label="Actions" width="250">
        <template #default="scope">
          <div class="flex gap-2 items-center">
            <el-button size="default" class="w-6 h-6" type="primary" :icon="ElIconEdit"
              @click="$emit('openFormDialog', true)" />
            <el-button size="default" class="w-6 h-6" type="danger" :icon="ElIconDelete" />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  rows: { type: Array },
})
</script>