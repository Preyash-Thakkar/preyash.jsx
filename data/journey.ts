// data/journey.ts
export const journeyData = [
    {
        id: "wehear-present",
        period: "Jan 2025 — Present",
        role: "Backend Developer",
        entity: "WeHear Innovations Pvt. Ltd.",
        location: "Ahmedabad",
        type: "corporate",
        description: [
            "WeConverse was a joint venture between Marwiz and WeHear. As a core developer of the architecture, I was offered a transfer to WeHear to explore new challenges and scale their platforms.",
            "Following the transfer, my scope expanded into hardware integration, where I built a MERN-stack audiometer system for administrators and audiologists.",
            "Implemented BLE communication using ESP32 (Arduino) and Nordic nRF via Node.js, establishing DSP pipelines for pure-tone audiometry.",
            "Developed backend services for a Lenskart inventory management system, designing RESTful APIs for stock tracking and order processing.",
            "Managed Docker container builds and manual deployments on Azure VMs behind an Nginx reverse proxy."
        ],
        techStack: ["NodeJS", "ExpressJS", "MongoDB", "ESP32", "Docker", "Azure"],
        credentials: [
            {
                label: "ISO 13485:2016 Training",
                href: "https://drive.google.com/file/d/1RMIyIdmn0BJqkHGCqldOWYPHK7fA0FUS/view?usp=sharing"
            }
        ]
    },
    {
        id: "marwiz-ft",
        period: "Jul 2024 — Dec 2024",
        role: "Software Engineer",
        entity: "Marwiz Tech Pvt. Ltd.",
        location: "Vadodara",
        type: "corporate",
        description: [
            "Transitioned to a full-time role to spearhead the backend development of the WeConverse event management app.",
            "Engineered a complex real-time translation architecture supporting 72 languages, successfully deployed at numerous national and international conferences.",
            "Integrated Azure Translator Text and Google Cloud Speech-to-Text, leveraging WebSocket and socket.io for seamless in-app multilingual support.",
            "Containerized the application with Docker and deployed it on Azure App Service."
        ],
        techStack: ["ReactJS", "NodeJS", "WebSocket", "Azure Translation", "Docker"],
        credentials: [
            {
                label: "weconverse.in",
                href: "https://weconverse.in/"
            }
        ]
    },
    {
        id: "marwiz-intern-long",
        period: "Jan 2024 — Jun 2024",
        role: "Software Engineering Intern",
        entity: "Marwiz Tech Pvt. Ltd.",
        location: "Vadodara",
        type: "corporate",
        description: [
            "Architected an offline-first, dynamic advertisement delivery network for edge devices, moving away from fragile WebSockets to a resilient RabbitMQ message queue system.",
            "Engineered edge devices to securely consume daily ad manifests—including gender, age, and emotional demographic triggers—ensuring 100% playback reliability despite network drops.",
            "Optimized high-volume analytics dashboards using Redis caching to instantly aggregate real-time ad performance across distributed locations, devices, and brands.",
            "Spearheaded direct client interactions and full-stack development for custom B2B solutions, including an employee task management system for Uma Inc. and the Pushtishangar e-commerce platform."
        ],
        techStack: ["NodeJS", "RabbitMQ", "Redis", "MongoDB", "ExpressJS"]
    },
    {
        id: "marwiz-summer-23",
        period: "Jun 2023 — Jul 2023",
        role: "Summer Engineering Intern",
        entity: "Marwiz Tech Pvt. Ltd.",
        location: "Vadodara",
        type: "corporate",
        description: [
            "Transitioned from academic environments to a rigorous professional setting, marking a profound and overwhelming shift in my engineering mindset.",
            "Adapted to strict production-grade development standards, navigating intensive code reviews, fixed architectural structures, and professional version control workflows.",
            "Applied foundational web technology concepts to architect 'Snap Stream', a real-world digital signage application.",
            "Mastered WebSocket fundamentals to bridge mobile interfaces with public displays, establishing real-time session links via QR code scanning."
        ],
        techStack: ["NodeJS", "WebSocket", "ReactJS", "ExpressJS"]
    },
    {
        id: "pdeu-2024",
        period: "Nov 2020 — May 2024",
        role: "Bachelor of Technology, Computer Science",
        entity: "Pandit Deendayal Energy University",
        location: "Gandhinagar",
        type: "education",
        description: [
            "Graduated with a 9.19/10 CGPA, focusing intensely on systems-level programming, data structures, and algorithmic complexity.",
            "Built rigorous academic foundations across core computer science domains: Operating Systems, Database Management Systems, Computer Networks, and Distributed Cloud Architecture.",
            "Emphasized rigorous Software Engineering practices, prioritizing clean architectural diagrams, modular system design, and production-grade technical documentation."
        ],
        techStack: ["DBMS", "OS", "Computer Networks", "Cloud Computing", "Software Engineering"],
        credentials: [
            {
                label: "MongoDB Developer & Admin",
                href: "https://certificates.simplicdn.net/share/4323925_1683967200.pdf"
            },
            {
                label: "Data Analytics with Python",
                href: "https://drive.google.com/file/d/1fo-D0P_uPJoxAD4vqIflf3Xf64_vjNoQ/view"
            }
        ]
    }
];