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
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
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
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.corporate-header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
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
            e.preventDefault();
            
            // Simular envio do formulário
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // --- Dados para o Modo Hacker ---
    const aboutData = `
Nome: Pedro Henrique Cunha Amancio Silva
Formação: Ciências da Computação (7º semestre) - Universidade do Distrito Federal (01/2020 - presente)

Experiência Profissional:
- Estagiário de Design Gráfico (RESBRA Sinalizações, 09/2020-07/2023):
  Criação de artes gráficas para sinalizações e materiais publicitários da empresa.
  Edição e preparação de peças visuais para campanhas de comunicação interna e externa.
  Colaboração no desenvolvimento de animações e materiais gráficos para clientes.
  Uso de ferramentas como CapCut, Canva e Adobe Premiere na edição de vídeos curtas e animações para plataformas digitais.

- Assessor (Secretaria de Saúde do Distrito Federal):
  Desenvolvimento e controle de planilhas de controle financeiro.
  Elaboração e análise de relatório financeiro.
  Respostas de despachos e memorando.

Cursos e Especializações:
- Banco de Dados (Fundação Bradesco, 2025)
- Linguagem de Programação Python (Fundação Bradesco, 2025)
- Lei Geral de Proteção de Dados (LGPD) (Fundação Bradesco, 2024)
- Projetos de Sistemas de TI (Fundação Bradesco, 2024)
- Segurança em Tecnologia da Informação (Fundação Bradesco, 2024)
- Análise de Dados no Power BI (Fundação Bradesco, 2024)
- Pensamento Computacional (Fundação Bradesco, 2023)
- Segurança do Trabalho (Prime Cursos do Brasil, 2024)
`;

    const skillsData = `
=== HABILIDADES TÉCNICAS ===

Linguagens de Programação:
• Python - 85%
• JavaScript - 80%
• HTML/CSS - 90%
• Java - 75%
• SQL - 70%

Frameworks & Tecnologias:
• Django - 80%
• React - 75%
• Node.js - 70%
• PostgreSQL - 75%
• Git - 85%

Ferramentas & Sistemas:
• Windows/Linux
• VS Code
• Docker
• Postman
• Excel/Word
• CapCut/Canva
• Adobe Premiere

Soft Skills:
• Comunicação - 90%
• Trabalho em Equipe - 85%
• Resolução de Problemas - 95%
• Adaptabilidade - 88%
`;

    const technologiesData = `
=== TECNOLOGIAS & FERRAMENTAS ===

Backend:
• Python (Django, Flask)
• Node.js (Express)
• PostgreSQL, MongoDB
• APIs RESTful
• Microserviços

Frontend:
• JavaScript (ES6+)
• React.js
• HTML5/CSS3
• Bootstrap
• Responsive Design

DevOps & Ferramentas:
• Git/GitHub
• Docker
• Linux/Windows
• VS Code
• Postman
• Power BI

Design & Multimídia:
• Adobe Premiere
• CapCut
• Canva
• Design Gráfico
• Edição de Vídeo
`;

    const interestsData = `
=== ÁREAS DE INTERESSE ===

Desenvolvimento Web:
• Aplicações web modernas e responsivas
• Single Page Applications (SPA)
• Progressive Web Apps (PWA)
• Experiência do usuário (UX/UI)

Backend Development:
• APIs RESTful e GraphQL
• Microserviços e arquitetura distribuída
• Bancos de dados relacionais e NoSQL
• Segurança e autenticação

Automação & Produtividade:
• Scripts Python para automação
• Ferramentas de produtividade
• Otimização de processos
• Integração de sistemas

Data Science & Analytics:
• Análise de dados com Python
• Visualização de dados
• Business Intelligence
• Machine Learning (iniciante)

Tecnologias Emergentes:
• Cloud Computing
• DevOps e CI/CD
• Containerização
• Internet das Coisas (IoT)
`;

    const projectsData = `
=== PROJETOS TÉCNICOS ===

1. Sistema de Gestão de Tarefas
   • Tecnologias: Python, Django, PostgreSQL, HTML/CSS, JavaScript
   • Funcionalidades: CRUD completo, autenticação, dashboard
   • Status: Concluído
   • Repositório: github.com/pedrohenrique/sistema-tarefas

2. API de Previsão do Tempo
   • Tecnologias: JavaScript, Node.js, APIs REST
   • Funcionalidades: Integração com APIs externas, cache, rate limiting
   • Status: Em desenvolvimento
   • Repositório: github.com/pedrohenrique/weather-api

3. Plataforma de Blog Pessoal
   • Tecnologias: React, Node.js, Firebase
   • Funcionalidades: Sistema de comentários, tags, busca
   • Status: Concluído
   • Repositório: github.com/pedrohenrique/blog-platform

4. Automação de Relatórios
   • Tecnologias: Python, Pandas, Excel
   • Funcionalidades: Geração automática de relatórios financeiros
   • Status: Em uso na Secretaria de Saúde
   • Repositório: Privado (uso interno)
`;

    const helpData = `
=== COMANDOS DISPONÍVEIS ===

Informações Pessoais:
• cat sobre.txt     - Perfil técnico completo
• skills           - Habilidades técnicas detalhadas
• tecnologias      - Tecnologias e ferramentas
• interesses       - Áreas de interesse
• curriculo.pdf    - Baixar currículo em PDF

Projetos:
• projetos         - Lista de projetos técnicos
• ls              - Localizar projetos na interface

Sistema:
• clear           - Limpar terminal
• help            - Mostrar esta ajuda
• exit            - Voltar ao modo corporativo

Dica: Use as setas ↑↓ para navegar no histórico de comandos.
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
            terminalCommandInput.focus();
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            
            // Mensagem de boas-vindas no modo hacker
            terminalOutput.innerHTML += `<pre style="color: #00BFFF;">
