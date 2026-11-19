const NEO_ASSETS = 'https://www.neonegociosecarreira.com.br';
const JOBS_URL = 'https://neonegocioscarreira.abler.com.br/';
const BLOG_ENTRIES = [
  { id: 1, title: 'Como criar um ambiente de trabalho mais inclusivo', date: '15 de dezembro de 2023', summary: 'Práticas para apoiar a inclusão no ambiente corporativo.', image: '/assets/official/blog/comocriarumambientedetrabalhomaisinclusivo.jpg' },
  { id: 2, title: 'Guia Completo: Contrata\u00e7\u00e3o de PCDs', date: '10 de dezembro de 2023', summary: 'Orientações para empresas que querem estruturar processos de contratação de pessoas com deficiência.', image: '/assets/official/blog/guiacompletocontratacaodepcds.jpg' },
  { id: 3, title: 'Diversidade no Ambiente de Trabalho', date: '5 de dezembro de 2023', summary: 'Uma reflexão sobre diversidade e seu papel nas organizações.', image: '/assets/official/blog/diversidadenoambientedetrabalho.jpg' },
  { id: 4, title: 'Gest\u00e3o e Sa\u00fade Mental no ambiente de trabalho', date: '1 de dezembro de 2023', summary: 'Liderança, bem-estar emocional e práticas para cuidar da saúde mental nas equipes.', image: '/assets/official/blog/liderancainclusiva.jpg' },
  { id: 5, title: 'Capacitismo no Ambiente de Trabalho: Como Evitar e Promover uma Inclus\u00e3o Respeitosa', date: '10 de junho de 2025', summary: 'Como reconhecer barreiras capacitistas e construir ambientes mais respeitosos.', image: '/assets/official/blog/carreiraemfoco.jpg' },
  { id: 6, title: 'Gera\u00e7\u00f5es no Ambiente de Trabalho: Desafios, Adapta\u00e7\u00f5es e Boas Pr\u00e1ticas de Gest\u00e3o', date: '5 de junho de 2025', summary: 'Desafios e práticas para liderar equipes com diferentes gerações.', image: '/assets/official/blog/negocioseresultados.jpg' }
];

const SERVICES = [
  { title: 'Atração e seleção de talentos', href: '/solucoes/selecao-talentos/', image: '/assets/site-media/service-vagas.jpg', text: 'Recrutamento especializado e processos seletivos inclusivos para conectar empresas e profissionais.' },
  { title: 'Escola Neo', href: '/solucoes/escola-neo/', image: '/assets/site-media/service-escola.jpg', text: 'Capacitação e desenvolvimento com ações adequadas ao contexto de cada organização.' },
  { title: 'Academia de Diversidade', href: '/solucoes/academia-diversidade/', image: '/assets/site-media/service-academia.jpg', text: 'Treinamentos e consultorias em diversidade, equidade e inclusão.' },
  { title: 'Mentoria Executiva', href: '/solucoes/mentoria-executiva/', image: '/assets/site-media/service-mentoria.jpg', text: 'Desenvolvimento individual e in company para líderes e executivos.' },
  { title: 'Carreira em Foco', href: '/solucoes/carreira-foco/', image: '/assets/site-media/service-carreira.jpg', text: 'Orientação para profissionais que buscam avançar em seus objetivos de carreira.' },
  { title: 'Diversos', href: '/solucoes/diversos/', image: '/assets/site-media/service-diversos.jpg', text: 'Recrutamento e seleção de profissionais diversos.' }
];

const MATERIALS = [
  { title: 'Manual do Gestor', text: 'Material de apoio para liderança de equipes diversas e ambientes inclusivos.', file: 'Manual do Gestor de Sucesso - Neo Negócios & Carreira.pdf', image: '/assets/official/materiais/guiadesc.jpeg' },
  { title: 'Carreira em Foco', text: 'E-book sobre desenvolvimento de carreira para profissionais diversos.', file: 'Ebook - Carreira em Foco.pdf', image: '/assets/official/materiais/carreiraemfoco.jpg' },
  { title: 'Guia de Letramento em D&I', text: 'Conceitos de diversidade e inclusão para diferentes níveis da organização.', file: 'Letramento de DE&I Neo Negócios & Carreira.pdf', image: '/assets/official/materiais/guiadeletramento.jpg' },
  { title: 'Cuidando da Saúde Mental', text: 'Dicas e estratégias para abordar saúde mental no ambiente de trabalho.', file: 'Ebook - Cuidando da Saúde mental.pdf', image: '/assets/official/materiais/cuidandodasaude.jpeg' },
  { title: 'Manual do Selecionador de PcDs', text: 'Orientações para processos seletivos inclusivos para pessoas com deficiência.', file: 'Manual do Selecionardo de PcDs (Pessoas com Deficiência) - Neo Negócios & Carreira.pdf', image: '/assets/official/materiais/manualdoselecionador.jpeg' },
  { title: 'Calendário de diversidade', text: 'Datas e oportunidades para planejar ações de diversidade e inclusão.', file: 'Calendário D&I Neo.pdf', image: '/assets/official/materiais/calendariod&i.jpg' }
];

const MEDIA_ITEMS = [
  { title: 'Workshop de Diversidade e Inclusão', text: 'Workshop realizado com empresas parceiras sobre diversidade e inclusão no ambiente corporativo.', image: '/assets/site-media/gallery-workshop.jpg' },
  { title: 'Evento Corporativo de Networking', text: 'Evento de networking com foco em diversidade e inclusão no mercado de trabalho.', image: '/assets/site-media/gallery-networking.jpeg' },
  { title: 'Treinamento em Liderança Inclusiva', text: 'Treinamento especializado para líderes sobre como desenvolver equipes mais diversas e inclusivas.', image: '/assets/site-media/gallery-leadership.jpeg' },
  { title: 'Palestra sobre Diversidade', text: 'Palestra educativa sobre a importância da diversidade nos ambientes de trabalho.', image: '/assets/site-media/gallery-talk.jpeg' },
  { title: 'Conferência de Inclusão', text: 'Conferência sobre diversidade e inclusão no mercado de trabalho brasileiro.', image: '/assets/site-media/gallery-conference.jpeg' },
  { title: 'Atividade de Integração', text: 'Atividade de integração promovendo valores de diversidade e trabalho em equipe.', image: '/assets/site-media/gallery-integration.jpg' },
  { title: 'Evento de Capacitação', text: 'Evento de capacitação para profissionais sobre práticas inclusivas.', image: '/assets/site-media/gallery-training.jpg' },
  { title: 'Workshop Interativo', text: 'Registro de workshop interativo sobre diversidade e inclusão.', image: '/assets/site-media/gallery-activity.jpg' }
];

