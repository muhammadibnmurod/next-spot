<script setup lang="ts">
import Believe from "~/components/views/believe.vue";
import Footer from "~/components/views/Footer.vue";
import Lead from "~/components/views/lead.vue";
import Main from "~/components/views/main.vue";
import Navbar from "~/components/views/navbar.vue";
import OurAdvantages from "~/components/views/our-advantages.vue";
import OurServices from "~/components/views/our-services.vue";
import Start from "~/components/views/start.vue";
import Uzbekistan from "~/components/views/uzbekistan.vue";
import WhyUzbekistan from "~/components/views/why-uzbekistan.vue";
</script>

<template>
  <div class="text-black bg-gray-50 min-h-screen">
    <Navbar />
    <Main />
    <OurAdvantages />
    <Lead />
    <Start />
    <OurServices />
    <WhyUzbekistan />
    <Believe />
    <Uzbekistan />
    <Footer />
  </div>
</template>