╔══════════════════════════════════════════════════════════════╗
║                    MODO HACKER ATIVADO                      ║
║                                                              ║
║  Bem-vindo ao terminal de acesso técnico!                   ║
║  Digite 'help' para ver todos os comandos disponíveis.      ║
║                                                              ║
║  Pressione 'exit' para retornar ao modo corporativo.        ║
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
            terminalOutput.innerHTML = '<pre>Bem-vindo ao sistema. Digite \'help\' para ver os comandos.</pre>';
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

    // Ativar modo hacker ao pressionar 'S'
    document.addEventListener('keydown', (event) => {
        if ((event.key === 's' || event.key === 'S') && body.classList.contains('corporate-mode')) {
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
                
            case 'cat sobre.txt':
            case 'sobre':
                output = aboutData;
                break;
                
            case 'skills':
            case 'habilidades':
                output = skillsData;
                break;
                
            case 'tecnologias':
            case 'tech':
                output = technologiesData;
                break;
                
            case 'interesses':
            case 'areas':
                output = interestsData;
                break;
                
            case 'projetos':
            case 'projects':
                output = projectsData;
                break;
                
            case 'ls':
                output = `
Diretórios disponíveis:
• /habilidades     - Seção de habilidades técnicas
• /tecnologias     - Ferramentas e tecnologias
• /interesses      - Áreas de interesse
• /projetos        - Projetos técnicos (visíveis na interface)

Use 'cat [arquivo]' ou digite o nome da seção para mais detalhes.
Role para cima na interface para ver os projetos técnicos visuais.`;
                break;
                
            case 'curriculo.pdf':
            case 'cv':
                output = 'Preparando download do currículo...';
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
                output = 'Saindo do modo hacker... Retornando ao modo corporativo.';
                setTimeout(() => {
                    exitHackerMode();
                }, 1500);
                break;
                
            case 'whoami':
                output = 'pedro@portfolio:~$ Desenvolvedor em transição, apaixonado por tecnologia e soluções inovadoras.';
                break;
                
            case 'date':
                output = new Date().toLocaleString('pt-BR');
                break;
                
            case 'pwd':
                output = '/home/pedro/portfolio/modo_hacker';
                break;
                
            default:
                output = `Comando não encontrado: '${command}'
Digite 'help' para ver todos os comandos disponíveis.

Comandos sugeridos:
• help - Lista de comandos
• sobre - Informações pessoais
• skills - Habilidades técnicas
• projetos - Lista de projetos`;
        }
        
        if (output) {
            terminalOutput.innerHTML += `<pre>${output}</pre>`;
        }
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

    // Scroll para o topo ao carregar
    window.scrollTo(0, 0);

    // Adicionar classe de carregamento concluído
    setTimeout(() => {
        body.classList.add('loaded');
    }, 100);

    console.log('🚀 Portfólio carregado com sucesso!');
    console.log('💡 Pressione "S" para ativar o modo hacker');
    console.log('🔧 Desenvolvido por Pedro Henrique');
});