const NEO_VIDEOS = [
  { title: 'Empreendedorismo Inclusivo', id: 'KqxRUigzjAk', image: '/assets/site-media/video-empreendedorismo.jpg' },
  { title: 'Semana da Diversidade Gerdau Pinda', id: 'IhWfO0P6PQ0', image: '/assets/site-media/video-gerdau.png' },
  { title: 'Workshop sobre diversidade na KidZania', id: 'z09OPETIYxk', image: '/assets/site-media/workshop-kidzania.jpg' },
  { title: 'Workshop realizado na empresa Tegma', id: 'jOf5ZcPa740', image: '/assets/site-media/Workshop-realizado-na-empresa-Tegma.png' },
  { title: 'Trabalho realizado na Softtek', id: 'tCkxaKHs2hE', image: '/assets/site-media/Trabalho-realizado-na-Softtek.png' },
  { title: 'Diversidade & Inclusão com a ESPM', id: 'M-yoc2EspFc', image: '/assets/site-media/video-espm.png' },
  { title: 'Workshop: Programa Impacto 90 - Equipe de Sucesso', id: 'Of4c_M095Jk', image: '/assets/site-media/Workshop--Programa-Impacto-90---Equipe-de-Sucesso.png' }
];

const BLOG_ARTICLE_DETAILS = {
  1: {
    author: 'Nadieje Macedo', readTime: '8 min',
    body: `<section><h2>Inclusão é participação cotidiana</h2><p>Um ambiente inclusivo se constrói quando as pessoas conseguem participar, contribuir e crescer com segurança. Ter diferentes perfis na equipe é um começo; é preciso também remover barreiras que impedem essas pessoas de serem ouvidas, reconhecidas e consideradas nas decisões.</p><p>Esse trabalho aparece nas relações diárias, nas oportunidades de desenvolvimento e na maneira como cada pessoa é tratada. Uma cultura inclusiva respeita diferenças de identidade, raça, idade, deficiência, origem, crença e orientação.</p></section><section><h2>Prepare lideranças e equipes</h2><p>Gestores influenciam diretamente o clima da equipe. Formações sobre diversidade, equidade e inclusão ajudam a reconhecer vieses, rever hábitos e conduzir conversas com respeito. A aprendizagem precisa se conectar às situações reais do trabalho e continuar ao longo do tempo.</p><p>Além de capacitar, lideranças devem dar exemplo: ouvir sem interromper, explicar decisões, reconhecer contribuições e agir quando surgem situações discriminatórias.</p></section><section><h2>Revise políticas e experiências</h2><p>Observe cada etapa da jornada profissional, desde a divulgação de vagas até a promoção. Use linguagem clara e acessível, ofereça adaptações necessárias e verifique se benefícios, critérios e processos contemplam diferentes realidades.</p><ul><li>Revise descrições de vagas e critérios de seleção.</li><li>Garanta canais confiáveis para dúvidas e relatos.</li><li>Analise acesso a desenvolvimento, reconhecimento e promoção.</li></ul></section><section><h2>Crie espaços de escuta e acompanhe avanços</h2><p>Grupos de afinidade, rodas de conversa e pesquisas internas podem revelar obstáculos que não aparecem nos documentos. A escuta precisa gerar encaminhamentos, responsáveis e retorno para as pessoas que participaram.</p><p>Acompanhe indicadores de representação e experiência, sempre protegendo a privacidade. Use os resultados para corrigir rotas. Inclusão sustentável depende de compromisso contínuo, participação e responsabilidade compartilhada.</p></section>`
  },
  2: {
    author: 'Nadieje Macedo', readTime: '15 min',
    body: `<section><h2>A contratação começa antes da vaga</h2><p>Contratar pessoas com deficiência exige planejamento para que o processo seja acessível e para que a oportunidade corresponda às competências da pessoa. A inclusão não se resume ao preenchimento de uma vaga: envolve condições para participar, trabalhar, aprender e avançar na carreira.</p><p>Antes de abrir a seleção, defina as atividades essenciais, converse com a área e identifique possíveis barreiras físicas, digitais e de comunicação. Consulte fontes oficiais atualizadas para orientar as obrigações legais aplicáveis à organização.</p></section><section><h2>Desenhe uma seleção acessível</h2><p>Divulgue a vaga em linguagem objetiva e informe as etapas, atividades e recursos de acessibilidade disponíveis. Pergunte à pessoa candidata quais adaptações podem apoiar sua participação, sem presumir necessidades com base na deficiência.</p><ul><li>Ofereça formatos acessíveis para inscrições e avaliações.</li><li>Disponibilize, quando necessário, intérprete de Libras ou materiais em formatos alternativos.</li><li>Avalie competências relacionadas ao trabalho e evite perguntas invasivas.</li><li>Prepare recrutadores para uma comunicação respeitosa.</li></ul></section><section><h2>Prepare o ambiente para receber</h2><p>Verifique acessibilidade arquitetônica, tecnológica e comunicacional. Converse com a pessoa sobre adaptações razoáveis e combine como serão providenciadas. A solução deve considerar a tarefa e a experiência de quem a utilizará.</p><p>Informe a equipe sobre práticas de convivência e privacidade. Compartilhe somente informações necessárias e autorizadas pela própria pessoa.</p></section><section><h2>Desenvolvimento e permanência também contam</h2><p>Após a contratação, estabeleça expectativas claras, ofereça acompanhamento e garanta acesso a treinamentos, projetos e oportunidades de crescimento. Canais seguros de feedback ajudam a identificar barreiras cedo.</p><p>Uma estratégia consistente aproxima recrutamento, gestão, acessibilidade e desenvolvimento. Mais do que abrir vagas, é preciso criar caminhos para que cada profissional possa contribuir e construir sua trajetória.</p></section>`
  },
  3: {
    author: 'Daiane Capistrano', readTime: '12 min',
    body: `<section><h2>Diversidade precisa de boas condições para florescer</h2><p>Equipes reúnem experiências, habilidades e perspectivas diferentes. Para que essa diversidade contribua para o trabalho, as pessoas precisam entender os objetivos, ter clareza sobre suas responsabilidades e sentir que podem participar das decisões relacionadas à sua atuação.</p><p>Uma equipe de alta performance não depende apenas de talento individual. Confiança, colaboração, reconhecimento e oportunidades de desenvolvimento ajudam a transformar as contribuições individuais em resultados compartilhados.</p></section><section><h2>Gestão presente, objetivos claros</h2><p>Liderar começa por conhecer as pessoas além do currículo: compreender interesses, desafios e formas de trabalhar. Conversas regulares ajudam a alinhar prioridades, identificar obstáculos e reconhecer avanços antes que pequenos problemas se tornem maiores.</p><ul><li>Defina metas realistas e explique como o trabalho de cada pessoa se conecta a elas.</li><li>Combine papéis e critérios de decisão.</li><li>Ofereça feedback específico, respeitoso e voltado ao desenvolvimento.</li><li>Revise prioridades quando houver mudanças de contexto ou sobrecarga.</li></ul></section><section><h2>Desenvolvimento é parte dos resultados</h2><p>Planos de desenvolvimento, mentorias, aprendizagem prática e novas responsabilidades podem ampliar competências e preparar as pessoas para os próximos passos. O acesso a essas oportunidades deve ser transparente e justo.</p><p>Gestores também precisam acompanhar o efeito de suas decisões: quem recebe projetos desafiadores, reconhecimento e apoio? Há grupos que encontram barreiras para avançar? Fazer essas perguntas ajuda a construir uma gestão mais inclusiva.</p></section><section><h2>Confiança melhora a colaboração</h2><p>Ambientes em que as pessoas podem apresentar dúvidas, discordar com respeito e pedir ajuda favorecem a troca de ideias. A liderança contribui para isso ao ser coerente, acessível e transparente.</p><p>Observe resultados junto com a experiência da equipe. Indicadores de desempenho, conversas e feedbacks oferecem perspectivas complementares para aprender e ajustar a gestão.</p></section>`
  },
  4: {
    author: 'Daiane Capistrano', readTime: '18 min',
    body: `<section><h2>Bem-estar emocional faz parte do trabalho</h2><p>Saúde mental envolve bem-estar e a capacidade de lidar com diferentes aspectos da vida. No trabalho, fatores como carga de tarefas, relações, previsibilidade e autonomia podem influenciar a experiência das pessoas. Lideranças não substituem profissionais de saúde, mas podem contribuir para um ambiente mais respeitoso e sustentável.</p></section><section><h2>O papel da inteligência emocional</h2><p>Uma liderança atenta reconhece as próprias reações, escuta sem julgamento e percebe quando mudanças no cotidiano da equipe pedem uma conversa. Empatia não significa diagnosticar ou invadir a privacidade: significa tratar as pessoas com respeito e encaminhar demandas aos recursos adequados.</p><p>Clareza sobre prioridades, critérios e expectativas também reduz ruídos. Metas precisam ser discutidas considerando recursos, prazos e capacidade de execução.</p></section><section><h2>Reduza fatores de desgaste</h2><p>Ambientes com sobrecarga persistente, falta de reconhecimento, conflitos sem encaminhamento ou pouca possibilidade de descanso podem prejudicar o bem-estar. A organização pode revisar práticas e oferecer canais de apoio, preservando confidencialidade.</p><ul><li>Planeje demandas e reveja prioridades com a equipe.</li><li>Respeite pausas, férias e limites fora do expediente.</li><li>Conduza feedbacks com equilíbrio e intenção de desenvolvimento.</li><li>Encaminhe necessidades de cuidado a profissionais e serviços apropriados.</li></ul></section><section><h2>Cuidado é uma responsabilidade coletiva</h2><p>Políticas consistentes, gestores preparados e canais confiáveis ajudam a criar relações de confiança. Acompanhe sinais organizacionais, como afastamentos, rotatividade e relatos, sem reduzir situações individuais a números.</p><p>Uma gestão que cuida combina escuta, limites claros e acesso a suporte. Esse compromisso pode fortalecer a experiência de trabalho e as condições para que as pessoas contribuam com segurança.</p></section>`
  },
  5: {
    author: 'Nadieje Macedo', readTime: '16 min',
    body: `<section><h2>O que é capacitismo?</h2><p>Capacitismo é a discriminação e o conjunto de ideias que diminuem pessoas com deficiência ou presumem o que elas podem fazer. Pode aparecer em atitudes explícitas, em decisões cotidianas e em estruturas inacessíveis que limitam a participação.</p><p>Nem toda barreira é intencional, mas seus efeitos são reais. Por isso, vale observar práticas e ouvir as pessoas diretamente afetadas.</p></section><section><h2>Reconheça situações do dia a dia</h2><ul><li>Presumir que uma pessoa não pode realizar uma tarefa sem perguntar sobre suas competências ou preferências.</li><li>Falar com um intérprete ou acompanhante em vez de se dirigir à pessoa.</li><li>Excluir alguém de reuniões, projetos ou decisões por falta de acessibilidade.</li><li>Tratar a pessoa como inspiração apenas por trabalhar ou realizar atividades comuns.</li></ul><p>Essas condutas podem reduzir autonomia, apagar a voz da pessoa e reforçar estereótipos.</p></section><section><h2>Construa acessibilidade e respeito</h2><p>Revise espaços, ferramentas digitais, documentos, reuniões e processos seletivos. Ofereça formatos acessíveis e pergunte quais adaptações apoiam a participação. Evite transformar uma solução específica em regra para todas as pessoas: necessidades variam.</p><p>Na comunicação, use linguagem respeitosa, fale diretamente com a pessoa e não ofereça ajuda sem perguntar. Privacidade também importa; informações sobre deficiência não devem ser compartilhadas sem autorização.</p></section><section><h2>Liderança e equipes têm responsabilidade</h2><p>Capacitação, canais de escuta e respostas consistentes ajudam a prevenir discriminação. Quando uma barreira ou atitude capacitista for apontada, acolha o relato, investigue com cuidado e acompanhe as medidas tomadas.</p><p>Inclusão se fortalece quando pessoas com deficiência participam das decisões que afetam sua experiência. O foco deve estar em remover barreiras e ampliar condições de participação, sem pena ou paternalismo.</p></section>`
  },
  6: {
    author: 'Daiane Capistrano', readTime: '17 min',
    body: `<section><h2>Equipes podem reunir diferentes gerações</h2><p>Várias gerações compartilham hoje espaços de trabalho. Essa convivência traz experiências, expectativas e formas de comunicação diversas. A idade, porém, não determina a personalidade ou as preferências de uma pessoa: evite tratar grupos inteiros como se fossem iguais.</p><p>O ponto de partida é conhecer cada integrante e combinar formas de colaboração que atendam ao trabalho e às pessoas envolvidas.</p></section><section><h2>Adapte a comunicação e a gestão</h2><p>Algumas pessoas preferem conversas presenciais; outras podem trabalhar melhor com instruções registradas e assíncronas. Explique decisões, combine canais e verifique se as informações estão acessíveis a todos.</p><ul><li>Converse individualmente sobre objetivos, apoio e motivação.</li><li>Defina expectativas e critérios com clareza.</li><li>Ajuste o nível de acompanhamento sem associá-lo à idade.</li><li>Reconheça experiências e competências de cada pessoa.</li></ul></section><section><h2>Crie oportunidades de troca</h2><p>Projetos colaborativos, mentorias em diferentes direções e espaços de aprendizagem podem aproximar conhecimentos. Pessoas experientes podem compartilhar contexto e práticas; colegas mais novos podem trazer outras referências e ferramentas. A troca funciona melhor quando há reciprocidade e tempo protegido para aprender.</p></section><section><h2>Desenvolvimento para diferentes trajetórias</h2><p>Ofereça aprendizagem em formatos variados e oportunidades de carreira acessíveis. Converse sobre necessidades e planos individuais, sem presumir que alguém queira ou não mudar de função, liderar, aprender tecnologia ou permanecer em determinada trajetória.</p><p>Uma gestão multigeracional eficaz transforma diferenças em colaboração ao combinar comunicação clara, respeito e desenvolvimento contínuo.</p></section>`
  }
};

