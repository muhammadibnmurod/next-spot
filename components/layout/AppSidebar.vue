<template>
  <aside class="flex flex-col justify-between h-full" :class="{ 'is-collapsed': isCollapse }">
    <div class="flex justify-center items-center gap-2 h-20">
      <div class="app-mark">
        <el-icon class="app-icon"><icon-menu /></el-icon>
      </div>
      <span v-if="!isCollapse" class="transition-all duration-500">Admin app</span>
    </div>

    <div class="sidebar-menu h-full flex-1">
      <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened @open="handleOpen"
        @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>

        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>

        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="flex items-center gap-2 px-3 pt-2 pb-5" @click="$emit('open-profile')">
      <el-avatar :size="36">
        {{ initials }}
      </el-avatar>
      <div v-if="!isCollapse" class="user-meta">
        <div class="">{{ displayName }}</div>
        <div class="text-gray-400 text-xs">Admin</div>
      </div>
      <el-icon class="more" v-if="!isCollapse"><arrow-right /></el-icon>
    </div>
  </aside>
</template>


<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  ArrowRight,
} from '@element-plus/icons-vue'

defineProps({
  isCollapse: { type: Boolean, default: false },
})

const displayName = computed(() => 'User Name')
const initials = computed(() => {
  const parts = String(displayName.value).trim().split(/\s+/).slice(0, 2)
  return parts.map(p => p?.[0]?.toUpperCase() || '').join('') || 'U'
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log('sepctre')
  // console.log(key, keyPath)
}
</script>
