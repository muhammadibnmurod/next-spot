<template>
  <div>
    <n-data-table :data="rows" :columns="columns" striped :bordered="false" class="w-[99%]" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { NButton, NImage, NPopconfirm } from 'naive-ui'

type Row = any

const props = defineProps({
  rows: { type: Array as () => Row[] },
})

const columns: DataTableColumns<Row> = [
  {
    title: '#',
    key: 'index',
    width: 50,
    render: (_row, index) => index + 1,
  },
  {
    title: 'Name',
    key: 'name',
    render: (row) =>
      `${row?.profile?.lastName ?? ''} ${row?.profile?.firstName ?? ''} ${row?.profile?.middleName ?? ''}`.trim(),
  },
  {
    title: 'Position',
    key: 'profile.position',
    render: (row) => row?.profile?.position ?? '',
  },
  {
    title: 'Birthday',
    key: 'profile.birthday',
    render: (row) => row?.profile?.birthday ?? '',
  },
  {
    title: 'Photo',
    key: 'profile.photo',
    render: (row) =>
      h(NImage, {
        src: row?.profile?.photo,
        width: 48,
        height: 48,
        objectFit: 'cover',
        previewDisabled: !row?.profile?.photo,
      }),
  },
  {
    title: 'Actions',
    key: 'actions',
    width: 140,
    render: (row) =>
      h('div', { class: 'flex gap-2 items-center' }, [
        h(
          NPopconfirm,
          {
            positiveText: 'Delete',
            negativeText: 'Cancel',
            onPositiveClick: () => deleteUser(row?.id),
          },
          {
            default: () => 'Are you sure to delete this?',
            trigger: () =>
              h(
                NButton,
                {
                  size: 'small',
                  type: 'error',
                },
                { default: () => 'Delete' }
              ),
          }
        ),
      ]),
  },
]

const deleteUser = (id: number) => {
  console.log('delete user', id)
}
</script>
