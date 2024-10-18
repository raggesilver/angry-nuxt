<template>
  <header class="sticky top-0 bg-background/70 backdrop-blur-3xl border-b z-50">
    <nav class="container min-h-16 flex items-center gap-2">
      <NuxtLink to="/" class="font-extrabold font-lg">😠 Angry Nuxt</NuxtLink>
      <Button as-child variant="ghost" size="sm" class="ml-auto">
        <NuxtLink to="/">Sign In</NuxtLink>
      </Button>
      <Button as-child size="sm">
        <NuxtLink to="/">Sign Up</NuxtLink>
      </Button>
    </nav>
  </header>
</template>
