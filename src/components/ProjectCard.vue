<template>
    <article class="flex flex-col rounded-xl overflow-hidden shadow-xl
           bg-[#1c2127] border border-slate-800" :class="dimmed ? 'opacity-90' : ''">
        <div class="relative w-full aspect-video bg-center bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url('${imageUrl}')` }">
            <div v-if="badgeText"
                class="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 text-white rounded-full backdrop-blur-sm"
                :class="badgeVariant === 'activo' ? 'bg-green-500/90' : 'bg-[color:var(--primary)]'">
                <template v-if="badgeVariant === 'activo'">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                </template>

                <span class="text-[10px] font-bold tracking-wider uppercase">{{ badgeText }}</span>
            </div>
        </div>

        <div class="flex flex-col gap-3 p-4">
            <div class="flex flex-col gap-1">
                <h3 class="text-white text-lg font-bold leading-tight font-display">
                    {{ title }}
                </h3>

                <p class="text-[#9dabb9] text-sm font-normal leading-snug">
                    {{ description }}
                </p>
            </div>

            <div class="flex items-center gap-2 flex-wrap">
                <span v-for="t in tags" :key="t"
                    class="px-2 py-0.5 bg-[#283039] text-slate-200 rounded text-[10px] font-medium">
                    {{ t }}
                </span>
            </div>

            <div class="flex items-center gap-3 mt-1">
                <!-- Demo -->
                <a v-if="demoUrl" class="flex-1 flex items-center justify-center rounded-lg h-9 px-4
           bg-[color:var(--primary)] text-white text-xs font-bold leading-normal
           transition-all hover:opacity-90" :href="demoUrl" target="_blank" rel="noopener">
                    <i class="mdi mdi-open-in-new mr-1.5"></i>
                    <span>Ir al sitio</span>
                </a>

                <!-- Código público -->
                <a v-if="sourceUrl" class="flex-1 flex items-center justify-center rounded-lg h-9 px-4
           bg-[#283039] text-white text-xs font-bold leading-normal
           border border-slate-700" :href="sourceUrl" target="_blank" rel="noopener">
                    <i class="mdi mdi-console mr-1.5"></i>
                    <span>Código</span>
                </a>

                <!-- En desarrollo -->
                <div v-else-if="badgeVariant === 'en_desarrollo'" class="flex-1 flex items-center justify-center rounded-lg h-9 px-4
           bg-[#283039] text-yellow-400 text-xs font-bold
           border border-slate-700 cursor-not-allowed opacity-80" title="Proyecto en desarrollo">
                    <i class="mdi mdi-progress-clock mr-1.5"></i>
                    <span>En desarrollo</span>
                </div>

                <!-- Privado -->
                <div v-else class="flex-1 flex items-center justify-center rounded-lg h-9 px-4
           bg-[#283039] text-slate-400 text-xs font-bold
           border border-slate-700 cursor-not-allowed opacity-70" title="Código privado">
                    <i class="mdi mdi-lock-outline mr-1.5"></i>
                    <span>Privado</span>
                </div>
            </div>

        </div>
    </article>
</template>

<script setup lang="ts">
type BadgeVariant = "activo" | "privado" | "desarrollo" | "en_desarrollo"


withDefaults(
    defineProps<{
        title: string
        description: string
        tags: string[]
        imageUrl: string
        sourceUrl?: string
        demoUrl?: string
        badgeText?: string
        badgeVariant?: BadgeVariant
        dimmed?: boolean
    }>(),
    {
        badgeVariant: "en_desarrollo",
    }
)


</script>
