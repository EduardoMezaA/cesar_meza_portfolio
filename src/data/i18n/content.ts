export const content = {
    hero: {
        title: {
            en: "Hi, I'm Cesar Eduardo Meza.",
            es: "Hola, soy Cesar Eduardo Meza.",
        },
        subtitle: {
            en: "Full Stack developer. I own the whole stack — from the database to the interface.",
            es: "Desarrollador Full Stack. Soy responsable de todo el stack, desde la base de datos hasta la interfaz.",
        },
        description: {
            en: "React · Next.js · Node.js · TypeScript — full stack solutions with measurable impact.",
            es: "React · Next.js · Node.js · TypeScript — soluciones full stack con impacto medible.",
        },
        projectsBtn: { en: "View Projects", es: "Ver proyectos" },
        cvBtn: { en: "Download CV", es: "Descargar CV" },
    },

    about: {
        text: {
            en: "I have experience building full stack operational tools — from REST API design and database architecture to high-performance React interfaces — that real teams use daily. I focus on performance, visual detail, and measurable results, making sure the solution works end-to-end, not just on the surface. I integrate AI into my workflow to deliver faster and with higher quality.",
            es: "Tengo experiencia construyendo herramientas operativas full stack — desde el diseño de APIs REST y arquitectura de bases de datos hasta interfaces React de alto rendimiento — que equipos reales usan a diario. Me enfoco en rendimiento, detalle visual y resultados medibles, asegurando que la solución funcione de extremo a extremo, no solo en la superficie. Integro IA en mi flujo de trabajo para entregar más rápido y con mejor calidad.",
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
            role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
            company: "AUTOSISTEMA DE TORREÓN",
            period: {
                en: "Aug 2024 – Feb 2026",
                es: "Ago 2024 – Feb 2026",
            },
            bullets: {
                en: [
                    "Developed full stack solutions with React on the frontend and Node.js + SQL Server on the backend, including APIs, business logic, and dashboards used daily by operations teams.",
                    "Implemented complex data visualizations with Highcharts, translating business requirements into functional interfaces.",
                    "Reduced reporting time by 40% through end-to-end data centralization and automation.",
                    "Automated Excel-to-database workflows using Node.js scripts, saving 5–7 hours per week for the operations team.",
                    "Improved incident response time by 25% through real-time KPI monitoring.",
                ],
                es: [
                    "Desarrollé soluciones full stack con React en frontend y Node.js + SQL Server en backend, incluyendo APIs, lógica de negocio y paneles de control usados diariamente por equipos de operaciones.",
                    "Implementé visualizaciones de datos complejas con Highcharts, traduciendo requerimientos de negocio en interfaces funcionales.",
                    "Reduje el tiempo de generación de informes en un 40% mediante automatización y centralización de datos end-to-end.",
                    "Automaticé flujos de trabajo de Excel a base de datos mediante scripts en Node.js, ahorrando entre 5 y 7 horas semanales al equipo operativo.",
                    "Implementé monitoreo de KPIs en tiempo real, mejorando el tiempo de respuesta a incidentes en un 25%.",
                ],
            },
        },

        {
            role: { en: "Full Stack Intern", es: "Practicante de Desarrollo Full Stack" },
            company: "CICESE-UAT",
            period: {
                en: "Feb 2024 - Aug 2024",
                es: "Feb 2024 - Ago 2024",
            },
            bullets: {
                en: [
                    "Developed full stack internal web applications with Vue.js on the frontend and Node.js on the backend, including REST API design and MySQL database management.",
                    "Built an interactive 360° virtual tour platform end-to-end — from database to interface — delivered production-ready.",
                    "Designed and managed MySQL databases supporting internal tools used by research teams.",
                    "Worked directly from mockups and written specs as the single source of truth for each delivery.",
                ],
                es: [
                    "Desarrollé aplicaciones web internas full stack con Vue.js en frontend y Node.js en backend, incluyendo diseño de APIs REST y gestión de bases de datos MySQL.",
                    "Construí una plataforma interactiva de visitas virtuales 360° de principio a fin — desde la base de datos hasta la interfaz — entregada lista para producción.",
                    "Diseñé y administré bases de datos MySQL para soporte de herramientas internas utilizadas por equipos de investigación.",
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
                    "Full stack solution: Node.js + SQL Server backend with React and Highcharts frontend.",
                    "Improved incident response time by 25% through real-time KPI visibility.",
                    "100% increase in KPI visibility across operations teams.",
                ],
                es: [
                    "Solución full stack: backend con Node.js + SQL Server y frontend con React y Highcharts.",
                    "Mejoró el tiempo de respuesta a incidentes en un 25% mediante visibilidad de KPIs en tiempo real.",
                    "Incremento del 100% en visibilidad de KPIs para equipos operativos.",
                ],
            },
            stack: ["React", "Node.js", "SQL Server", "Highcharts"],
        },

        {
            name: "InventoryManager",
            description: {
                en: "Enterprise full stack inventory system for complete device lifecycle management, from assignment to audit history.",
                es: "Sistema empresarial full stack para gestión completa del ciclo de vida de dispositivos, desde asignación hasta historial de auditoría.",
            },
            image: "/projects/inventorymanager3.png",
            imageAlt: "InventoryManager preview",
            bullets: {
                en: [
                    "Full stack architecture: REST API with Node.js and React frontend with Tailwind CSS.",
                    "Reduced lost or untracked devices by approximately 30%.",
                    "Role-based access control for different team levels.",
                ],
                es: [
                    "Arquitectura full stack: API REST con Node.js y frontend React con Tailwind CSS.",
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
                    "Automated cable registration and validation end-to-end, eliminating manual steps.",
                    "Linked serial numbers directly to electrical schematics for full traceability.",
                    "Reduced manual data entry errors by approximately 30%.",
                ],
                es: [
                    "Automatización end-to-end del registro y validación de cables, eliminando pasos manuales.",
                    "Vinculación directa de seriales con esquemáticos eléctricos para trazabilidad completa.",
                    "Reducción de errores de captura manual en aproximadamente un 30%.",
                ],
            },
            stack: ["PHP", "JavaScript", "Bootstrap", "SQL Server"],
        },

        {
            name: "Virtual Tour Platform",
            description: {
                en: "Full stack interactive platform for building and exploring 360° virtual tours, delivered production-ready for CICESE.",
                es: "Plataforma interactiva full stack para construir y explorar recorridos virtuales 360°, entregada lista para producción en CICESE.",
            },
            image: "/projects/virtual-tour2.png",
            imageAlt: "Virtual Tour Platform preview",
            bullets: {
                en: [
                    "Built end-to-end: Vue.js frontend, Node.js backend, and MySQL database.",
                    "Enabled remote facility exploration for non-local stakeholders.",
                    "Delivered production-ready and adopted by CICESE research teams.",
                ],
                es: [
                    "Construida de extremo a extremo: frontend Vue.js, backend Node.js y base de datos MySQL.",
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
