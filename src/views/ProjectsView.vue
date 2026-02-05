<template>
    <section class="p-4">
        <h1 class="text-white text-xl font-bold font-display mb-3">
            Proyectos
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard v-for="p in projects" :key="p.title" :title="p.title" :description="p.description"
                :tags="p.tags" :image-url="p.imageUrl" :source-url="p.sourceUrl" :demo-url="p.demoUrl"
                :badge-text="p.badgeText" :badge-variant="p.badgeVariant" :dimmed="p.dimmed" />
        </div>
    </section>
</template>

<script setup lang="ts">
import ProjectCard from "@/components/ProjectCard.vue"
import { useProjects } from "@/composables/useProjects"

const { projects } = useProjects()
</script>
