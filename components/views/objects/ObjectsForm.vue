<template>
  <n-modal v-model:show="visible" :mask-closable="true">
    <n-card title="Create object" style="width: 720px" :bordered="false">
      <n-spin :show="loading">
        <n-form ref="formRef" :model="form" :rules="rules" label-position="top" label-width="0"
          class="grid gap-4" autocomplete="off" @submit.prevent>
          <!-- Row: Coordinates -->
          <n-grid :cols="2" :x-gap="12">
            <n-gi>
              <n-form-item path="lat" label="Latitude">
                <n-input v-model:value="form.lat" placeholder="e.g. 41.2995" inputmode="decimal" autocomplete="off"
                  :name="`no-lat-${uid}`" />
              </n-form-item>
            </n-gi>
            <n-gi>
              <n-form-item path="lng" label="Longitude">
                <n-input v-model:value="form.lng" placeholder="e.g. 69.2401" inputmode="decimal" autocomplete="off"
                  :name="`no-lng-${uid}`" />
              </n-form-item>
            </n-gi>
          </n-grid>

          <!-- Status -->
          <n-form-item path="status" label="Status">
            <n-select v-model:value="form.status" :options="statusOptions" placeholder="Select status" class="w-full" />
          </n-form-item>

          <!-- Dates -->
          <n-grid :cols="2" :x-gap="12">
            <n-gi>
              <n-form-item path="constructionPeriod" label="Construction period (start)">
                <n-date-picker v-model:value="form.constructionPeriod" type="date" value-format="yyyy-MM-dd"
                  placeholder="YYYY-MM-DD" class="w-full" />
              </n-form-item>
            </n-gi>
            <n-gi>
              <n-form-item path="commissioningPeriod" label="Commissioning period">
                <n-date-picker v-model:value="form.commissioningPeriod" type="date" value-format="yyyy-MM-dd"
                  placeholder="YYYY-MM-DD" class="w-full" />
              </n-form-item>
            </n-gi>
          </n-grid>

          <!-- Basic info -->
          <n-grid :cols="2" :x-gap="12">
            <n-gi>
              <n-form-item path="masterProject" label="Master project">
                <n-input v-model:value="form.masterProject" placeholder="Master project" />
              </n-form-item>
            </n-gi>
            <n-gi>
              <n-form-item path="customer" label="Customer">
                <n-input v-model:value="form.customer" placeholder="Customer" />
              </n-form-item>
            </n-gi>
          </n-grid>

          <n-form-item path="pudaratOrganization" label="Pudarat organization">
            <n-input v-model:value="form.pudaratOrganization" placeholder="Organization" />
          </n-form-item>

          <n-grid :cols="2" :x-gap="12">
            <n-gi>
              <n-form-item path="lengthObject" label="Object length">
                <n-input v-model:value="form.lengthObject" placeholder="Length (text/units)" />
              </n-form-item>
            </n-gi>
            <n-gi>
              <n-form-item path="objectValue" label="Object value">
                <n-input v-model:value="form.objectValue" placeholder="Value (text/units)" />
              </n-form-item>
            </n-gi>
          </n-grid>

          <!-- Text areas -->
          <n-form-item path="financingInfo" label="Financing info">
            <n-input v-model:value="form.financingInfo" type="textarea" :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="Financing details" />
          </n-form-item>

          <n-form-item path="workDone" label="Work done">
            <n-input v-model:value="form.workDone" type="textarea" :autosize="{ minRows: 3, maxRows: 3 }"
              placeholder="Completed works" />
          </n-form-item>

        </n-form>
      </n-spin>

      <template #footer>
        <div class="dialog-footer">
          <n-button :disabled="loading" @click="visible = false">Cancel</n-button>
          <n-button type="primary" :loading="loading" @click="onSubmit">
            Save
          </n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, reactive, ref, onMounted } from 'vue'
import type { FormInst, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'

type Status = 'new' | 'in_progress' | 'completed' | 'canceled'
type FormData = {
  lat: string
  lng: string
  status: Status
  constructionPeriod: string
  masterProject: string
  customer: string
  pudaratOrganization: string
  lengthObject: string
  objectValue: string
  financingInfo: string
  workDone: string
  commissioningPeriod: string
}

const props = defineProps<{
  modelValue: boolean
  isEdit?: boolean
  editData?: any
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
  (e: 'getData'): void
}>()

const visible = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emit('update:modelValue', v),
})

const uid = Math.random().toString(36).slice(2)
const formRef = ref<FormInst | null>(null)
const loading = ref(false)
const message = useMessage()

const statuses: Status[] = ['new', 'in_progress', 'completed', 'canceled']
const statusOptions = statuses.map((s) => ({ label: s, value: s }))

const form = reactive<FormData>({
  lat: '',
  lng: '',
  status: 'new',
  constructionPeriod: '',
  masterProject: '',
  customer: '',
  pudaratOrganization: '',
  lengthObject: '',
  objectValue: '',
  financingInfo: '',
  workDone: '',
  commissioningPeriod: '',
})

/** validators */
const isLat = (_: any, v: string) => {
  const n = Number(v)
  if (v === '' || Number.isNaN(n)) return new Error('Latitude must be a number')
  if (n < -90 || n > 90) return new Error('Latitude must be between -90 and 90')
  return true
}
const isLng = (_: any, v: string) => {
  const n = Number(v)
  if (v === '' || Number.isNaN(n)) return new Error('Longitude must be a number')
  if (n < -180 || n > 180) return new Error('Longitude must be between -180 and 180')
  return true
}

const rules: FormRules = {
  lat: [{ required: true, validator: isLat, trigger: 'blur' }],
  lng: [{ required: true, validator: isLng, trigger: 'blur' }],
  status: [{ required: true, message: 'Select status', trigger: 'change' }],
  constructionPeriod: [{ required: true, message: 'Select construction date', trigger: 'change' }],
  commissioningPeriod: [{ required: true, message: 'Select commissioning date', trigger: 'change' }],
  masterProject: [{ required: true, message: 'Master project required', trigger: 'blur' }],
  customer: [{ required: true, message: 'Customer required', trigger: 'blur' }],
  // others optional, add if needed
}

const onSubmit = async () => {
  if (!formRef.value) return
  const ok = await formRef.value.validate().then(() => true).catch(() => false)
  if (!ok) return

  try {
    loading.value = true

    // CREATE / UPDATE — adjust to your service names:
    if (props.isEdit) {
      const { error } = await useApiService().Objects.ObjectsController_update(props.editData?.id as any, form)
      if (error.value) throw error.value
    } else {
      const { error } = await useApiService().Objects.ObjectsController_create(form)
      if (error.value) throw error.value
    }

    message.success(props.isEdit ? 'Saved' : 'Created')
    emit('getData')
    visible.value = false
  } catch (e: any) {
    message.error(e?.message || 'Request failed')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (props.isEdit && props.editData) {
    Object.assign(form, { ...form, ...props.editData })
    // ensure defaults for missing fields
    form.status ||= 'new'
  } else {
    // reset
    Object.assign(form, {
      lat: '',
      lng: '',
      status: 'new',
      constructionPeriod: '',
      masterProject: '',
      customer: '',
      pudaratOrganization: '',
      lengthObject: '',
      objectValue: '',
      financingInfo: '',
      workDone: '',
      commissioningPeriod: '',
    })
  }
})
</script>
