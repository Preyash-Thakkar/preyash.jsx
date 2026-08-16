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
            "Developed slot-based media playlists to manage brand and aggregate content.",
            "Integrated RabbitMQ for at-least-once delivery and Redis pub/sub for task coordination.",
            "Collaborated on the Pushtishangar MERN-stack e-commerce platform, refining UX flows and building a React admin panel."
        ],
        techStack: ["NodeJS", "RabbitMQ", "Redis", "MongoDB", "ReactJS"]
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
            "Completed a specialized summer internship (Jun 2023 — Jul 2023) at Marwiz Tech to build Snap Stream.",
            "Created a web application pairing digital signage displays with mobile filters, enabling in-app image capture and Snapchat-style AR try-on features.",
            "Synchronized mobile inputs and display screens via WebSocket to minimize latency."
        ],
        techStack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Python"],
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