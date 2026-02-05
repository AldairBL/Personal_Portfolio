<template>
    <nav class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] md:max-w-[920px]
           bg-[color:var(--background-dark)]/90 backdrop-blur-lg
           border-t border-slate-800 z-50" aria-label="Navegación inferior">
        <div class="flex justify-around items-center py-3">
            <RouterLink to="/" class="flex flex-col items-center"
                :class="isActive('/') ? 'text-[var(--primary)]' : 'text-slate-400'">
                <span class="material-symbols-outlined fill-1">home</span>
                <span class="text-[10px] font-bold">Inicio</span>
            </RouterLink>

            <RouterLink to="/proyectos" class="flex flex-col items-center"
                :class="isActive('/proyectos') ? 'text-[var(--primary)]' : 'text-slate-400'">
                <span class="material-symbols-outlined">folder</span>
                <span class="text-[10px] font-bold">Proyectos</span>
            </RouterLink>

            <RouterLink to="/about" class="flex flex-col items-center"
                :class="isActive('/about') ? 'text-[var(--primary)]' : 'text-slate-400'">
                <span class="material-symbols-outlined">account_circle</span>
                <span class="text-[10px] font-bold">Experiencia</span>
            </RouterLink>

            <RouterLink to="/contacto" class="flex flex-col items-center"
                :class="isActive('/contacto') ? 'text-[var(--primary)]' : 'text-slate-400'">
                <span class="material-symbols-outlined">chat_bubble</span>
                <span class="text-[10px] font-bold">Contacto</span>
            </RouterLink>
        </div>

        <!-- iOS safe-area (evita franja rara abajo en algunos móviles) -->
        <div class="h-[env(safe-area-inset-bottom)]"></div>
    </nav>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const currentPath = computed(() => route.path)

function isActive(path: string) {
    return currentPath.value === path
}
</script>
