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
            "Built a MERN-stack audiometer system where administrators create camps, assign audiologists via login IDs, register patients, and conduct audiogram tests.",
            "Implemented BLE communication using ESP32 (Arduino) and Nordic nRF via Node.js (noble).",
            "Developed backend services for an inventory management system for Lenskart, designing RESTful APIs for stock tracking and order processing.",
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
        id: "marwiz-2024",
        period: "Jan 2024 — Dec 2024",
        role: "Software Engineer",
        entity: "Marwiz Tech Pvt. Ltd.",
        location: "Vadodara",
        type: "corporate",
        description: [
            "Built the WeConverse MERN-stack event management app, integrating Azure Translator Text and Google Cloud Speech-to-Text.",
            "Used socket.io and Azure Translation Service in the chat module to enable in-app message translation.",
            "Developed slot-based media playlists to manage brand and aggregate content, integrating RabbitMQ and Redis pub/sub."
        ],
        techStack: ["ReactJS", "NodeJS", "RabbitMQ", "Redis", "WebSocket"]
    },
    {
        id: "pdeu-2024",
        period: "Nov 2020 — May 2024",
        role: "Bachelor of Technology, Computer Science",
        entity: "Pandit Deendayal Energy University",
        location: "Gandhinagar",
        type: "education",
        description: [
            "Graduated with a CGPA of 9.19/10.",
            "Developed Pushtishangar, a MERN-stack e-commerce platform with a React admin panel.",
            "Created Snap Stream (Jun 2023 — Jul 2023), synchronizing mobile inputs and digital signage displays via WebSocket for enriched engagement."
        ],
        techStack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Python"],
        credentials: [
            {
                label: "MongoDB Developer and Administrator",
                href: "https://certificates.simplicdn.net/share/4323925_1683967200.pdf"
            },
            {
                label: "Data Analytics with Python",
                href: "https://drive.google.com/file/d/1fo-D0P_uPJoxAD4vqIflf3Xf64_vjNoQ/view"
            }
        ]
    }
];