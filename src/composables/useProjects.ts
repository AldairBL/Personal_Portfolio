// src/composables/useProjects.ts
export type BadgeVariant = "activo" | "en_desarrollo"

export type Project = {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  sourceUrl: string
  demoUrl?: string
  badgeText?: string
  badgeVariant?: BadgeVariant
  dimmed?: boolean
}

export function useProjects() {
  const projects: Project[] = [
    {
      title: "EduShop",
      description: "Plataforma de comercio electrónico enfocada en contenido educativo sobre recetas de cocina y artículos, integrando de forma exitosa funcionalidades clave de e-commerce.",
      tags: ["PHP", "Vue", "API", "Docker"],
      imageUrl:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
      // sourceUrl: "este no debe de tener código fuente público",
      sourceUrl: "",
      demoUrl: "https://tienda.medushop.store/loginGoogle",
      badgeText: "Publicado",
      badgeVariant: "activo",
    },
    {
      title: "NetWatch",
      description:
        "CLI/TUI en C/C++ para inspeccionar y visualizar el estado de la red local en Linux en tiempo real.",
      tags: ["C++", "Linux", "Networking"],
      imageUrl:
        "https://res.cloudinary.com/dyqqzf05d/image/upload/v1769195791/ChatGPT_Image_23_ene_2026_01_16_23_p.m._sogs4j.png",
      //sourceUrl: "el codigo se mostrara cuando este terminado",
      badgeText: "En desarrollo",
      sourceUrl: "",
      badgeVariant: "en_desarrollo",
      dimmed: true,
    },
  ]
  return { projects }
}
