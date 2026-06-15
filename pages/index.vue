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

useHead({
  title: "Next Spot | Yaponiya bozoriga kirish — Lead the Frontier",
  meta: [
    {
      name: "description",
      content:
        "Next Spot — O'zbekiston va Yaponiya o'rtasidagi biznes ko'prik. Yaponiya bozoriga kirish, investitsiya va hamkorlik bo'yicha professional xizmatlar.",
    },
    {
      name: "keywords",
      content:
        "Next Spot, NextSpot, next spot, nextspot, Yaponiya biznes, O'zbekiston Yaponiya, bozorga kirish, investitsiya",
    },
    { property: "og:title", content: "Next Spot | Lead the Frontier" },
    {
      property: "og:description",
      content:
        "Next Spot — Yaponiya bozoriga kirish bo'yicha professional xizmatlar.",
    },
    { property: "og:url", content: "https://nextspot.uz/" },
    { property: "og:image", content: "https://nextspot.uz/images/logo2.png" },
  ],
  link: [{ rel: "canonical", href: "https://nextspot.uz/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Next Spot",
        alternateName: ["NextSpot", "next spot", "nextspot"],
        url: "https://nextspot.uz",
        logo: "https://nextspot.uz/images/logo2.png",
        description:
          "Next Spot — O'zbekiston va Yaponiya o'rtasidagi biznes ko'prik. Yaponiya bozoriga kirish, investitsiya va hamkorlik bo'yicha professional xizmatlar.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "UZ",
        },
        sameAs: ["https://nextspot.uz"],
      }),
    },
  ],
});
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
