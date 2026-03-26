<script setup lang="ts">
import Lead from "~/components/views/lead.vue";
import Main from "~/components/views/main.vue";
import Navbar from "~/components/views/navbar.vue";
import OurAdvantages from "~/components/views/our-advantages.vue";
import OurServices from "~/components/views/our-services.vue";
import Start from "~/components/views/start.vue";
</script>

<template>
  <div class="text-black bg-gray-50 min-h-screen">
    <Navbar />
    <Main />
    <OurAdvantages />
    <Lead />
    <Start />
    <OurServices />
  </div>
</template>
