<template>
    <main class="flex-1 pb-20">
        <section class="contact">

            <h1 class="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight font-display">
                Contacto
            </h1>

            <p class="intro">
                Si eres <span class="text-slate-200 font-medium">reclutador</span>, <span
                    class="text-slate-200 font-medium">empresa</span> o
                <span class="text-slate-200 font-medium">cliente</span> y deseas ponerte en contacto conmigo para
                oportunidades laborales, proyectos de desarrollo o colaboraciones profesionales, estaré encantado de
                conversar contigo.
                <br /><br />
                Para una comunicación más rápida y directa, en la página principal encontrarás mi enlace a
                <span class="text-slate-200 font-medium">WhatsApp</span>, ideal para una primera toma de contacto.
            </p>

            <ul class="contact-list">
                <li class="item">
                    <strong class="label">Email:</strong>
                    <a class="link" href="mailto:aldairborbonio@gmail.com">aldairborbonio@gmail.com</a>
                </li>

                <li class="item">
                    <strong class="label">LinkedIn:</strong>
                    <a class="link" href="https://www.linkedin.com/in/aldair-borboniol" target="_blank" rel="noopener">
                        linkedin.com/in/aldair-borboniol
                    </a>
                </li>

            </ul>
        </section>
    </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact {
    max-width: 720px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
}

.intro {
    margin-top: 0.75rem;
    margin-bottom: 1.75rem;
    color: rgb(148 163 184);
    /* slate-400 */
    line-height: 1.7;
    font-size: 0.98rem;
}

.contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.9rem;
}

.label {
    color: rgba(255, 255, 255, 0.92);
    font-weight: 700;
}

.link {
    color: #3b82f6;
    /* blue-500 */
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}
</style>