BLOG_ENTRIES.forEach((entry) => Object.assign(entry, BLOG_ARTICLE_DETAILS[entry.id]));

const SURVEY_BLOCKS = [
  { title: 'Cultura organizacional', questions: [
    'A alta gestão compreende como diversidade e inclusão se relacionam aos negócios?',
    'A organização possui objetivos definidos para diversidade e inclusão?',
    'Há ações para ampliar a presença de grupos sub-representados?',
    'A acessibilidade é considerada nas decisões sobre pessoas?',
    'Há diversidade em diferentes níveis e funções da organização?'
  ] },
  { title: 'Comunicação e conscientização', questions: [
    'A organização comunica temas de diversidade e inclusão por canais internos?',
    'Existem espaços de diálogo entre lideranças e grupos sub-representados?',
    'Há ações regulares de sensibilização e aprendizagem sobre inclusão?',
    'A integração de novas pessoas aborda os compromissos de inclusão?',
    'Existe um canal para relatar discriminação e acompanhar denúncias?'
  ] },
  { title: 'Engajamento da liderança', questions: [
    'Lideranças participam de ações de aprendizagem sobre diversidade?',
    'Gestores são convidados a apoiar iniciativas de inclusão?',
    'O desenvolvimento da liderança inclui objetivos de diversidade e inclusão?',
    'Lideranças participam ativamente das iniciativas da organização?',
    'Há apoio para que gestores desenvolvam práticas inclusivas de contratação e gestão?'
  ] },
  { title: 'Políticas e acompanhamento', questions: [
    'Há uma política de diversidade e inclusão documentada e divulgada?',
    'Políticas e processos são revistos considerando inclusão?',
    'A organização acompanha indicadores sobre suas ações de inclusão?',
    'As iniciativas são avaliadas para entender seus efeitos?',
    'Existem compromissos para ampliar a contratação de grupos sub-representados?'
  ] }
];

