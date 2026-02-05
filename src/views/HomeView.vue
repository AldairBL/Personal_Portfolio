<template>
    <!-- ProfileHeader -->
    <section class="flex p-4 pt-6 @container">
        <div class="flex w-full flex-col gap-6 items-start">
            <div class="flex gap-5 flex-col items-start w-full">
                <div class="relative">
                    <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32
                   ring-4 ring-[color:var(--primary)]/30 border-2 border-[color:var(--primary)]"
                        :style="{ backgroundImage: `url('${profile.avatarUrl}')` }" />
                    <div
                        class="absolute bottom-1 right-1 h-6 w-6 bg-green-500 border-4 border-[#101922] rounded-full" />
                </div>

                <div class="flex flex-col gap-2">
                    <h1 class="text-white text-3xl font-bold leading-tight tracking-tight font-display">
                        {{ profile.title }}
                    </h1>
                    <p class="text-[#9dabb9] text-base font-normal leading-relaxed">
                        {{ profile.bio }}
                    </p>
                </div>
            </div>

            <div class="flex w-full gap-3">
                <!-- CV -->
                <a class="flex min-w-[84px] items-center justify-center gap-2 rounded-lg h-11 px-4
           bg-[#283039] text-white text-sm font-bold leading-normal tracking-wide
           flex-1 transition-opacity hover:opacity-90" :href="profile.primary.cv" target="_blank" rel="noopener">
                    <i class="mdi mdi-file-account-outline text-lg"></i>
                    <span class="truncate">CV</span>
                </a>

                <!-- WhatsApp / Contacto -->
                <a class="flex min-w-[84px] items-center justify-center gap-2 rounded-lg h-11 px-4
           bg-[#25D366] text-white text-sm font-bold leading-normal tracking-wide
           flex-1 transition-opacity hover:opacity-90 shadow-lg shadow-[#25D366]/30" :href="profile.primary.contacto"
                    target="_blank" rel="noopener">
                    <i class="mdi mdi-whatsapp text-lg"></i>
                    <span class="truncate">Contacto</span>
                </a>
            </div>

        </div>
    </section>

    <!-- ActionsBar / Social Links -->
    <section class="px-4 py-4">
        <div class="flex items-center gap-4 bg-[#283039] p-2 rounded-xl
             border border-slate-800 overflow-x-auto no-scrollbar">
            <a v-for="item in quickActions" :key="item.label" :href="item.href" target="_blank" rel="noopener"
                class="flex flex-col items-center gap-1.5 min-w-[72px] py-2 shrink-0">
                <div class="rounded-full bg-[#283039] p-3 text-white
           hover:bg-[color:var(--primary)]/20 hover:text-[color:var(--primary)]
           transition-colors cursor-pointer">
                    <i :class="`mdi ${item.icon} text-2xl`"></i>
                </div>

                <p class="text-white text-xs font-medium">
                    {{ item.label }}
                </p>
            </a>

        </div>
    </section>

    <!-- SectionHeader -->
    <section class="flex items-center justify-between px-4 pt-6 pb-2">
        <h2 class="text-white text-xl font-bold leading-tight tracking-tight font-display">
            Recent Projects
        </h2>
        <RouterLink to="/proyectos" class="text-[color:var(--primary)] text-sm font-semibold">
            See All
        </RouterLink>
    </section>

    <!-- Projects -->
    <section class="p-4 pt-2">
        <div class="grid gap-4 md:grid-cols-2">
            <ProjectCard v-for="p in featuredProjects" :key="p.sourceUrl" v-bind="p" />

        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from "vue"
import ProjectCard from "@/components/ProjectCard.vue"
import { useProjects } from "@/composables/useProjects"

const { projects } = useProjects()
const featuredProjects = computed(() => projects.slice(0, 2))


const profile = {
    avatarUrl:
        "https://res.cloudinary.com/dyqqzf05d/image/upload/v1769194972/perfil_hn28rr.jpg",
    title: "Hola, soy Aldair Borbonio",
    bio: "Cuento con la experiencia en el desarrollo de plataformas backend, APIs y sistemas distribuidos. Diseño y construyo soluciones completas: desde la lógica del negocio y la seguridad, hasta la integración con interfaces modernas y servicios en tiempo real. Disfruto trabajar en proyectos donde la arquitectura, el rendimiento y la escalabilidad son clave, siempre buscando código claro, soluciones prácticas y sistemas que realmente funcionen en producción.",
    primary: {
        cv: "https://drive.google.com/file/d/1Fx8hbMd4RlzD3H2CppngaAhgKITe9ckT/view?usp=sharing",
        contacto: "https://wa.me/qr/G7XESTDOJC64N1",
    },
}

const quickActions = [
    {
        label: "GitLab",
        icon: "mdi-gitlab",
        href: "https://gitlab.com/aldairborbonio",
    },
    {
        label: "GitHub",
        icon: "mdi-github",
        href: "https://github.com/AldairBL",
    },
    {
        label: "Correo Electrónico",
        icon: "mdi-email-outline",
        href: "mailto:aldairborbonio@gmail.com",
    },
    {
        label: "LinkedIn",
        icon: "mdi-linkedin",
        href: "https://www.linkedin.com/in/aldair-borboniol",
    },
]

</script>
