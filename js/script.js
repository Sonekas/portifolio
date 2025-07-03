document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const terminalFooter = document.querySelector('.terminal-footer');
    const hackerTerminalOverlay = document.getElementById('hacker-terminal-overlay');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalCommandInput = document.getElementById('terminal-command');
    const hackerProjectGrid = document.getElementById('hacker-project-grid');

    // Elementos do menu móvel
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // --- Funcionalidade do Menu Móvel ---
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

    // --- Dados para os Projetos ---
    const projectsData = [
        {
            name: "Sistema de Gestão de Tarefas",
            description_corporate: "Este projeto é um sistema web para organizar e gerenciar tarefas diárias, ajudando a otimizar a produtividade. Foi uma experiência fundamental para aplicar conceitos de banco de dados e interação com o usuário.",
            tech_details: "Desenvolvido utilizando Python com o framework Django para o backend, PostgreSQL como banco de dados, e HTML, CSS, JavaScript para o frontend. Implementação de autenticação de usuários e CRUD completo para tarefas.",
            tech_icons: ['python', 'django', 'postgresql', 'html', 'css', 'javascript'],
            repo: "https://github.com/seu-usuario/sistema-tarefas" // Substitua pelo seu link
        },
        {
            name: "Aplicativo de Previsão do Tempo",
            description_corporate: "Desenvolvi este aplicativo para fornecer previsões do tempo em tempo real, utilizando APIs externas. É uma demonstração de como a tecnologia pode simplificar o acesso a informações úteis e complexas.",
            tech_details: "Construído com JavaScript e React para a interface do usuário, Node.js para o servidor e integração com APIs REST de previsão do tempo. Inclui geolocalização e atualização de dados em tempo real.",
            tech_icons: ['javascript', 'react', 'nodejs', 'api'],
            repo: "https://github.com/seu-usuario/app-previsao-tempo" // Substitua pelo seu link
        },
        {
            name: "Plataforma de Blog Pessoal",
            description_corporate: "Criei uma plataforma de blog simples e responsiva, onde posso compartilhar artigos e conhecimentos. Este projeto me permitiu aprofundar em design responsivo e gerenciamento de conteúdo.",
            tech_details: "Desenvolvido com HTML, CSS e JavaScript puro para o frontend, com o Firebase sendo utilizado para armazenamento de dados e autenticação. Foco em design responsivo e experiência do usuário.",
            tech_icons: ['html', 'css', 'javascript', 'firebase'],
            repo: "https://github.com/seu-usuario/blog-pessoal" // Substitua pelo seu link
        }
    ];

    const aboutData = `
Nome: Pedro Henrique Cunha Amancio Silva
Formação: Ciências da Computação (7º semestre ) - Universidade do Distrito Federal (01/2020 - presente)

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
Linguagens: Python, Java, JavaScript, HTML, CSS
Sistemas Operacionais: Windows, Linux
Banco de Dados: SQL (Conhecimento em PostgreSQL)
Ferramentas: Git, Excel, Word, CapCut, Canva, Adobe Premiere
Outras Habilidades: Desenvolvimento de sistemas, Montagem, instalação e manutenção de computadores.
`;

    const helpData = `
Comandos disponíveis:
ls          - Informa onde encontrar os projetos técnicos.
cat sobre.txt - Exibe o perfil técnico completo.
skills      - Mostra as habilidades técnicas.
curriculo.pdf - Baixa o currículo em PDF.
clear       - Limpa a tela do terminal.
exit        - Volta para o modo corporativo.
`;

    const curriculumPdfLink = 'seu_curriculo.pdf'; // Substitua pelo link direto para o seu PDF

    // --- Funções de Geração de Projetos Técnicos ---
    function generateHackerProjects() {
        hackerProjectGrid.innerHTML = ''; // Limpa antes de adicionar
        projectsData.forEach(project => {
            let techIconsHtml = project.tech_icons.map(icon =>
                `<span class="tech-icon ${icon}" title="${icon.charAt(0).toUpperCase() + icon.slice(1)}"></span>`
            ).join('');

            const projectCardHtml = `
                <div class="hacker-project-card">
                    <h3>${project.name}</h3>
                    <p>${project.tech_details}</p>
                    <div class="tech-icons-container">
                        ${techIconsHtml}
                    </div>
                    <div class="project-links">
                        <a href="${project.repo}" target="_blank">Repositório</a>
                        <!-- Adicione outros links se houver, como demo, etc. -->
                    </div>
                </div>
            `;
            hackerProjectGrid.innerHTML += projectCardHtml;
        });
    }

    // --- Funções de Transição de Modo ---
    function enterHackerMode() {
        if (body.classList.contains('hacker-mode')) {
            return;
        }
        body.classList.remove('corporate-mode');
        body.classList.add('hacker-mode');
        generateHackerProjects(); // Gera os projetos técnicos ao entrar no modo hacker
        // Exibe o terminal automaticamente ao entrar no modo hacker
        hackerTerminalOverlay.classList.add('visible');
        terminalCommandInput.focus();
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function exitHackerMode() {
        hackerTerminalOverlay.classList.remove('visible'); // Esconde o terminal
        setTimeout(() => {
            body.classList.remove('hacker-mode');
            body.classList.add('corporate-mode');
            terminalOutput.innerHTML = '<pre>Bem-vindo ao sistema. Digite \'help\' para ver os comandos.</pre>';
        }, 500);
    }

    // --- Event Listeners ---

    // Ativar modo hacker ao pressionar 'S'
    document.addEventListener('keydown', (event) => {
        if ((event.key === 's' || event.key === 'S') && body.classList.contains('corporate-mode')) {
            if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                enterHackerMode();
            }
        }
    });

    // Ativar/Desativar terminal ao clicar no rodapé
    terminalFooter.addEventListener('click', () => {
        if (body.classList.contains('corporate-mode')) {
            enterHackerMode();
        } else if (body.classList.contains('hacker-mode')) {
            // No modo hacker, o clique no rodapé pode ocultar/mostrar o terminal
            if (hackerTerminalOverlay.classList.contains('visible')) {
                hackerTerminalOverlay.classList.remove('visible');
            } else {
                hackerTerminalOverlay.classList.add('visible');
                terminalCommandInput.focus();
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        }
    });

    // O botão de minimizar no terminal
    const minimizeBtn = document.getElementById('minimize-hacker-terminal');
    minimizeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hackerTerminalOverlay.classList.toggle('minimized');
        if (!hackerTerminalOverlay.classList.contains('minimized')) {
            setTimeout(() => {
                terminalCommandInput.focus();
            }, 400);
        }
    });

    // --- Lógica do Terminal Interativo ---
    terminalCommandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = terminalCommandInput.value.trim();
            terminalOutput.innerHTML += `<pre>&gt; ${command}</pre>`;

            switch (command.toLowerCase()) {
                case 'ls':
                    terminalOutput.innerHTML += `<pre>Os projetos técnicos estão visíveis na página. Role para cima para vê-los.</pre>`;
                    break;
                case 'cat sobre.txt':
                    terminalOutput.innerHTML += `<pre>${aboutData}</pre>`;
                    break;
                case 'skills':
                    terminalOutput.innerHTML += `<pre>${skillsData}</pre>`;
                    break;
                case 'curriculo.pdf':
                    terminalOutput.innerHTML += `<pre>Baixando currículo...</pre>`;
                    window.open(curriculumPdfLink, '_blank');
                    break;
                case 'help':
                    terminalOutput.innerHTML += `<pre>${helpData}</pre>`;
                    break;
                case 'clear':
                    terminalOutput.innerHTML = ''; // Limpa tudo
                    break;
                case 'exit': // Este comando agora é o único que sai do modo hacker
                    exitHackerMode();
                    break;
                default:
                    terminalOutput.innerHTML += `<pre>Comando não encontrado: '${command}'. Digite 'help' para ver os comandos disponíveis.</pre>`;
            }
            terminalCommandInput.value = ''; // Limpa o input
            terminalOutput.scrollTop = terminalOutput.scrollHeight; // Rola para o final
        }
    });

    // Rola para o topo ao carregar a página (para garantir que o header esteja visível)
    window.scrollTo(0, 0);

    // --- Melhorias para Dispositivos Móveis ---

    // Prevenir zoom em inputs no iOS
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        });
    });

    // Melhorar experiência do terminal em dispositivos móveis
    if (window.innerWidth <= 768) {
        terminalCommandInput.addEventListener('focus', () => {
            // Garantir que o terminal esteja visível quando o input receber foco
            if (!hackerTerminalOverlay.classList.contains('visible')) {
                hackerTerminalOverlay.classList.add('visible');
            }
        });
    }

    // Ajustar altura do terminal baseado na orientação do dispositivo
    function adjustTerminalHeight() {
        if (window.innerWidth <= 768) {
            if (window.innerHeight < window.innerWidth) {
                // Landscape
                document.documentElement.style.setProperty('--terminal-height', '50vh');
            } else {
                // Portrait
                document.documentElement.style.setProperty('--terminal-height', '60vh');
            }
        }
    }

    // Ajustar na mudança de orientação
    window.addEventListener('orientationchange', () => {
        setTimeout(adjustTerminalHeight, 100);
    });

    // Ajustar no redimensionamento da janela
    window.addEventListener('resize', adjustTerminalHeight);

    // Ajustar inicialmente
    adjustTerminalHeight();


});
