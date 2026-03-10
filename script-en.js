document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const terminalFooter = document.querySelector('.terminal-footer');
    const hackerTerminalOverlay = document.getElementById('hacker-terminal-overlay');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalCommandInput = document.getElementById('terminal-command');

    // Elementos do menu móvel
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Elementos dos projetos
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // --- Funcionalidade do Menu Móvel ---
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    mobileMenuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }, 150);
            });
        });

        // Fechar menu ao clicar fora dele
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.corporate-header') && navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // --- Navegação Suave ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerHeight = document.querySelector('.corporate-header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Filtros de Projetos ---
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active de todos os botões
                filterBtns.forEach(b => b.classList.remove('active'));
                // Adiciona active ao botão clicado
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.5s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- Formulário de Contato ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            const formData = new FormData(contactForm);

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Message sent successfully! I will contact you soon.');
                    contactForm.reset();
                } else {
                    alert('An error occurred while sending the message. Please try again.');
                }
            }).finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }

    // --- Dados para o Modo Hacker ---
    const aboutData = `
Name: Pedro Henrique Cunha Amancio Silva
Education: Computer Science (7th semester) - University of the Federal District (01/2020 - present)

Professional Experience:
- Graphic Design Intern (RESBRA Sinalizações, 09/2020-07/2023):
  Creation of graphic arts for signage and advertising materials for the company.
  Editing and preparation of visual pieces for internal and external communication campaigns.
  Collaboration in the development of animations and graphic materials for clients.
  Use of tools such as CapCut, Canva and Adobe Premiere for editing short videos and animations for digital platforms.

- Assistant (Health Secretariat of the Federal District):
  Development and monitoring of financial control spreadsheets.
  Drafting and analysis of financial reports.
  Replying to dispatches and memorandums.

Courses and Specializations:
- Databases (Fundação Bradesco, 2025)
- Python Programming Language (Fundação Bradesco, 2025)
- General Data Protection Law (LGPD) (Fundação Bradesco, 2024)
- IT Systems Projects (Fundação Bradesco, 2024)
- Information Technology Security (Fundação Bradesco, 2024)
- Data Analysis in Power BI (Fundação Bradesco, 2024)
- Computational Thinking (Fundação Bradesco, 2023)
- Occupational Safety (Prime Cursos do Brasil, 2024)
`;

    const skillsData = `
=== TECHNICAL SKILLS ===

Programming Languages:
• Python - 85%
• JavaScript - 80%
• HTML/CSS - 90%
• Java - 75%
• SQL - 70%

Frameworks & Technologies:
• Django - 80%
• React - 75%
• Node.js - 70%
• PostgreSQL - 75%
• Git - 85%

Tools & Systems:
• Windows/Linux
• VS Code
• Docker
• Postman
• Excel/Word
• CapCut/Canva
• Adobe Premiere

Soft Skills:
• Communication - 90%
• Teamwork - 85%
• Problem Solving - 95%
• Adaptability - 88%
`;

    const technologiesData = `
=== TECHNOLOGIES & TOOLS ===

Backend:
• Python (Django, Flask)
• Node.js (Express)
• PostgreSQL, MongoDB
• RESTful APIs
• Microservices

Frontend:
• JavaScript (ES6+)
• React.js
• HTML5/CSS3
• Bootstrap
• Responsive Design

DevOps & Tools:
• Git/GitHub
• Docker
• Linux/Windows
• VS Code
• Postman
• Power BI

Design & Multimedia:
• Adobe Premiere
• CapCut
• Canva
• Graphic Design
• Video Editing
`;

    const interestsData = `
=== AREAS OF INTEREST ===

Web Development:
• Modern and responsive web applications
• Single Page Applications (SPA)
• Progressive Web Apps (PWA)
• User Experience (UX/UI)

Backend Development:
• RESTful APIs and GraphQL
• Microservices and distributed architecture
• Relational and NoSQL databases
• Security and authentication

Automation & Productivity:
• Python scripts for automation
• Productivity tools
• Process optimization
• Systems integration

Data Science & Analytics:
• Data analysis with Python
• Data visualization
• Business Intelligence
• Machine Learning (beginner)

Emerging Technologies:
• Cloud Computing
• DevOps and CI/CD
• Containerization
• Internet of Things (IoT)
`;

    const projectsData = `
=== TECHNICAL PROJECTS ===

1. Task Management System
   • Technologies: Python, Django, PostgreSQL, HTML/CSS, JavaScript
   • Features: Complete CRUD, authentication, dashboard
   • Status: Completed
   • Repository: github.com/pedrohenrique/sistema-tarefas

2. Weather Forecast API
   • Technologies: JavaScript, Node.js, REST APIs
   • Features: Integration with external APIs, cache, rate limiting
   • Status: In development
   • Repository: github.com/pedrohenrique/weather-api

3. Personal Blog Platform
   • Technologies: React, Node.js, Firebase
   • Features: Comment system, tags, search
   • Status: Completed
   • Repository: github.com/pedrohenrique/blog-platform

4. Report Automation
   • Technologies: Python, Pandas, Excel
   • Features: Automatic generation of financial reports
   • Status: In use at the Health Secretariat
   • Repository: Private (internal use)
`;

    const helpData = `
=== AVAILABLE COMMANDS ===

Personal Information:
• cat about.txt     - Complete technical profile
• skills           - Detailed technical skills
• technologies      - Technologies and tools
• interests       - Areas of interest
• resume.pdf    - Download resume in PDF

Projects:
• projects         - List of technical projects
• ls              - Locate projects in the interface

System:
• clear           - Clear terminal
• help            - Show this help
• exit            - Return to corporate mode

Tip: Use the ↑↓ arrows to easily navigate the command history.
`;

    // --- Histórico de Comandos ---
    let commandHistory = [];
    let historyIndex = -1;

    // --- Funções de Transição de Modo ---
    function enterHackerMode() {
        if (body.classList.contains('hacker-mode')) {
            return;
        }
        // Adicionar efeito de transição
        body.style.transition = 'all 0.8s ease';
        body.classList.remove('corporate-mode');
        body.classList.add('hacker-mode');
        // Exibir o terminal automaticamente
        setTimeout(() => {
            hackerTerminalOverlay.classList.add('visible');
            hackerTerminalOverlay.classList.add('minimized'); // Começa minimizado
            // terminalCommandInput.focus(); // Só foca quando maximizar
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            // Mensagem de boas-vindas no modo hacker
            terminalOutput.innerHTML += `<pre style="color: #00BFFF;">
╔══════════════════════════════════════════════════════════════╗
║                  HACKER MODE ACTIVATED                  ║
║                                                         ║
║  Welcome to the technical access terminal!              ║
║  Type 'help' to see all available commands.             ║
║                                                         ║
║  Press 'exit' to return to corporate mode.              ║
╚══════════════════════════════════════════════════════════════╝
</pre>`;
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }, 400);
    }

    function exitHackerMode() {
        hackerTerminalOverlay.classList.remove('visible');
        
        setTimeout(() => {
            body.classList.remove('hacker-mode');
            body.classList.add('corporate-mode');
            
            // Resetar terminal
            terminalOutput.innerHTML = '<pre>Welcome to the system. Type \'help\' to see commands.</pre>';
            commandHistory = [];
            historyIndex = -1;
            
            // Scroll suave para o topo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 500);
    }

    // --- Event Listeners para Ativação do Modo Hacker ---

    // Ativar modo hacker ao pressionar 'Y'
    document.addEventListener('keydown', (event) => {
        if ((event.key === 'y' || event.key === 'Y') && body.classList.contains('corporate-mode')) {
            // Verificar se não está digitando em um input
            if (document.activeElement.tagName !== 'INPUT' && 
                document.activeElement.tagName !== 'TEXTAREA') {
                event.preventDefault();
                enterHackerMode();
            }
        }
    });

    // Ativar modo hacker ao clicar no rodapé
    if (terminalFooter) {
        terminalFooter.addEventListener('click', () => {
            if (body.classList.contains('corporate-mode')) {
                enterHackerMode();
            }
        });
    }

    // Botão de minimizar terminal
    const minimizeBtn = document.getElementById('minimize-hacker-terminal');
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hackerTerminalOverlay.classList.toggle('minimized');
            
            if (!hackerTerminalOverlay.classList.contains('minimized')) {
                setTimeout(() => {
                    terminalCommandInput.focus();
                }, 400);
            }
        });
    }

    // Clicar no cabeçalho para maximizar quando estiver minimizado
    const terminalHeader = document.querySelector('.terminal-header');
    if (terminalHeader) {
        terminalHeader.addEventListener('click', () => {
            if (hackerTerminalOverlay.classList.contains('minimized')) {
                hackerTerminalOverlay.classList.remove('minimized');
                setTimeout(() => {
                    terminalCommandInput.focus();
                }, 400);
            }
        });
    }

    // --- Lógica do Terminal Interativo ---
    if (terminalCommandInput) {
        terminalCommandInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const command = terminalCommandInput.value.trim();
                
                if (command) {
                    // Adicionar ao histórico
                    commandHistory.push(command);
                    historyIndex = commandHistory.length;
                    
                    // Mostrar comando no terminal
                    terminalOutput.innerHTML += `<pre style="color: #00BFFF;">&gt; ${command}</pre>`;
                    
                    // Processar comando
                    processCommand(command.toLowerCase());
                }
                
                terminalCommandInput.value = '';
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
            // Navegação no histórico com setas
            else if (event.key === 'ArrowUp') {
                event.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    terminalCommandInput.value = commandHistory[historyIndex];
                }
            }
            else if (event.key === 'ArrowDown') {
                event.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    terminalCommandInput.value = commandHistory[historyIndex];
                } else {
                    historyIndex = commandHistory.length;
                    terminalCommandInput.value = '';
                }
            }
        });
    }

    // --- Função para Processar Comandos ---
    function processCommand(command) {
        let output = '';
        
        switch (command) {
            case 'help':
                output = helpData;
                break;
                
            case 'cat about.txt':
            case 'about':
                output = aboutData;
                break;
                
            case 'skills':
                output = skillsData;
                break;
                
            case 'technologies':
            case 'tech':
                output = technologiesData;
                break;
                
            case 'interests':
            case 'areas':
                output = interestsData;
                break;
                
            case 'projects':
                output = projectsData;
                break;
                
            case 'ls':
                output = `
Available directories:
• /skills          - Technical skills section
• /technologies    - Tools and technologies
• /interests       - Areas of interest
• /projects        - Technical projects (visible on interface)

Use 'cat [file]' or type the section name for more details.
Scroll up on the interface to see visual technical projects.`;
                break;
                
            case 'resume.pdf':
            case 'cv':
                output = 'Preparing resume download...';
                // Simular download - substitua pelo link real do seu currículo
                setTimeout(() => {
                    const link = document.createElement('a');
                    link.href = '#'; // Substitua pelo link real do seu PDF
                    link.download = 'Pedro_Henrique_Curriculo.pdf';
                    link.click();
                }, 1000);
                break;
                
            case 'clear':
            case 'cls':
                terminalOutput.innerHTML = '';
                return; // Não adicionar output
                
            case 'exit':
            case 'quit':
                output = 'Exiting hacker mode... Returning to Home.';
                setTimeout(() => {
                    exitHackerMode();
                }, 2000);
                break;
                
            case 'whoami':
                output = 'pedro@portfolio:~$ Developer in transition, passionate about technology and innovative solutions.';
                break;
                
            case 'date':
                output = new Date().toLocaleString('en-US');
                break;
                
            case 'pwd':
                output = '/home/pedro/portfolio/hacker_mode';
                break;
                
            default:
                output = `Command not found: '${command}'
Type 'help' to see all available commands.

Suggested commands:
• help - List of commands
• about - Personal information
• skills - Technical skills
• projects - Project list`;
        }
        
        if (output) {
            terminalOutput.innerHTML += `<pre>${output}</pre>`;
        }
    }

    // --- Função para Barras de Habilidade ---
    function setupSkillBars() {
        const skillItems = document.querySelectorAll('.hacker-skill-item');
        skillItems.forEach(item => {
            const text = item.textContent;
            // Encontra o número da porcentagem no texto do item
            const percentageMatch = text.match(/(\d+)%/);
            if (percentageMatch && percentageMatch[1]) {
                const percentage = percentageMatch[1];
                // Aplica um fundo gradiente que simula a barra de progresso
                item.style.background = `linear-gradient(to right, var(--hacker-skill-bar-color) ${percentage}%, var(--hacker-secondary) ${percentage}%)`;
            }
        });
    }

    // --- Scroll Reveal Animation ---
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.project-card, .timeline-item, .stat-item, .contact-item');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Inicializar elementos para animação
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.project-card, .timeline-item, .stat-item, .contact-item');
        reveals.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease-out';
        });
    }

    // --- Melhorias para Dispositivos Móveis ---
    function adjustForMobile() {
        if (window.innerWidth <= 768) {
            // Ajustar altura do terminal baseado na orientação
            const isLandscape = window.innerHeight < window.innerWidth;
            const terminalHeight = isLandscape ? '50vh' : '60vh';
            document.documentElement.style.setProperty('--terminal-height', terminalHeight);
            
            // Melhorar foco no input do terminal
            if (terminalCommandInput) {
                terminalCommandInput.addEventListener('focus', () => {
                    if (!hackerTerminalOverlay.classList.contains('visible')) {
                        hackerTerminalOverlay.classList.add('visible');
                    }
                    
                    // Scroll para garantir que o terminal esteja visível
                    setTimeout(() => {
                        terminalCommandInput.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                    }, 300);
                });
            }
        }
    }

    // --- Event Listeners ---
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', adjustForMobile);
    window.addEventListener('orientationchange', () => {
        setTimeout(adjustForMobile, 100);
    });

    // --- Inicialização ---
    initScrollReveal();
    adjustForMobile();
    revealOnScroll(); // Verificar elementos já visíveis
    setupSkillBars(); // Ativa as barras de habilidade dinâmicas

    // Scroll para o topo ao carregar
    window.scrollTo(0, 0);

    // Adicionar classe de carregamento concluído
    setTimeout(() => {
        body.classList.add('loaded');
    }, 100);

    console.log('🚀 Portfolio successfully loaded!');
    console.log('💡 Press "Y" to activate hacker mode');
    console.log('🔧 Developed by Pedro Henrique');
});
