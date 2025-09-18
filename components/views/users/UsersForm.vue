<template>
  <el-dialog v-model="visible" title="Вход" width="500" align-center :close-on-click-modal="false">
    <!-- FORM -->
    <el-form ref="formRef" :model="form" :rules="rules" label-width="0" class="grid gap-3">
      <el-form-item prop="username">
        <el-input v-model.trim="form.username" placeholder="Логин" clearable @keyup.enter="onSubmit" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" show-password placeholder="Пароль" @keyup.enter="onSubmit" />
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

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()

const visible = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emit('update:modelValue', v),
})

const form = reactive({
  username: '',
  password: '',
})

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

const formRef = ref<FormInstance>()
const loading = ref(false)

const onSubmit = async () => {
  if (!formRef.value) return
  const valid = await formRef.value.validate().catch(() => false)
  if (!valid) return

  try {
    loading.value = true
    const { error } = await useApiService().auth.login(form)

    if (error.value) throw error.value


    ElMessage.success('Успешный вход')
    visible.value = false
  } catch (e: any) {
    ElMessage.error(e?.message || 'Ошибка авторизации')
  } finally {
    loading.value = false
  }
}
</script>
