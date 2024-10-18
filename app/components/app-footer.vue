<script setup lang="ts">
import { GithubIcon, GlobeIcon, LinkedinIcon } from "lucide-vue-next";

const links = [
  {
    to: "https://github.com/raggesilver/angry-nuxt",
    alt: "GitHub",
    icon: GithubIcon,
  },
  {
    to: "https://linkedin.com/in/paulovi-queiroz",
    alt: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    to: "https://raggesilver.com",
    alt: "Personal Website",
    icon: GlobeIcon,
  },
];
</script>

<template>
  <footer class="border-t">
    <div
      class="container flex h-14 items-center gap-2 text-sm text-muted-foreground"
    >
      <CopyrightText class="mr-auto" />

      <NuxtLink
        v-for="link of links"
        :key="link.alt"
        :to="link.to"
        external
        target="_blank"
      >
        <component :is="link.icon" class="text-[1.2rem]" />
      </NuxtLink>
    </div>
  </footer>
</template>