const ANSWER_OPTIONS = [
  ['0', 'Ainda não'], ['1', 'Em parte'], ['2', 'Sim, de forma consistente'], ['na', 'Não se aplica'], ['dk', 'Não sei avaliar']
];

const route = document.body.dataset.page || window.location.pathname.replace(/\/+$/, '') || '/';

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function renderHeader() {
  const menuItems = [
    { label: 'Home', href: '/', matches: () => route === '/' },
    { label: 'Quem Somos', href: '/quem-somos/', matches: () => route === '/quem-somos' },
    { label: 'Soluções Neo', href: '/solucoes/', matches: () => route.startsWith('/solucoes') },
    { label: 'Nós na Mídia', href: '/midia/', matches: () => route === '/midia' },
    { label: 'Blog', href: '/blog/', matches: () => route.startsWith('/blog') },
    { label: 'Materiais', href: '/materiais/', matches: () => route === '/materiais' },
    { label: 'Pesquisa D&I', href: '/pesquisa-maturidade/', matches: () => route.startsWith('/pesquisa-maturidade') || route === '/planos-dei' },
    { label: 'Contato', href: '/contato/', matches: () => route === '/contato' }
  ];
  const menuMarkup = menuItems.map((item) => item.matches()
    ? `<a class="is-active" aria-current="page" href="${item.href}">${item.label}</a>`
    : `<a href="${item.href}">${item.label}</a>`).join('');
  return `<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header class="site-header"><div class="header-inner">
      <a class="brand" href="/" aria-label="Neo Negócios & Carreira, início"><span class="brand-mark" aria-hidden="true"><img class="brand-word-image" src="/neo-logo-full.png" alt=""><img class="brand-color-image" src="/neo-logo-header.png" alt=""></span></a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menu"><span></span><span></span></button>
      <nav id="main-nav" class="main-nav" aria-label="Navegação principal">
        ${menuMarkup}<a class="nav-cta" href="/afiliados/">Afiliado (a) Neo</a>
      </nav>
    </div></header>`;
}

function renderFooter() {
  return `<footer class="site-footer"><div class="footer-main">
    <section class="footer-about" aria-label="Sobre a Neo"><a class="brand footer-brand" href="/" aria-label="Neo, voltar ao início"><span class="brand-mark" aria-hidden="true"><img class="brand-word-image" src="/neo-logo-full.png" alt=""><img class="brand-color-image" src="/neo-logo-header.png" alt=""></span></a>
    <p>Transformando o mercado de trabalho através da diversidade e inclusão. Conectamos talentos diversos às melhores oportunidades.</p>
    <ul class="footer-seals" aria-label="Selos institucionais"><li><img src="/assets/official/rodape%20selos/Acelerada%20TP%20(1).png" alt="InovAtiva Brasil, Acelerada Ciclo 2025" loading="lazy" decoding="async"></li><li><img src="/assets/official/rodape%20selos/Group-17380.png" alt="Selo Paulista da Diversidade, 2022 a 2024" loading="lazy" decoding="async"></li><li><img src="/assets/official/rodape%20selos/Selo-azul.png" alt="Selo Hand Talk, Site Amigo do Surdo" loading="lazy" decoding="async"></li></ul>
    <nav class="footer-social" aria-label="Redes sociais da Neo"><a href="https://facebook.com/neonegociosecarreira" target="_blank" rel="noreferrer" aria-label="Neo no Facebook"><span aria-hidden="true">f</span></a><a href="https://instagram.com/neonegociosecarreira" target="_blank" rel="noreferrer" aria-label="Neo no Instagram"><span aria-hidden="true">ig</span></a><a href="https://br.linkedin.com/company/neocarreiras2018" target="_blank" rel="noreferrer" aria-label="Neo no LinkedIn"><span aria-hidden="true">in</span></a><a href="https://www.youtube.com/channel/UCTnrspMoatnC_But7aI7j4w" target="_blank" rel="noreferrer" aria-label="Neo no YouTube"><span aria-hidden="true">&#9654;</span></a></nav></section>
    <nav class="footer-links" aria-label="Links do rodapé"><div><span>Links rápidos</span><a href="/">Home</a><a href="/quem-somos/">Quem somos</a><a href="/vagas/">Vagas</a><a href="/blog/">Blog</a><a href="/midia/">Nós na mídia</a><a href="/materiais/">Materiais</a><a href="/pesquisa-maturidade/">Pesquisa D&amp;I</a><a href="/planos-dei/">Planos DEI</a><a href="/afiliados/">Afiliados</a><a href="/contato/">Contato</a></div>
      <div><span>Soluções</span><a href="/solucoes/selecao-talentos/">Atração de Talentos</a><a href="/solucoes/escola-neo/">Escola Neo</a><a href="/solucoes/academia-diversidade/">Academia de Diversidade</a><a href="/solucoes/mentoria-executiva/">Mentoria Executiva</a><a href="/solucoes/carreira-foco/">Carreira em Foco</a></div>
      <div class="footer-contact"><span>Contato</span><a href="https://maps.google.com/?q=R.+do+Bosque,+1621,+Barra+Funda,+Sao+Paulo" target="_blank" rel="noreferrer">R. do Bosque, 1621 · Barra Funda<br>São Paulo - SP, 01136-001</a><a href="mailto:consultorianeo@negociosecarreira.com.br">consultorianeo@negociosecarreira.com.br</a><a href="tel:+5511991615775">(011) 99161-5775</a><a href="tel:+5511965426878">(011) 96542-6878</a><div class="footer-hours"><strong>Horário de atendimento</strong><span>Segunda a sexta: 9h às 18h</span><span>Sábado: 9h às 13h</span></div></div>
    </nav></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Neo Negócios &amp; Carreira</span><span>Talentos diversos. Novas possibilidades.</span><a href="/">Voltar ao início &#8593;</a></div></footer>`;
}

