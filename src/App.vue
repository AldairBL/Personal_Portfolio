<template>
  <div class="bg-[var(--background-dark)] text-white">
    <div class="relative flex min-h-screen w-full flex-col mx-auto overflow-x-hidden shadow-2xl
            max-w-[480px] md:max-w-[920px] md:rounded-2xl md:my-6
            border-x md:border border-slate-800">
      <AppHeader />

      <main class="flex-1 pb-28">

        <RouterView />
      </main>

      <AppFooter />

      <div class="h-8 bg-[var(--background-dark)]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
</script>
