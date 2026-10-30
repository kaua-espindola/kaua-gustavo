/* ==========================================================================
   ZOVEK — i18n dictionary
   4 languages: pt (default) · en · it · es
   Every language MUST mirror the exact same key structure as `pt`.
   app.js runs a structural validation on load and warns about any gap.
   ========================================================================== */

/* --------------------------------------------------------------------------
   BRAND — single source of truth. Rename the team here and the whole site
   (header, footer wordmark, titles, ticket IDs, simulator URL) follows.
   -------------------------------------------------------------------------- */
window.BRAND = {
  name: "Zovek",               // <title>, footer © line, aria labels
  lockup: ["zovek"],           // header wordmark (a 2nd item would render lighter, as a two-word logo)
  wordmark: "ZOVEK",           // giant outlined footer type, preceded by the orange //
  slug: "zovek",               // simulator fake URL
  ticket: "ZVK"                // briefing ticket prefix (#ZVK-26XXXX)
};
// The // symbol itself is inline SVG in index.html (header) and favicon.svg.

window.TRANSLATIONS = {
  /* ------------------------------------------------------------------ PT */
  pt: {
    langName: "Português (BR)",
    meta: {
      title: "{brand} — Desenvolvimento Web, Sistemas e Automação Python",
      description: "Dupla de Cientistas da Computação para Brasil e Europa: sites de alta conversão, sistemas sob medida com controle de estoque e automações em Python."
    },
    a11y: {
      lang: "Selecionar idioma",
      menu: "Abrir menu de navegação",
      range: "Controle de compilação do wireframe",
      tabs: "Abas do simulador"
    },
    status: {
      base: "BASE",
      baseValue: "SÃO PAULO, BRASIL (SANTA RITA DO PASSA QUATRO)",
      operating: "ATUAÇÃO",
      operatingValue: "BRASIL & EUROPA (UTC-3)",
      status: "STATUS",
      statusValue: "DISPONÍVEL PARA NOVOS PROJETOS",
      local: "HORA LOCAL",
      rome: "ROMA"
    },
    nav: {
      solutions: "Soluções",
      simulator: "Simulador na Prática",
      projects: "Projetos & Portfólios",
      team: "A Dupla",
      cta: "Iniciar Projeto",
      menu: "Menu",
      close: "Fechar"
    },
    hero: {
      index: "[01] — ESTÚDIO DE ENGENHARIA DE SOFTWARE",
      line1: "Sites que <em>vendem.</em>",
      line2: "Sistemas que <em>organizam.</em>",
      line3: "Automações que <em>trabalham por você.</em>",
      sub: "Engenharia de software, design de interface e visão de negócio — para construir a infraestrutura digital da sua empresa, do site ao sistema.",
      ctaPrimary: "Solicitar proposta",
      ctaSecondary: "Testar o simulador",
      l1: "INTERFACE · WEB",
      l2: "SISTEMA · DADOS",
      l3: "ROTINA · PYTHON",
      fig: "FIG. 01 — UMA INFRAESTRUTURA, TRÊS CAMADAS",
      scroll: "Role para explorar"
    },
    sim: {
      index: "[02] — SIMULADOR NA PRÁTICA",
      title: "Veja funcionando antes de contratar.",
      intro: "Três demonstrações rodando aqui mesmo, no seu navegador. É o mesmo tipo de entrega que fazemos para clientes — em miniatura.",
      points: { web: "Arraste o controle e veja um wireframe do Figma virar interface responsiva.", stock: "Cadastre um produto, registre uma venda e veja os indicadores mudarem.", py: "Execute a rotina e veja uma planilha bagunçada virar um relatório limpo." },
      label: "SIMULADOR AO VIVO — clique e teste",
      live: "AO VIVO",
      tabs: { web: "Web & Landing Pages", stock: "Sistemas & Estoque", py: "Automação Python" },
      web: {
        hint: "Arraste o controle para compilar o wireframe em interface",
        wire: "WIREFRAME · FIGMA",
        ui: "INTERFACE · HTML/CSS/TAILWIND",
        desktop: "Desktop",
        mobile: "Mobile",
        brand: "Aurora Odonto",
        nav1: "Serviços",
        nav2: "Equipe",
        nav3: "Contato",
        heroTitle: "Agende sua avaliação em 30 segundos.",
        heroText: "Atendimento humanizado, horários flexíveis e confirmação imediata pelo WhatsApp.",
        cta: "Agendar agora",
        card1: "Implantes",
        card2: "Ortodontia",
        card3: "Clareamento",
        status: "build ok · responsivo · acessível",
        figma: "frame: Hero / Auto Layout 24 · Figma"
      },
      stock: {
        title: "Painel de Estoque — v1.0",
        kItems: "Itens em estoque",
        kValue: "Valor do inventário",
        kSales: "Vendas hoje",
        kLow: "Alertas de baixa",
        fName: "Produto",
        fQty: "Qtd.",
        fPrice: "Preço",
        add: "Cadastrar",
        cProduct: "Produto",
        cQty: "Qtd.",
        cPrice: "Preço",
        cAct: "Ação",
        sell: "Vender",
        restock: "Repor",
        low: "BAIXO",
        ok: "OK",
        logReady: "Conectado a mysql://estoque — pronto.",
        logInsert: "INSERT INTO produtos",
        logSale: "UPDATE estoque SET qtd = qtd - 1 · venda registrada",
        logRestock: "UPDATE estoque SET qtd = qtd + 5 · reposição",
        invalid: "Preencha produto, quantidade e preço válidos.",
        seed: ["Tela iPhone 11", "Bateria Galaxy S21", "Conector USB-C", "Película 3D Privacidade"]
      },
      py: {
        run: "Executar Rotina",
        running: "Executando…",
        rerun: "Executar novamente",
        raw: "ENTRADA · planilha bruta",
        clean: "SAÍDA · relatório limpo",
        idle: "Aguardando execução. Clique em “Executar Rotina”.",
        waiting: "aguardando dados…",
        colChannel: "Canal",
        colOrders: "Pedidos",
        colRevenue: "Receita",
        total: "Total",
        issues: { dup: "DUPLICADO", missing: "VAZIO", format: "FORMATO" },
        header: "data;cliente;canal;valor",
        file: "vendas_brutas.xlsx",
        report: "relatorio_limpo.xlsx",
        channels: ["Marketplace", "Loja física", "E-commerce", "WhatsApp"],
        logs: [
          "$ python rotina_relatorio.py --input vendas_brutas.xlsx",
          "[1/5] Lendo planilha bruta… 1.284 linhas encontradas",
          "[2/5] Removendo duplicatas… 37 registros descartados",
          "[3/5] Normalizando datas, valores e nomes…",
          "[4/5] Agrupando por canal de venda…",
          "[5/5] Exportando relatorio_limpo.xlsx + dashboard.pdf",
          "✓ Rotina concluída em 0,84 s — 1.247 linhas válidas"
        ]
      }
    },
    solutions: {
      index: "[03] — O QUE RESOLVEMOS",
      title: "Quatro frentes. Uma infraestrutura digital coerente.",
      intro: "Cada bloco abaixo é uma frente que já executamos em ambiente real — varejo, marketing, laboratório e operação de estoque. Sem promessa abstrata: escopo, stack e entrega.",
      deploy: "DEPLOY",
      b1: {
        tag: "WEB / FRONT-END",
        title: "Desenvolvimento Web, Sites & Landing Pages",
        text: "Criação de páginas institucionais, páginas com formulário, e-commerces e plataformas responsivas desenvolvidas com HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap e PHP, publicadas na Vercel ou HostGator.",
        out: "Resultado: presença profissional que gera contatos qualificados, rápida no celular e fácil de manter."
      },
      b2: {
        tag: "SISTEMAS / DADOS",
        title: "Sistemas Sob Medida & Gestão de Estoque/Marketplace",
        text: "Desenvolvimento de sistemas internos, bancos de dados MySQL e integração de controle de vendas, inventário e patrimônio — projetado por quem tem vivência prática real gerenciando estoques, marketplaces e sistemas operacionais no ambiente corporativo.",
        out: "Resultado: estoque, vendas e patrimônio em um só lugar — com números confiáveis para decidir."
      },
      b3: {
        tag: "PYTHON / AUTOMAÇÃO",
        title: "Automação de Rotinas & Inteligência de Dados com Python",
        text: "Criação de scripts em Python e consumo de APIs para limpeza de dados, manipulação de planilhas (Excel/Google Sheets), automação de tarefas repetitivas no computador e geração automática de relatórios e dashboards.",
        out: "Resultado: horas de trabalho manual devolvidas à equipe todas as semanas."
      },
      b4: {
        tag: "DESIGN / 3D",
        title: "UI/UX Design, Identidade Visual & Modelagem 2D/3D",
        text: "Prototipagem no Figma, comunicação visual focada em usabilidade e conversão, edição de vídeo (Premiere/CapCut) e modelagem 2D/3D (Inkscape, Tinkercad) para destacar produtos digitais no Brasil e no exterior.",
        out: "Resultado: produtos digitais com aparência premium e navegação que conduz à conversão."
      }
    },
    team: {
      index: "[04] — A DUPLA",
      title: "Os engenheiros por trás do código.",
      intro: "Dois sócios no último ano de Ciência da Computação pela UNIP, com experiência prática em operação real: estoque, marketplace, marketing, laboratório e suporte de sistemas. Você fala diretamente com quem escreve o código.",
      shared: "Ambos · Ciência da Computação · UNIP · último ano",
      profile: "PERFIL",
      lRole: "PAPEL NA EQUIPE",
      lEdu: "FORMAÇÃO & IDIOMAS",
      lPractice: "BAGAGEM PRÁTICA",
      lStack: "STACK PRINCIPAL",
      lLinks: "LINKS DIRETOS",
      portfolio: "Portfólio individual",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
      whatsapp: "WhatsApp internacional",
      k: {
        role: "Full-Stack Systems Developer · Especialista em Infraestrutura, Dados & Modelagem 2D/3D",
        edu: [
          { t: "Ciência da Computação", s: "Universidade Paulista (UNIP) · 2023–2026" },
          { t: "Técnico em Informática para Internet", s: "Etec · 2020–2022" },
          { t: "IA Generativa com Gemini", s: "Santander Open Academy · certificação" },
          { t: "Idiomas", s: "Português nativo · Inglês avançado (certificado CCAA)" }
        ],
        practice: [
          { org: "IQUEBBROU", role: "Auxiliar Técnico Eletrônico · atual", text: "Implantação de sistemas integrados de controle de vendas e estoque, gestão de marketplace e manutenção crítica de hardware e software em Windows e Linux/Ubuntu." },
          { org: "SESI-SP", role: "Infraestrutura laboratorial · 2 anos", text: "Gestão de infraestrutura de laboratório, impressão 3D, corte a laser e modelagem 2D/3D para projetos de fabricação digital." }
        ],
        stack: ["PHP", "Python", "Java", "JavaScript", "HTML", "CSS", "MySQL", "Ciência de Dados / Dashboards", "Git/GitHub", "Inkscape", "Tinkercad"]
      },
      g: {
        role: "Front-End Specialist · UI/UX Designer & Engenheiro de Automação Python",
        edu: [
          { t: "Bacharelado em Ciência da Computação", s: "UNIP · último ano" },
          { t: "Front-End & UI/UX", s: "Origamid · especialização" },
          { t: "PHP & Automação com Python", s: "Estudos avançados" },
          { t: "Idiomas", s: "Português nativo · Inglês intermediário → avançado" }
        ],
        practice: [
          { org: "D'Goiás", role: "Marketing digital", text: "Criação de páginas institucionais, páginas de formulário e campanhas digitais." },
          { org: "Doppio Marketing", role: "Agência · design & vídeo", text: "Prototipagem de layouts no Figma, adaptação de identidades visuais e edição de vídeos no Adobe Premiere e CapCut." },
          { org: "Rede Palhares", role: "Logística & sistemas", text: "Controle logístico de estoque e suporte a sistemas internos." }
        ],
        stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "UI/UX no Figma", "Python (automação, limpeza de dados, relatórios)", "Consumo de APIs", "Docker", "Vercel", "HostGator"]
      }
    },
    projects: {
      index: "[05] — PROJETOS & PORTFÓLIOS",
      title: "Estudos de caso, não vitrines.",
      intro: "Projetos publicados, com link para você abrir e testar. Cada um documentado como caso executivo: o problema, a arquitetura escolhida e o resultado entregue.",
      filters: { all: "Todos", systems: "Sistemas & Web Apps", landing: "Landing Pages & UI/UX", automation: "Automação & Dados" },
      lProblem: "O PROBLEMA",
      lArch: "A ARQUITETURA",
      lResult: "O RESULTADO",
      count: "casos",
      caseLabel: "CASO",
      lBy: "POR",
      links: { site: "Ver site", behance: "Ver no Behance", code: "Ver código", none: "Uso interno · sem link público" },
      cases: [
        {
          title: "K-Byte / Search Store",
          context: "Marketplace · diretório de lojas físicas de tecnologia",
          problem: "Lojas físicas de hardware sem canal digital para alcançar clientes, e lojistas sem ferramenta para gerir catálogo, vendas e suporte.",
          arch: "Duas experiências em um só sistema: a vitrine do cliente (lojas parceiras, catálogo, carrinho, checkout e acompanhamento do pedido) e o painel do lojista, com lógica de back-end em PHP e banco MySQL.",
          result: "20 telas mapeadas — 11 na jornada do cliente e 9 no painel do lojista — sob um único design system com duas identidades visuais.",
          stack: ["PHP", "MySQL", "JavaScript", "Full-Stack"]
        },
        {
          title: "NovaPulse Commerce Dashboard",
          context: "Painel administrativo · e-commerce · conceito",
          problem: "Donos de e-commerce precisam enxergar receita, pedidos, clientes e desempenho sem se perder em telas poluídas.",
          arch: "Dashboard com layout minimalista, hierarquia clara, componentes de UI modernos e visualização de dados priorizando os indicadores operacionais.",
          result: "Visão geral da operação em uma única tela — base pronta para virar o front-end de um sistema de gestão.",
          stack: ["Figma", "UI/UX", "Dashboard", "Data viz"]
        },
        {
          title: "Hat-Trick",
          context: "Portal interativo de futebol · desenvolvimento em equipe",
          problem: "Reunir notícias, jogos da rodada, classificação, transferências e estatísticas em um só portal, com várias pessoas desenvolvendo ao mesmo tempo.",
          arch: "Front-end em HTML, CSS e JavaScript com páginas modulares e fluxo de versionamento colaborativo no Git/GitHub.",
          result: "Portal multipágina com rodada, tabela, equipes e um “Monte Seu Time”, construído em equipe e publicado na Vercel.",
          stack: ["HTML", "CSS", "JavaScript", "Git/GitHub"]
        },
        {
          title: "Iron Park",
          context: "Academia · Santa Rita do Passa Quatro/SP",
          problem: "Academia local sem presença digital própria para apresentar estrutura, treinos e planos e transformar visitantes em alunos.",
          arch: "Site one-page em TypeScript com seções de academia, estrutura, treinos, produtos, planos e contato, e o CTA “Quero treinar” repetido ao longo da página.",
          result: "Uma página que conduz do primeiro impacto até o contato, com identidade visual forte e navegação por seções.",
          stack: ["TypeScript", "CSS", "JavaScript", "Responsivo"]
        },
        {
          title: "Rivlo",
          context: "Plataforma fitness com IA · landing page",
          problem: "Explicar em segundos um produto novo — planos de treino personalizados gerados por IA — e levar o visitante ao cadastro.",
          arch: "Landing page com foco em clareza da proposta e hierarquia visual, construída com React, HTML/CSS e JavaScript.",
          result: "Interface que apresenta produto, benefícios e chamada para ação em poucas rolagens.",
          stack: ["React", "HTML/CSS", "JavaScript", "UI/UX"]
        },
        {
          title: "Aurora Contábil",
          context: "Escritório de contabilidade · site institucional",
          problem: "Contabilidade vive de confiança, mas sites genéricos não transmitem credibilidade nem facilitam o primeiro contato.",
          arch: "Site institucional que destaca serviços, indicadores de confiança e contato direto por WhatsApp, com UI limpa e foco em captação.",
          result: "Caminho curto entre conhecer o escritório e falar com um contador.",
          stack: ["Web Design", "UI/UX", "WhatsApp", "Landing page"]
        },
        {
          title: "Vortice Fitness",
          context: "Conceito para marca fitness fictícia",
          problem: "Desenhar uma landing page de alta conversão para o segmento fitness, com impacto visual sem perder clareza.",
          arch: "Interface escura, tipografia forte e seções curtas que levam a uma única ação principal.",
          result: "Estudo de linguagem visual pronto para ser adaptado a uma marca real do segmento.",
          stack: ["UI/UX", "Web Design", "Dark UI", "Tipografia"]
        },
        {
          title: "La Forno & Lumina",
          context: "Gastronomia · pizzaria e restaurante",
          problem: "Pizzarias e restaurantes precisam mostrar cardápio, preços e ambiente — e transformar a visita em pedido ou reserva.",
          arch: "Dois sites em HTML, CSS e JavaScript: La Forno com cardápio por tamanho e botão de pedido; Lumina com o espaço, o chef, o cardápio e a reserva de mesa.",
          result: "Dois modelos de site para gastronomia, cada um com identidade própria e um objetivo claro: pedir ou reservar.",
          stack: ["HTML", "CSS", "JavaScript", "Responsivo"]
        },
        {
          title: "ComunaCheck",
          context: "Projeto acadêmico · IA aplicada à informação regional",
          problem: "Notícias regionais e vagas de emprego espalhadas em muitas fontes, exigindo leitura manual para achar o que importa.",
          arch: "Filtragem automatizada com Python e Inteligência Artificial, que seleciona notícias regionais e vagas por relevância.",
          result: "Fluxo de informação mais enxuto: o usuário recebe o que é relevante em vez de garimpar fontes.",
          stack: ["Python", "IA", "Automação", "Git/GitHub"]
        },
        {
          title: "Rotina automatizada de limpeza de dados e relatórios",
          context: "Rotinas internas · dados de operação",
          problem: "Relatórios montados à mão a partir de planilhas brutas exportadas de sistemas diferentes, com duplicatas e formatos inconsistentes.",
          arch: "Scripts em Python que leem planilhas Excel/Google Sheets e APIs, normalizam datas, valores e textos, removem duplicatas e exportam relatórios e dashboards.",
          result: "Relatórios padronizados e prontos para decisão, gerados em segundos — sem copiar e colar.",
          stack: ["Python", "Excel", "Google Sheets", "APIs"]
        }
      ],
      hub: {
        label: "HUB",
        title: "Hub de portfólios individuais",
        text: "Explore o trabalho de cada engenheiro em detalhe — repositórios, interfaces e experimentos.",
        visit: "Abrir portfólio",
        kRole: "Sistemas · Dados · 2D/3D",
        gRole: "Front-End · UI/UX · Python"
      }
    },
    calc: {
      index: "[06] — INICIAR PROJETO",
      title: "Conte sua ideia. A gente desenha o caminho.",
      intro: "Escolha o tipo de projeto, o prazo e a sua região. Montamos um resumo no seu idioma, pronto para enviar por WhatsApp ou e-mail — e respondemos pessoalmente.",
      s1: "01 · Tipo de solução",
      s2: "02 · Prazo desejado",
      s3: "03 · Onde fica a sua empresa?",
      s4: "04 · Sobre você (opcional)",
      types: {
        site: { t: "Site Institucional", d: "Presença profissional, páginas de serviços e contato." },
        landing: { t: "Landing Page de Alta Conversão", d: "Uma página focada em uma oferta e em captar leads." },
        system: { t: "Sistema Web ou Estoque", d: "Cadastro, inventário, vendas, relatórios e acesso por login." },
        automation: { t: "Automação Python & Dados", d: "Planilhas, APIs, rotinas repetitivas e relatórios automáticos." }
      },
      deadlines: {
        urgent: { t: "Urgente", d: "Prioridade na fila de entrega" },
        d30: { t: "30 dias", d: "Cronograma padrão" },
        flexible: { t: "Flexível", d: "Mais tempo para refinar cada detalhe" }
      },
      regions: {
        brl: { t: "Brasil", d: "Atendimento em português" },
        eur: { t: "Europa", d: "Reuniões no fuso europeu (CET)" },
        usd: { t: "Internacional", d: "Atendimento em inglês ou espanhol" }
      },
      name: "Nome / empresa",
      namePh: "Ex.: Maria — Studio Lume",
      details: "Descreva o projeto em uma frase",
      detailsPh: "Ex.: Preciso de um site com agendamento online e integração com WhatsApp.",
      summary: "RESUMO TÉCNICO",
      next: {
        label: "PRÓXIMOS PASSOS",
        title: "Proposta sob medida, sem compromisso.",
        steps: ["Você envia este resumo pelo canal que preferir.", "Conversamos rapidamente para entender o seu negócio.", "Você recebe uma proposta com escopo, prazo e investimento."],
        note: "Cada projeto é diferente — por isso o valor só é definido depois que entendemos o que você precisa."
      },
      preview: "Pré-visualização da mensagem",
      sendTitle: "Enviar resumo para",
      waK: "WhatsApp · Kauã",
      waG: "WhatsApp · Gustavo",
      email: "E-mail · ambos",
      copy: "Copiar resumo",
      copied: "Copiado!",
      msg: {
        intro: "Olá, Kauã e Gustavo! Vim pelo site de vocês e gostaria de iniciar um projeto.",
        head: "RESUMO TÉCNICO DO PROJETO",
        type: "Solução",
        deadline: "Prazo",
        region: "Região",
        details: "Detalhes",
        name: "Nome/empresa",
        lang: "Idioma do atendimento",
        outro: "Podemos agendar uma conversa de diagnóstico?",
        subject: "Novo projeto via site — {type}",
        notInformed: "não informado"
      }
    },
    footer: {
      cta: "Tem um projeto em mente?",
      ctaBig: "Vamos construir a infraestrutura digital da sua empresa.",
      start: "Iniciar projeto",
      rights: "© 2026 {brand}. Código autoral, escrito à mão.",
      lang: "Idioma",
      contact: "Contato",
      nav: "Navegação",
      base: "Base",
      backTop: "Voltar ao topo",
      made: "Projetado e codificado em Santa Rita do Passa Quatro, SP — Brasil."
    }
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    langName: "English",
    meta: {
      title: "{brand} — Custom Web Engineering, Systems & Python Automation",
      description: "A software engineering duo from Brazil serving Brazil and Europe: high-conversion websites, custom systems with inventory control and Python automation."
    },
    a11y: {
      lang: "Select language",
      menu: "Open navigation menu",
      range: "Wireframe compile control",
      tabs: "Simulator tabs"
    },
    status: {
      base: "BASE",
      baseValue: "SÃO PAULO, BRAZIL (SANTA RITA DO PASSA QUATRO)",
      operating: "OPERATING",
      operatingValue: "BRAZIL & EUROPE (UTC-3)",
      status: "STATUS",
      statusValue: "AVAILABLE FOR NEW PROJECTS",
      local: "LOCAL TIME",
      rome: "ROME"
    },
    nav: {
      solutions: "Solutions",
      simulator: "Live Simulator",
      projects: "Projects & Portfolios",
      team: "The Duo",
      cta: "Start a Project",
      menu: "Menu",
      close: "Close"
    },
    hero: {
      index: "[01] — SOFTWARE ENGINEERING STUDIO",
      line1: "Websites that <em>convert.</em>",
      line2: "Systems that <em>organize.</em>",
      line3: "Automations that <em>work for you.</em>",
      sub: "Software engineering, interface design and business sense — building your company's digital infrastructure, from website to system.",
      ctaPrimary: "Request a proposal",
      ctaSecondary: "Try the simulator",
      l1: "INTERFACE · WEB",
      l2: "SYSTEM · DATA",
      l3: "ROUTINE · PYTHON",
      fig: "FIG. 01 — ONE INFRASTRUCTURE, THREE LAYERS",
      scroll: "Scroll to explore"
    },
    sim: {
      index: "[02] — HANDS-ON SIMULATOR",
      title: "See it working before you hire us.",
      intro: "Three demos running right here in your browser. The same kind of work we deliver to clients — in miniature.",
      points: { web: "Drag the slider and watch a Figma wireframe turn into a responsive interface.", stock: "Add a product, register a sale and watch the KPIs update.", py: "Run the routine and watch a messy spreadsheet become a clean report." },
      label: "LIVE SIMULATOR — click and try it",
      live: "LIVE",
      tabs: { web: "Web & Landing Pages", stock: "Systems & Inventory", py: "Python Automation" },
      web: {
        hint: "Drag the handle to compile the wireframe into a live interface",
        wire: "WIREFRAME · FIGMA",
        ui: "INTERFACE · HTML/CSS/TAILWIND",
        desktop: "Desktop",
        mobile: "Mobile",
        brand: "Aurora Dental",
        nav1: "Services",
        nav2: "Team",
        nav3: "Contact",
        heroTitle: "Book your check-up in 30 seconds.",
        heroText: "Caring service, flexible hours and instant confirmation on WhatsApp.",
        cta: "Book now",
        card1: "Implants",
        card2: "Orthodontics",
        card3: "Whitening",
        status: "build ok · responsive · accessible",
        figma: "frame: Hero / Auto Layout 24 · Figma"
      },
      stock: {
        title: "Inventory Dashboard — v1.0",
        kItems: "Units in stock",
        kValue: "Inventory value",
        kSales: "Sales today",
        kLow: "Low-stock alerts",
        fName: "Product",
        fQty: "Qty",
        fPrice: "Price",
        add: "Add",
        cProduct: "Product",
        cQty: "Qty",
        cPrice: "Price",
        cAct: "Action",
        sell: "Sell",
        restock: "Restock",
        low: "LOW",
        ok: "OK",
        logReady: "Connected to mysql://inventory — ready.",
        logInsert: "INSERT INTO products",
        logSale: "UPDATE inventory SET qty = qty - 1 · sale recorded",
        logRestock: "UPDATE inventory SET qty = qty + 5 · restocked",
        invalid: "Please enter a valid product, quantity and price.",
        seed: ["iPhone 11 Screen", "Galaxy S21 Battery", "USB-C Connector", "3D Privacy Screen Protector"]
      },
      py: {
        run: "Run Routine",
        running: "Running…",
        rerun: "Run again",
        raw: "INPUT · raw spreadsheet",
        clean: "OUTPUT · clean report",
        idle: "Waiting to run. Click “Run Routine”.",
        waiting: "waiting for data…",
        colChannel: "Channel",
        colOrders: "Orders",
        colRevenue: "Revenue",
        total: "Total",
        issues: { dup: "DUPLICATE", missing: "EMPTY", format: "FORMAT" },
        header: "date;customer;channel;amount",
        file: "raw_sales.xlsx",
        report: "clean_report.xlsx",
        channels: ["Marketplace", "Physical store", "E-commerce", "WhatsApp"],
        logs: [
          "$ python report_routine.py --input raw_sales.xlsx",
          "[1/5] Reading raw spreadsheet… 1,284 rows found",
          "[2/5] Removing duplicates… 37 records dropped",
          "[3/5] Normalizing dates, amounts and names…",
          "[4/5] Grouping by sales channel…",
          "[5/5] Exporting clean_report.xlsx + dashboard.pdf",
          "✓ Routine finished in 0.84 s — 1,247 valid rows"
        ]
      }
    },
    solutions: {
      index: "[03] — WHAT WE SOLVE",
      title: "Four disciplines. One coherent digital infrastructure.",
      intro: "Each block below is an area we have already delivered in real environments — retail, marketing, labs and inventory operations. No abstract promises: scope, stack and delivery.",
      deploy: "DEPLOY",
      b1: {
        tag: "WEB / FRONT-END",
        title: "Custom Web Engineering, Websites & Landing Pages",
        text: "Corporate websites, form-driven pages, e-commerce and responsive platforms built with HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap and PHP, deployed on Vercel or HostGator.",
        out: "Outcome: a professional presence that generates qualified leads, fast on mobile and easy to maintain."
      },
      b2: {
        tag: "SYSTEMS / DATA",
        title: "Custom Systems & Inventory/Marketplace Management",
        text: "Internal systems, MySQL databases and integrated control of sales, inventory and assets — designed by people with real, hands-on experience running inventories, marketplaces and operational systems in a corporate environment.",
        out: "Outcome: inventory, sales and assets in one place — with reliable numbers to make decisions."
      },
      b3: {
        tag: "PYTHON / AUTOMATION",
        title: "Python Process Automation & Data Intelligence",
        text: "Python scripts and API integrations for data cleaning, spreadsheet handling (Excel/Google Sheets), automation of repetitive computer tasks and automatic generation of reports and dashboards.",
        out: "Outcome: hours of manual work handed back to your team every week."
      },
      b4: {
        tag: "DESIGN / 3D",
        title: "UI/UX Design, Visual Identity & 2D/3D Modeling",
        text: "Figma prototyping, visual communication focused on usability and conversion, video editing (Premiere/CapCut) and 2D/3D modeling (Inkscape, Tinkercad) to make digital products stand out in Brazil and abroad.",
        out: "Outcome: premium-looking digital products with navigation that drives conversion."
      }
    },
    team: {
      index: "[04] — THE DUO",
      title: "The engineers behind the code.",
      intro: "Two partners in their final year of Computer Science at UNIP, with hands-on experience in real operations: inventory, marketplaces, marketing, labs and systems support. You talk directly to the people who write the code.",
      shared: "Both · Computer Science · UNIP · final year",
      profile: "PROFILE",
      lRole: "ROLE IN THE TEAM",
      lEdu: "EDUCATION & LANGUAGES",
      lPractice: "HANDS-ON EXPERIENCE",
      lStack: "CORE STACK",
      lLinks: "DIRECT LINKS",
      portfolio: "Personal portfolio",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
      whatsapp: "International WhatsApp",
      k: {
        role: "Full-Stack Systems Developer · Infrastructure, Data & 2D/3D Modeling Specialist",
        edu: [
          { t: "B.Sc. Computer Science", s: "Universidade Paulista (UNIP) · 2023–2026" },
          { t: "Technical Degree in Internet Computing", s: "Etec · 2020–2022" },
          { t: "Generative AI with Gemini", s: "Santander Open Academy · certification" },
          { t: "Languages", s: "Native Portuguese · Advanced English (CCAA certified)" }
        ],
        practice: [
          { org: "IQUEBBROU", role: "Electronics Technical Assistant · current", text: "Rollout of integrated sales and inventory control systems, marketplace management and critical hardware/software maintenance on Windows and Linux/Ubuntu." },
          { org: "SESI-SP", role: "Lab infrastructure · 2 years", text: "Management of lab infrastructure, 3D printing, laser cutting and 2D/3D modeling for digital fabrication projects." }
        ],
        stack: ["PHP", "Python", "Java", "JavaScript", "HTML", "CSS", "MySQL", "Data Science / Dashboards", "Git/GitHub", "Inkscape", "Tinkercad"]
      },
      g: {
        role: "Front-End Specialist · UI/UX Designer & Python Automation Engineer",
        edu: [
          { t: "B.Sc. Computer Science", s: "UNIP · final year" },
          { t: "Front-End & UI/UX", s: "Origamid · specialization" },
          { t: "PHP & Python Automation", s: "Advanced studies" },
          { t: "Languages", s: "Native Portuguese · English, intermediate → advanced" }
        ],
        practice: [
          { org: "D'Goiás", role: "Digital marketing", text: "Built corporate pages, form pages and digital campaigns." },
          { org: "Doppio Marketing", role: "Agency · design & video", text: "Prototyped layouts in Figma, adapted visual identities and edited videos in Adobe Premiere and CapCut." },
          { org: "Rede Palhares", role: "Logistics & systems", text: "Inventory logistics control and internal systems support." }
        ],
        stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "UI/UX in Figma", "Python (automation, data cleaning, reports)", "API integration", "Docker", "Vercel", "HostGator"]
      }
    },
    projects: {
      index: "[05] — PROJECTS & PORTFOLIOS",
      title: "Case studies, not showcases.",
      intro: "Published projects, with links you can open and test. Each one documented as an executive case: the problem, the architecture we chose and the result delivered.",
      filters: { all: "All", systems: "Systems & Web Apps", landing: "Landing Pages & UI/UX", automation: "Automation & Data" },
      lProblem: "THE PROBLEM",
      lArch: "THE ARCHITECTURE",
      lResult: "THE RESULT",
      count: "cases",
      caseLabel: "CASE",
      lBy: "BY",
      links: { site: "Live site", behance: "View on Behance", code: "View code", none: "Internal use · no public link" },
      cases: [
        {
          title: "K-Byte / Search Store",
          context: "Marketplace · directory of brick-and-mortar tech stores",
          problem: "Physical hardware stores had no digital channel to reach customers, and store owners had no tool to manage catalog, sales and support.",
          arch: "Two experiences in one system: the customer storefront (partner stores, catalog, cart, checkout and order tracking) and the merchant dashboard, with PHP back-end logic and a MySQL database.",
          result: "20 screens mapped — 11 in the customer journey and 9 in the merchant dashboard — under a single design system with two visual identities.",
          stack: ["PHP", "MySQL", "JavaScript", "Full-Stack"]
        },
        {
          title: "NovaPulse Commerce Dashboard",
          context: "Admin panel · e-commerce · concept",
          problem: "E-commerce owners need to see revenue, orders, customers and performance without getting lost in cluttered screens.",
          arch: "A dashboard with a minimal layout, clear hierarchy, modern UI components and data visualization that puts operational KPIs first.",
          result: "The whole operation at a glance on one screen — a ready foundation for the front-end of a management system.",
          stack: ["Figma", "UI/UX", "Dashboard", "Data viz"]
        },
        {
          title: "Hat-Trick",
          context: "Interactive football portal · team development",
          problem: "Bring news, fixtures, standings, transfers and stats together in one portal, with several people coding at the same time.",
          arch: "HTML, CSS and JavaScript front-end with modular pages and a collaborative Git/GitHub versioning workflow.",
          result: "A multi-page portal with fixtures, table, teams and a “Build Your Team” feature, built as a team and deployed on Vercel.",
          stack: ["HTML", "CSS", "JavaScript", "Git/GitHub"]
        },
        {
          title: "Iron Park",
          context: "Gym · Santa Rita do Passa Quatro, Brazil",
          problem: "A local gym with no digital presence of its own to show its facilities, training and plans, and turn visitors into members.",
          arch: "One-page TypeScript site with sections for the gym, facilities, training, products, plans and contact, and a “Start training” CTA repeated along the page.",
          result: "A page that leads from first impression to contact, with a strong visual identity and section-based navigation.",
          stack: ["TypeScript", "CSS", "JavaScript", "Responsive"]
        },
        {
          title: "Rivlo",
          context: "AI fitness platform · landing page",
          problem: "Explain a new product in seconds — personalized AI-generated training plans — and move the visitor to sign-up.",
          arch: "A landing page focused on a clear value proposition and visual hierarchy, built with React, HTML/CSS and JavaScript.",
          result: "An interface that presents the product, its benefits and the call to action within a few scrolls.",
          stack: ["React", "HTML/CSS", "JavaScript", "UI/UX"]
        },
        {
          title: "Aurora Contábil",
          context: "Accounting firm · corporate website",
          problem: "Accounting runs on trust, yet generic websites neither convey credibility nor make first contact easy.",
          arch: "A corporate website highlighting services, trust signals and direct WhatsApp contact, with a clean UI focused on lead generation.",
          result: "A short path from discovering the firm to talking to an accountant.",
          stack: ["Web Design", "UI/UX", "WhatsApp", "Landing page"]
        },
        {
          title: "Vortice Fitness",
          context: "Concept for a fictional fitness brand",
          problem: "Design a high-conversion landing page for the fitness segment, with visual impact and no loss of clarity.",
          arch: "Dark interface, bold typography and short sections leading to a single primary action.",
          result: "A visual-language study ready to be adapted to a real brand in the segment.",
          stack: ["UI/UX", "Web Design", "Dark UI", "Typography"]
        },
        {
          title: "La Forno & Lumina",
          context: "Food service · pizzeria and restaurant",
          problem: "Pizzerias and restaurants need to show menu, prices and atmosphere — and turn a visit into an order or a booking.",
          arch: "Two sites in HTML, CSS and JavaScript: La Forno with a size-based menu and order button; Lumina with the venue, the chef, the menu and table booking.",
          result: "Two food-service website models, each with its own identity and one clear goal: order or book.",
          stack: ["HTML", "CSS", "JavaScript", "Responsive"]
        },
        {
          title: "ComunaCheck",
          context: "Academic project · AI applied to regional information",
          problem: "Regional news and job openings scattered across many sources, requiring manual reading to find what matters.",
          arch: "Automated filtering with Python and Artificial Intelligence that selects regional news and job openings by relevance.",
          result: "A leaner information flow: users get what is relevant instead of digging through sources.",
          stack: ["Python", "AI", "Automation", "Git/GitHub"]
        },
        {
          title: "Automated data-cleaning & reporting routine",
          context: "Internal routines · operations data",
          problem: "Reports were built by hand from raw spreadsheets exported from different systems, full of duplicates and inconsistent formats.",
          arch: "Python scripts that read Excel/Google Sheets files and APIs, normalize dates, amounts and text, remove duplicates and export reports and dashboards.",
          result: "Standardized, decision-ready reports generated in seconds — no more copy-and-paste.",
          stack: ["Python", "Excel", "Google Sheets", "APIs"]
        }
      ],
      hub: {
        label: "HUB",
        title: "Individual portfolio hub",
        text: "Explore each engineer's work in depth — repositories, interfaces and experiments.",
        visit: "Open portfolio",
        kRole: "Systems · Data · 2D/3D",
        gRole: "Front-End · UI/UX · Python"
      }
    },
    calc: {
      index: "[06] — START A PROJECT",
      title: "Tell us your idea. We'll map the way.",
      intro: "Pick the project type, the timeline and your region. We put together a summary in your language, ready to send via WhatsApp or e-mail — and we reply personally.",
      s1: "01 · Type of solution",
      s2: "02 · Desired timeline",
      s3: "03 · Where is your company based?",
      s4: "04 · About you (optional)",
      types: {
        site: { t: "Corporate Website", d: "Professional presence, service pages and contact." },
        landing: { t: "High-Conversion Landing Page", d: "A single page focused on one offer and on capturing leads." },
        system: { t: "Web System or Inventory", d: "Records, inventory, sales, reports and login access." },
        automation: { t: "Python Automation & Data", d: "Spreadsheets, APIs, repetitive tasks and automated reports." }
      },
      deadlines: {
        urgent: { t: "Urgent", d: "Priority in the delivery queue" },
        d30: { t: "30 days", d: "Standard timeline" },
        flexible: { t: "Flexible", d: "More time to refine every detail" }
      },
      regions: {
        brl: { t: "Brazil", d: "Service in Portuguese" },
        eur: { t: "Europe", d: "Meetings on European time (CET)" },
        usd: { t: "International", d: "Service in English or Spanish" }
      },
      name: "Name / company",
      namePh: "e.g. Emma — Lume Studio",
      details: "Describe the project in one sentence",
      detailsPh: "e.g. I need a website with online booking and WhatsApp integration.",
      summary: "TECHNICAL BRIEF",
      next: {
        label: "NEXT STEPS",
        title: "A tailored proposal, no strings attached.",
        steps: ["You send this summary through the channel you prefer.", "We have a quick call to understand your business.", "You receive a proposal with scope, timeline and investment."],
        note: "Every project is different — that's why pricing is set only after we understand what you need."
      },
      preview: "Message preview",
      sendTitle: "Send brief to",
      waK: "WhatsApp · Kauã",
      waG: "WhatsApp · Gustavo",
      email: "E-mail · both",
      copy: "Copy brief",
      copied: "Copied!",
      msg: {
        intro: "Hi Kauã and Gustavo! I found you through your website and I'd like to start a project.",
        head: "PROJECT TECHNICAL BRIEF",
        type: "Solution",
        deadline: "Timeline",
        region: "Region",
        details: "Details",
        name: "Name/company",
        lang: "Preferred language",
        outro: "Could we schedule a short discovery call?",
        subject: "New project via website — {type}",
        notInformed: "not provided"
      }
    },
    footer: {
      cta: "Have a project in mind?",
      ctaBig: "Let's build your company's digital infrastructure.",
      start: "Start a project",
      rights: "© 2026 {brand}. Original, hand-written code.",
      lang: "Language",
      contact: "Contact",
      nav: "Navigation",
      base: "Base",
      backTop: "Back to top",
      made: "Designed and engineered in Santa Rita do Passa Quatro, SP — Brazil."
    }
  },

  /* ------------------------------------------------------------------ IT */
  it: {
    langName: "Italiano",
    meta: {
      title: "{brand} — Sviluppo Web, Sistemi Gestionali & Automazione Python",
      description: "Due ingegneri del software dal Brasile per clienti in Brasile ed Europa: siti web ad alta conversione, sistemi gestionali su misura con controllo di magazzino e automazioni in Python."
    },
    a11y: {
      lang: "Seleziona la lingua",
      menu: "Apri il menu di navigazione",
      range: "Controllo di compilazione del wireframe",
      tabs: "Schede del simulatore"
    },
    status: {
      base: "BASE",
      baseValue: "SÃO PAULO, BRASILE (SANTA RITA DO PASSA QUATRO)",
      operating: "OPERATIVITÀ",
      operatingValue: "BRASILE & EUROPA (UTC-3)",
      status: "STATO",
      statusValue: "DISPONIBILI PER NUOVI PROGETTI",
      local: "ORA LOCALE",
      rome: "ROMA"
    },
    nav: {
      solutions: "Soluzioni",
      simulator: "Simulatore dal Vivo",
      projects: "Progetti & Portfolio",
      team: "Il Duo",
      cta: "Avvia un Progetto",
      menu: "Menu",
      close: "Chiudi"
    },
    hero: {
      index: "[01] — STUDIO DI INGEGNERIA DEL SOFTWARE",
      line1: "Siti web che <em>convertono.</em>",
      line2: "Sistemi su misura che <em>organizzano.</em>",
      line3: "Automazioni che <em>lavorano per te.</em>",
      sub: "Ingegneria del software, design dell'interfaccia e visione di business — per costruire l'infrastruttura digitale della tua azienda, dal sito al gestionale.",
      ctaPrimary: "Richiedi una proposta",
      ctaSecondary: "Prova il simulatore",
      l1: "INTERFACCIA · WEB",
      l2: "SISTEMA · DATI",
      l3: "ROUTINE · PYTHON",
      fig: "FIG. 01 — UN'INFRASTRUTTURA, TRE LIVELLI",
      scroll: "Scorri per esplorare"
    },
    sim: {
      index: "[02] — SIMULATORE IN PRATICA",
      title: "Guardalo funzionare prima di affidarci il progetto.",
      intro: "Tre demo che girano qui, direttamente nel tuo browser. Lo stesso tipo di lavoro che consegniamo ai clienti — in miniatura.",
      points: { web: "Trascina il cursore e guarda un wireframe Figma diventare un'interfaccia responsive.", stock: "Inserisci un prodotto, registra una vendita e guarda gli indicatori aggiornarsi.", py: "Avvia la routine e guarda un foglio disordinato diventare un report pulito." },
      label: "SIMULATORE DAL VIVO — clicca e prova",
      live: "DAL VIVO",
      tabs: { web: "Web & Landing Page", stock: "Gestionali & Magazzino", py: "Automazione Python" },
      web: {
        hint: "Trascina il cursore per compilare il wireframe in interfaccia",
        wire: "WIREFRAME · FIGMA",
        ui: "INTERFACCIA · HTML/CSS/TAILWIND",
        desktop: "Desktop",
        mobile: "Mobile",
        brand: "Aurora Dental",
        nav1: "Servizi",
        nav2: "Team",
        nav3: "Contatti",
        heroTitle: "Prenota la tua visita in 30 secondi.",
        heroText: "Assistenza attenta, orari flessibili e conferma immediata su WhatsApp.",
        cta: "Prenota ora",
        card1: "Implantologia",
        card2: "Ortodonzia",
        card3: "Sbiancamento",
        status: "build ok · responsive · accessibile",
        figma: "frame: Hero / Auto Layout 24 · Figma"
      },
      stock: {
        title: "Pannello Magazzino — v1.0",
        kItems: "Articoli in giacenza",
        kValue: "Valore inventario",
        kSales: "Vendite oggi",
        kLow: "Scorte basse",
        fName: "Prodotto",
        fQty: "Q.tà",
        fPrice: "Prezzo",
        add: "Registra",
        cProduct: "Prodotto",
        cQty: "Q.tà",
        cPrice: "Prezzo",
        cAct: "Azione",
        sell: "Vendi",
        restock: "Riordina",
        low: "BASSO",
        ok: "OK",
        logReady: "Connesso a mysql://magazzino — pronto.",
        logInsert: "INSERT INTO prodotti",
        logSale: "UPDATE magazzino SET qta = qta - 1 · vendita registrata",
        logRestock: "UPDATE magazzino SET qta = qta + 5 · riassortimento",
        invalid: "Inserisci prodotto, quantità e prezzo validi.",
        seed: ["Display iPhone 11", "Batteria Galaxy S21", "Connettore USB-C", "Pellicola 3D Privacy"]
      },
      py: {
        run: "Esegui Routine",
        running: "In esecuzione…",
        rerun: "Esegui di nuovo",
        raw: "INPUT · foglio grezzo",
        clean: "OUTPUT · report pulito",
        idle: "In attesa di esecuzione. Clicca su “Esegui Routine”.",
        waiting: "in attesa dei dati…",
        colChannel: "Canale",
        colOrders: "Ordini",
        colRevenue: "Fatturato",
        total: "Totale",
        issues: { dup: "DUPLICATO", missing: "VUOTO", format: "FORMATO" },
        header: "data;cliente;canale;importo",
        file: "vendite_grezze.xlsx",
        report: "report_pulito.xlsx",
        channels: ["Marketplace", "Negozio fisico", "E-commerce", "WhatsApp"],
        logs: [
          "$ python routine_report.py --input vendite_grezze.xlsx",
          "[1/5] Lettura del foglio grezzo… 1.284 righe trovate",
          "[2/5] Rimozione dei duplicati… 37 record scartati",
          "[3/5] Normalizzazione di date, importi e nomi…",
          "[4/5] Raggruppamento per canale di vendita…",
          "[5/5] Esportazione report_pulito.xlsx + dashboard.pdf",
          "✓ Routine completata in 0,84 s — 1.247 righe valide"
        ]
      }
    },
    solutions: {
      index: "[03] — COSA RISOLVIAMO",
      title: "Quattro aree. Un'unica infrastruttura digitale coerente.",
      intro: "Ogni blocco è un'area in cui abbiamo già lavorato in contesti reali — retail, marketing, laboratorio e gestione del magazzino. Niente promesse astratte: perimetro, stack e consegna.",
      deploy: "DEPLOY",
      b1: {
        tag: "WEB / FRONT-END",
        title: "Sviluppo Web, Siti & Landing Page",
        text: "Siti istituzionali, pagine con form di contatto, e-commerce e piattaforme responsive sviluppate con HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap e PHP, pubblicate su Vercel o HostGator.",
        out: "Risultato: una presenza professionale che genera contatti qualificati, veloce su mobile e facile da gestire."
      },
      b2: {
        tag: "GESTIONALI / DATI",
        title: "Sistemi Gestionali su Misura & Gestione Magazzino/Marketplace",
        text: "Sviluppo di sistemi interni, database MySQL e integrazione del controllo di vendite, inventario e beni aziendali — progettati da chi ha esperienza pratica reale nella gestione di magazzini, marketplace e sistemi operativi in ambito aziendale.",
        out: "Risultato: magazzino, vendite e beni aziendali in un unico posto — con numeri affidabili per decidere."
      },
      b3: {
        tag: "PYTHON / AUTOMAZIONE",
        title: "Automazione dei Processi & Data Intelligence con Python",
        text: "Script Python e integrazione di API per la pulizia dei dati, la gestione di fogli di calcolo (Excel/Google Sheets), l'automazione di attività ripetitive al computer e la generazione automatica di report e dashboard.",
        out: "Risultato: ore di lavoro manuale restituite al team ogni settimana."
      },
      b4: {
        tag: "DESIGN / 3D",
        title: "UI/UX Design, Identità Visiva & Modellazione 2D/3D",
        text: "Prototipazione in Figma, comunicazione visiva orientata a usabilità e conversione, montaggio video (Premiere/CapCut) e modellazione 2D/3D (Inkscape, Tinkercad) per valorizzare prodotti digitali in Brasile e all'estero.",
        out: "Risultato: prodotti digitali dall'aspetto premium e una navigazione che porta alla conversione."
      }
    },
    team: {
      index: "[04] — IL DUO",
      title: "Gli ingegneri dietro il codice.",
      intro: "Due soci all'ultimo anno di Informatica presso l'UNIP, con esperienza pratica in contesti operativi reali: magazzino, marketplace, marketing, laboratorio e supporto ai sistemi. Parli direttamente con chi scrive il codice.",
      shared: "Entrambi · Informatica · UNIP · ultimo anno",
      profile: "PROFILO",
      lRole: "RUOLO NEL TEAM",
      lEdu: "FORMAZIONE & LINGUE",
      lPractice: "ESPERIENZA SUL CAMPO",
      lStack: "STACK PRINCIPALE",
      lLinks: "CONTATTI DIRETTI",
      portfolio: "Portfolio personale",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
      whatsapp: "WhatsApp internazionale",
      k: {
        role: "Full-Stack Systems Developer · Specialista in Infrastruttura, Dati & Modellazione 2D/3D",
        edu: [
          { t: "Laurea in Informatica (Ciência da Computação)", s: "Universidade Paulista (UNIP) · 2023–2026" },
          { t: "Diploma Tecnico in Informatica per Internet", s: "Etec · 2020–2022" },
          { t: "IA Generativa con Gemini", s: "Santander Open Academy · certificazione" },
          { t: "Lingue", s: "Portoghese madrelingua · Inglese avanzato (certificato CCAA)" }
        ],
        practice: [
          { org: "IQUEBBROU", role: "Tecnico elettronico · attuale", text: "Implementazione di sistemi integrati per il controllo di vendite e magazzino, gestione del marketplace e manutenzione critica di hardware e software su Windows e Linux/Ubuntu." },
          { org: "SESI-SP", role: "Infrastruttura di laboratorio · 2 anni", text: "Gestione dell'infrastruttura di laboratorio, stampa 3D, taglio laser e modellazione 2D/3D per progetti di fabbricazione digitale." }
        ],
        stack: ["PHP", "Python", "Java", "JavaScript", "HTML", "CSS", "MySQL", "Data Science / Dashboard", "Git/GitHub", "Inkscape", "Tinkercad"]
      },
      g: {
        role: "Front-End Specialist · UI/UX Designer & Ingegnere dell'Automazione Python",
        edu: [
          { t: "Laurea triennale in Informatica", s: "UNIP · ultimo anno" },
          { t: "Front-End & UI/UX", s: "Origamid · specializzazione" },
          { t: "PHP & Automazione con Python", s: "Studi avanzati" },
          { t: "Lingue", s: "Portoghese madrelingua · Inglese da intermedio ad avanzato" }
        ],
        practice: [
          { org: "D'Goiás", role: "Marketing digitale", text: "Creazione di pagine istituzionali, pagine con form e campagne digitali." },
          { org: "Doppio Marketing", role: "Agenzia · design & video", text: "Prototipazione di layout in Figma, adattamento di identità visive e montaggio video con Adobe Premiere e CapCut." },
          { org: "Rede Palhares", role: "Logistica & sistemi", text: "Controllo logistico del magazzino e supporto ai sistemi interni." }
        ],
        stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "UI/UX in Figma", "Python (automazione, pulizia dati, report)", "Integrazione API", "Docker", "Vercel", "HostGator"]
      }
    },
    projects: {
      index: "[05] — PROGETTI & PORTFOLIO",
      title: "Casi studio, non vetrine.",
      intro: "Progetti pubblicati, con link da aprire e provare. Ognuno documentato come caso executive: il problema, l'architettura scelta e il risultato ottenuto.",
      filters: { all: "Tutti", systems: "Gestionali & Web App", landing: "Landing Page & UI/UX", automation: "Automazione & Dati" },
      lProblem: "IL PROBLEMA",
      lArch: "L'ARCHITETTURA",
      lResult: "IL RISULTATO",
      count: "casi",
      caseLabel: "CASO",
      lBy: "DI",
      links: { site: "Vedi il sito", behance: "Vedi su Behance", code: "Vedi il codice", none: "Uso interno · nessun link pubblico" },
      cases: [
        {
          title: "K-Byte / Search Store",
          context: "Marketplace · directory di negozi fisici di tecnologia",
          problem: "Negozi fisici di hardware senza un canale digitale per raggiungere i clienti, e commercianti senza uno strumento per gestire catalogo, vendite e assistenza.",
          arch: "Due esperienze in un unico sistema: la vetrina del cliente (negozi partner, catalogo, carrello, checkout e tracciamento dell'ordine) e il pannello del commerciante, con logica back-end in PHP e database MySQL.",
          result: "20 schermate progettate — 11 nel percorso del cliente e 9 nel pannello del commerciante — con un unico design system e due identità visive.",
          stack: ["PHP", "MySQL", "JavaScript", "Full-Stack"]
        },
        {
          title: "NovaPulse Commerce Dashboard",
          context: "Pannello di amministrazione · e-commerce · concept",
          problem: "Chi gestisce un e-commerce deve vedere fatturato, ordini, clienti e performance senza perdersi in schermate confuse.",
          arch: "Dashboard con layout minimale, gerarchia chiara, componenti UI moderni e visualizzazione dei dati che mette al centro gli indicatori operativi.",
          result: "Tutta l'operatività in un'unica schermata — una base pronta per diventare il front-end di un gestionale.",
          stack: ["Figma", "UI/UX", "Dashboard", "Data viz"]
        },
        {
          title: "Hat-Trick",
          context: "Portale interattivo di calcio · sviluppo in team",
          problem: "Riunire notizie, partite della giornata, classifica, trasferimenti e statistiche in un unico portale, con più persone che sviluppano in parallelo.",
          arch: "Front-end in HTML, CSS e JavaScript con pagine modulari e un flusso di versionamento collaborativo su Git/GitHub.",
          result: "Portale multipagina con giornata, classifica, squadre e una funzione “Crea la tua squadra”, sviluppato in team e pubblicato su Vercel.",
          stack: ["HTML", "CSS", "JavaScript", "Git/GitHub"]
        },
        {
          title: "Iron Park",
          context: "Palestra · Santa Rita do Passa Quatro, Brasile",
          problem: "Una palestra locale senza una presenza digitale propria per mostrare struttura, allenamenti e abbonamenti e trasformare i visitatori in iscritti.",
          arch: "Sito one-page in TypeScript con sezioni su palestra, struttura, allenamenti, prodotti, abbonamenti e contatti, e la CTA “Voglio allenarmi” ripetuta lungo la pagina.",
          result: "Una pagina che accompagna dal primo impatto fino al contatto, con un'identità visiva forte e navigazione per sezioni.",
          stack: ["TypeScript", "CSS", "JavaScript", "Responsive"]
        },
        {
          title: "Rivlo",
          context: "Piattaforma fitness con IA · landing page",
          problem: "Spiegare in pochi secondi un prodotto nuovo — piani di allenamento personalizzati generati dall'IA — e portare il visitatore all'iscrizione.",
          arch: "Landing page incentrata su una proposta di valore chiara e sulla gerarchia visiva, sviluppata con React, HTML/CSS e JavaScript.",
          result: "Un'interfaccia che presenta prodotto, vantaggi e call to action in pochi scroll.",
          stack: ["React", "HTML/CSS", "JavaScript", "UI/UX"]
        },
        {
          title: "Aurora Contábil",
          context: "Studio di commercialisti · sito istituzionale",
          problem: "La consulenza contabile vive di fiducia, ma i siti generici non trasmettono credibilità né facilitano il primo contatto.",
          arch: "Sito istituzionale che mette in risalto servizi, segnali di fiducia e contatto diretto via WhatsApp, con una UI pulita orientata all'acquisizione clienti.",
          result: "Un percorso breve tra conoscere lo studio e parlare con un commercialista.",
          stack: ["Web Design", "UI/UX", "WhatsApp", "Landing page"]
        },
        {
          title: "Vortice Fitness",
          context: "Concept per un brand fitness fittizio",
          problem: "Progettare una landing page ad alta conversione per il settore fitness, con impatto visivo senza perdere chiarezza.",
          arch: "Interfaccia scura, tipografia decisa e sezioni brevi che conducono a un'unica azione principale.",
          result: "Uno studio di linguaggio visivo pronto per essere adattato a un brand reale del settore.",
          stack: ["UI/UX", "Web Design", "Dark UI", "Tipografia"]
        },
        {
          title: "La Forno & Lumina",
          context: "Ristorazione · pizzeria e ristorante",
          problem: "Pizzerie e ristoranti devono mostrare menù, prezzi e atmosfera — e trasformare la visita in un ordine o in una prenotazione.",
          arch: "Due siti in HTML, CSS e JavaScript: La Forno con menù per formato e pulsante d'ordine; Lumina con il locale, lo chef, il menù e la prenotazione del tavolo.",
          result: "Due modelli di sito per la ristorazione, ciascuno con la propria identità e un obiettivo chiaro: ordinare o prenotare.",
          stack: ["HTML", "CSS", "JavaScript", "Responsive"]
        },
        {
          title: "ComunaCheck",
          context: "Progetto accademico · IA applicata all'informazione locale",
          problem: "Notizie locali e offerte di lavoro sparse su molte fonti, che richiedevano una lettura manuale per trovare ciò che conta.",
          arch: "Filtraggio automatico con Python e Intelligenza Artificiale che seleziona notizie locali e offerte di lavoro per rilevanza.",
          result: "Un flusso di informazioni più snello: l'utente riceve ciò che è rilevante invece di setacciare le fonti.",
          stack: ["Python", "IA", "Automazione", "Git/GitHub"]
        },
        {
          title: "Routine automatizzata di pulizia dati e reportistica",
          context: "Routine interne · dati operativi",
          problem: "Report compilati a mano partendo da fogli grezzi esportati da sistemi diversi, pieni di duplicati e formati incoerenti.",
          arch: "Script Python che leggono file Excel/Google Sheets e API, normalizzano date, importi e testi, rimuovono i duplicati ed esportano report e dashboard.",
          result: "Report standardizzati e pronti per le decisioni, generati in pochi secondi — senza più copia e incolla.",
          stack: ["Python", "Excel", "Google Sheets", "API"]
        }
      ],
      hub: {
        label: "HUB",
        title: "Hub dei portfolio individuali",
        text: "Esplora nel dettaglio il lavoro di ciascun ingegnere — repository, interfacce ed esperimenti.",
        visit: "Apri portfolio",
        kRole: "Sistemi · Dati · 2D/3D",
        gRole: "Front-End · UI/UX · Python"
      }
    },
    calc: {
      index: "[06] — AVVIA UN PROGETTO",
      title: "Raccontaci la tua idea. Al percorso pensiamo noi.",
      intro: "Scegli il tipo di progetto, le tempistiche e la tua area. Prepariamo un riepilogo nella tua lingua, pronto da inviare via WhatsApp o e-mail — e rispondiamo di persona.",
      s1: "01 · Tipo di soluzione",
      s2: "02 · Tempistica desiderata",
      s3: "03 · Dove si trova la tua azienda?",
      s4: "04 · Su di te (facoltativo)",
      types: {
        site: { t: "Sito Istituzionale", d: "Presenza professionale, pagine servizi e contatti." },
        landing: { t: "Landing Page ad Alta Conversione", d: "Una pagina focalizzata su un'offerta e sulla raccolta di lead." },
        system: { t: "Sistema Web o Gestionale di Magazzino", d: "Anagrafiche, inventario, vendite, report e accesso con login." },
        automation: { t: "Automazione Python & Dati", d: "Fogli di calcolo, API, attività ripetitive e report automatici." }
      },
      deadlines: {
        urgent: { t: "Urgente", d: "Priorità nella coda di consegna" },
        d30: { t: "30 giorni", d: "Tempistica standard" },
        flexible: { t: "Flessibile", d: "Più tempo per curare ogni dettaglio" }
      },
      regions: {
        brl: { t: "Brasile", d: "Assistenza in portoghese" },
        eur: { t: "Europa", d: "Riunioni con orario europeo (CET)" },
        usd: { t: "Internazionale", d: "Assistenza in inglese o spagnolo" }
      },
      name: "Nome / azienda",
      namePh: "Es.: Giulia — Studio Lume",
      details: "Descrivi il progetto in una frase",
      detailsPh: "Es.: Mi serve un sito con prenotazioni online e integrazione WhatsApp.",
      summary: "RIEPILOGO TECNICO",
      next: {
        label: "PROSSIMI PASSI",
        title: "Una proposta su misura, senza impegno.",
        steps: ["Ci invii questo riepilogo dal canale che preferisci.", "Facciamo una breve chiamata per capire la tua attività.", "Ricevi una proposta con perimetro, tempi e investimento."],
        note: "Ogni progetto è diverso — per questo il prezzo viene definito solo dopo aver capito di cosa hai bisogno."
      },
      preview: "Anteprima del messaggio",
      sendTitle: "Invia il riepilogo a",
      waK: "WhatsApp · Kauã",
      waG: "WhatsApp · Gustavo",
      email: "E-mail · entrambi",
      copy: "Copia riepilogo",
      copied: "Copiato!",
      msg: {
        intro: "Ciao Kauã e Gustavo! Vi ho trovato tramite il vostro sito e vorrei avviare un progetto.",
        head: "RIEPILOGO TECNICO DEL PROGETTO",
        type: "Soluzione",
        deadline: "Tempistica",
        region: "Area",
        details: "Dettagli",
        name: "Nome/azienda",
        lang: "Lingua di contatto",
        outro: "Possiamo fissare una breve call conoscitiva?",
        subject: "Nuovo progetto dal sito — {type}",
        notInformed: "non indicato"
      }
    },
    footer: {
      cta: "Hai un progetto in mente?",
      ctaBig: "Costruiamo insieme l'infrastruttura digitale della tua azienda.",
      start: "Avvia un progetto",
      rights: "© 2026 {brand}. Codice proprietario, scritto a mano.",
      lang: "Lingua",
      contact: "Contatti",
      nav: "Navigazione",
      base: "Base",
      backTop: "Torna su",
      made: "Progettato e sviluppato a Santa Rita do Passa Quatro, SP — Brasile."
    }
  },

  /* ------------------------------------------------------------------ ES */
  es: {
    langName: "Español",
    meta: {
      title: "{brand} — Desarrollo Web, Sistemas a Medida y Automatización Python",
      description: "Dúo de ingenieros de software desde Brasil para clientes en Brasil, España, Latinoamérica y Europa: sitios web de alta conversión, sistemas a medida con control de inventario y automatizaciones en Python."
    },
    a11y: {
      lang: "Seleccionar idioma",
      menu: "Abrir menú de navegación",
      range: "Control de compilación del wireframe",
      tabs: "Pestañas del simulador"
    },
    status: {
      base: "BASE",
      baseValue: "SÃO PAULO, BRASIL (SANTA RITA DO PASSA QUATRO)",
      operating: "OPERACIÓN",
      operatingValue: "BRASIL & EUROPA (UTC-3)",
      status: "ESTADO",
      statusValue: "DISPONIBLES PARA NUEVOS PROYECTOS",
      local: "HORA LOCAL",
      rome: "ROMA"
    },
    nav: {
      solutions: "Soluciones",
      simulator: "Simulador en Vivo",
      projects: "Proyectos & Portafolios",
      team: "El Dúo",
      cta: "Iniciar Proyecto",
      menu: "Menú",
      close: "Cerrar"
    },
    hero: {
      index: "[01] — ESTUDIO DE INGENIERÍA DE SOFTWARE",
      line1: "Sitios web que <em>venden.</em>",
      line2: "Sistemas que <em>organizan.</em>",
      line3: "Automatizaciones que <em>trabajan por ti.</em>",
      sub: "Ingeniería de software, diseño de interfaces y visión de negocio — para construir la infraestructura digital de tu empresa, del sitio web al sistema.",
      ctaPrimary: "Solicitar propuesta",
      ctaSecondary: "Probar el simulador",
      l1: "INTERFAZ · WEB",
      l2: "SISTEMA · DATOS",
      l3: "RUTINA · PYTHON",
      fig: "FIG. 01 — UNA INFRAESTRUCTURA, TRES CAPAS",
      scroll: "Desliza para explorar"
    },
    sim: {
      index: "[02] — SIMULADOR EN LA PRÁCTICA",
      title: "Míralo funcionar antes de contratarnos.",
      intro: "Tres demos funcionando aquí mismo, en tu navegador. El mismo tipo de trabajo que entregamos a clientes — en miniatura.",
      points: { web: "Arrastra el control y mira cómo un wireframe de Figma se convierte en una interfaz responsive.", stock: "Registra un producto, haz una venta y mira cómo cambian los indicadores.", py: "Ejecuta la rutina y mira cómo una hoja desordenada se convierte en un informe limpio." },
      label: "SIMULADOR EN VIVO — haz clic y prueba",
      live: "EN VIVO",
      tabs: { web: "Web & Landing Pages", stock: "Sistemas & Inventario", py: "Automatización Python" },
      web: {
        hint: "Arrastra el control para compilar el wireframe en interfaz",
        wire: "WIREFRAME · FIGMA",
        ui: "INTERFAZ · HTML/CSS/TAILWIND",
        desktop: "Escritorio",
        mobile: "Móvil",
        brand: "Aurora Dental",
        nav1: "Servicios",
        nav2: "Equipo",
        nav3: "Contacto",
        heroTitle: "Reserva tu cita en 30 segundos.",
        heroText: "Atención cercana, horarios flexibles y confirmación inmediata por WhatsApp.",
        cta: "Reservar ahora",
        card1: "Implantes",
        card2: "Ortodoncia",
        card3: "Blanqueamiento",
        status: "build ok · responsive · accesible",
        figma: "frame: Hero / Auto Layout 24 · Figma"
      },
      stock: {
        title: "Panel de Inventario — v1.0",
        kItems: "Unidades en stock",
        kValue: "Valor del inventario",
        kSales: "Ventas hoy",
        kLow: "Alertas de stock bajo",
        fName: "Producto",
        fQty: "Cant.",
        fPrice: "Precio",
        add: "Registrar",
        cProduct: "Producto",
        cQty: "Cant.",
        cPrice: "Precio",
        cAct: "Acción",
        sell: "Vender",
        restock: "Reponer",
        low: "BAJO",
        ok: "OK",
        logReady: "Conectado a mysql://inventario — listo.",
        logInsert: "INSERT INTO productos",
        logSale: "UPDATE inventario SET cant = cant - 1 · venta registrada",
        logRestock: "UPDATE inventario SET cant = cant + 5 · reposición",
        invalid: "Introduce un producto, una cantidad y un precio válidos.",
        seed: ["Pantalla iPhone 11", "Batería Galaxy S21", "Conector USB-C", "Protector 3D Privacidad"]
      },
      py: {
        run: "Ejecutar Rutina",
        running: "Ejecutando…",
        rerun: "Ejecutar de nuevo",
        raw: "ENTRADA · hoja bruta",
        clean: "SALIDA · informe limpio",
        idle: "Esperando ejecución. Haz clic en “Ejecutar Rutina”.",
        waiting: "esperando datos…",
        colChannel: "Canal",
        colOrders: "Pedidos",
        colRevenue: "Ingresos",
        total: "Total",
        issues: { dup: "DUPLICADO", missing: "VACÍO", format: "FORMATO" },
        header: "fecha;cliente;canal;importe",
        file: "ventas_brutas.xlsx",
        report: "informe_limpio.xlsx",
        channels: ["Marketplace", "Tienda física", "E-commerce", "WhatsApp"],
        logs: [
          "$ python rutina_informe.py --input ventas_brutas.xlsx",
          "[1/5] Leyendo hoja de cálculo bruta… 1.284 filas encontradas",
          "[2/5] Eliminando duplicados… 37 registros descartados",
          "[3/5] Normalizando fechas, importes y nombres…",
          "[4/5] Agrupando por canal de venta…",
          "[5/5] Exportando informe_limpio.xlsx + dashboard.pdf",
          "✓ Rutina completada en 0,84 s — 1.247 filas válidas"
        ]
      }
    },
    solutions: {
      index: "[03] — QUÉ RESOLVEMOS",
      title: "Cuatro frentes. Una infraestructura digital coherente.",
      intro: "Cada bloque es un frente que ya hemos ejecutado en entornos reales — retail, marketing, laboratorio y gestión de inventario. Sin promesas abstractas: alcance, stack y entrega.",
      deploy: "DEPLOY",
      b1: {
        tag: "WEB / FRONT-END",
        title: "Desarrollo Web, Sitios & Landing Pages",
        text: "Páginas corporativas, páginas con formulario, e-commerce y plataformas responsive desarrolladas con HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap y PHP, publicadas en Vercel o HostGator.",
        out: "Resultado: una presencia profesional que genera contactos cualificados, rápida en el móvil y fácil de mantener."
      },
      b2: {
        tag: "SISTEMAS / DATOS",
        title: "Sistemas a Medida & Gestión de Inventario/Marketplace",
        text: "Desarrollo de sistemas internos, bases de datos MySQL e integración del control de ventas, inventario y patrimonio — diseñado por quien tiene experiencia práctica real gestionando inventarios, marketplaces y sistemas operativos en el entorno corporativo.",
        out: "Resultado: inventario, ventas y patrimonio en un solo lugar — con cifras fiables para decidir."
      },
      b3: {
        tag: "PYTHON / AUTOMATIZACIÓN",
        title: "Automatización de Procesos & Inteligencia de Datos con Python",
        text: "Scripts en Python y consumo de APIs para limpieza de datos, manejo de hojas de cálculo (Excel/Google Sheets), automatización de tareas repetitivas en el ordenador y generación automática de informes y dashboards.",
        out: "Resultado: horas de trabajo manual devueltas al equipo cada semana."
      },
      b4: {
        tag: "DISEÑO / 3D",
        title: "Diseño UI/UX, Identidad Visual & Modelado 2D/3D",
        text: "Prototipado en Figma, comunicación visual enfocada en usabilidad y conversión, edición de vídeo (Premiere/CapCut) y modelado 2D/3D (Inkscape, Tinkercad) para destacar productos digitales en Brasil y en el exterior.",
        out: "Resultado: productos digitales con apariencia premium y una navegación que conduce a la conversión."
      }
    },
    team: {
      index: "[04] — EL DÚO",
      title: "Los ingenieros detrás del código.",
      intro: "Dos socios en el último año de Ciencias de la Computación en la UNIP, con experiencia práctica en operación real: inventario, marketplace, marketing, laboratorio y soporte de sistemas. Hablas directamente con quien escribe el código.",
      shared: "Ambos · Ciencias de la Computación · UNIP · último año",
      profile: "PERFIL",
      lRole: "ROL EN EL EQUIPO",
      lEdu: "FORMACIÓN & IDIOMAS",
      lPractice: "EXPERIENCIA PRÁCTICA",
      lStack: "STACK PRINCIPAL",
      lLinks: "ENLACES DIRECTOS",
      portfolio: "Portafolio individual",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Correo",
      whatsapp: "WhatsApp internacional",
      k: {
        role: "Full-Stack Systems Developer · Especialista en Infraestructura, Datos & Modelado 2D/3D",
        edu: [
          { t: "Ciencias de la Computación", s: "Universidade Paulista (UNIP) · 2023–2026" },
          { t: "Técnico en Informática para Internet", s: "Etec · 2020–2022" },
          { t: "IA Generativa con Gemini", s: "Santander Open Academy · certificación" },
          { t: "Idiomas", s: "Portugués nativo · Inglés avanzado (certificado CCAA)" }
        ],
        practice: [
          { org: "IQUEBBROU", role: "Auxiliar Técnico Electrónico · actual", text: "Implantación de sistemas integrados de control de ventas e inventario, gestión de marketplace y mantenimiento crítico de hardware y software en Windows y Linux/Ubuntu." },
          { org: "SESI-SP", role: "Infraestructura de laboratorio · 2 años", text: "Gestión de infraestructura de laboratorio, impresión 3D, corte láser y modelado 2D/3D para proyectos de fabricación digital." }
        ],
        stack: ["PHP", "Python", "Java", "JavaScript", "HTML", "CSS", "MySQL", "Ciencia de Datos / Dashboards", "Git/GitHub", "Inkscape", "Tinkercad"]
      },
      g: {
        role: "Front-End Specialist · Diseñador UI/UX & Ingeniero de Automatización Python",
        edu: [
          { t: "Grado en Ciencias de la Computación", s: "UNIP · último año" },
          { t: "Front-End & UI/UX", s: "Origamid · especialización" },
          { t: "PHP & Automatización con Python", s: "Estudios avanzados" },
          { t: "Idiomas", s: "Portugués nativo · Inglés de intermedio a avanzado" }
        ],
        practice: [
          { org: "D'Goiás", role: "Marketing digital", text: "Creación de páginas corporativas, páginas de formulario y campañas digitales." },
          { org: "Doppio Marketing", role: "Agencia · diseño & vídeo", text: "Prototipado de layouts en Figma, adaptación de identidades visuales y edición de vídeo en Adobe Premiere y CapCut." },
          { org: "Rede Palhares", role: "Logística & sistemas", text: "Control logístico de inventario y soporte a sistemas internos." }
        ],
        stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "UI/UX en Figma", "Python (automatización, limpieza de datos, informes)", "Consumo de APIs", "Docker", "Vercel", "HostGator"]
      }
    },
    projects: {
      index: "[05] — PROYECTOS & PORTAFOLIOS",
      title: "Casos de estudio, no escaparates.",
      intro: "Proyectos publicados, con enlace para que los abras y los pruebes. Cada uno documentado como caso ejecutivo: el problema, la arquitectura elegida y el resultado entregado.",
      filters: { all: "Todos", systems: "Sistemas & Web Apps", landing: "Landing Pages & UI/UX", automation: "Automatización & Datos" },
      lProblem: "EL PROBLEMA",
      lArch: "LA ARQUITECTURA",
      lResult: "EL RESULTADO",
      count: "casos",
      caseLabel: "CASO",
      lBy: "POR",
      links: { site: "Ver sitio", behance: "Ver en Behance", code: "Ver código", none: "Uso interno · sin enlace público" },
      cases: [
        {
          title: "K-Byte / Search Store",
          context: "Marketplace · directorio de tiendas físicas de tecnología",
          problem: "Tiendas físicas de hardware sin canal digital para llegar a los clientes, y comerciantes sin herramienta para gestionar catálogo, ventas y soporte.",
          arch: "Dos experiencias en un solo sistema: el escaparate del cliente (tiendas asociadas, catálogo, carrito, checkout y seguimiento del pedido) y el panel del comerciante, con lógica back-end en PHP y base de datos MySQL.",
          result: "20 pantallas diseñadas — 11 en el recorrido del cliente y 9 en el panel del comerciante — bajo un único design system con dos identidades visuales.",
          stack: ["PHP", "MySQL", "JavaScript", "Full-Stack"]
        },
        {
          title: "NovaPulse Commerce Dashboard",
          context: "Panel de administración · e-commerce · concepto",
          problem: "Los dueños de un e-commerce necesitan ver ingresos, pedidos, clientes y rendimiento sin perderse en pantallas saturadas.",
          arch: "Dashboard con layout minimalista, jerarquía clara, componentes de UI modernos y visualización de datos que prioriza los indicadores operativos.",
          result: "Toda la operación en una sola pantalla — una base lista para convertirse en el front-end de un sistema de gestión.",
          stack: ["Figma", "UI/UX", "Dashboard", "Data viz"]
        },
        {
          title: "Hat-Trick",
          context: "Portal interactivo de fútbol · desarrollo en equipo",
          problem: "Reunir noticias, partidos de la jornada, clasificación, fichajes y estadísticas en un solo portal, con varias personas desarrollando a la vez.",
          arch: "Front-end en HTML, CSS y JavaScript con páginas modulares y un flujo de versionado colaborativo en Git/GitHub.",
          result: "Portal multipágina con jornada, tabla, equipos y un “Arma tu equipo”, construido en equipo y publicado en Vercel.",
          stack: ["HTML", "CSS", "JavaScript", "Git/GitHub"]
        },
        {
          title: "Iron Park",
          context: "Gimnasio · Santa Rita do Passa Quatro, Brasil",
          problem: "Un gimnasio local sin presencia digital propia para mostrar sus instalaciones, entrenamientos y planes y convertir visitantes en socios.",
          arch: "Sitio one-page en TypeScript con secciones de gimnasio, instalaciones, entrenamientos, productos, planes y contacto, y el CTA “Quiero entrenar” repetido a lo largo de la página.",
          result: "Una página que lleva del primer impacto al contacto, con una identidad visual fuerte y navegación por secciones.",
          stack: ["TypeScript", "CSS", "JavaScript", "Responsive"]
        },
        {
          title: "Rivlo",
          context: "Plataforma fitness con IA · landing page",
          problem: "Explicar en segundos un producto nuevo — planes de entrenamiento personalizados generados por IA — y llevar al visitante al registro.",
          arch: "Landing page centrada en una propuesta de valor clara y en la jerarquía visual, construida con React, HTML/CSS y JavaScript.",
          result: "Una interfaz que presenta producto, beneficios y llamada a la acción en pocos scrolls.",
          stack: ["React", "HTML/CSS", "JavaScript", "UI/UX"]
        },
        {
          title: "Aurora Contábil",
          context: "Despacho contable · sitio institucional",
          problem: "La contabilidad vive de la confianza, pero los sitios genéricos no transmiten credibilidad ni facilitan el primer contacto.",
          arch: "Sitio institucional que destaca servicios, señales de confianza y contacto directo por WhatsApp, con una UI limpia orientada a la captación.",
          result: "Un camino corto entre conocer el despacho y hablar con un contador.",
          stack: ["Web Design", "UI/UX", "WhatsApp", "Landing page"]
        },
        {
          title: "Vortice Fitness",
          context: "Concepto para una marca fitness ficticia",
          problem: "Diseñar una landing page de alta conversión para el sector fitness, con impacto visual sin perder claridad.",
          arch: "Interfaz oscura, tipografía potente y secciones cortas que llevan a una única acción principal.",
          result: "Un estudio de lenguaje visual listo para adaptarse a una marca real del sector.",
          stack: ["UI/UX", "Web Design", "Dark UI", "Tipografía"]
        },
        {
          title: "La Forno & Lumina",
          context: "Restauración · pizzería y restaurante",
          problem: "Pizzerías y restaurantes necesitan mostrar carta, precios y ambiente — y convertir la visita en un pedido o una reserva.",
          arch: "Dos sitios en HTML, CSS y JavaScript: La Forno con carta por tamaño y botón de pedido; Lumina con el local, el chef, la carta y la reserva de mesa.",
          result: "Dos modelos de sitio para restauración, cada uno con identidad propia y un objetivo claro: pedir o reservar.",
          stack: ["HTML", "CSS", "JavaScript", "Responsive"]
        },
        {
          title: "ComunaCheck",
          context: "Proyecto académico · IA aplicada a la información regional",
          problem: "Noticias regionales y ofertas de empleo dispersas en muchas fuentes, que exigían lectura manual para encontrar lo importante.",
          arch: "Filtrado automatizado con Python e Inteligencia Artificial que selecciona noticias regionales y ofertas de empleo por relevancia.",
          result: "Un flujo de información más ágil: el usuario recibe lo relevante en lugar de rebuscar entre fuentes.",
          stack: ["Python", "IA", "Automatización", "Git/GitHub"]
        },
        {
          title: "Rutina automatizada de limpieza de datos e informes",
          context: "Rutinas internas · datos operativos",
          problem: "Informes montados a mano a partir de hojas brutas exportadas de distintos sistemas, con duplicados y formatos inconsistentes.",
          arch: "Scripts en Python que leen archivos Excel/Google Sheets y APIs, normalizan fechas, importes y textos, eliminan duplicados y exportan informes y dashboards.",
          result: "Informes estandarizados y listos para decidir, generados en segundos — sin copiar y pegar.",
          stack: ["Python", "Excel", "Google Sheets", "APIs"]
        }
      ],
      hub: {
        label: "HUB",
        title: "Hub de portafolios individuales",
        text: "Explora en detalle el trabajo de cada ingeniero — repositorios, interfaces y experimentos.",
        visit: "Abrir portafolio",
        kRole: "Sistemas · Datos · 2D/3D",
        gRole: "Front-End · UI/UX · Python"
      }
    },
    calc: {
      index: "[06] — INICIAR PROYECTO",
      title: "Cuéntanos tu idea. Nosotros trazamos el camino.",
      intro: "Elige el tipo de proyecto, el plazo y tu región. Preparamos un resumen en tu idioma, listo para enviar por WhatsApp o e-mail — y respondemos personalmente.",
      s1: "01 · Tipo de solución",
      s2: "02 · Plazo deseado",
      s3: "03 · ¿Dónde está tu empresa?",
      s4: "04 · Sobre ti (opcional)",
      types: {
        site: { t: "Sitio Corporativo", d: "Presencia profesional, páginas de servicios y contacto." },
        landing: { t: "Landing Page de Alta Conversión", d: "Una página centrada en una oferta y en captar leads." },
        system: { t: "Sistema Web o de Inventario", d: "Registros, inventario, ventas, informes y acceso con login." },
        automation: { t: "Automatización Python & Datos", d: "Hojas de cálculo, APIs, tareas repetitivas e informes automáticos." }
      },
      deadlines: {
        urgent: { t: "Urgente", d: "Prioridad en la cola de entrega" },
        d30: { t: "30 días", d: "Calendario estándar" },
        flexible: { t: "Flexible", d: "Más tiempo para pulir cada detalle" }
      },
      regions: {
        brl: { t: "Brasil", d: "Atención en portugués" },
        eur: { t: "Europa", d: "Reuniones en horario europeo (CET)" },
        usd: { t: "Internacional", d: "Atención en inglés o español" }
      },
      name: "Nombre / empresa",
      namePh: "Ej.: Lucía — Estudio Lume",
      details: "Describe el proyecto en una frase",
      detailsPh: "Ej.: Necesito una web con reservas online e integración con WhatsApp.",
      summary: "RESUMEN TÉCNICO",
      next: {
        label: "PRÓXIMOS PASOS",
        title: "Una propuesta a medida, sin compromiso.",
        steps: ["Nos envías este resumen por el canal que prefieras.", "Hacemos una llamada breve para entender tu negocio.", "Recibes una propuesta con alcance, plazo e inversión."],
        note: "Cada proyecto es distinto — por eso el precio se define solo después de entender lo que necesitas."
      },
      preview: "Vista previa del mensaje",
      sendTitle: "Enviar resumen a",
      waK: "WhatsApp · Kauã",
      waG: "WhatsApp · Gustavo",
      email: "Correo · ambos",
      copy: "Copiar resumen",
      copied: "¡Copiado!",
      msg: {
        intro: "¡Hola, Kauã y Gustavo! Llegué a través de vuestra web y me gustaría iniciar un proyecto.",
        head: "RESUMEN TÉCNICO DEL PROYECTO",
        type: "Solución",
        deadline: "Plazo",
        region: "Región",
        details: "Detalles",
        name: "Nombre/empresa",
        lang: "Idioma de atención",
        outro: "¿Podemos agendar una llamada de diagnóstico?",
        subject: "Nuevo proyecto desde la web — {type}",
        notInformed: "no indicado"
      }
    },
    footer: {
      cta: "¿Tienes un proyecto en mente?",
      ctaBig: "Construyamos la infraestructura digital de tu empresa.",
      start: "Iniciar proyecto",
      rights: "© 2026 {brand}. Código propio, escrito a mano.",
      lang: "Idioma",
      contact: "Contacto",
      nav: "Navegación",
      base: "Base",
      backTop: "Volver arriba",
      made: "Diseñado y programado en Santa Rita do Passa Quatro, SP — Brasil."
    }
  }
};