function breadcrumb(label, parent = '') {
  return `<nav class="breadcrumbs" aria-label="Você está aqui"><a href="/">Início</a>${parent ? `<span aria-hidden="true">/</span><a href="${parent === 'Soluções' ? '/solucoes/' : '/blog/'}">${parent}</a>` : ''}<span aria-hidden="true">/</span><span aria-current="page">${label}</span></nav>`;
}

function pageHero(kicker, title, lead, parent = '') {
  return `${breadcrumb(title, parent)}<header class="page-hero"><p class="eyebrow"><span></span>${kicker}</p><h1>${title}</h1><p class="page-lead">${lead}</p></header>`;
}

function cardGrid(cards) {
  const items = cards.map((card, index) => '<article class=\"page-card\">' +
    (card.image ? '<img class=\"card-media-image\" src=\"' + card.image + '\" alt=\"Imagem relacionada a ' + escapeHTML(card.title) + '\" loading=\"lazy\" decoding=\"async\">' : '') +
    '<span class=\"page-card-number\">' + String(index + 1).padStart(2, '0') + '</span><h2>' + card.title + '</h2><p>' + card.text + '</p>' +
    (card.href ? '<a class=\"text-link\" href=\"' + card.href + '\">' + (card.label || 'Saiba mais') + ' <span aria-hidden=\"true\">&rarr;</span></a>' : '') + '</article>').join('');
  return '<div class=\"page-card-grid\">' + items + '</div>';
}

function cta(title = 'Vamos conversar?', text = 'Conte o que sua organização precisa. A equipe da Neo pode ajudar a identificar o próximo passo.') {
  return `<section class="page-cta"><div><p class="eyebrow">Próximo passo</p><h2>${title}</h2><p>${text}</p></div><a class="button button-lime" href="/contato/">Fale com a Neo <span aria-hidden="true">↗</span></a></section>`;
}

function contactForm() {
  return `<form class="contact-form" id="contact-form" novalidate>
    <label>Seu nome<input id="contact-name" name="name" autocomplete="name" placeholder="Como podemos chamar você?" aria-describedby="name-error" required><span class="field-error" id="name-error"></span></label>
    <label>Seu e-mail<input id="contact-email" type="email" name="email" autocomplete="email" placeholder="voce@empresa.com.br" aria-describedby="email-error" required><span class="field-error" id="email-error"></span></label>
    <label>Quero conversar sobre<select id="contact-subject" name="subject" aria-describedby="subject-error" required><option value="" disabled selected>Selecione um assunto</option><option>Recrutamento e seleção</option><option>Diversidade e inclusão</option><option>Capacitação e desenvolvimento</option><option>Carreira e mentoria</option><option>Outro assunto</option></select><span class="field-error" id="subject-error"></span></label>
    <label>Sua mensagem<textarea id="contact-message" name="message" rows="3" placeholder="Escreva sua mensagem" aria-describedby="message-error" required></textarea><span class="field-error" id="message-error"></span></label>
    <button class="button button-lime" id="contact-submit" type="submit">Enviar mensagem <span aria-hidden="true">↗</span></button>
    <p class="form-note"><span id="form-status" role="status" aria-live="polite">Sua mensagem será enviada diretamente para a equipe Neo.</span> Se preferir, <a href="mailto:consultorianeo@negociosecarreira.com.br">escreva para a Neo.</a></p>
  </form>`;
}

function servicePage(title, lead, paragraphs, parent = 'Solu\u00e7\u00f5es', image = '') {
  return '<main id=\"conteudo\" class=\"route-page\">' + pageHero('Solu\u00e7\u00f5es Neo', title, lead, parent) +
    (image ? '<figure class=\"route-feature-media\"><img src=\"' + image + '\" alt=\"Imagem oficial da Neo: ' + escapeHTML(title) + '\" loading=\"lazy\" decoding=\"async\"></figure>' : '') +
    '<section class=\"page-copy\">' + paragraphs.map((paragraph) => '<p>' + paragraph + '</p>').join('') + '</section>' + cta('Vamos pensar essa solu\u00e7\u00e3o juntos?') + '</main>';
}

function surveyPage() {
  return `<main id="conteudo" class="route-page">${pageHero('Pesquisa de maturidade', 'Pesquisa de Maturidade em D&I', 'Uma autoavaliação inicial para refletir sobre práticas de diversidade e inclusão na sua organização.')}
    <figure class="survey-feature"><img src="/assets/site-media/home-assessment.png" alt="Imagem oficial da Neo sobre diversidade e inclus&atilde;o no trabalho" loading="lazy" decoding="async"></figure><section class="page-content"><div class="page-copy"><p>As perguntas percorrem cultura organizacional, comunicação, participação da liderança e políticas de acompanhamento.</p><p>Esta versão funciona no seu navegador e apresenta um resultado orientativo. As respostas não são enviadas nem armazenadas pela Neo.</p></div>
      <div class="page-note"><strong>Antes de começar</strong><p>Reserve cerca de cinco minutos. Você poderá interromper a qualquer momento antes de concluir.</p></div>
      <form id="maturity-start" class="contact-form page-form" novalidate>
        <label>Seu nome<input name="name" autocomplete="name" required></label><label>Organização<input name="company" autocomplete="organization" required></label>
        <label>Seu e-mail<input type="email" name="email" autocomplete="email" required></label><label>Telefone (opcional)<input name="phone" type="tel" autocomplete="tel"></label>
        <button class="button button-dark" type="submit">Começar autoavaliação <span aria-hidden="true">↗</span></button><p id="maturity-start-status" class="form-note" role="status" aria-live="polite"></p>
      </form></section></main>`;
}

