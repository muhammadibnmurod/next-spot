<template>
  <el-dialog v-model="visible" title="Create object" width="720" align-center :close-on-click-modal="true"
    :destroy-on-close="true" v-loading="loading">
    <el-form ref="formRef" :model="form" :rules="rules" label-position="top" label-width="0" class="grid gap-4"
      autocomplete="off" @submit.prevent>
      <!-- Row: Coordinates -->
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item prop="lat" label="Latitude">
            <el-input v-model="form.lat" placeholder="e.g. 41.2995" inputmode="decimal" autocomplete="off"
              :name="`no-lat-${uid}`" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="lng" label="Longitude">
            <el-input v-model="form.lng" placeholder="e.g. 69.2401" inputmode="decimal" autocomplete="off"
              :name="`no-lng-${uid}`" />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- Status -->
      <el-form-item prop="status" label="Status">
        <el-select v-model="form.status" placeholder="Select status" class="w-full">
          <el-option v-for="s in statuses" :key="s" :label="s" :value="s" />
        </el-select>
      </el-form-item>

      <!-- Dates -->
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item prop="constructionPeriod" label="Construction period (start)">
            <el-date-picker v-model="form.constructionPeriod" type="date" value-format="YYYY-MM-DD"
              placeholder="YYYY-MM-DD" class="w-full" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="commissioningPeriod" label="Commissioning period">
            <el-date-picker v-model="form.commissioningPeriod" type="date" value-format="YYYY-MM-DD"
              placeholder="YYYY-MM-DD" class="w-full" />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- Basic info -->
      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item prop="masterProject" label="Master project">
            <el-input v-model="form.masterProject" placeholder="Master project" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="customer" label="Customer">
            <el-input v-model="form.customer" placeholder="Customer" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item prop="pudaratOrganization" label="Pudarat organization">
        <el-input v-model="form.pudaratOrganization" placeholder="Organization" />
      </el-form-item>

      <el-row :gutter="12">
        <el-col :span="12">
          <el-form-item prop="lengthObject" label="Object length">
            <el-input v-model="form.lengthObject" placeholder="Length (text/units)" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="objectValue" label="Object value">
            <el-input v-model="form.objectValue" placeholder="Value (text/units)" />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- Text areas -->
      <el-form-item prop="financingInfo" label="Financing info">
        <el-input v-model="form.financingInfo" type="textarea" :rows="3" placeholder="Financing details" />
      </el-form-item>

      <el-form-item prop="workDone" label="Work done">
        <el-input v-model="form.workDone" type="textarea" :rows="3" placeholder="Completed works" />
      </el-form-item>

      <!-- <el-upload class="upload-demo" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
</el-upload> -->



      <!-- Files: collect fileIds -->
      <el-form-item prop="fileIds" label="Files">
        <div class="w-full">

          <el-upload class="upload-demo" drag :http-request="onUpload" :show-file-list="false" :limit="10" multiple
            accept="*">
            <el-icon class="el-icon--upload"><el-icon-upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>


          <!-- <el-upload :http-request="onUpload" :show-file-list="false" :limit="10" multiple accept="*">
            <el-button type="primary" :loading="uploading">Upload file</el-button>
          </el-upload>

          <div class="mt-3 flex flex-wrap gap-2">
            <el-tag v-for="fid in form.fileIds" :key="fid" closable @close="removeFileId(fid)">
              {{ fid }}
            </el-tag>
          </div> -->
        </div>
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button :disabled="loading" @click="visible = false">Cancel</el-button>
        <el-button type="primary" :loading="loading" @click="onSubmit">
          Save
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, onMounted } from 'vue'
import type { FormInstance, FormRules, UploadRequestOptions } from 'element-plus'
import { ElMessage } from 'element-plus'

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
  fileIds: string[]
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
const formRef = ref<FormInstance>()
const loading = ref(false)
const uploading = ref(false)

const statuses: Status[] = ['new', 'in_progress', 'completed', 'canceled']

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
  fileIds: [],
})

/** validators */
const isLat = (_: any, v: string, cb: (e?: Error) => void) => {
  const n = Number(v)
  if (v === '' || Number.isNaN(n)) return cb(new Error('Latitude must be a number'))
  if (n < -90 || n > 90) return cb(new Error('Latitude must be between -90 and 90'))
  cb()
}
const isLng = (_: any, v: string, cb: (e?: Error) => void) => {
  const n = Number(v)
  if (v === '' || Number.isNaN(n)) return cb(new Error('Longitude must be a number'))
  if (n < -180 || n > 180) return cb(new Error('Longitude must be between -180 and 180'))
  cb()
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

/** file upload -> pushes id into form.fileIds */
const onUpload = async (opts: UploadRequestOptions) => {
  try {
    uploading.value = true
    const fd = new FormData()
    fd.append('file', opts.file as any)

    // Example: useApiService().Files.FilesController_upload(fd)
    const { data, error } = await useApiService({
      body: fd as any
    }).Storage.StorageController_uploadFile(fd as any)

    if (error.value) throw error.value

    const returned = data.value as any
    const id = returned?.id ?? returned?.fileId ?? returned?.data?.id
    if (!id) throw new Error('Upload succeeded but no file id returned')

    form.fileIds.push(String(id))
    ElMessage.success('File uploaded')
    opts.onSuccess?.(returned as any)
  } catch (e: any) {
    ElMessage.error(e?.message || 'Upload error')
    opts.onError?.(e)
  } finally {
    uploading.value = false
  }
}

const removeFileId = (fid: string) => {
  form.fileIds = form.fileIds.filter(x => x !== fid)
}

const onSubmit = async () => {
  if (!formRef.value) return
  const ok = await formRef.value.validate().catch(() => false)
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

    ElMessage.success(props.isEdit ? 'Saved' : 'Created')
    emit('getData')
    visible.value = false
  } catch (e: any) {
    ElMessage.error(e?.message || 'Request failed')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (props.isEdit && props.editData) {
    Object.assign(form, { ...form, ...props.editData })
    // ensure defaults for missing fields
    form.status ||= 'new'
    form.fileIds ||= []
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
      fileIds: [],
    })
  }
})
</script>
