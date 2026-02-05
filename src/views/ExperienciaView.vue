<!-- src/views/ExperienciaView.vue -->
<template>
    <section class="p-4 pb-24">
        <h1 class="text-white text-xl font-bold font-display mb-4">Experiencia</h1>

        <div class="grid gap-4">
            <!-- TEAM-X -->
            <article class="rounded-xl border border-slate-800 bg-[#1c2127] shadow-xl overflow-hidden">
                <header class="p-4 pb-3 border-b border-slate-800">
                    <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                            <h2 class="text-white text-lg font-bold font-display leading-tight">
                                Desarrollador Full Stack
                            </h2>
                            <p class="text-[#9dabb9] text-sm font-medium">TEAM-X</p>
                            <p class="text-[#9dabb9] text-xs mt-1">2025-01 — Actual</p>
                        </div>

                        <div class="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/90 text-white"
                            title="Experiencia vigente">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span class="text-[10px] font-bold tracking-wider uppercase">Actual</span>
                        </div>
                    </div>
                </header>

                <div class="p-4 pt-3">
                    <ul class="list-disc pl-5 space-y-2 text-[#9dabb9] text-sm leading-relaxed">
                        <li>
                            Evolución de framework interno modular por plugins, mejorando estabilidad y escalabilidad.
                        </li>
                        <li>
                            Implementación de hidratación de Vue para integrar componentes Vue nativamente en cualquier
                            plugin
                            (arquitectura híbrida).
                        </li>
                        <li>
                            Desarrollo de plataforma e-commerce con roles, catálogo, carrito, pedidos, logística y
                            reportes.
                        </li>
                        <li>
                            Implementación de CI/CD con GitLab y fortalecimiento de seguridad con control de acceso
                            basado en
                            atributos (ABAC).
                        </li>
                        <li>
                            Infraestructura con Docker/Docker Compose y uso de Redis para operaciones en tiempo real y
                            almacenamiento
                            temporal.
                        </li>
                    </ul>

                    <div class="mt-4">
                        <p class="text-white text-sm font-bold font-display mb-2">Tecnologías usadas</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="t in tech.teamx" :key="t"
                                class="px-2 py-0.5 rounded text-[10px] font-medium bg-[#283039] text-slate-200">
                                {{ t }}
                            </span>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Welldex Logistics -->
            <article class="rounded-xl border border-slate-800 bg-[#1c2127] shadow-xl overflow-hidden">
                <header class="p-4 pb-3 border-b border-slate-800">
                    <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                            <h2 class="text-white text-lg font-bold font-display leading-tight">
                                Becario Desarrollador Full Stack
                            </h2>
                            <p class="text-[#9dabb9] text-sm font-medium">Welldex Logistics</p>
                            <p class="text-[#9dabb9] text-xs mt-1">2024-06 — 2024-12</p>
                        </div>

                        <div class="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[color:var(--primary)] text-white"
                            title="Experiencia finalizada">
                            <i class="mdi mdi-check-circle-outline text-sm"></i>
                            <span class="text-[10px] font-bold tracking-wider uppercase">Finalizado</span>
                        </div>
                    </div>
                </header>

                <div class="p-4 pt-3">
                    <ul class="list-disc pl-5 space-y-2 text-[#9dabb9] text-sm leading-relaxed">
                        <li>Diseño y desarrollo de sistema web de helpdesk para seguimiento y resolución de tickets.
                        </li>
                        <li>
                            Desarrollo full stack con Laravel, Node.js, React y Next.js aplicando buenas prácticas de
                            arquitectura y
                            rendimiento.
                        </li>
                        <li>Diseño e implementación de APIs RESTful seguras e integración entre sistemas.</li>
                        <li>
                            Automatización de procesos internos e integración de módulos de IA para reducir tareas
                            repetitivas.
                        </li>
                        <li>
                            Implementación de autenticación OAuth2 con Google (Laravel Socialite / Google API Client) y
                            trabajo
                            colaborativo con GitLab.
                        </li>
                    </ul>

                    <div class="mt-4">
                        <p class="text-white text-sm font-bold font-display mb-2">Tecnologías usadas</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="t in tech.welldex" :key="t"
                                class="px-2 py-0.5 rounded text-[10px] font-medium bg-[#283039] text-slate-200">
                                {{ t }}
                            </span>
                        </div>
                    </div>
                </div>
            </article>

            <!-- TECNM -->
            <article class="rounded-xl border border-slate-800 bg-[#1c2127] shadow-xl overflow-hidden">
                <header class="p-4 pb-3 border-b border-slate-800">
                    <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                            <h2 class="text-white text-lg font-bold font-display leading-tight">
                                Programador / Líder de proyecto (Máquina de Turing)
                            </h2>
                            <p class="text-[#9dabb9] text-sm font-medium">TECNM - Tecnológico Nacional de México</p>
                            <p class="text-[#9dabb9] text-xs mt-1">2024-01 — 2025-12</p>
                        </div>

                        <div class="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#283039] text-white border border-slate-700"
                            title="Proyecto académico">
                            <i class="mdi mdi-school-outline text-sm"></i>
                            <span class="text-[10px] font-bold tracking-wider uppercase">Académico</span>
                        </div>
                    </div>
                </header>

                <div class="p-4 pt-3">
                    <ul class="list-disc pl-5 space-y-2 text-[#9dabb9] text-sm leading-relaxed">
                        <li>
                            Colaboración y liderazgo en algoritmos de simulación de Máquina de Turing (bidireccional y
                            multicinta).
                        </li>
                        <li>
                            Diseño de protocolo de investigación y propuesta del proyecto, y desarrollo del algoritmo de
                            simulación
                            multicinta.
                        </li>
                    </ul>

                    <div class="mt-4">
                        <p class="text-white text-sm font-bold font-display mb-2">Tecnologías usadas</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="t in tech.tecnm" :key="t"
                                class="px-2 py-0.5 rounded text-[10px] font-medium bg-[#283039] text-slate-200">
                                {{ t }}
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
const tech = {
    teamx: ["PHP", "Vue", "JavaScript", "Docker", "Docker Compose", "Redis", "GitLab CI/CD"],
    welldex: ["Laravel", "Node.js", "React", "Next.js", "OAuth2 (Google)", "APIs REST", "GitLab"],
    tecnm: ["Algoritmos", "Simulación", "Investigación"],
}
</script>
