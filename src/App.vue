<script setup>
  import TheHeader from "@/components/parts/TheHeader.vue";
  import TheBanner from "@/components/parts/TheBanner.vue";
  import TheFooter from "@/components/parts/TheFooter.vue";

  import Feature from "@/components/sections/Feature.vue";
  import Organisation from "@/components/sections/Organisation.vue";
  import Newsletter from "@/components/sections/Newsletter.vue";
  import Partner from "@/components/sections/Partner.vue";
  import Testimonials from "@/components/sections/Testimonials.vue";
  import Pricing from "@/components/sections/Pricing.vue";
  import Contact from "@/components/sections/Contact.vue";

  import { ref } from "vue";

  const menuItem = ref([
    { label: "Home", link: "#home" },
    { label: "product", link: "#home" },
    { label: "pricing", link: "#home" },
    { label: "About", link: "#home" },
    { label: "Contact", link: "#home" },
  ]);
</script>

<template>
  <TheHeader :menu="menuItem" />
  <TheBanner />
  <Feature/>
  <Organisation/>
  <Newsletter/>
  <Partner/>
  <Testimonials/>
  <Pricing/>
  <Contact/>
  <TheFooter/>
</template>
