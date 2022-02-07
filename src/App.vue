<script setup>
  import TheHeader from "@/components/parts/TheHeader.vue";
  import TheBanner from "@/components/parts/TheBanner.vue";

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
</template>
