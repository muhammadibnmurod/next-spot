<template>
  <n-modal v-model:show="visible" :mask-closable="true">
    <n-card title="Create user" style="width: 500px" :bordered="false">
      <n-spin :show="loading">
        <n-form ref="formRef" :model="form" :rules="rules" label-width="0" class="grid gap-3" autocomplete="off"
          @submit.prevent>
          <n-form-item path="username">
            <n-input v-model:value.trim="form.username" placeholder="Логин" clearable autocomplete="off"
              autocapitalize="off" autocorrect="off" spellcheck="false" :name="`no-username-${uid}`"
              @keyup.enter="onSubmit" :disabled="isEdit" />
          </n-form-item>

          <n-form-item path="password">
            <n-input v-model:value="form.password" type="password" show-password-on="click" placeholder="Пароль"
              autocomplete="new-password" :name="`no-password-${uid}`" @keyup.enter="onSubmit" />
          </n-form-item>
        </n-form>
      </n-spin>

      <template #footer>
        <div class="dialog-footer">
          <n-button :disabled="loading" @click="visible = false">Cancel</n-button>
          <n-button type="primary" :loading="loading" @click="onSubmit">
            Confirm
          </n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { FormInst, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'

const formRef = ref<FormInst | null>(null)
const loading = ref(false)
const message = useMessage()

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
  const valid = await formRef.value.validate().then(() => true).catch(() => false)
  if (!valid) return
  try {
    loading.value = true
    const { error } = await useApiService().Users.UsersController_create(form)
    if (error.value) throw error.value
    emit('getData')
    message.success('Пользователь создан')
    visible.value = false
  } catch (e: any) {
    message.error(e?.message || 'Ошибка')
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