function questionnairePage() {
  let questionNumber = 0;
  const blocks = SURVEY_BLOCKS.map((block, blockIndex) => `<fieldset class="survey-block"><legend><span>Bloco ${blockIndex + 1}</span>${block.title}</legend>${block.questions.map((question) => {
    questionNumber += 1;
    return `<fieldset class="survey-question"><legend>${questionNumber}. ${question}</legend><div class="survey-options">${ANSWER_OPTIONS.map(([value, label]) => `<label><input type="radio" name="q${questionNumber - 1}" value="${value}" required><span>${label}</span></label>`).join('')}</div></fieldset>`;
  }).join('')}</fieldset>`).join('');
  return `<main id="conteudo" class="route-page">${pageHero('Pesquisa de maturidade', 'Autoavaliação de D&I', 'Responda pensando nas práticas atuais da organização. Todas as perguntas precisam de uma resposta para gerar o resultado orientativo.')}
    <form id="maturity-questionnaire" class="survey-form">${blocks}<button class="button button-dark" type="submit">Ver resultado orientativo <span aria-hidden="true">↗</span></button><p class="form-note" id="survey-status" role="status" aria-live="polite">As respostas são processadas no navegador e não são enviadas à Neo.</p></form></main>`;
}

function renderRoutePage() {
  const redirects = ['/solucoes/pcds', '/solucoes/tech-recruiter'];
  if (redirects.includes(route)) {
    window.location.replace('/solucoes/selecao-talentos/');
    return;
  }

  const routePages = {
    '/quem-somos': {
      title: 'Quem somos', description: 'Conheça a Neo Negócios & Carreira.',
      html: `${pageHero('A Neo', 'Pessoas no centro da transformação', 'Somos uma consultoria que transforma empresas e carreiras por meio de soluções humanas e estratégicas.')}
        <section class="page-copy"><p>Nascemos do desejo de fazer diferente, romper padrões e impulsionar pessoas e negócios rumo ao novo. “Neo”, do grego novo, traduz a vontade de pensar com criatividade, agir com coragem e transformar com propósito.</p><p>Acreditamos que o capital humano move os resultados e que a diversidade inspira inovação e crescimento sustentável. Desenvolvemos soluções de atração e desenvolvimento de pessoas com um olhar ampliado para inclusão.</p></section>
        <section class="page-content"><h2>Como trabalhamos</h2>${cardGrid([{title:'Escuta',text:'Conhecer o contexto e os desafios de cada organização.'},{title:'Soluções sob medida',text:'Desenvolver iniciativas alinhadas às necessidades de pessoas e negócios.'},{title:'Diversidade na prática',text:'Aproximar talentos, oportunidades e ambientes de trabalho inclusivos.'}])}</section><section class="founder-grid page-content"><article><img src="/assets/official/quemsomos/Dai.jpeg" alt="Daiane Capistrano, cofundadora da Neo" loading="lazy"><h3>Daiane Capistrano</h3><p>Co-fundadora</p></article><article><img src="/assets/official/quemsomos/Nad.jpeg" alt="Nadieje Macedo, CEO fundadora da Neo" loading="lazy"><h3>Nadieje Macedo</h3><p>CEO fundadora</p></article></section>${cta()}`
    },
    '/solucoes': {
      title: 'Soluções Neo', description: 'Soluções para talentos, carreira e organizações.',
      html: `${pageHero('Frentes de atuação', 'Soluções para cada etapa do caminho', 'Da atração de talentos à formação de lideranças, conheça as frentes de atuação da Neo.')}${cardGrid(SERVICES)}${cta()}`
    },
    '/solucoes/selecao-talentos': {
      title: 'Atração e seleção de talentos', description: 'Recrutamento especializado e seleção inclusiva.',
      html: servicePage('Atração e seleção de talentos', 'Conectamos organizações a profissionais diversos por meio de recrutamento especializado.', ['A Neo atua com recrutamento e seleção e possui experiência na atração de profissionais com deficiência e de talentos diversos.', 'O trabalho aproxima as necessidades das empresas das trajetórias e competências dos profissionais. As oportunidades abertas estão na plataforma de vagas da Neo.'], 'Solu\u00e7\u00f5es', '/assets/site-media/service-vagas.jpg')
    },
    '/solucoes/escola-neo': {
      title: 'Escola Neo', description: 'Capacitação e desenvolvimento para pessoas e organizações.',
      html: servicePage('Escola Neo', 'Aprendizagem desenvolvida de acordo com o contexto de cada organização.', ['As ações da Escola Neo são customizadas considerando o modelo de negócio e os desafios de cada empresa.', 'A consultoria descreve o uso de Design Thinking e atividades práticas, incluindo jogos desenvolvidos para cada temática, como parte de suas abordagens de aprendizagem.'], 'Solu\u00e7\u00f5es', '/assets/site-media/service-escola.jpg')
    },
    '/solucoes/academia-diversidade': {
      title: 'Academia de Diversidade', description: 'Consultoria, treinamentos e desenvolvimento em D&I.',
      html: servicePage('Academia de Diversidade', 'Transformando organizações através da diversidade, equidade e inclusão.', ['A Academia desenvolve soluções personalizadas para cada empresa, alinhando diversidade, equidade e inclusão aos objetivos do negócio.', 'A frente combina consultoria e treinamentos para apoiar a construção de culturas organizacionais mais inclusivas.'], 'Solu\u00e7\u00f5es', '/assets/site-media/service-academia.jpg')
    },
    '/solucoes/mentoria-executiva': {
      title: 'Mentoria Executiva', description: 'Desenvolvimento individual e in company para líderes.',
      html: servicePage('Mentoria Executiva', 'Desenvolvimento profissional e pessoal para líderes e executivos.', ['A Neo oferece programas individuais e in company. As sessões individuais são adaptadas às necessidades de cada profissional.', 'A página oficial apresenta avaliação de perfil, plano de desenvolvimento, encontros individuais e ferramentas de apoio como componentes do programa.'], 'Solu\u00e7\u00f5es', '/assets/site-media/service-mentoria.jpg')
    },
    '/solucoes/diversos': {
      title: 'Diversos', description: 'Recrutamento e seleção de profissionais diversos.',
      html: servicePage('Diversos', 'Soluções especializadas para recrutamento e seleção de profissionais diversos.', ['O programa Diversos busca atrair e selecionar talentos de diferentes origens e experiências, contribuindo para equipes mais diversas e ambientes inclusivos.', 'A proposta parte de processos seletivos atentos a vieses e à equidade de oportunidades.'], 'Solu\u00e7\u00f5es', '/assets/site-media/service-diversos.jpg')
    },
    '/solucoes/carreira-foco': {
      title: 'Carreira em Foco', description: 'Orientação personalizada para o desenvolvimento profissional.',
      html: servicePage('Carreira em Foco', 'Programas para ajudar você a avançar em seus objetivos profissionais.', ['A iniciativa oferece orientações personalizadas e estratégias alinhadas às expectativas de cada profissional.', 'Para conhecer o programa e conversar sobre as possibilidades, entre em contato com a equipe Neo.'], 'Solu\u00e7\u00f5es', '/assets/site-media/service-carreira.jpg')
    },
    '/vagas': {
      title: 'Vagas', description: 'Acesse as oportunidades profissionais divulgadas pela Neo.',
      html: `${pageHero('Para profissionais', 'Oportunidades para novos caminhos', 'Consulte as vagas disponíveis e candidate-se pela plataforma de recrutamento da Neo.')}
        <section class="page-content"><img class="route-inline-media" src="/assets/site-media/service-vagas.jpg" alt="Profissional em ambiente de trabalho, imagem oficial da Neo" loading="lazy" decoding="async"><div class="page-note"><strong>Vagas atualizadas na plataforma</strong><p>A lista de oportunidades e as candidaturas são administradas pela plataforma Abler.</p><a class="button button-dark" href="${JOBS_URL}" target="_blank" rel="noreferrer">Acessar vagas <span aria-hidden="true">↗</span></a></div></section>`
    },
    '/blog': {
      title: 'Blog', description: 'Conteúdos sobre carreira, inclusão e trabalho.',
      html: `${pageHero('Conteúdos', 'Ideias para transformar o trabalho', 'Artigos e reflexões sobre carreira, diversidade, inclusão e desenvolvimento profissional.')}
        <div class="page-card-grid blog-grid">${BLOG_ENTRIES.map((entry) => `<article class="page-card blog-card"><img class="card-media-image" src="${entry.image}" alt="Capa: ${entry.title}" loading="lazy" decoding="async"><p class="blog-date">${entry.date}</p><h2>${entry.title}</h2><p>${entry.summary}</p><a class="text-link" href="/blog/${entry.id}/">Ler artigo <span aria-hidden="true">↗</span></a></article>`).join('')}</div>`
    },
    '/midia': {
      title: 'Nós na mídia', description: 'Registros de eventos, treinamentos e conversas da Neo.',
      html: `${pageHero('Presen\u00e7a e conversas', 'N\u00f3s na m\u00eddia', 'Registros de atividades e conversas sobre diversidade, inclus\u00e3o e trabalho.')}
        <section class="media-gallery page-content" aria-label="Galeria de eventos da Neo">${MEDIA_ITEMS.map((item) => `<figure><img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async"><figcaption><h2>${item.title}</h2><p>${item.text}</p></figcaption></figure>`).join('')}</section>
        <section class="video-section page-content"><h2>V\u00eddeos da Neo</h2><p>Assista a eventos, projetos e conversas publicados pela Neo.</p><div class="video-grid">${NEO_VIDEOS.map((video) => `<article class="video-card"><a class="video-thumb" href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noreferrer" aria-label="Assistir: ${video.title} no YouTube"><img src="${video.image}" alt="Capa do v\u00eddeo ${video.title}" loading="lazy" decoding="async"><span aria-hidden="true">&#9654;</span></a><h3>${video.title}</h3><button class="video-embed-button" type="button" data-video-id="${video.id}" data-video-title="${video.title}">Reproduzir aqui</button></article>`).join('')}</div><a class="text-link" href="https://www.youtube.com/@neonegociosecarreira" target="_blank" rel="noreferrer">Canal da Neo no YouTube &rarr;</a></section>`
    },
    '/materiais': {
      title: 'Materiais', description: 'Materiais de apoio para carreira, liderança e inclusão.',
      html: `${pageHero('Biblioteca', 'Materiais para aprender e compartilhar', 'Conteúdos para apoiar o desenvolvimento de lideranças, equipes e organizações.')}
        <div class="page-card-grid">${MATERIALS.map((item) => `<article class="page-card material-card"><img class="card-media-image" src="${item.image}" alt="Capa do material ${item.title}" loading="lazy" decoding="async"><span class="page-card-number">PDF</span><h2>${item.title}</h2><p>${item.text}</p><a class="text-link" href="${NEO_ASSETS}/materiais/${encodeURIComponent(item.file)}" target="_blank" rel="noreferrer">Abrir material <span aria-hidden="true">↗</span></a></article>`).join('')}</div>`
    },
    '/contato': {
      title: 'Contato', description: 'Fale com a equipe Neo sobre consultoria, carreira e soluções.',
      html: `${pageHero('Vamos conversar', 'Conte o que você precisa', 'Entre em contato para conhecer as soluções ou conversar sobre uma necessidade da sua organização.')}
        <section class="contact route-contact"><div class="contact-heading"><h2>Fale com a Neo</h2><p>Atendimento em São Paulo e atuação em todo o Brasil.</p><address>R. do Bosque, 1621 · Barra Funda<br>São Paulo — SP, 01136-001</address><a class="contact-email" href="mailto:consultorianeo@negociosecarreira.com.br">consultorianeo@negociosecarreira.com.br</a><p><a href="tel:+5511991615775">(11) 99161-5775</a><br><a href="tel:+5511965426878">(11) 96542-6878</a></p><p>Segunda a sexta: 9h às 18h<br>Sábado: 9h às 13h</p></div>${contactForm()}</section>`
    },
    '/pesquisa-maturidade': { title: 'Pesquisa de Maturidade em D&I', description: 'Autoavaliação inicial de diversidade e inclusão.', html: surveyPage() },
    '/pesquisa-maturidade-questionario': { title: 'Autoavaliação de D&I', description: 'Responda às perguntas de autoavaliação.', html: questionnairePage() },
    '/planos-dei': {
      title: 'Planos de Diversidade, Equidade e Inclusão', description: 'Próximos passos após a autoavaliação de D&I.',
      html: `<main id="conteudo" class="route-page">${pageHero('Próximos passos', 'Diversidade se constrói com continuidade', 'Uma reflexão inicial pode ajudar a identificar temas para aprofundar com as pessoas da organização.')}
        <section class="page-content" id="maturity-result"><div class="page-note"><strong id="result-title">Resultado orientativo</strong><p id="result-description">Faça a autoavaliação para ver o resumo local das respostas.</p><p id="result-score"></p></div><div class="page-actions"><a class="button button-dark" href="/pesquisa-maturidade/">Refazer autoavaliação</a><a class="button button-outline" href="/contato/">Conversar com a Neo</a></div></section></main>`
    },
    '/afiliados': {
      title: 'Afiliados Neo', description: 'Saiba como indicar talentos à Neo.',
      html: `${pageHero('Rede de talentos', 'Seja um Neo Afiliado', 'Conheça a possibilidade de indicar talentos para oportunidades divulgadas pela Neo.')}
        <section class="page-content"><div class="page-copy"><p>O programa de afiliados permite indicar profissionais. Preencha seus dados para iniciar uma conversa com a equipe sobre participação e próximos passos.</p></div><form id="affiliate-form" class="contact-form page-form" novalidate>
          <label>Seu nome<input name="name" required autocomplete="name"></label><label>Empresa<input name="company" autocomplete="organization"></label><label>Seu e-mail<input type="email" name="email" required autocomplete="email"></label><label>Telefone<input type="tel" name="phone" autocomplete="tel"></label>
          <button class="button button-dark" type="submit">Enviar interesse <span aria-hidden="true">↗</span></button><p class="form-note" id="affiliate-status" role="status" aria-live="polite">Seu interesse ser&#225; enviado diretamente para a equipe Neo.</p>
        </form></section>`
    }
  };

  const articleMatch = route.match(/^\/blog\/(\d+)$/);
  if (articleMatch) {
    const entry = BLOG_ENTRIES.find((item) => item.id === Number(articleMatch[1]));
    if (entry) {
      routePages[route] = {
        title: entry.title, description: entry.summary,
        html: `${pageHero('Blog', entry.title, entry.summary, 'Blog')}
          <figure class="article-cover"><img src="${entry.image}" alt="Capa: ${entry.title}" loading="lazy" decoding="async"></figure>
          <article class="page-copy article-copy">
            <div class="article-meta"><span>${entry.date}</span><span>Por ${entry.author}</span><span>${entry.readTime} de leitura</span></div>
            <div class="article-content">${entry.body}</div>
            <aside class="article-source"><p>Conte&uacute;do editorial desenvolvido a partir da publica&ccedil;&atilde;o da Neo.</p><a class="text-link" href="${NEO_ASSETS}/blog/${entry.id}" target="_blank" rel="noreferrer">Consultar publica&ccedil;&atilde;o original no site da Neo <span aria-hidden="true">&rarr;</span></a></aside>
          </article>`
      };
    }
  }

  const page = routePages[route];
  const content = document.querySelector('#route-content');
  if (!page || !content) {
    document.title = 'Página não encontrada — Neo Negócios & Carreira';
    if (content) content.innerHTML = `<main id="conteudo" class="route-page">${pageHero('Neo Negócios & Carreira', 'Esta página não foi encontrada', 'O endereço pode ter mudado. Use a navegação para continuar.')}${cta('Volte a encontrar seu caminho', 'Acesse as soluções ou fale com a equipe Neo.')}</main>`;
    return;
  }

  document.title = `${page.title} — Neo Negócios & Carreira`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', page.description);
  content.innerHTML = /^\s*<main\b/.test(page.html) ? page.html : `<main id="conteudo" class="route-page">${page.html}</main>`;
}

if (document.body.dataset.page) {
  document.body.classList.add('subpage');
  document.querySelector('#route-header').innerHTML = renderHeader();
  document.querySelector('#route-footer').innerHTML = renderFooter();
  renderRoutePage();
}

const maturityStart = document.querySelector('#maturity-start');
if (maturityStart) maturityStart.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!maturityStart.reportValidity()) return;
  const data = Object.fromEntries(new FormData(maturityStart));
  localStorage.setItem('neoMaturityUser', JSON.stringify(data));
  window.location.href = '/pesquisa-maturidade-questionario/';
});

const maturityQuestionnaire = document.querySelector('#maturity-questionnaire');
if (maturityQuestionnaire) maturityQuestionnaire.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!maturityQuestionnaire.reportValidity()) {
    document.querySelector('#survey-status').textContent = 'Responda a todas as perguntas para ver seu resultado.';
    maturityQuestionnaire.querySelector(':invalid')?.focus();
    return;
  }
  const answers = new FormData(maturityQuestionnaire);
  const selected = [...answers.entries()].map(([, value]) => value);
  const scoreMap = { '0': 20, '1': 50, '2': 100, na: 0, dk: 30 };
  const score = Math.round(selected.reduce((sum, answer) => sum + scoreMap[answer], 0) / selected.length);
  const level = score >= 80 ? 'Nível de Maturidade 3' : score >= 50 ? 'Nível de Maturidade 2' : 'Nível de Maturidade 1';
  const result = { score, level, answers: selected.length, date: new Date().toISOString() };
  localStorage.setItem('neoMaturityResult', JSON.stringify(result));
  window.location.href = '/planos-dei/';
});

const maturityResult = document.querySelector('#maturity-result');
if (maturityResult) {
  const result = JSON.parse(localStorage.getItem('neoMaturityResult') || 'null');
  if (result) {
    document.querySelector('#result-title').textContent = result.level;
    document.querySelector('#result-description').textContent = `Sua autoavaliação teve ${result.score}% de respostas favoráveis. Use este resultado apenas como ponto de partida para uma conversa sobre as práticas atuais.`;
    document.querySelector('#result-score').textContent = `${result.answers} respostas consideradas · resultado orientativo`;
  }
}

const affiliateForm = document.querySelector('#affiliate-form');
if (affiliateForm) affiliateForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!affiliateForm.reportValidity()) return;
  const status = document.querySelector('#affiliate-status');
  const button = affiliateForm.querySelector('button[type="submit"]');
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  status.textContent = 'Enviando sua mensagem\u2026';
  try {
    const fields = Object.fromEntries(new FormData(affiliateForm));
    fields._subject = 'Interesse no programa de afiliados Neo';
    fields._replyto = fields.email;
    const response = await fetch('https://formsubmit.co/ajax/consultorianeo@negociosecarreira.com.br', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(fields)
    });
    const result = await response.json();
    if (!response.ok || result.success !== true && result.success !== 'true') throw new Error('Envio recusado');
    status.textContent = 'Interesse enviado. Obrigado por se conectar \u00e0 Neo!';
    affiliateForm.reset();
  } catch {
    status.textContent = 'N\u00e3o foi poss\u00edvel enviar agora. Tente novamente ou escreva para consultorianeo@negociosecarreira.com.br.';
  } finally {
    button.disabled = false;
    button.removeAttribute('aria-busy');
  }
});
