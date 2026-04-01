<template>
  <Transition name="modal-fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      @click.self="$emit('update:modelValue', false)"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="$emit('update:modelValue', false)" />

      <!-- Modal -->
      <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <h2 class="text-lg font-bold text-gray-900">{{ $t("consultation.title") }}</h2>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            @click="$emit('update:modelValue', false)"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form -->
        <form class="px-6 py-5 flex flex-col gap-4" @submit.prevent="submitForm">
          <!-- Success message -->
          <div
            v-if="status === 'success'"
            class="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm"
          >
            {{ $t("consultation.success") }}
          </div>

          <!-- Error message -->
          <div
            v-if="status === 'error'"
            class="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm"
          >
            {{ $t("consultation.error") }}
          </div>

          <template v-if="status !== 'success'">
            <!-- 氏名 / Name -->
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-gray-700">
                {{ $t("consultation.name") }} <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                :placeholder="$t('consultation.name')"
              />
            </div>

            <!-- 会社名 / Company -->
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-gray-700">{{ $t("consultation.company") }}</label>
              <input
                v-model="form.company"
                type="text"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                :placeholder="$t('consultation.company')"
              />
            </div>

            <!-- 役職 / Position -->
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-gray-700">{{ $t("consultation.position") }}</label>
              <input
                v-model="form.position"
                type="text"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                :placeholder="$t('consultation.position')"
              />
            </div>

            <!-- 件名 / Subject -->
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-gray-700">
                {{ $t("consultation.subject") }} <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                :placeholder="$t('consultation.subject')"
              />
            </div>

            <!-- 相談内容 / Message -->
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-medium text-gray-700">
                {{ $t("consultation.message") }} <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                :placeholder="$t('consultation.message')"
              />
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="status === 'loading'"
              class="w-full bg-[#1a3fbb] hover:bg-[#0a2c91] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors duration-200 text-sm"
            >
              {{ status === 'loading' ? $t('consultation.sending') : $t('consultation.submit') }}
            </button>
          </template>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_0td2ckc";
const EMAILJS_TEMPLATE_ID = "template_cup5k3s";
const EMAILJS_PUBLIC_KEY = "bnV1yS3_3pXROwqc1";

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{ (e: "update:modelValue", val: boolean): void }>();

const form = ref({ name: "", company: "", position: "", subject: "", message: "" });
const status = ref<"idle" | "loading" | "success" | "error">("idle");

watch(() => props.modelValue, (val) => {
  if (val) {
    status.value = "idle";
    form.value = { name: "", company: "", position: "", subject: "", message: "" };
  }
});

async function submitForm() {
  status.value = "loading";
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.value.name,
        company: form.value.company || "—",
        position: form.value.position || "—",
        subject: form.value.subject,
        message: form.value.message,
      },
      EMAILJS_PUBLIC_KEY
    );
    status.value = "success";
  } catch {
    status.value = "error";
  }
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
