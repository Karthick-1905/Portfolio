export const projects = [
    {
        title: "Scribbl Clone",
        src: "/Portfolio/assests/scribbl.png",
        stack: ["Next.js", "Express", "WebSockets (ws)", "Turborepo"],
        description: "Real-time collaborative drawing and guessing game built using Turborepo monorepo, Next.js frontend and Express backend communicating over raw WebSockets (ws) for low-latency canvas sync and multiplayer game state.",
        github: "https://github.com/Karthick-1905/Squiggle---A-Scribbl-clone"
    },
    {
        title: "LUNA – AI Podcast Editing",
        src: "/Portfolio/assests/Luna_logo.jpg",
        stack: ["Whisper", "XTTS", "Edge AI", "Speaker Diarization"],
        description: "Fully offline podcast editing app built for the Qualcomm Edge AI Hackathon — edit transcripts and have changes auto-applied to the original audio via local speech-to-text and voice cloning.",
        github: "https://github.com/Karthick-1905/LUNA-QUALCOMM-EDGE-AI"
    },
    {
        title: "INR VitaLink",
        src: "/projects/inr-hospital.svg",
        stack: ["React Native", "NativeWind", "FastAPI"],
        description: "Mobile app built for PSG Hospital to help patients, especially elderly ones, track INR dosage and treatment history with an accessibility-first UI.",
        github: "https://github.com/Karthick-1905/vitalink_ip_lab"
    }
];

export const skills = {
    Fullstack: ["JavaScript", "TypeScript", "Node.js", "Express", "FastAPI", "Microservices", "React.js", "React Native", "PostgreSQL", "MongoDB", "Prisma", "Drizzle"],
    AI: ["Python", "PyTorch", "Scikit-Learn"],
    "DevOps & Tools": ["Git", "GitHub", "Docker", "Nginx", "Jenkins"]
};

export const techSkillsMetadata: Record<string, { description: string; color: string }> = {
    "Python": { description: "Scripting & AI Systems", color: "#FFD343" },
    "JavaScript": { description: "Standard Web Engineering", color: "#F7DF1E" },
    "TypeScript": { description: "Static Typing & Safety", color: "#3178C6" },
    "Node.js": { description: "Server Runtime", color: "#339933" },
    "Express": { description: "Minimalist Web Framework", color: "#828282" },
    "FastAPI": { description: "High Performance APIs", color: "#009688" },
    "Microservices": { description: "Distributed Systems", color: "#ff9800" },
    "React.js": { description: "UI Components & States", color: "#61DAFB" },
    "React Native": { description: "Cross-Platform Mobile Apps", color: "#61DAFB" },
    "PostgreSQL": { description: "Relational Queries & Schemas", color: "#336791" },
    "MongoDB": { description: "NoSQL Scale & Document DB", color: "#47A248" },
    "Prisma": { description: "Object Relational Mapping", color: "#1B6D6D" },
    "Drizzle": { description: "Object Relational Mapping", color: "#1B6D6D" },
    "PyTorch": { description: "Deep Learning Framework", color: "#EE4C2C" },
    "Scikit-Learn": { description: "Machine Learning Algorithms", color: "#F89939" },
    "Git": { description: "Distributed Version Control", color: "#F05032" },
    "GitHub": { description: "Code Hosting & Collaboration", color: "#181717" },
    "Docker": { description: "Sandbox Containerized Apps", color: "#2496ED" },
    "Nginx": { description: "Reverse Proxy & Load Balancing", color: "#009639" },
    "Jenkins": { description: "Continuous Automation Server", color: "#D33833" },
};

export const journey = [
    ["2021", "Higher Secondary", "Completed schooling at Shree Niketan Matric Higher Secondary School."],
    ["2023", "Started B.E. CS (AI/ML)", "Began Bachelor's in Computer Science with AI/ML specialization at PSG College of Technology."],
    ["2024", "Club Involvement Begins", "Joined Students Union and The Eye Club, contributing to event registration systems and CTF portal development."],
    ["2025", "Hackathons", "Shortlisted for Qualcomm Edge AI Hackathon (LUNA) and selected among top teams at Google Agentic AI Hackathon."],
    ["2027", "Expected Graduation", "On track to complete B.E. in Computer Science (AI/ML) at PSG College of Technology."]
];

export const experiences = [
    ["Students Union", "Designed a microservices-based event registration system for Kriya, built backend services with Node.js and PostgreSQL, and set up CI/CD pipelines with Jenkins."],
    ["The Eye Club", "Contributed to building a CTF event portal used to manage participant flow and scoring during a college-wide cybersecurity competition."],
    ["Hackathons", "Built working prototypes under time pressure — an offline edge-AI podcast editor and an agentic AI system integrated with Google Wallet."]
];

export const events = [
    {
        year: "2026",
        type: "INTERNSHIPS",
        title: "Right Join Solutions",
        location: "Remote",
        topic: "Chatbot Development",
        description: "Engaged in backend chatbot dialogue management architectures, intent logic scaling, and state tracking.",
        link: "#"
    },
    {
        year: "2025",
        type: "HACKATHONS",
        title: "Google Agentic AI Hackathon",
        location: "Bengaluru, IN",
        topic: "Agentic Systems",
        description: "Selected among the top teams from over 900 participants; built an agentic AI system with Google Wallet integration, hosted on Google Cloud.",
        link: "#"
    },
    {
        year: "2025",
        type: "HACKATHONS",
        title: "Qualcomm Edge AI Hackathon",
        location: "Bengaluru, IN",
        topic: "Edge Inference",
        description: "Shortlisted among 1,000+ participants; built LUNA, an offline AI-powered podcast editor using Whisper and XTTS for edge devices.",
        link: "#"
    },
    {
        year: "2024",
        type: "CLUB WORK",
        title: "Kriya Event Registration Portal",
        location: "PSG College of Technology",
        topic: "Students Union",
        description: "Designed and deployed a microservices-based registration system with Node.js, PostgreSQL, and Jenkins CI/CD for the college's flagship event.",
        link: "#"
    },
    {
        year: "2024",
        type: "CLUB WORK",
        title: "CTF Event Portal",
        location: "PSG College of Technology",
        topic: "The Eye Club",
        description: "Contributed to a CTF portal handling participant flow and scoring for a college-wide cybersecurity competition.",
        link: "#"
    }
];