export const content = {
    hero: {
        title: {
            en: "Hi, I'm Cesar Eduardo Meza.",
            es: "Hola, soy Cesar Eduardo Meza.",
        },
        subtitle: {
            en: "Frontend developer specializing in interfaces that actually work — fast, well-built, and faithfully translated from design.",
            es: "Desarrollador frontend especializado en interfaces que funcionan de verdad — rápidas, bien construidas y traducidas fielmente desde diseño.",
        },
        description: {
            en: "React · Next.js · TypeScript — fast, well-built interfaces with measurable impact.",
            es: "React · Next.js · TypeScript — interfaces rápidas, bien construidas y con impacto medible.",
        },
        projectsBtn: { en: "View Projects", es: "Ver proyectos" },
        cvBtn: { en: "Download CV", es: "Descargar CV" },
    },

    about: {
        text: {
            en: "I have experience building operational tools in React and Next.js that real teams use daily. I focus on performance, visual detail, and measurable results—not just making the code work, but making sure it solves a specific problem. I integrate AI into my workflow to deliver faster and with higher quality.",
            es: "Tengo experiencia construyendo herramientas operativas en React y Next.js que equipos reales usan a diario. Me enfoco en rendimiento, detalle visual y resultados medibles — no solo en que el código funcione, sino en que resuelva algo concreto. Integro IA en mi flujo de trabajo para entregar más rápido y con mejor calidad.",
        },
    },

    skills: {
        backend: ["Node.js", "Express", "PHP", "Python"],
        frontend: ["React", "Next.js", "Vue", "Angular", "JavaScript(ES6+)", "TypeScript", "Tailwind", "Bootstrap"],
        databases: ["SQL Server", "MySQL", "MongoDB", "Firebase"],
        tools: ["Git", "GitHub", "Docker", "Firebase Hosting"],
        uiux: {
            en: ["Figma", "Responsive Design", "Design-to-Code"],
            es: ["Figma", "Diseño Responsivo", "Diseño a código"],
        },
        ai: {
            en: ["Integrating AI into workflow (Claude, Cursor)", "AI-assisted automation"],
            es: ["Integración de IA en flujo de trabajo (Claude, Cursor)", "Automatización asistida por IA"],
        },
    },

    experience: [
        {
            role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
            company: "AUTOSISTEMA DE TORREÓN",
            period: {
                en: "Aug 2024 – Feb 2026",
                es: "Ago 2024 – Feb 2026",
            },
            bullets: {
                en: [
                    "Built administrative interfaces with React for operations teams, including dashboards and real-time monitoring systems used daily in production.",
                    "Implemented complex data visualizations with Highcharts, translating business requirements into functional interfaces.",
                    "Reduced reporting time by 40% through automation and data centralization.",
                    "Automated Excel-to-database workflows, saving 5–7 hours per week for the operations team.",
                    "Improved incident response time by 25% through real-time KPI monitoring.",
                ],
                es: [
                    "Desarrollé interfaces administrativas con React para equipos de operaciones, incluyendo paneles de control y sistemas de monitoreo en producción.",
                    "Implementé visualizaciones de datos complejas con Highcharts, traduciendo requerimientos de negocio en interfaces funcionales.",
                    "Reduje el tiempo de generación de informes en un 40% mediante automatización y centralización de datos.",
                    "Automaticé flujos de trabajo de Excel a base de datos, ahorrando entre 5 y 7 horas semanales al equipo operativo.",
                    "Implementé monitoreo de KPIs en tiempo real, mejorando el tiempo de respuesta a incidentes en un 25%.",
                ],
            },
        },

        {
            role: { en: "Frontend Intern", es: "Practicante de Desarrollo Frontend" },
            company: "CICESE-UAT",
            period: {
                en: "Feb 2024 - Aug 2024",
                es: "Feb 2024 - Ago 2024",
            },
            bullets: {
                en: [
                    "Developed internal web applications with Vue.js for data visualization, consuming REST APIs from the backend.",
                    "Built an interactive virtual tour platform with 360° images, delivered production-ready.",
                    "Designed and managed MySQL databases supporting internal tools.",
                    "Worked directly from mockups and written specs as the single source of truth for each delivery.",
                ],
                es: [
                    "Desarrollé aplicaciones web internas con Vue.js para visualización de datos, consumiendo APIs REST del backend.",
                    "Construí una plataforma interactiva de visitas virtuales con imágenes 360°, entregada lista para producción.",
                    "Diseñé y gestioné bases de datos MySQL para soporte de herramientas internas.",
                    "Trabajé directamente con especificaciones y mockups como fuente de verdad para cada entrega.",
                ],
            },
        },
    ],

    projects: [
        {
            name: "LineMonitor",
            description: {
                en: "Real-time productivity monitoring dashboard comparing actual output vs production targets, used daily by operations teams.",
                es: "Dashboard de monitoreo de productividad en tiempo real comparando producción real vs metas, usado diariamente por equipos operativos.",
            },
            image: "/projects/linemonitor6.png",
            imageAlt: "LineMonitor dashboard preview",
            bullets: {
                en: [
                    "Real-time KPIs by plant and shift, built with React and Highcharts.",
                    "Improved incident response time by 25% through live visibility.",
                    "100% increase in KPI visibility across operations teams.",
                ],
                es: [
                    "KPIs en tiempo real por planta y turno, construido con React y Highcharts.",
                    "Mejoró el tiempo de respuesta a incidentes en un 25% mediante visibilidad en tiempo real.",
                    "Incremento del 100% en visibilidad de KPIs para equipos operativos.",
                ],
            },
            stack: ["React", "Node.js", "SQL Server", "Highcharts"],
        },

        {
            name: "InventoryManager",
            description: {
                en: "Enterprise inventory system for full device lifecycle management, from assignment to audit history.",
                es: "Sistema empresarial para gestión completa del ciclo de vida de dispositivos, desde asignación hasta historial de auditoría.",
            },
            image: "/projects/inventorymanager3.png",
            imageAlt: "InventoryManager preview",
            bullets: {
                en: [
                    "Full device lifecycle control with employee assignment and audit trail.",
                    "Reduced lost or untracked devices by approximately 30%.",
                    "Role-based access control for different team levels.",
                ],
                es: [
                    "Control completo del ciclo de vida con asignación a empleados e historial de auditoría.",
                    "Reducción de ~30% en dispositivos perdidos o sin seguimiento.",
                    "Control de acceso por roles para distintos niveles del equipo.",
                ],
            },
            stack: ["React", "Node.js", "Tailwind CSS", "SQL Server"],
        },

        {
            name: "CtraceBranchCheck",
            description: {
                en: "Cable traceability system linking serial numbers to technical schematics, reducing manual entry errors in production records.",
                es: "Sistema de trazabilidad de cables que vincula números de serie con esquemáticos técnicos, reduciendo errores de captura en registros de producción.",
            },
            image: "/projects/ctrace6.png",
            imageAlt: "CtraceBranchCheck preview",
            bullets: {
                en: [
                    "Automated cable registration and validation, eliminating manual steps.",
                    "Linked serial numbers directly to electrical schematics for full traceability.",
                    "Reduced manual data entry errors by approximately 30%.",
                ],
                es: [
                    "Automatización del registro y validación de cables, eliminando pasos manuales.",
                    "Vinculación directa de seriales con esquemáticos eléctricos para trazabilidad completa.",
                    "Reducción de errores de captura manual en aproximadamente un 30%.",
                ],
            },
            stack: ["PHP", "JavaScript", "Bootstrap", "SQL Server"],
        },

        {
            name: "Virtual Tour Platform",
            description: {
                en: "Interactive platform for building and exploring 360° virtual tours, delivered production-ready for CICESE.",
                es: "Plataforma interactiva para construir y explorar recorridos virtuales 360°, entregada lista para producción en CICESE.",
            },
            image: "/projects/virtual-tour2.png",
            imageAlt: "Virtual Tour Platform preview",
            bullets: {
                en: [
                    "360° and cube-based scenes with smooth interactive navigation.",
                    "Enabled remote facility exploration for non-local stakeholders.",
                    "Delivered production-ready and adopted by CICESE research teams.",
                ],
                es: [
                    "Escenas 360° y por cubo con navegación interactiva fluida.",
                    "Permitió exploración remota de instalaciones para partes interesadas no locales.",
                    "Entregada lista para producción y adoptada por equipos de investigación del CICESE.",
                ],
            },
            stack: ["Node.js", "Vue.js", "MySQL", "Pannellum"],
        },
    ],

    contact: {
        title: {
            en: "Interested in working together?",
            es: "¿Te interesa trabajar conmigo?",
        },
        subtitle: {
            en: "Let’s build something useful.",
            es: "Construyamos algo útil.",
        },
        email: "eduardomezaav@gmail.com",
        linkedin: "https://www.linkedin.com/in/eduardo-meza-avila/",
        github: "https://github.com/EduardoMezaA",
    },

};
