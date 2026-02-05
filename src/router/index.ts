import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import ProjectsView from "@/views/ProjectsView.vue"
import ContactView from "@/views/ContactView.vue"
import ExperienciaView from "@/views/ExperienciaView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", name: "home", component: HomeView },
  { path: "/proyectos", name: "projects", component: ProjectsView },
  { path: "/contacto", name: "contact", component: ContactView },
  { path: "/about", name: "experience", component: ExperienciaView },],

})

export default router
