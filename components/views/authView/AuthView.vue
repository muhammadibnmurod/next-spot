<template>
  <div class="w-full h-screen p-10">
    <div class="bg-gray-100 h-full w-full rounded-2xl relative overflow-hidden flex justify-center items-center">
      <img :src="ImgaeBottomLeftAuth" class="absolute bottom-0 left-0" />
      <img :src="ImageTopRightAuth" class="absolute top-0 right-0" />

      <div
        class="z-10 w-auto max-w-[640px] h-auto px-12 pb-12 pt-14 rounded-md bg-white shadow-md flex flex-col gap-20 relative">
        <div class="absolute top-4 right-4">
          <el-dropdown trigger="click">
            <div class="el-dropdown-link flex items-center gap-1 border border-[#605BFF] p-2 rounded-full">
              <img :src="flags[activeLang].flag" :alt="flags[activeLang].flag" class="w-5 h-5" />
            </div>
            <template #dropdown>
              <el-dropdown-menu class="flex flex-col gap-1 !px-1">
                <el-dropdown-item v-for="(item, index) in flags" :key="index" @click="activeLang = item.code">
                  <div class="flex items-center gap-1">
                    <img :src="item.flag" :alt="item.flag" class="w-5 h-5" />
                    <span>{{ item.name }}</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="flex gap-3 items-center justify-center">
          <img :src="ImageLogo" alt="ImageLogo" />

          <span class="text-[64px]">BMS</span>
        </div>

        <!-- login -->
        <div class="flex items-center justify-center px-4">
          <div class="w-full max-w-3xl">
            <h1 class="text-5xl md:text-6xl font-extrabold text-center mb-2">
              Добро пожаловать
            </h1>
            <p class="text-center text-gray-400 text-xl md:text-2xl mb-7">
              Пожалуйста войдите в систему чтобы продолжить
            </p>

            <el-form ref="formRef" :model="form" :rules="rules" label-width="0" size="large" class="grid gap-4">
              <el-form-item prop="login" class="!mb-0">
                <el-input v-model="form.login" placeholder="Логин" :prefix-icon="User" clearable autofocus
                  class="w-full" />
              </el-form-item>

              <el-form-item prop="password" class="!mb-0">
                <el-input v-model="form.password" type="password" show-password placeholder="Пароль" :prefix-icon="Lock"
                  class="w-full" />
              </el-form-item>

              <div class="flex items-center justify-between pt-1">
                <el-checkbox v-model="form.remember">Запомнить</el-checkbox>
                <NuxtLink to="/forgot-password" class="text-indigo-600 hover:underline">
                  Забыли пароль?
                </NuxtLink>
              </div>

              <el-form-item class="!mb-0">
                <el-button type="primary" :loading="loading" round size="large" @click="onSubmit" class="w-full h-14 text-2xl rounded-2xl
                   !bg-indigo-500 !border-indigo-500 hover:!bg-indigo-600">
                  Войти
                  <el-icon class="ml-2">
                    <Right />
                  </el-icon>
                </el-button>
              </el-form-item>

              <el-form-item class="!mb-0">
                <el-button plain round size="large" @click="goHome" class="w-full h-14 text-2xl rounded-2xl
                   !bg-indigo-100 !text-indigo-700 hover:!bg-indigo-200">
                  Перейти на главную страницу
                  <el-icon class="ml-2">
                    <ArrowRight />
                  </el-icon>
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ImageLogo, ImageTopRightAuth, ImgaeBottomLeftAuth } from '~/assets';
import { ImageFlagEn, ImageFlagRu, ImageFlagUz } from '~/assets'

const flags: {
  [key: string]: { code: "en" | "ru" | "uz" | "kril"; name: string; flag: string }
} = {
  uz: { code: 'uz', name: "O'zbek", flag: ImageFlagUz },
  kril: { code: 'kril', name: "Ўзбек", flag: ImageFlagUz },
  ru: { code: 'ru', name: 'Русский', flag: ImageFlagRu },
  en: { code: 'en', name: 'English', flag: ImageFlagEn },
}

const activeLang = ref<'uz' | 'ru' | 'en' | 'kril'>('uz')


type LoginForm = { login: string; password: string; remember: boolean }

const router = useRouter()
const formRef = ref<FormInstance>()
const loading = ref(false)

const form = reactive<LoginForm>({
  login: '',
  password: '',
  remember: true,
})

const rules = reactive<FormRules<LoginForm>>({
  login: [
    { required: true, message: 'Введите логин', trigger: 'blur' },
    { min: 3, message: 'Минимум 3 символа', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Введите пароль', trigger: 'blur' },
    { min: 6, message: 'Минимум 6 символов', trigger: 'blur' },
  ],
})

const { setTokens } = useAuth()

const onSubmit = async () => {
  if (!formRef.value) return
  try {
    await formRef.value.validate()
    loading.value = true

    const { data, error } = await useApiService().auth.login({
      username: form.login,
      password: form.password,
    })

    if (error.value || !data.value) throw new Error('Auth failed')

    const payload = data.value as { access_token: string; refresh_token?: string }
    setTokens(payload?.data, form.remember)

    form.remember ? localStorage.setItem('remember_login', form.login) : localStorage.removeItem('remember_login')
    await router.push('/example')
  } catch (e) {
    console.error('Неверный логин или пароль')
  } finally {
    loading.value = false
  }
}


const goHome = () => router.push('/')

onMounted(() => {
  const saved = localStorage.getItem('remember_login')
  if (saved) form.login = saved
})
</script>