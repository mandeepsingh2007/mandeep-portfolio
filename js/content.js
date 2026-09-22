/**
 * Mandeep's Resume & Portfolio Content Data Structure
 * Sourced directly from Mandeep Singh's Official Resume
 */

const portfolioData = {
    education: [
        {
            degree: "B.Tech in Computer Science & Engineering (Specialization in AIML)",
            institution: "Guru Tegh Bahadur Institute Of Technology (GTBIT), New Delhi, India",
            period: "2024 - 2028",
            score: "CGPA: 8.5 / 10.0",
            description: "Specializing in Artificial Intelligence, Machine Learning, Deep Learning, Data Structures & Algorithms, Neural Networks, and Software Architecture."
        }
    ],

    experience: [
        {
            role: "Research Intern",
            company: "Indian Institute of Science, Bengaluru",
            subtext: "Computational Intelligence Lab (CiNT), Department of Aerospace, under Dr. SN Omkar",
            period: "August 2026 – September 2026",
            location: "",
            demoLink: "https://omnix-learning.onrender.com/reset?course=probability",
            githubLink: "https://github.com/mandeepsingh2007/Omnix--AI-enabled-learning",
            points: [
                "Built OmniX, an adaptive tutor for Class 12 Probability (NCERT ch. 13) and Differential Equations. Every student action is treated as evidence; the next activity is chosen from that, not from a fixed playlist.",
                "Mapped both courses as a prerequisite DAG. A node stays locked until BKT mastery reaches 0.90, so later topics cannot be opened while the prerequisite is still weak.",
                "Combined Bayesian Knowledge Tracing (per concept) with IRT 3PL and EAP ability θ (per course). Checkpoints and free-text recall use a low guess rate; MCQ quizzes sit higher, because guessing is easier there.",
                "Instrumented video checkpoints, a lesson-aware assistant, micro-quizzes, games, simulations, and active recall (SM-2 / Ebbinghaus). Only right/wrong verdicts move mastery. Simulation exploration is logged but ungraded, so fiddling cannot inflate the score.",
                "Re-hosted third-party games/sims and injected a telemetry bridge so iframe clicks become structured events without rewriting those pages. Socket.IO live signal feed shows each attempt as it happens.",
                "Used Groq to grade free-text, classify questions, generate recall prompts, and write a short learner profile (strengths and misconceptions)."
            ]
        },
        {
            role: "Generative AI Engineer Intern",
            company: "LawVriksh",
            period: "February 2026 – Present",
            location: "",
            points: [
                "Developed a Neural text transformation service preserving Markdown structure via sentence-level chunking and reconstruction, with both REST and gRPC interfaces.",
                "Engineered a rephraser pipeline using Groq LLM and plagiarism-check integration, reducing plagiarism scores from 90% to 0% in 2.47s with automated safe fallback logic.",
                "Engineered Context Router Pipeline using intelligent orchestration to dynamically integrate multi-section document context, enhancing the quality of AI-generated legal arguments.",
                "Built AI Humanizer service leveraging LLMs to naturalize generated legal content, improving readability and user engagement.",
                "Engineered a production-grade Citation Engine using Python/FastAPI and InLegalBERT, implementing semantic search and real-time verification of legal sources.",
                "Developed an interactive Citation Map to visualize complex legal relationships, building the testing interface in React with NLP-based extraction and dynamic SVG rendering."
            ]
        },
        {
            role: "Open Source Contributor",
            company: "Kornia Geometric Computer Vision (Spatial AI)",
            period: "",
            location: "",
            githubLink: "https://github.com/kornia/kornia/pulls?q=is%3Apr+is%3Aclosed+author%3Amandeepsingh2007",
            points: [
                "Contributed Naflex feature for SigLIP2 model, successfully merged PR enhancing vision-language capabilities.",
                "Developing native PyTorch implementation of PaliGemma model with Hugging Face weight loading support stored in Supabase."
            ]
        }
    ],

    freelance: [
        {
            title: "Automated Curriculum Test Generation & Assessment Portal",
            category: "Freelance Client Deliverable",
            tag: "EdTech & Multi-School Examination Portal",
            subtitle: "Developed for Multi-School K-12 Curriculum • Grounded AI Question Paper Generation & Auto-Evaluation System",
            tech: ["Google Gemini AI", "Multimodal RAG", "Python & FastAPI", "React.js", "Curriculum PDF Grounding", "Automated Grading Engine", "Dynamic PDF & Answer Key Export"],
            liveLink: "https://youtu.be/ZeFpGmxHXF8",
            points: [
                "<strong>Multi-Subject Curriculum Grounding:</strong> Ingests official Class 1 Semester 1 textbooks across English, Mathematics, Computer Science, General Knowledge (GK), and EVS. Enables educators to configure chapters, grade parameters, and question distribution to dynamically synthesize fresh, non-repetitive examination papers powered by Google Gemini.",
                "<strong>Zero-Hallucination Textbook Grounding:</strong> Implements strict contextual anchoring over parsed textbook PDF content, preventing external web hallucinations and ensuring all generated questions and grading criteria adhere 100% to approved school syllabus material.",
                "<strong>Comprehensive Question Format Pipeline:</strong> Supports an exhaustive spectrum of pedagogical assessment formats including Multiple Choice Questions (MCQs), True / False, Fill in the Blanks, Match the Following, Picture / Diagram Matching from textbook figures, Assertion & Reasoning, and Short Answer questions.",
                "<strong>Interactive Online Examination & Auto-Evaluation:</strong> Facilitates end-to-end digital testing with real-time automated assessment, book-referenced answer corrections for instant remedial feedback, and one-click generation of printable PDFs paired with comprehensive Answer Keys.",
                "<strong>Dedicated Bilingual Hindi Curriculum Engine (Classes 1, 2, & 3):</strong> Engineered structured assessment pipelines specifically designed for primary Hindi language pedagogy, featuring native support for 8 standardized question archetypes:"
            ],
            hindiFormats: [
                { hi: "मौखिक प्रश्न", en: "Oral & Listening Comprehension" },
                { hi: "बहुविकल्पीय प्रश्न", en: "Multiple Choice Questions (MCQs)" },
                { hi: "रिक्त स्थान भरिए", en: "Fill in the Blanks" },
                { hi: "किसने किससे कहा?", en: "Dialogue & Character Attribution" },
                { hi: "मिलान कीजिए", en: "Match the Following" },
                { hi: "कविता की पंक्तियाँ पूरी कीजिए", en: "Poem Stanza Completion" },
                { hi: "निम्नलिखित प्रश्नों के उत्तर दीजिए", en: "Descriptive & Contextual Answers" },
                { hi: "रचनात्मक कार्य", en: "Creative Writing & Applied Exercises" }
            ]
        }
    ],

    projects: [
        {
            title: "VEXA - Multi-Agent Vehicle Health System",
            category: "Agentic AI & Telemetry Platform",
            tech: ["React.js", "FastAPI", "LangChain", "OmniDimension API", "Vector Search", "Python"],
            description: "Multi-role real-time vehicle telemetry and fleet analytics platform powered by multi-agent AI (UEBA Security, Scheduling, Voice Call Agent) and natural language failure root-cause analysis.",
            liveLink: "https://youtu.be/_G5IjEPWOuI?si=Fi5HTDLCe-sD5y9l"
        },
        {
            title: "Multi-Modal Document Intelligence",
            category: "Generative AI & Agentic Systems",
            tech: ["Python", "FastAPI", "YOLO", "EasyOCR", "LangChain", "Qdrant VectorDB", "GPT-4o"],
            description: "4-Agent cross-modal document intelligence pipeline (Vision, Text, Fusion, Validation) with Qdrant VectorDB RAG achieving 92% extraction accuracy and reducing processing time by 85%.",
            githubLink: "https://github.com/mandeepsingh2007/Multi-Modal-Document-Intelligence-System"
        },
        {
            title: "Vyapaar Saathi - WhatsApp AI for Microentrepreneurs",
            category: "Conversational AI & FinTech",
            tech: ["WhatsApp API", "NLP", "DuckDuckGo API", "Google Maps API", "ML Inventory", "Node.js", "Python"],
            description: "Conversational AI on WhatsApp delivering business intelligence, hyper-local supplier discovery, ML-based predictive inventory, and automated sales/expense bookkeeping empowering 70%+ microentrepreneurs.",
            liveLink: "https://youtu.be/jtcB_SQLVqs?si=0M6QoCyClcxt37Ex"
        },
        {
            title: "GeoVara - AI Rockfall Prediction & Alert System",
            category: "IoT & Deep Learning / Early Warning",
            tech: ["ESP32", "LoRaWAN", "FastAPI", "Node.js", "MongoDB", "MQTT", "CNN+LSTM", "Twilio API", "React.js"],
            description: "Offline-capable IoT monitoring system using ESP32 and LoRaWAN mesh network with CNN+LSTM risk prediction from geotechnical sensors and drone imagery, triggering real-time SMS alerts via Twilio.",
            liveLink: "https://youtu.be/U8hIvzPX-8w?si=xPDuIq-WrpOW9YcH"
        },
        {
            title: "Fixera - Bug Bounty Platform",
            category: "Full Stack / AI & Web Platform",
            tech: ["React.js", "Node.js", "Express", "MongoDB", "GitHub Webhooks", "ML Models", "UPI Wallet"],
            description: "Full-stack bug bounty and wallet platform with automated PR verification via GitHub Webhooks, ML-based fair pricing engine, and automated UPI payouts cutting manual verification effort to zero.",
            liveLink: "https://youtu.be/GJ-MzKwy1pQ?si=WJGwqrJNRoLayF59"
        }
    ],

    skills: [
        {
            category: "AIML",
            icon: "fa-brain",
            items: ["RAG Pipelines", "LLM Integrations", "LangChain", "Agentic AI", "NLP", "Deep Learning", "Machine Learning", "Vector Databases (Qdrant)", "PyTorch"]
        },
        {
            category: "Full Stack Web Development",
            icon: "fa-layer-group",
            items: ["React.js", "FastAPI", "Node.js", "Express.js", "MongoDB", "REST APIs", "gRPC", "Git & GitHub"]
        },
        {
            category: "Programming Languages",
            icon: "fa-code",
            items: ["Python", "Java"]
        }
    ],

    achievements: [
        {
            title: "State Level (Top 500) - OpenAI x NxtWave Buildathon",
            issuer: "OpenAI & NxtWave",
            date: "National Challenge",
            certificateLink: "https://drive.google.com/file/d/1t_yzxqm-P2ADb_kMnnZ9oqs8D7mCUp1v/view?usp=sharing",
            description: "Selected in Top 500 state level out of 70,000+ national participants for building advanced Generative AI applications."
        },
        {
            title: "140+ Problems Solved on LeetCode & Codeforces",
            issuer: "Competitive Programming",
            date: "Ongoing",
            profileLink: "https://leetcode.com/u/mandeepsingh1401/",
            icon: "fa-code",
            description: "Consistent problem solving in Data Structures, Algorithms, Dynamic Programming, and Graph algorithms."
        },
        {
            title: "3rd Place - Hack7Days Hackathon",
            issuer: "Hack7Days Challenge",
            date: "Hackathon Win",
            certificateLink: "https://drive.google.com/file/d/1XEdgXy543vLv--OZ4BdLzYUG-wNRIZci/view?usp=sharing",
            description: "Secured 3rd position for developing a high-impact full-stack AI platform during an intensive 7-day sprint."
        },
        {
            title: "Top 5 Finalist - Code With DCG",
            issuer: "Code With DCG",
            date: "Finalist",
            certificateLink: "https://drive.google.com/file/d/1tWMH9-aDO_zE_lxggC_xpYZb4tBHlFXj/view?usp=sharing",
            description: "Ranked among the top 5 teams nationally in software engineering and algorithmic challenge."
        },
        {
            title: "Semi-Finalist - EY Techathon 6.0",
            issuer: "Ernst & Young (EY)",
            date: "National Level",
            certificateLink: "https://drive.google.com/file/d/1L2GFdBcMk9PJp_x5NhR2ma_ZC0UryFWI/view?usp=sharing",
            description: "Advanced to national semi-finals in EY's flagship engineering competition for innovative AI architecture."
        }
    ]
};

