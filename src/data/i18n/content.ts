export const content = {
    hero: {
        title: {
            en: "Hi, I'm Cesar Eduardo Meza.",
            es: "Hola, soy Cesar Eduardo Meza.",
        },
        subtitle: {
            en: "I build internal web systems that improve operational efficiency and decision-making.",
            es: "Desarrollo sistemas web internos que mejoran la eficiencia operativa y la toma de decisiones.",
        },
        description: {
            en: "Experience building dashboards, automation, and enterprise tools with measurable impact.",
            es: "Experiencia desarrollando dashboards, automatización y herramientas empresariales con impacto medible.",
        },
        projectsBtn: { en: "View Projects", es: "Ver proyectos" },
        cvBtn: { en: "Download CV", es: "Descargar CV" },
    },

    about: {
        text: {
            en: "Web developer experienced in building internal tools, dashboards, and automation systems used in real production environments. Focused on clarity, performance, and measurable results.",
            es: "Desarrollador web con experiencia en la creación de herramientas internas, dashboards y sistemas de automatización utilizados en entornos productivos reales. Enfocado en claridad, rendimiento y resultados medibles.",
        },
    },

    skills: {
        backend: ["PHP", "Node.js", "Express"],
        frontend: ["JavaScript", "TypeScript", "React", "Vue", "Tailwind", "Bootstrap"],
        databases: ["SQL Server", "MySQL", "MongoDB", "Firebase"],
        tools: ["Git", "GitHub", "Docker", "Firebase Hosting", "AWS (basic)"],
        uiux: ["Figma", "Adobe XD", "Responsive Design", "Design-to-Code"],
    },

    experience: [
        {
            role: { en: "Web Developer", es: "Desarrollador Web" },
            company: "AUTOSISTEMA DE TORREÓN",
            period: "Jun 2025 – Dec 2025",
            bullets: {
                en: [
                    "Developed internal dashboards and real-time monitoring systems",
                    "Reduced reporting time by 40%",
                    "Automated Excel-to-database workflows, saving 5–7 hours per week",
                    "Improved incident response time by 25% through real-time visibility",
                ],
                es: [
                    "Desarrollo de dashboards internos y sistemas de monitoreo en tiempo real",
                    "Reducción del tiempo de reportes en 40%",
                    "Automatización de flujos Excel a base de datos (5–7 h/semana)",
                    "Mejoró el tiempo de respuesta a incidentes en un 25% gracias a la visibilidad en tiempo real",
                ],
            },
        },

        {
            role: { en: "IT Intern", es: "Practicante de Sistemas Computacionales" },
            company: "CICESE-UAT",
            period: "Feb 2024 - Aug 2024",
            bullets: {
                en: [
                    "Built internal web applications using Node.js and Vue.js",
                    "Designed and managed MySQL databases",
                    "Developed a virtual tour platform using 360° images",
                    "Delivered production-ready internal tools used by staff",
                ],
                es: [
                    "Desarrollo de aplicaciones web internas utilizando Node.js y Vue.js",
                    "Diseño y administración de bases de datos MySQL",
                    "Desarrollo de plataforma de recorridos virtuales con imágenes 360°",
                    "Entrega de herramientas internas listas para producción utilizadas por el personal",
                ],
            },
        },
    ],

    projects: [
        {
            name: "LineMonitor",
            description: {
                en: "Productivity monitoring system comparing SMH vs production targets.",
                es: "Sistema de monitoreo de productividad comparando SMH vs metas de producción.",
            },
            image: "/projects/linemonitor6.png",
            imageAlt: "LineMonitor dashboard preview",
            bullets: {
                en: [
                    "Real-time KPIs by plant and shift",
                    "Used daily by operations teams",
                    "100% increase in KPI visibility",
                ],
                es: [
                    "KPIs en tiempo real por planta y turno",
                    "Uso diario por equipos operativos",
                    "Incremento del 100% en visibilidad de KPIs",
                ],
            },
            stack: ["PHP", "JavaScript", "SQL Server", "Highcharts"],
        },

        {
            name: "InventoryManager",
            description: {
                en: "Enterprise device inventory management system.",
                es: "Sistema empresarial de gestión de inventarios de dispositivos.",
            },
            image: "/projects/inventorymanager3.png",
            imageAlt: "InventoryManager preview",
            bullets: {
                en: [
                    "Full device lifecycle control",
                    "Audit history and employee assignment",
                    "~30% reduction in lost devices",
                ],
                es: [
                    "Control completo del ciclo de vida",
                    "Historial de auditoría y asignación",
                    "Reducción de ~30% en pérdidas",
                ],
            },
            stack: ["PHP", "JavaScript", "Bootstrap", "SQL Server"],
        },

        {
            name: "CtraceBranchCheck",
            description: {
                en: "Cable traceability system linking serial numbers with technical schematics to improve production record accuracy.",
                es: "Sistema de trazabilidad de cables que vincula números de serie con esquemáticos técnicos para mejorar la precisión de los registros de producción.",
            },
            image: "/projects/ctrace6.png",
            imageAlt: "CtraceBranchCheck preview",
            bullets: {
                en: [
                    "Automated cable registration and validation process",
                    "Linked serial numbers directly to electrical schematics",
                    "Reduced manual data entry errors by approximately 30%",
                ],
                es: [
                    "Automatización del proceso de registro y validación de cables",
                    "Vinculación directa de seriales con esquemáticos eléctricos",
                    "Reducción de errores de captura manual en aproximadamente 30%",
                ],
            },
            stack: ["PHP", "JavaScript", "Bootstrap", "SQL Server"],
        },

        {
            name: "Virtual Tour Platform",
            description: {
                en: "Web platform for building and exploring virtual tours.",
                es: "Plataforma web para construir y explorar recorridos virtuales.",
            },
            image: "/projects/virtual-tour2.png",
            imageAlt: "LineMonitor dashboard preview",
            bullets: {
                en: [
                    "360° and cube-based scenes",
                    "Interactive navigation",
                    "Remote facility exploration for non-local stakeholders",
                ],
                es: [
                    "Escenas 360° y por cubo",
                    "Navegación interactiva",
                    "Exploración de instalaciones remotas para partes interesadas no locales",
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
