<template>
  <el-dialog v-model="visible" title="create user" width="500" align-center :close-on-click-modal="true"
    :destroy-on-close="true" v-loading="loading">
    <!-- FORM -->
    <el-form ref="formRef" :model="form" :rules="rules" label-width="0" class="grid gap-3" autocomplete="off"
      @submit.prevent>
      <el-form-item prop="username">
        <el-input v-model.trim="form.username" placeholder="Логин" clearable autocomplete="off" autocapitalize="off"
          autocorrect="off" spellcheck="false" :name="`no-username-${uid}`" @keyup.enter="onSubmit"
          :disabled="isEdit" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" show-password placeholder="Пароль" autocomplete="new-password"
          :name="`no-password-${uid}`" @keyup.enter="onSubmit" />
      </el-form-item>
    </el-form>

    <!-- FOOTER -->
    <template #footer>
      <div class="dialog-footer">
        <el-button :disabled="loading" @click="visible = false">Cancel</el-button>
        <el-button type="primary" :loading="loading" @click="onSubmit">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

const formRef = ref<FormInstance>()
const loading = ref(false)

const props = defineProps<{ modelValue: boolean; isEdit: boolean; editData: any }>()
const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
  (e: 'getData'): void
}>()

const visible = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emit('update:modelValue', v),
})

const uid = Math.random().toString(36).slice(2) // used to make non-semantic names per render

const form = reactive({ username: '', password: '' })

const rules: FormRules<typeof form> = {
  username: [
    { required: true, message: 'Введите логин', trigger: 'blur' },
    { min: 5, message: 'Минимум 5 символов', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Введите пароль', trigger: 'blur' },
    { min: 6, message: 'Минимум 6 символов', trigger: 'blur' },
  ],
}


const onSubmit = async () => {
  if (!formRef.value) return
  const valid = await formRef.value.validate().catch(() => false)
  if (!valid) return
  try {
    loading.value = true
    const { error } = await useApiService().Users.UsersController_create(form)
    if (error.value) throw error.value
    emit('getData')
    ElMessage.success('Пользователь создан')
    visible.value = false
  } catch (e: any) {
    ElMessage.error(e?.message || 'Ошибка')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  console.log("props.editData", props.editData, 123)

  if (props.isEdit && props.editData) {
    console.log("props.editData", props.editData)
    form.username = props.editData.username
    form.password = ''
  } else {
    form.username = ''
    form.password = ''
  }
})
</script>
