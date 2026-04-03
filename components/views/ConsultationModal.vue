<template>
  <Transition name="modal-fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      @click.self="$emit('update:modelValue', false)"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-md"
        @click="$emit('update:modelValue', false)"
      />

      <!-- Modal -->
      <div
        class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-7 pt-7 pb-0">
          <h2 class="text-2xl font-bold text-[#0f0c29] tracking-tight">
            {{ $t("consultation.title") }}
          </h2>
          <button
            class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
            @click="$emit('update:modelValue', false)"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Divider -->
        <div
          class="mx-7 mt-5 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        />

        <!-- Form -->
        <form
          novalidate
          class="px-7 py-6 flex flex-col gap-4"
          @submit.prevent="submitForm"
        >
          <!-- Alerts -->
          <Transition name="fade-alert">
            <div
              v-if="status === 'success'"
              class="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm font-medium"
            >
              ✅ {{ $t("consultation.success") }}
            </div>
          </Transition>
          <Transition name="fade-alert">
            <div
              v-if="status === 'error'"
              class="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium"
            >
              ❌ {{ $t("consultation.error") }}
            </div>
          </Transition>

          <template v-if="status !== 'success'">
            <!-- Row: Ism + Kompaniya -->
            <div class="grid grid-cols-2 gap-3">
              <Field :label="$t('consultation.name')" required icon="👤">
                <label
                  class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {{ $t("consultation.name") }}
                  <span class="text-red-500">*</span>
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  :placeholder="$t('consultation.namePlaceholder')"
                  :class="fieldClass(errors.name)"
                />
                <p
                  v-if="errors.name"
                  class="text-[11px] text-red-500 mt-1 font-medium"
                >
                  {{ $t("consultation.nameError") }}
                </p>
              </Field>
              <Field :label="$t('consultation.company')" icon="🏢">
                <label
                  class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {{ $t("consultation.company") }}
                </label>
                <input
                  v-model="form.company"
                  type="text"
                  :placeholder="$t('consultation.companyPlaceholder')"
                  :class="fieldClass(false)"
                />
              </Field>
            </div>

            <!-- Row: Telefon + Lavozim -->
            <div class="grid grid-cols-2 gap-3">
              <Field :label="$t('consultation.phone')" icon="📞">
                <label
                  class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {{ $t("consultation.phone") }}
                </label>

                <input
                  v-model="form.phone"
                  type="tel"
                  inputmode="numeric"
                  pattern="[0-9+\-\s]+"
                  placeholder="+998 90 123 45 67"
                  :class="fieldClass(false)"
                />
              </Field>
              <Field :label="$t('consultation.position')" icon="💼">
                <label
                  class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {{ $t("consultation.position") }}
                </label>
                <input
                  v-model="form.position"
                  type="text"
                  :placeholder="$t('consultation.positionPlaceholder')"
                  :class="fieldClass(false)"
                />
              </Field>
            </div>

            <!-- Email -->
            <Field :label="$t('consultation.email')" required icon="✉️">
              <label
                class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider"
              >
                {{ $t("consultation.email") }}
                <span class="text-red-500">*</span>
              </label>
              <input
                v-model="form.email"
                type="email"
                inputmode="email"
                autocomplete="email"
                placeholder="example@company.com"
                :class="fieldClass(errors.email)"
              />
              <p
                v-if="errors.email"
                class="text-[11px] text-red-500 mt-1 font-medium"
              >
                {{ $t("consultation.nameError") }}
              </p>
            </Field>

            <!-- Mavzu -->
            <Field :label="$t('consultation.subject')" icon="📌">
              <label
                class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider"
              >
                {{ $t("consultation.company") }}
              </label>
              <input
                v-model="form.subject"
                type="text"
                :placeholder="$t('consultation.subjectPlaceholder')"
                :class="fieldClass(false)"
              />
            </Field>

            <!-- Xabar -->
            <div class="flex flex-col gap-1.5">
              <label
                class="text-[11px] font-semibold text-gray-500 uppercase tracking-wider"
              >
                {{ $t("consultation.message") }}
                <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                :placeholder="$t('consultation.messagePlaceholder')"
                :class="[
                  'w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none leading-relaxed',
                  errors.message
                    ? 'border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-200'
                    : 'border-gray-200 bg-gray-50 focus:ring-[#1a3fbb]/20 focus:border-[#1a3fbb]',
                ]"
              />
              <p
                v-if="errors.message"
                class="text-[11px] text-red-500 font-medium"
              >
                {{ $t("consultation.nameError") }}
              </p>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="status === 'loading'"
              class="w-full mt-1 bg-gradient-to-br from-[#1a3fbb] to-[#0a2c91] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 text-sm tracking-wide shadow-lg shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {{
                status === "loading"
                  ? $t("consultation.sending")
                  : $t("consultation.submit") + " →"
              }}
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

const form = ref({
  name: "",
  company: "",
  position: "",
  subject: "",
  message: "",
  phone: "",
  email: "",
});
const status = ref<"idle" | "loading" | "success" | "error">("idle");
const errors = ref({ name: false, email: false, message: false });

function fieldClass(hasError: boolean) {
  return [
    "w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:bg-white transition-all",
    hasError
      ? "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-200"
      : "border-gray-200 bg-gray-50 focus:ring-[#1a3fbb]/20 focus:border-[#1a3fbb]",
  ].join(" ");
}

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      status.value = "idle";
      errors.value = { name: false, email: false, message: false };
      form.value = {
        name: "",
        company: "",
        position: "",
        subject: "",
        message: "",
        phone: "",
        email: "",
      };
    }
  },
);

async function submitForm() {
  errors.value = {
    name: !form.value.name.trim(),
    email: !form.value.email.trim(),
    message: !form.value.message.trim(),
  };
  if (errors.value.name || errors.value.email || errors.value.message) return;

  status.value = "loading";
  try {
    const params = {
      from_name: form.value.name,
      company: form.value.company || "kiritilmagan",
      position: form.value.position || "kiritilmagan",
      subject: form.value.subject,
      message: form.value.message,
      contact_phone: form.value.phone || "kiritilmagan",
      contact_email: form.value.email,
    };
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      params,
      EMAILJS_PUBLIC_KEY,
    );
    status.value = "success";
  } catch (err) {
    console.error("EmailJS error:", err);
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
