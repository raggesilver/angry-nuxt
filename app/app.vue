<script setup lang="ts">
import { Toaster } from "~/components/ui/sonner";

import "vue-sonner/style.css";
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
    <Toaster rich-colors />
  </NuxtLayout>
</template>