// Render Functions
function renderEducation() {
    const container = document.getElementById('educationCards');
    if (!container) return;
    
    container.innerHTML = portfolioData.education.map(item => `
        <div class="bg-punjabiBlue-card border border-slate-800 hover:border-saffron/50 rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-lg md:col-span-2">
            <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
                <span class="text-xs font-semibold text-saffron bg-saffron/10 px-3 py-1 rounded-full border border-saffron/30">${item.period}</span>
                <span class="text-xs font-bold text-mustard bg-mustard/10 px-3 py-1 rounded-full border border-mustard/30">${item.score}</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-1">${item.degree}</h3>
            <div class="text-slate-400 text-sm mb-4"><i class="fa-solid fa-university text-saffron/70 mr-2"></i>${item.institution}</div>
            <p class="text-slate-300 text-sm leading-relaxed">${item.description}</p>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experienceTimeline');
    if (!container) return;

    container.innerHTML = portfolioData.experience.map(item => `
        <div class="relative group">
            <div class="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-saffron border-4 border-punjabiBlue group-hover:scale-125 transition-transform"></div>
            <div class="bg-punjabiBlue-card border border-slate-800 hover:border-saffron/50 rounded-2xl p-6 transition-all shadow-lg">
                <div class="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                        <div class="flex items-center gap-3 flex-wrap">
                            <h3 class="text-xl font-bold text-white">${item.role}</h3>
                            <div class="flex items-center gap-2 flex-wrap">
                                ${item.demoLink ? `
                                    <a href="${item.demoLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-saffron hover:text-mustard transition-colors font-bold border border-saffron/30 bg-saffron/10 px-3 py-1 rounded-lg hover:border-saffron shadow-sm cursor-pointer">
                                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i> Live Demo
                                    </a>
                                ` : ''}
                                ${item.githubLink ? `
                                    <a href="${item.githubLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-saffron hover:text-mustard transition-colors font-bold border border-saffron/30 bg-saffron/10 px-3 py-1 rounded-lg hover:border-saffron shadow-sm cursor-pointer">
                                        <i class="fa-brands fa-github text-sm"></i> ${item.buttonLabel || (item.role === 'Research Intern' ? 'View Code' : 'View PRs')} <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                        <div class="text-saffron font-semibold text-sm mt-1">${item.company}${item.location ? ` • <span class="text-slate-400 font-normal">${item.location}</span>` : ''}</div>
                        ${item.subtext ? `<div class="text-slate-400 text-xs mt-0.5">${item.subtext}</div>` : ''}
                    </div>
                    ${item.period ? `<span class="text-xs font-semibold text-mustard bg-mustard/10 px-3 py-1 rounded-full border border-mustard/30">${item.period}</span>` : ''}
                </div>
                <ul class="list-disc list-inside space-y-2 text-slate-300 text-sm mt-4 leading-relaxed">
                    ${item.points.map(pt => `<li>${pt}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    container.innerHTML = portfolioData.projects.map(proj => `
        <div class="bg-punjabiBlue-card border border-slate-800 hover:border-saffron/60 rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-2 shadow-xl group">
            <div>
                <div class="text-xs font-bold uppercase tracking-widest text-saffron mb-2">${proj.category}</div>
                <h3 class="text-2xl font-bold text-white group-hover:text-mustard transition-colors mb-3">${proj.title}</h3>
                <p class="text-slate-300 text-sm mb-6 leading-relaxed">${proj.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${proj.tech.map(t => `<span class="text-xs bg-punjabiBlue text-slate-300 border border-slate-700 px-2.5 py-1 rounded-md">${t}</span>`).join('')}
                </div>
            </div>
            <div class="flex items-center justify-end border-t border-slate-800 pt-4 relative z-20">
                ${proj.githubLink ? `
                    <a href="${proj.githubLink}" target="_blank" rel="noopener noreferrer" class="text-saffron hover:text-mustard transition-colors text-sm font-bold flex items-center gap-1.5 cursor-pointer ml-auto">
                        <i class="fa-brands fa-github text-base"></i> View Code <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    </a>
                ` : ''}
                ${proj.liveLink ? `
                    <a href="${proj.liveLink}" target="_blank" rel="noopener noreferrer" class="text-saffron hover:text-mustard transition-colors text-sm font-bold flex items-center gap-1.5 cursor-pointer ml-auto">
                        Live Demo <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;

    container.innerHTML = portfolioData.skills.map(sk => `
        <div class="bg-punjabiBlue-card border border-slate-800 hover:border-saffron/40 rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-3 mb-6 border-b border-slate-800 pb-3">
                <div class="w-10 h-10 rounded-lg bg-saffron/10 border border-saffron/30 text-saffron flex items-center justify-center text-lg">
                    <i class="fa-solid ${sk.icon}"></i>
                </div>
                <h3 class="text-lg font-bold text-white">${sk.category}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
                ${sk.items.map(item => `
                    <span class="bg-punjabiBlue text-slate-200 border border-slate-700/80 hover:border-saffron/60 px-3 py-1.5 rounded-lg text-sm transition-all hover:bg-saffron/10">
                        ${item}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderAchievements() {
    const container = document.getElementById('achievementsGrid');
    if (!container) return;

    container.innerHTML = portfolioData.achievements.map(ach => `
        <div class="bg-punjabiBlue-card border border-slate-800 hover:border-mustard/50 rounded-2xl p-6 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-between gap-3 mb-4">
                    <div class="w-10 h-10 rounded-full bg-mustard/10 border border-mustard/30 text-mustard flex items-center justify-center text-lg font-bold">
                        <i class="fa-solid ${ach.icon || 'fa-trophy'}"></i>
                    </div>
                    ${ach.profileLink ? `
                        <a href="${ach.profileLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-saffron hover:text-mustard transition-colors font-bold border border-saffron/30 bg-saffron/10 px-3 py-1.5 rounded-xl hover:border-saffron shadow-sm cursor-pointer">
                            <svg class="w-3.5 h-3.5 fill-[#FFA116]" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                            </svg>
                            LeetCode <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </a>
                    ` : (ach.certificateLink ? `
                        <a href="${ach.certificateLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-saffron hover:text-mustard transition-colors font-bold border border-saffron/30 bg-saffron/10 px-3 py-1.5 rounded-xl hover:border-saffron shadow-sm cursor-pointer">
                            <i class="fa-solid fa-award"></i> Certificate <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                        </a>
                    ` : '')}
                </div>
                <h3 class="text-lg font-bold text-white mb-1">${ach.title}</h3>
                <div class="text-xs text-saffron font-semibold mb-3">${ach.issuer} • ${ach.date}</div>
                <p class="text-slate-300 text-sm leading-relaxed">${ach.description}</p>
            </div>
        </div>
    `).join('');
}

function renderFreelance() {
    const container = document.getElementById('freelanceContainer');
    if (!container || !portfolioData.freelance) return;

    container.innerHTML = portfolioData.freelance.map(item => `
        <div class="bg-punjabiBlue-card border border-slate-800 hover:border-saffron/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all hover:-translate-y-1.5 shadow-xl group">
            <div>
                <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                        <div class="flex items-center gap-2 mb-2 flex-wrap">
                            <span class="text-xs font-bold uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full border border-saffron/30">
                                ${item.category}
                            </span>
                            <span class="text-xs font-medium text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                                ${item.tag}
                            </span>
                        </div>
                        <h3 class="text-2xl md:text-3xl font-bold text-white group-hover:text-mustard transition-colors">
                            ${item.title}
                        </h3>
                        <div class="text-slate-400 text-xs mt-1">
                            ${item.subtitle}
                        </div>
                    </div>

                    <div class="flex items-center gap-2">
                        ${item.liveLink ? `
                            <a href="${item.liveLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-saffron to-gold hover:from-saffron-light hover:to-gold-light px-4 py-2.5 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all hover:scale-105 cursor-pointer">
                                <i class="fa-solid fa-play text-xs"></i> Demo <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-6">
                    ${item.tech.map(t => `<span class="text-xs bg-punjabiBlue text-slate-300 border border-slate-700 px-2.5 py-1 rounded-md">${t}</span>`).join('')}
                </div>

                <ul class="list-disc list-inside space-y-3.5 text-slate-300 text-sm leading-relaxed mb-4">
                    ${item.points.map((pt, idx) => `
                        <li>
                            ${pt}
                            ${idx === item.points.length - 1 && item.hindiFormats ? `
                                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-3.5 pl-2 sm:pl-4">
                                    ${item.hindiFormats.map(hf => `
                                        <div class="bg-punjabiBlue/70 border border-slate-700/60 rounded-xl p-3 text-xs shadow-sm">
                                            <span class="text-saffron font-bold block mb-0.5">${hf.hi}</span>
                                            <span class="text-slate-400 text-[11px]">${hf.en}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Initialize all renders immediately and on DOM load
function initAllRenders() {
    renderEducation();
    renderExperience();
    renderFreelance();
    renderProjects();
    renderSkills();
    renderAchievements();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllRenders);
} else {
    initAllRenders();
}
