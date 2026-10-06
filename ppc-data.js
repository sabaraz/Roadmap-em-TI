/* ppc-data.js — dados do mapa de carreiras de Sistemas de Informação.
 * Fonte: projeto pedagógico do curso, 2020 (noturno). Os textos vivem só aqui; mapa.js não contém nomes de disciplina.
 * Script clássico: define a constante global PPC_DATA. O bloco final permite validar em Node. */
const PPC_DATA = {
 "meta": {
  "fonte": "Projeto pedagógico do Bacharelado em Sistemas de Informação, 2020 (noturno)",
  "ligacoesDisciplinaCarreira": "derivado",
  "comportamentoSelo": "O selo 'também cursada em ...' é clicável: abre as informações do curso vizinho (equivalente e nota sobre o curso) e destaca/leva o usuário às demais disciplinas do BSI compartilhadas com aquele curso.",
  "informacaoExterna": "Atividades e habilidades das profissões vêm de fontes públicas (classificação de ocupações, entidades e guias de carreira) e foram parafraseadas; a relação com as disciplinas é derivada das ementas das disciplinas.",
  "cargaHorariaTotal": 3004,
  "cargaObrigatorias": 2208,
  "cargaOptativas": 256,
  "cargaComponentes": 540
 },
 "curso": {
  "id": "curso-bsi",
  "tipo": "curso",
  "rotulo": "Jornada Sistemas de Informação",
  "descricao": "Bacharelado em Sistemas de Informação do IFMG, Campus Ouro Branco. Curso noturno, de 8 semestres e 3.004 horas, organizado em seis eixos de formação.",
  "ppcStatus": "citado",
  "ancora": "PPC 2020"
 },
 "eixos": [
  {
   "id": "matematica",
   "tipo": "eixo",
   "ordem": 1,
   "rotulo": "Matemática",
   "percentualCarga": 9,
   "descricao": "Base quantitativa para computação, dados e tomada de decisão.",
   "descricaoFonte": "editorial",
   "ppcStatus": "citado",
   "ancora": "Projeto pedagógico do curso, §6.2"
  },
  {
   "id": "computacional",
   "tipo": "eixo",
   "ordem": 2,
   "rotulo": "Computacional",
   "percentualCarga": 21,
   "descricao": "Fundamentos para construir soluções computacionais: programação, algoritmos e máquinas.",
   "descricaoFonte": "editorial",
   "ppcStatus": "citado",
   "ancora": "Projeto pedagógico do curso, §6.2"
  },
  {
   "id": "ti",
   "tipo": "eixo",
   "ordem": 3,
   "rotulo": "Tecnologia da Informação",
   "percentualCarga": 28,
   "descricao": "Software, dados, redes e produtos digitais.",
   "descricaoFonte": "editorial",
   "ppcStatus": "citado",
   "ancora": "Projeto pedagógico do curso, §6.2"
  },
  {
   "id": "administrativa",
   "tipo": "eixo",
   "ordem": 4,
   "rotulo": "Administrativa",
   "percentualCarga": 7,
   "descricao": "Tecnologia aplicada ao negócio e à organização.",
   "descricaoFonte": "editorial",
   "ppcStatus": "citado",
   "ancora": "Projeto pedagógico do curso, §6.2"
  },
  {
   "id": "profissional-social",
   "tipo": "eixo",
   "ordem": 5,
   "rotulo": "Profissional e Social",
   "percentualCarga": 6,
   "descricao": "Pesquisa, ética e conclusão de curso: aplicação responsável do conhecimento.",
   "descricaoFonte": "editorial",
   "ppcStatus": "citado",
   "ancora": "Projeto pedagógico do curso, §6.2"
  },
  {
   "id": "complementar",
   "tipo": "eixo",
   "ordem": 6,
   "rotulo": "Complementar",
   "percentualCarga": 29,
   "descricao": "Idiomas, projeto integrador, atividades complementares e optativas: autonomia para direcionar o perfil.",
   "descricaoFonte": "editorial",
   "ppcStatus": "citado",
   "ancora": "Projeto pedagógico do curso, §6.2"
  }
 ],
 "agrupamentos": [
  {
   "id": "g-mat-base",
   "tipo": "agrupamento",
   "eixo": "matematica",
   "ordem": 1,
   "rotulo": "Base quantitativa",
   "descricao": "Funções, cálculo, álgebra linear, probabilidade e estatística: a matemática que sustenta dados, algoritmos e inteligência artificial.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-101",
     "papel": "home"
    },
    {
     "ref": "d-012",
     "papel": "home"
    },
    {
     "ref": "d-021",
     "papel": "home"
    },
    {
     "ref": "d-031",
     "papel": "home"
    },
    {
     "ref": "d-079",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-comp-cientifica",
    "c-cientista-dados",
    "c-dev-ia",
    "c-pesquisador"
   ],
   "resultados": []
  },
  {
   "id": "g-comp-prog",
   "tipo": "agrupamento",
   "eixo": "computacional",
   "ordem": 2,
   "rotulo": "Programação, algoritmos e fundamentos",
   "descricao": "Do primeiro programa às estruturas de dados e à análise de algoritmos; inclui a visão geral de Sistemas de Informação.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-085",
     "papel": "home"
    },
    {
     "ref": "d-001",
     "papel": "home"
    },
    {
     "ref": "d-009",
     "papel": "home"
    },
    {
     "ref": "d-010",
     "papel": "home"
    },
    {
     "ref": "d-015",
     "papel": "home"
    },
    {
     "ref": "d-022",
     "papel": "home"
    },
    {
     "ref": "d-020",
     "papel": "home"
    },
    {
     "ref": "d-038",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-programador",
    "c-esp-algoritmos",
    "c-pesquisador-computacao"
   ],
   "resultados": []
  },
  {
   "id": "g-comp-maq",
   "tipo": "agrupamento",
   "eixo": "computacional",
   "ordem": 3,
   "rotulo": "Máquinas e sistemas de base",
   "descricao": "Circuitos digitais, arquitetura de computadores e sistemas operacionais: como o computador funciona por dentro.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-013",
     "papel": "home"
    },
    {
     "ref": "d-024",
     "papel": "home"
    },
    {
     "ref": "d-030",
     "papel": "relacionada"
    }
   ],
   "carreiras": [
    "c-dev-sistemas",
    "c-infra",
    "c-dev-automacao",
    "c-dev-robotica"
   ],
   "resultados": []
  },
  {
   "id": "g-comp-teoria",
   "tipo": "agrupamento",
   "eixo": "computacional",
   "ordem": 4,
   "rotulo": "Teoria e algoritmos avançados",
   "descricao": "Linguagens formais, grafos e algoritmos especiais. São optativas para quem quer aprofundar a teoria.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-028",
     "papel": "home"
    },
    {
     "ref": "d-027",
     "papel": "home"
    },
    {
     "ref": "d-064",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-esp-algoritmos",
    "c-pesquisador-computacao"
   ],
   "resultados": []
  },
  {
   "id": "g-ti-eng",
   "tipo": "agrupamento",
   "eixo": "ti",
   "ordem": 5,
   "rotulo": "Engenharia e qualidade de software",
   "descricao": "Como se planeja, constrói, testa e mantém software de verdade: requisitos, processos, arquitetura, qualidade e gestão do projeto de software.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-017",
     "papel": "home"
    },
    {
     "ref": "d-041",
     "papel": "home"
    },
    {
     "ref": "d-103",
     "papel": "home"
    },
    {
     "ref": "d-049",
     "papel": "home"
    },
    {
     "ref": "d-078",
     "papel": "home"
    },
    {
     "ref": "d-065",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-engenheiro-software",
    "c-analista-sistemas",
    "c-analista-requisitos",
    "c-analista-teste",
    "c-arquiteto-software",
    "c-devops",
    "c-dev-backend",
    "c-dev-fullstack",
    "c-dev-frontend",
    "c-dev-mobile"
   ],
   "resultados": []
  },
  {
   "id": "g-ti-app",
   "tipo": "agrupamento",
   "eixo": "ti",
   "ordem": 6,
   "rotulo": "Desenvolvimento de aplicações",
   "descricao": "Programação orientada a objetos, web e dispositivos móveis: os caminhos para quem quer construir sistemas e aplicativos.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-023",
     "papel": "home"
    },
    {
     "ref": "d-039",
     "papel": "home"
    },
    {
     "ref": "d-067",
     "papel": "home"
    },
    {
     "ref": "d-010",
     "papel": "relacionada"
    },
    {
     "ref": "d-022",
     "papel": "relacionada"
    }
   ],
   "carreiras": [
    "c-programador",
    "c-dev-backend",
    "c-dev-frontend",
    "c-dev-fullstack",
    "c-dev-web",
    "c-dev-mobile"
   ],
   "resultados": []
  },
  {
   "id": "g-ti-dados",
   "tipo": "agrupamento",
   "eixo": "ti",
   "ordem": 7,
   "rotulo": "Dados e bancos de dados",
   "descricao": "Modelagem, consulta e administração de bancos de dados, do básico ao avançado.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-016",
     "papel": "home"
    },
    {
     "ref": "d-033",
     "papel": "home"
    },
    {
     "ref": "d-063",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-dba",
    "c-dev-bd",
    "c-eng-dados",
    "c-analista-dados"
   ],
   "resultados": []
  },
  {
   "id": "g-ti-redes",
   "tipo": "agrupamento",
   "eixo": "ti",
   "ordem": 8,
   "rotulo": "Redes, sistemas e infraestrutura",
   "descricao": "Redes de computadores e sistemas distribuídos formam esta área, junto com sistemas operacionais e optativas de redes.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-029",
     "papel": "home"
    },
    {
     "ref": "d-037",
     "papel": "home"
    },
    {
     "ref": "d-030",
     "papel": "home"
    },
    {
     "ref": "d-032",
     "papel": "home"
    },
    {
     "ref": "d-066",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-admin-redes",
    "c-analista-redes",
    "c-infra",
    "c-distribuidos",
    "c-devops"
   ],
   "resultados": []
  },
  {
   "id": "g-ti-ux",
   "tipo": "agrupamento",
   "eixo": "ti",
   "ordem": 9,
   "rotulo": "Interfaces e experiência",
   "descricao": "Interação humano-computador, computação gráfica e processamento de imagens: sistemas pensados para quem os usa.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-026",
     "papel": "home"
    },
    {
     "ref": "d-070",
     "papel": "home"
    },
    {
     "ref": "d-095",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-web-designer",
    "c-ui",
    "c-ux",
    "c-dev-visual"
   ],
   "resultados": []
  },
  {
   "id": "g-ti-ia",
   "tipo": "agrupamento",
   "eixo": "ti",
   "ordem": 10,
   "rotulo": "Inteligência artificial e mineração",
   "descricao": "Inteligência artificial, aprendizado de máquina e mineração de dados.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-034",
     "papel": "home"
    },
    {
     "ref": "d-068",
     "papel": "home"
    },
    {
     "ref": "d-096",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-dev-ia",
    "c-cientista-dados",
    "c-mineracao",
    "c-analista-dados",
    "c-pesquisador-ia"
   ],
   "resultados": []
  },
  {
   "id": "g-ti-decisao",
   "tipo": "agrupamento",
   "eixo": "ti",
   "ordem": 11,
   "rotulo": "Apoio à decisão e informação",
   "descricao": "Sistemas que ajudam organizações a decidir: apoio à decisão, governança da informação, gestão do conhecimento e inteligência competitiva.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-036",
     "papel": "home"
    },
    {
     "ref": "d-019",
     "papel": "home"
    },
    {
     "ref": "d-075",
     "papel": "home"
    },
    {
     "ref": "d-059",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-bi",
    "c-analista-dados",
    "c-analista-negocios",
    "c-consultor-si",
    "c-governanca"
   ],
   "resultados": []
  },
  {
   "id": "g-ti-jogos",
   "tipo": "agrupamento",
   "eixo": "ti",
   "ordem": 12,
   "rotulo": "Jogos, robótica e automação",
   "descricao": "Optativas para quem quer programar jogos, robôs e processos automatizados.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-097",
     "papel": "home"
    },
    {
     "ref": "d-099",
     "papel": "home"
    },
    {
     "ref": "d-098",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-dev-jogos",
    "c-dev-automacao",
    "c-dev-robotica"
   ],
   "resultados": []
  },
  {
   "id": "g-adm-fund",
   "tipo": "agrupamento",
   "eixo": "administrativa",
   "ordem": 13,
   "rotulo": "Fundamentos de administração e negócios",
   "descricao": "Princípios de administração e contabilidade: a linguagem das organizações onde a tecnologia é aplicada.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-011",
     "papel": "home"
    },
    {
     "ref": "d-018",
     "papel": "home"
    },
    {
     "ref": "d-019",
     "papel": "relacionada"
    }
   ],
   "carreiras": [
    "c-analista-negocios",
    "c-processos",
    "c-gerente-area-si",
    "c-consultor-si",
    "c-governanca"
   ],
   "resultados": []
  },
  {
   "id": "g-adm-proj",
   "tipo": "agrupamento",
   "eixo": "administrativa",
   "ordem": 14,
   "rotulo": "Projetos, empreendedorismo e finanças",
   "descricao": "Gestão de projetos, empreendedorismo e finanças, para quem quer coordenar projetos ou abrir o próprio negócio.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-040",
     "papel": "home"
    },
    {
     "ref": "d-102",
     "papel": "home"
    },
    {
     "ref": "d-035",
     "papel": "home"
    },
    {
     "ref": "d-057",
     "papel": "home"
    },
    {
     "ref": "d-049",
     "papel": "relacionada"
    }
   ],
   "carreiras": [
    "c-gerente-projetos",
    "c-empresario-si",
    "c-consultor-si"
   ],
   "resultados": []
  },
  {
   "id": "g-adm-serv",
   "tipo": "agrupamento",
   "eixo": "administrativa",
   "ordem": 15,
   "rotulo": "Serviços, qualidade e inovação",
   "descricao": "Optativas de administração sobre serviços, qualidade, inovação e consultoria.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-060",
     "papel": "home"
    },
    {
     "ref": "d-074",
     "papel": "home"
    },
    {
     "ref": "d-054",
     "papel": "home"
    },
    {
     "ref": "d-081",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-consultor-si",
    "c-gerente-area-si",
    "c-governanca"
   ],
   "resultados": []
  },
  {
   "id": "g-adm-pessoas",
   "tipo": "agrupamento",
   "eixo": "administrativa",
   "ordem": 16,
   "rotulo": "Pessoas, organização e sustentabilidade",
   "descricao": "Optativas de administração sobre comportamento organizacional, recursos humanos, qualidade de vida no trabalho, meio ambiente e logística reversa.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-025",
     "papel": "home"
    },
    {
     "ref": "d-094",
     "papel": "home"
    },
    {
     "ref": "d-073",
     "papel": "home"
    },
    {
     "ref": "d-055",
     "papel": "home"
    },
    {
     "ref": "d-050",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-gerente-area-si",
    "c-consultor-si"
   ],
   "resultados": []
  },
  {
   "id": "g-ps-pesq",
   "tipo": "agrupamento",
   "eixo": "profissional-social",
   "ordem": 17,
   "rotulo": "Pesquisa e conclusão de curso",
   "descricao": "Métodos de pesquisa e os dois trabalhos de conclusão de curso.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-002",
     "papel": "home"
    },
    {
     "ref": "d-091",
     "papel": "home"
    },
    {
     "ref": "d-092",
     "papel": "home"
    }
   ],
   "carreiras": [
    "c-pesquisador",
    "c-docencia"
   ],
   "resultados": [
    {
     "id": "r-especialista-rota",
     "rotulo": "Especialista técnico na rota escolhida",
     "descricao": "O trabalho de conclusão permite aprofundar uma das rotas do mapa."
    }
   ]
  },
  {
   "id": "g-ps-etica",
   "tipo": "agrupamento",
   "eixo": "profissional-social",
   "ordem": 18,
   "rotulo": "Ética e atuação responsável",
   "descricao": "Ética profissional, direito e legislação aplicados à computação.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-044",
     "papel": "home"
    }
   ],
   "carreiras": [],
   "resultados": [
    {
     "id": "r-atuacao-responsavel",
     "rotulo": "Atuação profissional responsável em todas as carreiras",
     "descricao": "Ética, privacidade e legislação valem para qualquer carreira do mapa."
    }
   ]
  },
  {
   "id": "g-co-com",
   "tipo": "agrupamento",
   "eixo": "complementar",
   "ordem": 19,
   "rotulo": "Comunicação e idiomas",
   "descricao": "Português e inglês instrumentais, inglês para negócios e Libras.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [
    {
     "ref": "d-007",
     "papel": "home"
    },
    {
     "ref": "d-003",
     "papel": "home"
    },
    {
     "ref": "d-008",
     "papel": "home"
    },
    {
     "ref": "d-006",
     "papel": "home"
    },
    {
     "ref": "d-083",
     "papel": "home"
    },
    {
     "ref": "d-084",
     "papel": "home"
    },
    {
     "ref": "d-104",
     "papel": "home"
    }
   ],
   "carreiras": [],
   "resultados": [
    {
     "id": "r-comunicacao-tecnica",
     "rotulo": "Comunicação técnica e atuação em equipes multidisciplinares",
     "descricao": "Leitura, escrita e comunicação que valem para todas as carreiras do mapa."
    }
   ]
  },
  {
   "id": "g-co-comp",
   "tipo": "agrupamento",
   "eixo": "complementar",
   "ordem": 20,
   "rotulo": "Componentes curriculares",
   "descricao": "Projeto integrador, atividades complementares e as quatro optativas que o estudante escolhe.",
   "descricaoFonte": "editorial",
   "ppcStatus": "derivado",
   "ancora": "Organização pedagógica derivada das disciplinas do PPC",
   "disciplinas": [],
   "carreiras": [],
   "resultados": [
    {
     "id": "r-portfolio",
     "rotulo": "Portfólio, extensão, monitoria, pesquisa, estágio e aprofundamento de rota",
     "descricao": "O estudante direciona o próprio perfil e reforça qualquer carreira do mapa."
    }
   ],
   "componentes": [
    "comp-pi",
    "comp-ac",
    "comp-opt"
   ]
  }
 ],
 "disciplinas": {
  "d-085": {
   "id": "d-085",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.085",
   "rotulo": "Introdução à Programação",
   "natureza": "obrigatoria",
   "periodo": 1,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Conceitos relacionados a algoritmos e programação de computadores. Metodologias de desenvolvimento de programas. Representação gráfica e textual de algoritmos. Desenvolvimento de programas em uma linguagem de alto nível: compilação/interpretação; tipos dados; operadores aritméticos e expressões aritméticas; operadores lógicos e expressões lógicas; entrada e saída; instruções de sequência, seleção e repetição; tipos de dados compostos homogêneos; registros, arquivos; modularização.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Introdução à Programação"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.085)"
  },
  "d-044": {
   "id": "d-044",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.044",
   "rotulo": "Ética e Legislação",
   "natureza": "obrigatoria",
   "periodo": 1,
   "cargaHoraria": 32,
   "eixoPpc": "profissional-social",
   "ementa": "Ética: conceito; distinção entre ética e moral, distinção entre ética e lei; ética teórica, ética aplicada e ética profissional; a ética e as disciplinas dos profissionais de computação. Introdução geral ao Direito com ênfase nos Direitos humanos. Confidencialidade e privacidade dos dados: acesso não autorizado a recursos computacionais, efeitos jurídicos e suas implicações. Marco Civil da Internet. Direitos de propriedade de software: registro de software; direito autoral e direito patentário; Aspectos da criminalidade informática; “pirataria” e crimes contra a propriedade intelectual (Lei No 9.609 de 19/02/1998, Lei No 5.988 de 14/12/1973 e Decreto-lei No 2.848 de 07/12/1940, Título III, Capítulo I). Educação ambiental, acordos climáticos e suas influências na legislação. Multiculturalismo, relações étnico-raciais e história e cultura afro-brasileira e indígena nas relações de trabalho aplicados à Informática.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Filosofia e Ética Profissional"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.044)"
  },
  "d-001": {
   "id": "d-001",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.001",
   "rotulo": "Introdução a Sistemas de Informação",
   "natureza": "obrigatoria",
   "periodo": 1,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Histórico e visão geral da computação, Introdução a Organização de Computadores, Introdução a Algoritmos e Programação, Sistemas de Numeração, Lógica Proposicional, Álgebra Boleana e Simplificação, Portas Lógicas, Métodos de Prova, Introdução a Redes, Introdução a Engenharia de Software, Sistemas de Informação.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.001)"
  },
  "d-011": {
   "id": "d-011",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.011",
   "rotulo": "Princípios da Administração I",
   "natureza": "obrigatoria",
   "periodo": 1,
   "cargaHoraria": 64,
   "eixoPpc": "administrativa",
   "ementa": "Fundamentos da Administração. Administração Científica; Teoria Clássica de Administração; Teoria das Relações Humanas, Modelo Burocrático de Organização e Teoria Neoclássica da Administração. Temas atuais em administração e Negócios de Tecnologia.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Princípios da Administração I"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.011)"
  },
  "d-007": {
   "id": "d-007",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.007",
   "rotulo": "Português Instrumental I",
   "natureza": "obrigatoria",
   "periodo": 1,
   "cargaHoraria": 32,
   "eixoPpc": "complementar",
   "ementa": "Ortografia oficial. Concordância nominal e verbal. Regência nominal e verbal. Emprego da crase. Pontuação. Estratégias globais de leitura e análise de textos. Coesão e coerência textuais. Tipos e gêneros textuais. Leitura e produção de textos técnicos e acadêmico-científicos.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Português Instrumental"
    },
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Leitura e Produção de Textos"
    },
    {
     "prefixo": "OBLPED",
     "curso": "Pedagogia",
     "equivalente": "Português Instrumental"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.007)"
  },
  "d-101": {
   "id": "d-101",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.101",
   "rotulo": "Pré-Cálculo",
   "natureza": "obrigatoria",
   "periodo": 1,
   "cargaHoraria": 64,
   "eixoPpc": "matematica",
   "ementa": "Funções: definição, domínio, imagem, gráficos. Tipos de funções: 1º grau, 2º grau, modular, exponencial, logarítmica, trigonométrica, polinomial, composta, inversa.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.101)"
  },
  "d-009": {
   "id": "d-009",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.009",
   "rotulo": "Algoritmos e Estrutura de Dados I",
   "natureza": "obrigatoria",
   "periodo": 2,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Conceitos de estruturas de dados e tipos de dados abstratos (TDA). Listas Lineares. Implementação de listas lineares usando alocação estática e acesso sequencial. Implementação de listas lineares usando alocação dinâmica e acesso encadeado. Pilhas. Filas. Algoritmos de busca e ordenação. Tabelas de Dispersão. Manipulação de estruturas de dados utilizando uma linguagem de programação.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Algoritmos e Estruturas de Dados I"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.009)"
  },
  "d-012": {
   "id": "d-012",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.012",
   "rotulo": "Cálculo Diferencial e Integral I",
   "natureza": "obrigatoria",
   "periodo": 2,
   "cargaHoraria": 64,
   "eixoPpc": "matematica",
   "ementa": "Funções. Limite e Continuidade. Derivadas e Aplicações. Integrais indefinidas. Integrais definidas e Aplicações. Técnicas de Integração.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Cálculo I"
    },
    {
     "prefixo": "OBENGM",
     "curso": "Engenharia Metalúrgica",
     "equivalente": "Cálculo Diferencial e Integral I"
    },
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Cálculo I"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.012)"
  },
  "d-003": {
   "id": "d-003",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.003",
   "rotulo": "Inglês Instrumental I",
   "natureza": "obrigatoria",
   "periodo": 2,
   "cargaHoraria": 32,
   "eixoPpc": "complementar",
   "ementa": "Estratégias para leitura em língua inglesa. Noções fundamentais da estrutura da língua. Aquisição de vocabulário.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Inglês Instrumental"
    },
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Inglês Instrumental"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.003)"
  },
  "d-002": {
   "id": "d-002",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.002",
   "rotulo": "Métodos e Técnicas de Pesquisa",
   "natureza": "obrigatoria",
   "periodo": 2,
   "cargaHoraria": 32,
   "eixoPpc": "profissional-social",
   "ementa": "Ciência e Conhecimento Científico. Diferença entre Ciência e Tecnologia. Fundamentos da Metodologia Científica. Métodos e técnicas de pesquisa, problema e hipótese, revisão de literatura. Normalização do trabalho científico (ABNT). Elaboração de projeto de pesquisa, artigo científico e relatório de pesquisa.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.002)"
  },
  "d-010": {
   "id": "d-010",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.010",
   "rotulo": "Programação Orientada a Objetos I",
   "natureza": "obrigatoria",
   "periodo": 2,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Modelagem conceitual: abstração X representação. O Modelo de Objetos e seus pilares: classes e objetos, métodos, encapsulamento, herança, composição, polimorfismo. Classes internas (inner classes). Tratamento de erros, exceções e eventos em programas.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Programação II"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.010)"
  },
  "d-013": {
   "id": "d-013",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.013",
   "rotulo": "Sistemas Digitais e Circuitos Combinacionais",
   "natureza": "obrigatoria",
   "periodo": 2,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Sistemas de Numeração e Códigos. Circuitos Lógicos e Combinacionais. Flip-Flops. Aritmética Digital. Contadores e Registradores. Circuitos Integrados e Lógicos. Projetos de Sistemas Digitais. Dispositivos de Memória.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.013)"
  },
  "d-015": {
   "id": "d-015",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.015",
   "rotulo": "Algoritmos e Estrutura de Dados II",
   "natureza": "obrigatoria",
   "periodo": 3,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Árvores binárias de busca, árvores binárias balanceadas, árvores B, árvores digitais. Processamento de Cadeia de Caracteres. Grafos: representação e algoritmos; busca em largura e profundidade. Manipulação de estruturas de dados utilizando uma linguagem de programação.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.015)"
  },
  "d-024": {
   "id": "d-024",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.024",
   "rotulo": "Arquitetura e Organização de Computadores",
   "natureza": "obrigatoria",
   "periodo": 3,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Arquitetura geral de computadores: arquitetura de Von Neumann, organização dos principais componentes; Organização básica da UCP: estruturas internas, modo de operação, execução de instruções, pipeline, execução e interrupções; Formato das instruções e linguagem de máquina; Estruturas de memória: memória principal, secundária, cache e registradores, acesso a memória e modos de endereçamento; Sistemas de entrada e saída; Barramentos.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Arquitetura e Organização de Computadores"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.024)"
  },
  "d-016": {
   "id": "d-016",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.016",
   "rotulo": "Banco de Dados I",
   "natureza": "obrigatoria",
   "periodo": 3,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Modelo relacional. Arquitetura de um Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR). Modelagem de bancos de dados relacionais: conceitual e lógica. Linguagem de definição de dados. Linguagem de manipulação de dados. Dependência funcional. Normalização. Transações. Implementação de aplicações usando um SGBDR e uma linguagem de definição e manipulação de dados (SQL) embutida em uma linguagem de programação.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Banco de Dados"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.016)"
  },
  "d-018": {
   "id": "d-018",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.018",
   "rotulo": "Contabilidade",
   "natureza": "obrigatoria",
   "periodo": 3,
   "cargaHoraria": 64,
   "eixoPpc": "administrativa",
   "ementa": "Objeto e objetivo da Contabilidade. A contabilidade como um Sistema de Informação. Convergência da contabilidade brasileira às normas internacionais de contabilidade. O patrimônio e suas variações. Estudo conceitual: ativo, passivo, patrimônio líquido, receita e despesa. Método das partidas dobradas. Estrutura das demonstrações financeiras. Balanço patrimonial, Demonstrações do resultado do exercício (DRE) e demais demonstrações financeiras Obrigatórias. Procedimentos contábeis básicos. Encerramento do exercício. Regime de competência versus regime de caixa.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Contabilidade Geral"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.018)"
  },
  "d-017": {
   "id": "d-017",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.017",
   "rotulo": "Engenharia de Software I",
   "natureza": "obrigatoria",
   "periodo": 3,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Conceitos sobre software, sistemas de software, engenharia de software, análise, projeto e implementação, natureza, caracterização e objetivos da engenharia de software; processos de software; desenvolvimento ágil de software; metodologias de desenvolvimento de software; engenharia de requisitos: tipos de requisitos, métodos e técnicas para elicitação de requisitos de software; modelagem em diferentes níveis de domínio; análise orientada a objetos; modelagem de software orientados a objetos; gerência de configuração de software; testes de software; evolução de software.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.017)"
  },
  "d-021": {
   "id": "d-021",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.021",
   "rotulo": "Álgebra Linear e Geometria Analítica",
   "natureza": "obrigatoria",
   "periodo": 4,
   "cargaHoraria": 64,
   "eixoPpc": "matematica",
   "ementa": "Equações analíticas de retas, planos, cônicas. Vetores: operações e base. Equações vetoriais de retas e planos. Equações paramétricas. Álgebra de matrizes e determinantes. Autovalores e autovetores. Sistemas lineares: resolução e escalonamento. Espaços vetoriais; subespaços; bases; dimensão; transformações lineares e representação matricial; autovalores e autovetores; produto interno; ortonormalização; diagonalização; formas quadráticas; aplicações.",
   "compartilhadaCom": [
    {
     "prefixo": "OBBGEMT",
     "curso": "outro curso do campus",
     "equivalente": "Álgebra Linear I (OBBGEMT.076 – 2015.1 e OBBGEMT.143 – 2018.1)"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.021)"
  },
  "d-020": {
   "id": "d-020",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.020",
   "rotulo": "Matemática Discreta",
   "natureza": "obrigatoria",
   "periodo": 4,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Teoria dos conjuntos: cardinalidade e operações; Recorrência: sequência e somatórios; Métodos de prova: direta, contradição, contrapositiva, indução e contra-exemplo; Conjuntos enumeráveis, não enumeráveis e infinitos; Funções e relações: propriedades, partição, Classes de equivalência, Fechos e relação de ordem; Teoria dos números: MDC e teste dos primos; Conceitos básicos da Teoria de Grafos: grafos e dígrafos; passeios e distâncias; caminhos e ciclos; Modelos de Aplicação. Representação de grafos: grafos isomorfos; subgrafos; representação de grafos por matrizes e listas de adjacência. Árvores: busca em largura e profundidade; árvore geradora; algoritmos de Prim e Kruskal. Caminhos e conectividade: caminho mínimo; algoritmo de Djikstra; conectividade em grafos; grafos bipartidos; grafos Eulerianos e Hamiltonianos. Planaridade em grafos. Coloração de Grafos: conceito e aplicações de coloração de um grafo; número cromático de um grafo; teoremas das quatro cores. Problemas clássicos: Árvores de Steiner; Caixeiro-Viajante.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.020)"
  },
  "d-022": {
   "id": "d-022",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.022",
   "rotulo": "Programação Orientada a Objetos II",
   "natureza": "obrigatoria",
   "periodo": 4,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Classes internas (inner classes): revisão. Classes e métodos genéricos (templates).Tratamento de eventos de interface (GraphicalUser Interface). Programação com múltiplas threads. Persistência de dados. Padrões de Projeto de Software.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.022)"
  },
  "d-023": {
   "id": "d-023",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.023",
   "rotulo": "Programação WEB",
   "natureza": "obrigatoria",
   "periodo": 4,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Desenvolvimento de lado-cliente. Linguagens de marcação (HMTL e CSS). Linguagens de Script (Javascript). Desenvolvimento lado-servidor. Processadores de HyperTexto Sessões. Arquitetura de aplicações WEB.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.023)"
  },
  "d-030": {
   "id": "d-030",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.030",
   "rotulo": "Sistemas Operacionais",
   "natureza": "obrigatoria",
   "periodo": 4,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "O histórico, o conceito e os tipos de sistemas operacionais. As estruturas de sistemas operacionais. Gerenciamento de memória. Memória virtual. Conceito de processo. Gerência de processador: escalonamento de processos, monoprocessamento e multiprocessamento. Concorrência e sincronização de processos. Alocação de recursos e deadlocks. Gerenciamento de arquivos. Gerenciamento de dispositivos de entrada/saída.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Sistemas Operacionais"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.030)"
  },
  "d-041": {
   "id": "d-041",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.041",
   "rotulo": "Engenharia de Software II",
   "natureza": "obrigatoria",
   "periodo": 5,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Desenvolvimento baseado em modelos de processos para sistemas complexos como (RUP); Recursos de suporte para desenvolvimento: uso de ferramentas CASE, documentação de software; Estudo e uso de ferramentas para práticas DevOps; Reuso e reengenharia de software; Desenvolvimento de software com arquiteturas complexas (com uso de REST API e GraphQL);Estudo de DSL (Linguagem Específica de Domínio).",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.041)"
  },
  "d-019": {
   "id": "d-019",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.019",
   "rotulo": "Governança e Gestão da Informação",
   "natureza": "obrigatoria",
   "periodo": 5,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Conceito de Governança Corporativa e de Tecnologia da Informação e Comunicação (TIC). Governança de TIC e objetivos estratégicos. Responsabilidade e estruturas de decisão. Modelos e Normas relativos à Governança de TIC. Solução de TIC Verde. Inovação em Automação e Informatização de Processos. Cultura informacional. Ambientes e fluxos de informação. Mapeamento de necessidades informacionais. Prospecção e monitoramento informacional. Métodos e técnicas de gestão da informação. Métodos e técnicas de gestão do conhecimento. Inteligência competitiva organizacional.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.019)"
  },
  "d-031": {
   "id": "d-031",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.031",
   "rotulo": "Probabilidade e Estatística",
   "natureza": "obrigatoria",
   "periodo": 5,
   "cargaHoraria": 64,
   "eixoPpc": "matematica",
   "ementa": "Introdução a Estatística. Representação tabular e gráfica dos dados. Medidas de posição. Medidas de dispersão. Regressão e correlação linear simples. Introdução à teoria das probabilidades. Variáveis aleatórias. Principais modelos probabilísticos para variáveis aleatórias discretas e contínuas. Testes de Hipóteses.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Estatística II"
    },
    {
     "prefixo": "OBENGM",
     "curso": "Engenharia Metalúrgica",
     "equivalente": "Estatística e Probabilidade"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.031)"
  },
  "d-029": {
   "id": "d-029",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.029",
   "rotulo": "Redes de Computadores I",
   "natureza": "obrigatoria",
   "periodo": 5,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Conceitos básicos e histórico de redes de computadores; Redes de Computadores (WAN, MAN, LAN e PAN); Topologias de redes; Arquitetura de redes; Modelo de referência OSI/ISO. Modelo de referência TCP/IP. Nível Físico: Classificação e características (ruídos, distorções) de meios físicos relevantes. Nível de Enlace: Noções gerais de controle de erros e fluxo; Protocolos de acesso a diferentes meios. Nível de Rede: Endereçamento; Roteamento; Classificação de algoritmos de roteamento; Noções básicas de algoritmos e protocolos de roteamento mais utilizados. Nível de Transporte: tipos de serviços oferecidos, mecanismos básicos, protocolos TCP e UDP. Nível de Aplicação: Protocolos da camada de aplicação. Programação de aplicações utilizando sockets. Tecnologias de redes emergentes.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.029)"
  },
  "d-039": {
   "id": "d-039",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.039",
   "rotulo": "Programação para Dispositivos Móveis",
   "natureza": "obrigatoria",
   "periodo": 6,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Visão geral das tecnologias móveis e sem fio. Introdução ao estudo dos Dispositivos Móveis Portáteis. Utilização de Emuladores e Padrões de programação para smartphones e tablets. Dispositivos móveis e persistência de dados. Interfaces gráficas para dispositivos móveis. Tratamento de eventos. Comunicação com servidores. Desenvolvimento de um sistema para dispositivos móveis.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.039)"
  },
  "d-038": {
   "id": "d-038",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.038",
   "rotulo": "Projeto e Análise de Algoritmos",
   "natureza": "obrigatoria",
   "periodo": 6,
   "cargaHoraria": 64,
   "eixoPpc": "computacional",
   "ementa": "Paradigmas e estratégias de projeto de algoritmos: divisão e conquista, algoritmos gulosos e programação dinâmica. Análise de complexidade de algoritmos. Tópicos em algoritmos em grafos. Problemas do tipo NP-Completo e Algoritmos Aproximados.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.038)"
  },
  "d-036": {
   "id": "d-036",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.036",
   "rotulo": "Sistemas de Apoio à Decisão",
   "natureza": "obrigatoria",
   "periodo": 6,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Introdução à Teoria Geral de Sistemas. Introdução à informação. Papéis estratégicos de sistemas de informação. Sistemas de informação de suporte ao processo operacional, decisório tático e estratégico (SPT, SAD, SIG, EIS). Tecnologias de informação aplicadas aos sistemas de informação de suporte ao processo decisório estratégico e tático. Desenvolvimento de sistemas de informação de suporte ao processo decisório tático e estratégico. Características e funcionalidades de sistemas de informação de nível tático e estratégico nas organizações. Marketing Digital. Sistemas corporativos (ERP). Informação e Vantagem Competitiva. Sistemas colaborativos.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.036)"
  },
  "d-037": {
   "id": "d-037",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.037",
   "rotulo": "Sistemas Distribuídos",
   "natureza": "obrigatoria",
   "periodo": 6,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Aplicação e Conceitos Fundamentais de Sistemas Distribuídos. Arquitetura de Sistemas Distribuídos. Processos. Nomeação. Comunicação. Sincronização. Tolerância a Falhas. Segurança em Sistemas Distribuídos. Aplicações Distribuídas.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.037)"
  },
  "d-040": {
   "id": "d-040",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.040",
   "rotulo": "Gestão de Projetos",
   "natureza": "obrigatoria",
   "periodo": 7,
   "cargaHoraria": 32,
   "eixoPpc": "administrativa",
   "ementa": "Contexto da gerência de projetos nas organizações. Coordenação das atividades do projeto e Gerência do escopo do Projeto. Processos de gestão do tempo no contexto do projeto. Mapeamento dos custos do projeto e Gerência da qualidade do projeto. Dimensionado os Recursos Humanos do projeto. Gerência dos riscos do projeto e Gerência das aquisições do projeto.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Administração de Projetos"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.040)"
  },
  "d-034": {
   "id": "d-034",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.034",
   "rotulo": "Inteligência Artificial",
   "natureza": "obrigatoria",
   "periodo": 7,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Conceitos básicos e paradigmas relacionados com a Inteligência Artificial (IA). Evolução da Inteligência Artificial. Resolução de problemas e busca no espaço de estados. Métodos evolutivos. Representação do conhecimento. Princípios de sistemas especialistas. Aprendizado de Máquina. Redes Neurais Artificiais.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.034)"
  },
  "d-026": {
   "id": "d-026",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.026",
   "rotulo": "Interface Humano Computador",
   "natureza": "obrigatoria",
   "periodo": 7,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Interfaces e Interações. Teorias e conceitos em Interação Humano Computador (IHC). Modelagem, processos e projeto em IHC. Protótipos e Técnicas de Design centrado no Usuário. Técnicas de avaliação de sistemas interativos. Desenho Universal, conforme Decreto n° 5296 de 2 de dezembro de 2004 (BRASIL, 2004a).",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Interface Humano Computador"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.026)"
  },
  "d-091": {
   "id": "d-091",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.091",
   "rotulo": "Trabalho de Conclusão de Curso I",
   "natureza": "obrigatoria",
   "periodo": 7,
   "cargaHoraria": 64,
   "eixoPpc": "profissional-social",
   "ementa": "Desenvolvimento de um trabalho sob orientação de um professor do curso. Elaboração de um artigo científico para congresso ou revista, sendo trabalho completo ou linha de pesquisa, ou uma monografia.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.091)"
  },
  "d-102": {
   "id": "d-102",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.102",
   "rotulo": "Empreendedorismo",
   "natureza": "obrigatoria",
   "periodo": 8,
   "cargaHoraria": 64,
   "eixoPpc": "administrativa",
   "ementa": "Empreendedorismo em diferentes perspectivas: financeira, mercadológica, corporativa e social. Pesquisa, Desenvolvimento e Inovação com atividades empreendedoras. Empreendedorismo e sustentabilidade. Estruturação de planos de negócios.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Empreendedorismo"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.102)"
  },
  "d-103": {
   "id": "d-103",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.103",
   "rotulo": "Qualidade de Software",
   "natureza": "obrigatoria",
   "periodo": 8,
   "cargaHoraria": 64,
   "eixoPpc": "ti",
   "ementa": "Caracterização de defeitos em software; histórico e conceitos de qualidade de software: medida do valor da qualidade; classificação dos sistemas intensivos em software e suas necessidades de qualidade; métricas de análise de qualidade de software; modelos de avaliação e melhoria da qualidade dos produtos e processos de software. Teste de softwares.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.103)"
  },
  "d-092": {
   "id": "d-092",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.092",
   "rotulo": "Trabalho de Conclusão de Curso II",
   "natureza": "obrigatoria",
   "periodo": 8,
   "cargaHoraria": 64,
   "eixoPpc": "profissional-social",
   "ementa": "Desenvolvimento de um trabalho sob orientação de um professor do curso. Elaboração de um artigo científico para congresso ou revista, sendo trabalho completo ou linha de pesquisa, ou uma monografia.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.092)"
  },
  "d-035": {
   "id": "d-035",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.035",
   "rotulo": "Administração Financeira I",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Introdução ao Mercado Financeiro. Funções e estrutura financeira das empresas. Fontes de financiamento das atividades da empresa. Administração de capital de giro: financiamento de curto prazo, conceitos e modelos de gestão de capital de giro. Orçamento de caixa. Teoria do portfólio. Avaliação de títulos de renda fixa. Avaliação de ações.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Administração Financeira I"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.035)"
  },
  "d-057": {
   "id": "d-057",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.057",
   "rotulo": "Avaliação de Empresas",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Fundamentos e metodologias de avaliação de empresas. Análise fundamentalista. Valor Econômico Agregado (EVA/MVA). Geração de Valor. Fluxo de caixa descontado e APV. Fluxo de caixa livre para o acionista e para a empresa. Fluxo de Caixa em perpetuidade. Avaliação relativa. Avaliação através de múltiplos.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Avaliação de Empresas"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.057)"
  },
  "d-033": {
   "id": "d-033",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.033",
   "rotulo": "Banco de Dados II",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": null,
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.033)",
   "ementaNota": "A ementa desta disciplina não está detalhada no projeto pedagógico do curso; só constam os objetivos."
  },
  "d-079": {
   "id": "d-079",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.079",
   "rotulo": "Cálculo Numérico",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Sistemas de Numeração. Estudo sobre erros em aritmética de ponta flutuante, cálculo de raízes de funções algébricas e transcendentes por métodos numéricos, refinamento de soluções de sistemas, aproximação de funções, interpolação polinomial, integração numérica.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.079)"
  },
  "d-025": {
   "id": "d-025",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.025",
   "rotulo": "Comportamento Organizacional",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Introdução ao Comportamento Organizacional; Fundamentos do Comportamento Individual, Valores, atitudes e satisfação com o trabalho; Poder e política; Estudo da Motivação; Grupos nas Organizações; Comunicação interpessoal e organizacional; Liderança e Confiança; Conflito e Negociação; Cultura Organizacional.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Comportamento Organizacional"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.025)"
  },
  "d-070": {
   "id": "d-070",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.070",
   "rotulo": "Computação Gráfica",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Fundamentos de cor; Modelagem Geométrica; Transformações geométricas; Projeção perspectiva; Recorte, rasterização, cálculo das superfícies visíveis; Iluminação; Técnicas de Mapeamento de Texturas; Animação; APIs de desenvolvimento para Computação gráfica; Desenvolvimento de jogos gráficos e sistemas de Computação gráfica.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.070)"
  },
  "d-081": {
   "id": "d-081",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.081",
   "rotulo": "Consultoria Empresarial",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Conceito, evolução e tendências da consultoria. O perfil do consultor. Metodologia da consultoria. O cliente e a identificação de suas necessidades. Transferência de tecnologia e geração de resultados. Diagnósticos empresariais.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Consultoria Empresarial"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.081)"
  },
  "d-049": {
   "id": "d-049",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.049",
   "rotulo": "Gerência de Projetos de Software",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Ciclo de vida de produtos e projetos de software; Métricas de Software; Determinação de prazo; Estimativas. Planejamento; Gerência de riscos. Gerenciamento de Configuração de Software. Gerência em métodos ágeis.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Gerência de Projeto de Software"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.049)"
  },
  "d-055": {
   "id": "d-055",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.055",
   "rotulo": "Gestão Ambiental",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Clima, geologia, mineração, dados ambientais, solos, recursos hídricos, meio físico, recuperação de áreas degradadas; geociências aplicadas aos EIA e RIMA; NBR, e ISO aplicadas ao meio ambiente, Sistema de Gestão Ambiental (SGA); PDCA, Diagrama Causa-Efeito e Plano de Ação aplicado nas empresas.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Gestão Ambiental"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.055)"
  },
  "d-054": {
   "id": "d-054",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.054",
   "rotulo": "Gestão da Inovação",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Conceitos e tipos de inovação. Criatividade. Processo de Gestão da Inovação. A inovação como fator de competitividade. Abordagem Estratégica da Inovação. Avaliando o desempenho da Gestão da Inovação.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.054)"
  },
  "d-094": {
   "id": "d-094",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.094",
   "rotulo": "Gestão de Recursos Humanos",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Evolução histórica da Administração de Recursos Humanos. Planejamento de RH. Recrutamento e Seleção de Pessoal. Treinamento e desenvolvimento. Avaliação de desempenho. Gestão da Remuneração.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.094)"
  },
  "d-060": {
   "id": "d-060",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.060",
   "rotulo": "Gestão de Serviços",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Conceituar serviços; tipos de serviços; importância econômica do setor de serviços; componentes de um serviço; estruturas para serviços. Marketing de serviços. Satisfação do consumidor. Serviço ao cliente.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Gestão de Serviços"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.060)"
  },
  "d-059": {
   "id": "d-059",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.059",
   "rotulo": "Gestão do Conhecimento",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "A Gestão do Conhecimento no contexto de globalização da economia e de competitividade empresarial. Fases da Gestão do Conhecimento. A aprendizagem organizacional como fator de obtenção de vantagens competitivas. A gestão por competências como recurso competitivo e estratégico nas organizações. A espiral de Conhecimento. Modelos de diagnóstico e gestão do conhecimento.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Gestão do Conhecimento"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.059)"
  },
  "d-006": {
   "id": "d-006",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.006",
   "rotulo": "Inglês Instrumental II",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 32,
   "eixoPpc": "complementar",
   "ementa": "Estratégias para produção de textos em língua inglesa. Noções fundamentais da estrutura da língua escrita. Aquisição de vocabulário. Textos científicos.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.006)"
  },
  "d-083": {
   "id": "d-083",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.083",
   "rotulo": "Inglês para Negócios I",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 32,
   "eixoPpc": "complementar",
   "ementa": "Apresentar-se. Descrever seu ambiente de trabalho, sua função. Pedir e dar informações. Falar ao telefone e fazer anotações. Escrever e-mails formais apropriadamente. Discutir tecnologia. Comunicar-se em uma viagem internacional. Comunicar-se em um restaurante. Falar sobre o passado e faça previsões sobre o futuro. Falar sobre consequências e resultados. Fazer comparações.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Inglês para Negócios I"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.083)"
  },
  "d-084": {
   "id": "d-084",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.084",
   "rotulo": "Inglês para Negócios II",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 32,
   "eixoPpc": "complementar",
   "ementa": "Apresentar-se. Descrever seu ambiente de trabalho, sua função. Pedir e dar informações. Falar ao telefone e fazer anotações. Escrever e-mails formais apropriadamente. Discutir tecnologia. Comunicar-se em uma viagem internacional. Comunicar-se em um restaurante. Falar sobre o passado e faça previsões sobre o futuro. Falar sobre consequências e resultados. Fazer comparações.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Inglês para Negócios II"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.084)"
  },
  "d-075": {
   "id": "d-075",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.075",
   "rotulo": "Inteligência Competitiva",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 32,
   "eixoPpc": "complementar",
   "ementa": "O processo de inteligência: funcionamento e benefícios; fatores comportamentais, culturais e estruturais; localização adequada das unidades de inteligência; qualificações e treinamento para a inteligência; principais técnicas e modelos analíticos; recursos de informação para a inteligência; contribuições da gestão do conhecimento para as funções de inteligência; aspectos legais e éticos da geração e disseminação dos produtos de inteligência; contra-inteligência.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Inteligência Competitiva"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.075)"
  },
  "d-104": {
   "id": "d-104",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.104",
   "rotulo": "Libras",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Conceito de Libras, Fundamentos históricos da educação de surdos. Legislação específica. Aspectos Linguísticos da Libras.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Introdução a Libras"
    },
    {
     "prefixo": "OBLPED",
     "curso": "Pedagogia",
     "equivalente": "Libras I"
    },
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Introdução a Libras"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.104)"
  },
  "d-028": {
   "id": "d-028",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.028",
   "rotulo": "Linguagens Formais e Autômatos",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Conceitos básicos de linguagens formais; autômatos finitos e expressões regulares; linguagens regulares; autômatos de pilha; gramáticas livres de contexto; linguagens livres de contexto, sensíveis ao contexto e irrestritas; máquinas de Turing; linguagens recursivamente enumeráveis e recursivas; Tese de Church-Turing; hierarquia das classes de linguagem; computabilidade e decidibilidade; noções de compiladores.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.028)"
  },
  "d-050": {
   "id": "d-050",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.050",
   "rotulo": "Logística Reversa",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 32,
   "eixoPpc": "complementar",
   "ementa": "Conceito, importância, estrutura. Sustentabilidade Ambiental e Logística Reversa. Produção Limpa. Reciclagem e Logística Reversa. Canais de Distribuição Reversos. Logística Reversa e gestão integrada de resíduos. Serviços de Coleta e Transporte de resíduos.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Logística Reversa"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.050)"
  },
  "d-068": {
   "id": "d-068",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.068",
   "rotulo": "Mineração de Dados",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Regras de Associação. Técnicas de Otimização do Método Apriori - Constraint Data Mining. Mineração de Dados Temporais - Regras Temporais Cíclicas. Mineração de Sequências - Algoritmo GSP. Mineração de Sequências - Algoritmo PrefixSpan. Análise de Performance: GSP, PrefixSpan. Aplicações em Web Mining. Generalização da Técnica de Mineração \"Levelwise (Apriori)\"- Mineração de Episódios. Classificação - Tipos de Classificadores (Lazy/Eager) - Critérios de Avaliação - Método da Árvore de Decisão. Método KNN - Técnicas de Amostragem - Curvas ROC. Classificadores: baseado em Redes Neurais - Backpropagation, Bayesiano. Predição - Regressão Linear - Modelos de Preferências - CP-Nets. Fórmulas de Preferências Condicionais. Rankeamento de Objetos - Rankeamento de Labels. Método de Mineração de Preferências a partir de Amostras Superiores e Inferiores. Método de Mineração de Preferências Condicionais - Regras de Preferências Contextuais. Introdução à Agrupamento de Dados (Clusterização) - Métodos de Clusterização por Particionamento (K-Means, PAM, CLARA). Método de Clusterização Hierárquico Algoritmo CURE. Algoritmo de Clusterização baseado em densidade - DBSCAN. Avaliação de Clusters.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.068)"
  },
  "d-008": {
   "id": "d-008",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.008",
   "rotulo": "Português Instrumental II",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 32,
   "eixoPpc": "complementar",
   "ementa": "Tipos e Gêneros Textuais. Leitura e produção de textos técnicos e acadêmico-científicos.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.008)"
  },
  "d-095": {
   "id": "d-095",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.095",
   "rotulo": "Processamento de Imagens",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Fundamentos de cor; Representação de imagens digitais; Transformações geométricas em imagens; Filtragem no domínio espacial; Filtragem no domínio da frequência; Restauração e reconstrução de imagens; Processamento morfológico de imagens; Segmentação de imagens; Compressão de imagens; Softwares/bibliotecas de processamento de imagens; Aplicações de processamento de imagens em sistemas.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.095)"
  },
  "d-073": {
   "id": "d-073",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.073",
   "rotulo": "Qualidade de Vida no Trabalho",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Abordagens da qualidade de vida no trabalho (QVT), Trabalho e Qualidade de Vida; A gestão da qualidade total e os recursos humanos; Valorização da atividade laboral na sociedade; Modelos clássicos de QVT; Programa de QVT e saúde do trabalhador; Ergonomia no trabalho.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Qualidade de Vida no Trabalho"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.073)"
  },
  "d-032": {
   "id": "d-032",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.032",
   "rotulo": "Redes de Computadores II",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Meios de transmissão, transmissão digital, modulação, técnicas de codificação; aplicações multimídia: voz e vídeo, transmissão multimídia na Internet; acesso múltiplo a meios de transmissão: protocolos, redes sem fio, padrões; encaminhamento na Internet: protocolos de roteamento, endereçamento, tradução de endereços, sub-networking, transmissão multicast; nível de enlace: detecção de erros, enquadramento, hubs e pontes; modo de transferência assíncrono assíncrono (ATM): problemas básicos, protocolos e caminhos virtuais.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.032)"
  },
  "d-074": {
   "id": "d-074",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.074",
   "rotulo": "Sistemas de Garantia de Qualidade",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Sensibilização e conceituação da qualidade; planejamento estratégico e a gestão da qualidade; gerenciamento de processos; ferramentas do controle da qualidade, sistemas de garantia da qualidade; fundamentos da estatística; análise do sistema de medição; gráficos de controle de variáveis e de atributos; controle estatístico do processo.",
   "compartilhadaCom": [
    {
     "prefixo": "OBADM",
     "curso": "Administração",
     "equivalente": "Sistemas de Gestão da Qualidade"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.074)"
  },
  "d-027": {
   "id": "d-027",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.027",
   "rotulo": "Teoria dos Grafos",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Conceitos básicos da Teoria de Grafos: grafos e dígrafos; passeios e distâncias; caminhos e ciclos; Modelos de Aplicação. Representação de grafos: grafos isomorfos; subgrafos; representação de grafos por matrizes e listas de adjacência. Árvores: busca em largura e profundidade; árvore geradora; algoritmos de Prim e Kruskal. Caminhos e conectividade: caminho mínimo; algoritmo de Djikstra; conectividade em grafos; grafos bipartidos; grafos Eulerianos e Hamiltonianos. Planaridade em grafos. Coloração de Grafos: conceito e aplicações de coloração de um grafo; número cromático de um grafo; teoremas das quatro cores. Problemas clássicos: Árvores de Steiner; Caixeiro- Viajante.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.027)"
  },
  "d-063": {
   "id": "d-063",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.063",
   "rotulo": "Tópicos Avançados em Banco de Dados",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Conceitos avançados das linguagens de definição e manipulação dos dados; banco de dados orientado a objetos; banco de dados objeto-relacional; bancos de dados distribuídos; bancos de dados cliente/servidor; transações; controle de concorrência; álgebra relacional; otimização de consultas; data warehouse e conceitos avançados de banco de dados.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Tópicos Avançados em Banco de Dados"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.063)"
  },
  "d-078": {
   "id": "d-078",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.078",
   "rotulo": "Tópicos Avançados em Engenharia de Software",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Aspectos econômicos da engenharia de software; caracterização de defeitos em software; medidas em engenharia de software: conceituação, pontos alvos do programa de medição, seleção de medição, medição de software, métricas, técnicas de análise; modelos de medida de software; projeto de desenvolvimento de software: métodos, métricas e técnicas para o planejamento e gerenciamento; histórico e conceitos de qualidade de software: medida do valor da qualidade; norma NBR/ISO -9126; classificação dos sistemas intensivos em software e suas necessidades de qualidade; modelos de melhoria da qualidade dos produtos e processos de software; métricas de análise de qualidade de software. Ênfase em exemplos de softwares educacionais para estudos práticos.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.078)"
  },
  "d-096": {
   "id": "d-096",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.096",
   "rotulo": "Tópicos Avançados em Inteligência Artificial",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Desenvolvimento de um laboratório introdutório sobre o uso de arquiteturas cognitivas aplicadas ao controle de criaturas artificiais. Nesta disciplina será desenvolvido experimentos na linguagem Java, utilizando algumas das mais populares arquiteturas cognitivas, tipo SOAR, Clarion e LIDA. Pequenos experimentos serão desenvolvidos para ilustrar o funcionamento destas arquiteturas para a construção de mentes artificiais para o controle de agentes inteligentes.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.096)"
  },
  "d-067": {
   "id": "d-067",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.067",
   "rotulo": "Tópicos Avançados em Tecnologias de Educação à Distância",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Moodle. Cenário nacional e mundial da educação a distância e e-learning. Plataformas de educação a distância. Fóruns. Hipertexto, hipermídia e multimídia. Formas de ensino, aprendizagem e avaliação na educação a distância. Instalação de infraestrutura para educação a distância.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.067)"
  },
  "d-097": {
   "id": "d-097",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.097",
   "rotulo": "Tópicos em Desenvolvimento de Jogos Digitais",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Fundamentos de desenvolvimento de jogos digitais. Elementos de Jogos Digitais. Motores de Jogos. Game Loop. Programação da animação. Tratamento de colisões. Programação da simulação física. Dinâmica de Jogos. Técnicas de Inteligência Artificial para Jogos. Aplicações de Jogos digitais.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.097)"
  },
  "d-064": {
   "id": "d-064",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.064",
   "rotulo": "Tópicos Especiais em Algoritmos",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Estratégias especiais de projeto de Algoritmo; Conceitos avançados de projeto de algoritmos aplicados em diferentes domínios de problemas.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Tópicos Especiais em Algoritmos"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.064)"
  },
  "d-098": {
   "id": "d-098",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.098",
   "rotulo": "Tópicos Especiais em Automação",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Eletrostática. Eletrodinâmica. Eletromagnetismo. Grandezas Elétricas. Circuitos elétricos em corrente contínua. Circuitos elétricos em corrente alternada. Transformadores. Noções de Comandos Elétricos. Noções de Acionamentos de Cargas Industriais. Introdução aos Controladores Lógicos Programáveis (CLP’s). Noções sobre a Supervisão e Automação de Processos.",
   "compartilhadaCom": [],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.098)"
  },
  "d-065": {
   "id": "d-065",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.065",
   "rotulo": "Tópicos Especiais em Desenvolvimento de Software",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Conceitos avançados, metodologias e técnicas em diferentes temas relacionados ao Desenvolvimento de Software.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Tópicos Especiais em Desenvolvimento de Software"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.065)"
  },
  "d-099": {
   "id": "d-099",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.099",
   "rotulo": "Tópicos Especiais em Robótica",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Definição e aplicações da Robótica. Noções de mecânica, eletricidade e eletrônica relacionadas com a Robótica. Sensores e atuadores para robôs. Criação e desenvolvimento de programas de controle para robôs. Aplicações dos Robôs e da Robótica.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Tópicos Especiais em Automação e Robótica"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.099)"
  },
  "d-066": {
   "id": "d-066",
   "tipo": "disciplina",
   "codigo": "OBBGSIN.066",
   "rotulo": "Tópicos Especiais em Sistemas Computacionais e Redes de Computadores",
   "natureza": "optativa",
   "periodo": null,
   "cargaHoraria": 64,
   "eixoPpc": "complementar",
   "ementa": "Conceitos avançados, metodologias e técnicas em diferentes temas relacionados a Sistemas Operacionais, Arquitetura e Organização de Computadores e Redes de Computadores.",
   "compartilhadaCom": [
    {
     "prefixo": "OBLCOMP",
     "curso": "Licenciatura em Computação",
     "equivalente": "Tópicos Especiais em Sistemas Computacionais e Redes de Computadores"
    }
   ],
   "ppcStatus": "citado",
   "ancora": "PPC, matriz curricular e ementário (OBBGSIN.066)"
  }
 },
 "componentes": {
  "comp-pi": {
   "id": "comp-pi",
   "tipo": "componente",
   "rotulo": "Projeto Integrador",
   "cargaHoraria": 320,
   "eixoPpc": "complementar",
   "descricao": "Projetos de ensino, extensão e/ou pesquisa aplicada com situações reais, do 2º ao 6º período, com no mínimo 64 h por período.",
   "ancora": "PPC §8.1 (organização curricular) e quadro de componentes curriculares",
   "ppcStatus": "citado"
  },
  "comp-ac": {
   "id": "comp-ac",
   "tipo": "componente",
   "rotulo": "Atividades Complementares",
   "cargaHoraria": 220,
   "eixoPpc": "complementar",
   "descricao": "Atividades acadêmico-científico-culturais que o estudante escolhe cumprir ao longo do curso.",
   "ancora": "PPC §8.1.7 e quadro de componentes curriculares",
   "ppcStatus": "citado"
  },
  "comp-opt": {
   "id": "comp-opt",
   "tipo": "componente",
   "rotulo": "Disciplinas optativas (4 × 64 h)",
   "cargaHoraria": 256,
   "eixoPpc": "complementar",
   "descricao": "O estudante cursa quatro optativas, nos períodos 5 a 8, escolhidas entre as disciplinas optativas do curso. Elas são aprofundamentos disponíveis, não oferta garantida em todo semestre.",
   "ancora": "PPC, matriz curricular (Optativa I a IV)",
   "ppcStatus": "citado"
  }
 },
 "carreiras": {
  "c-engenheiro-software": {
   "id": "c-engenheiro-software",
   "tipo": "carreira",
   "rotulo": "Engenheiro de Software",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Projeta, constrói e mantém sistemas de software, cuidando de requisitos, qualidade e processo de desenvolvimento.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-017",
     "trecho": "engenharia de software, análise, projeto e implementação"
    },
    {
     "disciplina": "d-103",
     "trecho": "Teste de softwares"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Projetar soluções de TI, avaliando custos, protótipos e novas tecnologias",
    "Implementar aplicações por meio de codificação e testes",
    "Monitorar ambientes e fazer manutenção preventiva",
    "Produzir documentação técnica, como manuais e relatórios",
    "Dar suporte técnico e treinar usuários"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2122-05 — Engenheiro de aplicativos em computação",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=212205",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-017",
     "forca": "principal",
     "porque": "Apresenta processos, métodos ágeis e a engenharia de requisitos, que são a base do ofício.",
     "trecho": "desenvolvimento ágil de software"
    },
    {
     "disciplina": "d-041",
     "forca": "principal",
     "porque": "Aprofunda processos para sistemas complexos, práticas DevOps e arquiteturas.",
     "trecho": "Estudo e uso de ferramentas para práticas DevOps"
    },
    {
     "disciplina": "d-103",
     "forca": "principal",
     "porque": "Trata de qualidade, métricas e testes do software produzido.",
     "trecho": "Teste de softwares"
    },
    {
     "disciplina": "d-010",
     "forca": "apoio",
     "porque": "A orientação a objetos é o paradigma com que se modelam sistemas.",
     "trecho": "O Modelo de Objetos e seus pilares"
    },
    {
     "disciplina": "d-016",
     "forca": "apoio",
     "porque": "Todo sistema precisa guardar dados; aqui se aprende a modelá-los.",
     "trecho": "Modelagem de bancos de dados relacionais: conceitual e lógica"
    },
    {
     "disciplina": "d-049",
     "forca": "apoio",
     "porque": "Optativa que trata de estimativas, prazos e riscos de projetos de software.",
     "trecho": "Gerência de riscos"
    }
   ]
  },
  "c-programador": {
   "id": "c-programador",
   "tipo": "carreira",
   "rotulo": "Programador",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Escreve e testa o código dos programas a partir de especificações.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-085",
     "trecho": "Desenvolvimento de programas em uma linguagem de alto nível"
    },
    {
     "disciplina": "d-010",
     "trecho": "O Modelo de Objetos e seus pilares"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Codificar programas a partir de especificações",
    "Testar e corrigir falhas nos sistemas",
    "Documentar o que foi desenvolvido"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2124-05 — Analista de desenvolvimento de sistemas",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=212405",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-085",
     "forca": "principal",
     "porque": "É onde se aprende a escrever os primeiros programas.",
     "trecho": "Desenvolvimento de programas em uma linguagem de alto nível"
    },
    {
     "disciplina": "d-009",
     "forca": "principal",
     "porque": "Estruturas de dados e algoritmos de busca e ordenação são o dia a dia de quem programa.",
     "trecho": "Algoritmos de busca e ordenação"
    },
    {
     "disciplina": "d-010",
     "forca": "principal",
     "porque": "Ensina a organizar programas em classes e objetos.",
     "trecho": "O Modelo de Objetos e seus pilares"
    },
    {
     "disciplina": "d-022",
     "forca": "apoio",
     "porque": "Avança em threads, persistência de dados e padrões de projeto.",
     "trecho": "Programação com múltiplas threads"
    },
    {
     "disciplina": "d-038",
     "forca": "apoio",
     "porque": "Ajuda a escolher soluções eficientes ao analisar a complexidade dos algoritmos.",
     "trecho": "Análise de complexidade de algoritmos"
    }
   ]
  },
  "c-web-designer": {
   "id": "c-web-designer",
   "tipo": "carreira",
   "rotulo": "Web Designer",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Cria a aparência e a estrutura de páginas e sistemas para a web.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-023",
     "trecho": "Linguagens de marcação (HMTL e CSS)"
    },
    {
     "disciplina": "d-026",
     "trecho": "Protótipos e Técnicas de Design centrado no Usuário"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Criar a interface visual de sites com foco em usabilidade",
    "Escrever e testar o layout, a navegação e as funções das páginas",
    "Implementar interfaces responsivas e acessíveis com HTML, CSS e JavaScript",
    "Alinhar o conteúdo e o visual com designers e equipes de desenvolvimento"
   ],
   "habilidades": [
    "HTML",
    "CSS",
    "JavaScript",
    "Design responsivo",
    "Acessibilidade"
   ],
   "fontesInfo": [
    {
     "rotulo": "Frontend Developer Roadmap — roadmap.sh",
     "url": "https://roadmap.sh/frontend",
     "tipo": "Guia de carreira"
    },
    {
     "rotulo": "Web Developers and Digital Designers — U.S. Bureau of Labor Statistics",
     "url": "https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm",
     "tipo": "Órgão público"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-023",
     "forca": "principal",
     "porque": "Ensina as linguagens com que se constrói a página: marcação e estilo.",
     "trecho": "Linguagens de marcação (HMTL e CSS)"
    },
    {
     "disciplina": "d-026",
     "forca": "principal",
     "porque": "Trata de design centrado no usuário e de protótipos de interface.",
     "trecho": "Protótipos e Técnicas de Design centrado no Usuário"
    },
    {
     "disciplina": "d-070",
     "forca": "apoio",
     "porque": "Optativa com cor, iluminação e animação.",
     "trecho": "Fundamentos de cor"
    },
    {
     "disciplina": "d-095",
     "forca": "apoio",
     "porque": "Optativa que também parte dos fundamentos de cor e de imagens digitais.",
     "trecho": "Representação de imagens digitais"
    }
   ]
  },
  "c-analista-teste": {
   "id": "c-analista-teste",
   "tipo": "carreira",
   "rotulo": "Analista de teste",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Planeja e executa testes para encontrar defeitos e garantir a qualidade do software.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-103",
     "trecho": "Teste de softwares"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Elaborar planos de teste a partir dos requisitos do software",
    "Executar testes para verificar a qualidade do sistema",
    "Identificar e registrar defeitos encontrados",
    "Comunicar problemas às equipes de desenvolvimento"
   ],
   "habilidades": [
    "Atenção a detalhes",
    "Análise",
    "Comunicação",
    "Resolução de problemas"
   ],
   "fontesInfo": [
    {
     "rotulo": "Software Developers — Occupational Outlook Handbook, U.S. Bureau of Labor Statistics",
     "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
     "tipo": "Órgão público"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-103",
     "forca": "principal",
     "porque": "Qualidade e testes de software são o centro da função.",
     "trecho": "Teste de softwares"
    },
    {
     "disciplina": "d-017",
     "forca": "principal",
     "porque": "Os requisitos são a referência contra a qual se testa.",
     "trecho": "engenharia de requisitos"
    },
    {
     "disciplina": "d-078",
     "forca": "apoio",
     "porque": "Optativa que trata de defeitos e de medição em engenharia de software.",
     "trecho": "caracterização de defeitos em software"
    }
   ]
  },
  "c-analista-sistemas": {
   "id": "c-analista-sistemas",
   "tipo": "carreira",
   "rotulo": "Analista de sistemas",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Levanta as necessidades de uma organização e as transforma em sistemas de informação.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-017",
     "trecho": "análise, projeto e implementação"
    },
    {
     "disciplina": "d-036",
     "trecho": "Papéis estratégicos de sistemas de informação"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Desenvolver sistemas: codificar, especificar a arquitetura e modelar dados",
    "Projetar soluções de TI identificando as necessidades do cliente",
    "Administrar o ambiente de TI e dar suporte técnico",
    "Elaborar documentação, como diagramas e especificações"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2124-05 — Analista de desenvolvimento de sistemas",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=212405",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-017",
     "forca": "principal",
     "porque": "Reúne análise, projeto e implementação de sistemas.",
     "trecho": "análise, projeto e implementação"
    },
    {
     "disciplina": "d-036",
     "forca": "principal",
     "porque": "Mostra o papel dos sistemas de informação na operação e na decisão da organização.",
     "trecho": "Papéis estratégicos de sistemas de informação"
    },
    {
     "disciplina": "d-016",
     "forca": "principal",
     "porque": "Dados são parte central de qualquer sistema de informação.",
     "trecho": "Normalização"
    },
    {
     "disciplina": "d-001",
     "forca": "apoio",
     "porque": "Dá a visão geral da área, de algoritmos a engenharia de software.",
     "trecho": "Introdução a Engenharia de Software"
    }
   ]
  },
  "c-analista-requisitos": {
   "id": "c-analista-requisitos",
   "tipo": "carreira",
   "rotulo": "Analista de requisitos",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Entende o que os usuários precisam e registra isso como requisitos claros do sistema.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-017",
     "trecho": "engenharia de requisitos: tipos de requisitos, métodos e técnicas para elicitação de requisitos de software"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Dimensionar requisitos e funcionalidades dos sistemas",
    "Identificar necessidades e propor alternativas de solução",
    "Documentar especificações"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2124-05 — Analista de desenvolvimento de sistemas",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=212405",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-017",
     "forca": "principal",
     "porque": "Tem tópico específico sobre tipos de requisitos e técnicas para levantá-los.",
     "trecho": "engenharia de requisitos: tipos de requisitos, métodos e técnicas para elicitação de requisitos de software"
    },
    {
     "disciplina": "d-026",
     "forca": "apoio",
     "porque": "Ajuda a entender como as pessoas usam os sistemas.",
     "trecho": "Técnicas de avaliação de sistemas interativos"
    },
    {
     "disciplina": "d-036",
     "forca": "apoio",
     "porque": "Mostra que informações cada nível da organização precisa.",
     "trecho": "Sistemas de informação de suporte ao processo operacional"
    }
   ]
  },
  "c-analista-negocios": {
   "id": "c-analista-negocios",
   "tipo": "carreira",
   "rotulo": "Analista de negócios",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Liga as necessidades do negócio às soluções de tecnologia.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-036",
     "trecho": "Papéis estratégicos de sistemas de informação"
    },
    {
     "disciplina": "d-019",
     "trecho": "Responsabilidade e estruturas de decisão"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Levantar com a gestão como a tecnologia atende aos objetivos do negócio",
    "Analisar custos e benefícios de mudanças em sistemas",
    "Propor melhorias e novas funcionalidades para sistemas existentes",
    "Testar sistemas e preparar manuais e treinamentos para usuários"
   ],
   "habilidades": [
    "Análise",
    "Visão de negócio",
    "Comunicação",
    "Organização"
   ],
   "fontesInfo": [
    {
     "rotulo": "Computer Systems Analysts — U.S. Bureau of Labor Statistics (ocupação equivalente)",
     "url": "https://www.bls.gov/ooh/computer-and-information-technology/computer-systems-analysts.htm",
     "tipo": "Órgão público"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-036",
     "forca": "principal",
     "porque": "Liga sistemas de informação às decisões do negócio.",
     "trecho": "Papéis estratégicos de sistemas de informação"
    },
    {
     "disciplina": "d-019",
     "forca": "principal",
     "porque": "Trata do mapeamento das necessidades de informação da organização.",
     "trecho": "Mapeamento de necessidades informacionais"
    },
    {
     "disciplina": "d-011",
     "forca": "apoio",
     "porque": "Apresenta as teorias de administração e os negócios de tecnologia.",
     "trecho": "Negócios de Tecnologia"
    },
    {
     "disciplina": "d-018",
     "forca": "apoio",
     "porque": "A contabilidade é vista como um sistema de informação.",
     "trecho": "A contabilidade como um Sistema de Informação"
    }
   ]
  },
  "c-dba": {
   "id": "c-dba",
   "tipo": "carreira",
   "rotulo": "Administrador de bancos de dados",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Cuida da instalação, do desempenho, da segurança e da organização dos bancos de dados.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-016",
     "trecho": "Arquitetura de um Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR)"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Instalar e configurar sistemas gerenciadores de bancos de dados",
    "Executar rotinas de backup e recuperação",
    "Monitorar desempenho e segurança e controlar o acesso",
    "Dar suporte e treinamento aos usuários",
    "Documentar o ambiente"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2123-05 — Administrador de banco de dados",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=212305",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-016",
     "forca": "principal",
     "porque": "Apresenta a arquitetura de um SGBD relacional, transações e normalização.",
     "trecho": "Arquitetura de um Sistema de Gerenciamento de Banco de Dados Relacional (SGBDR)"
    },
    {
     "disciplina": "d-063",
     "forca": "principal",
     "porque": "Optativa com otimização de consultas, controle de concorrência e bancos distribuídos.",
     "trecho": "otimização de consultas"
    },
    {
     "disciplina": "d-030",
     "forca": "apoio",
     "porque": "O SGBD roda sobre o sistema operacional; memória e arquivos importam.",
     "trecho": "Gerenciamento de arquivos"
    },
    {
     "disciplina": "d-029",
     "forca": "apoio",
     "porque": "Bancos de dados são acessados por rede.",
     "trecho": "Modelo de referência TCP/IP"
    }
   ]
  },
  "c-admin-redes": {
   "id": "c-admin-redes",
   "tipo": "carreira",
   "rotulo": "Administrador e gerente de redes de computadores",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Planeja, opera e gerencia as redes de computadores de uma organização.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-029",
     "trecho": "Modelo de referência TCP/IP"
    },
    {
     "disciplina": "d-032",
     "trecho": "encaminhamento na Internet: protocolos de roteamento"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Instalar e configurar sistemas operacionais, equipamentos e aplicativos",
    "Configurar mecanismos de segurança e perfis de usuários",
    "Dar suporte técnico e diagnosticar problemas",
    "Executar backup, monitorar métricas e auditar o uso de recursos"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2123-10 — Administrador de redes",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=212310",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-029",
     "forca": "principal",
     "porque": "Cobre redes LAN, WAN, topologias e os modelos OSI e TCP/IP.",
     "trecho": "Modelo de referência TCP/IP"
    },
    {
     "disciplina": "d-032",
     "forca": "principal",
     "porque": "Optativa com roteamento, endereçamento e redes sem fio.",
     "trecho": "protocolos de roteamento"
    },
    {
     "disciplina": "d-030",
     "forca": "apoio",
     "porque": "Os servidores da rede dependem de sistemas operacionais.",
     "trecho": "Gerenciamento de memória"
    },
    {
     "disciplina": "d-037",
     "forca": "apoio",
     "porque": "Trata de comunicação, sincronização e segurança em sistemas distribuídos.",
     "trecho": "Segurança em Sistemas Distribuídos"
    }
   ]
  },
  "c-gerente-area-si": {
   "id": "c-gerente-area-si",
   "tipo": "carreira",
   "rotulo": "Gerente de área de sistemas de informação",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Coordena a área de sistemas de informação de uma organização: equipes, recursos e prioridades.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-019",
     "trecho": "Responsabilidade e estruturas de decisão"
    },
    {
     "disciplina": "d-040",
     "trecho": "Contexto da gerência de projetos nas organizações"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Gerenciar operações e serviços de TI",
    "Gerir projetos, recursos, custos e prazos",
    "Planejar atividades e acordos de nível de serviço",
    "Administrar equipes e promover capacitação",
    "Cuidar da disponibilidade da infraestrutura e da segurança da informação"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 1425-15 — Gerente de operação de tecnologia da informação",
     "url": "https://buscadorncm.com.br/cbo/142515",
     "tipo": "CBO"
    },
    {
     "rotulo": "CBO 1425-05 — Gerente de infraestrutura de tecnologia da informação",
     "url": "https://buscadorncm.com.br/cbo/142505",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-019",
     "forca": "principal",
     "porque": "Trata de governança de TIC, responsabilidades e estruturas de decisão.",
     "trecho": "Responsabilidade e estruturas de decisão"
    },
    {
     "disciplina": "d-040",
     "forca": "principal",
     "porque": "Dá as ferramentas de gestão de escopo, tempo, custos e riscos.",
     "trecho": "Contexto da gerência de projetos nas organizações"
    },
    {
     "disciplina": "d-025",
     "forca": "apoio",
     "porque": "Optativa sobre liderança, motivação e conflitos em equipes.",
     "trecho": "Liderança e Confiança"
    },
    {
     "disciplina": "d-094",
     "forca": "apoio",
     "porque": "Optativa sobre recrutamento, treinamento e avaliação de desempenho.",
     "trecho": "Recrutamento e Seleção de Pessoal"
    }
   ]
  },
  "c-empresario-si": {
   "id": "c-empresario-si",
   "tipo": "carreira",
   "rotulo": "Empresário na área de sistemas de informação",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Cria e dirige a própria empresa de produtos ou serviços de tecnologia da informação.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-102",
     "trecho": "Estruturação de planos de negócios"
    }
   ],
   "baseInformacao": "ppc",
   "atividades": [],
   "habilidades": [],
   "fontesInfo": [],
   "relacaoCurso": [
    {
     "disciplina": "d-102",
     "forca": "principal",
     "porque": "Trata de plano de negócios e empreendedorismo financeiro, mercadológico e social.",
     "trecho": "Estruturação de planos de negócios"
    },
    {
     "disciplina": "d-035",
     "forca": "apoio",
     "porque": "Optativa sobre estrutura financeira e fontes de financiamento das empresas.",
     "trecho": "Funções e estrutura financeira das empresas"
    },
    {
     "disciplina": "d-018",
     "forca": "apoio",
     "porque": "Ensina a ler o balanço e as demonstrações de resultado.",
     "trecho": "Estrutura das demonstrações financeiras"
    },
    {
     "disciplina": "d-057",
     "forca": "apoio",
     "porque": "Optativa sobre quanto vale uma empresa.",
     "trecho": "Fundamentos e metodologias de avaliação de empresas"
    }
   ]
  },
  "c-consultor-si": {
   "id": "c-consultor-si",
   "tipo": "carreira",
   "rotulo": "Consultor na área de sistemas de informação",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Orienta organizações no uso de sistemas e tecnologia, como prestador de serviço ou assessor.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-081",
     "trecho": "Metodologia da consultoria"
    }
   ],
   "baseInformacao": "ppc",
   "atividades": [],
   "habilidades": [],
   "fontesInfo": [],
   "relacaoCurso": [
    {
     "disciplina": "d-081",
     "forca": "principal",
     "porque": "Optativa sobre metodologia de consultoria e identificação das necessidades do cliente.",
     "trecho": "Metodologia da consultoria"
    },
    {
     "disciplina": "d-019",
     "forca": "principal",
     "porque": "Governança de TIC é tema recorrente em consultoria de TI.",
     "trecho": "Governança de TIC e objetivos estratégicos"
    },
    {
     "disciplina": "d-036",
     "forca": "apoio",
     "porque": "Mostra como a informação apoia a decisão nos níveis tático e estratégico.",
     "trecho": "Papéis estratégicos de sistemas de informação"
    }
   ]
  },
  "c-pesquisador": {
   "id": "c-pesquisador",
   "tipo": "carreira",
   "rotulo": "Pesquisador",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Investiga problemas de computação e informação e produz conhecimento novo, em universidades e laboratórios.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-002",
     "trecho": "Elaboração de projeto de pesquisa, artigo científico e relatório de pesquisa"
    },
    {
     "disciplina": "d-091",
     "trecho": "Elaboração de um artigo científico para congresso ou revista"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Conduzir pesquisa científica em computação e informática",
    "Divulgar resultados em publicações e eventos",
    "Fornecer subsídios científicos a políticas públicas"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2031-05 — Pesquisador em ciências da computação e informática",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=203105",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-002",
     "forca": "principal",
     "porque": "Ensina a montar projeto de pesquisa, artigo científico e relatório.",
     "trecho": "Elaboração de projeto de pesquisa, artigo científico e relatório de pesquisa"
    },
    {
     "disciplina": "d-091",
     "forca": "principal",
     "porque": "O TCC é um trabalho científico orientado.",
     "trecho": "Elaboração de um artigo científico para congresso ou revista"
    },
    {
     "disciplina": "d-031",
     "forca": "apoio",
     "porque": "A estatística dá base para testar hipóteses.",
     "trecho": "Testes de Hipóteses"
    }
   ]
  },
  "c-gerente-projetos": {
   "id": "c-gerente-projetos",
   "tipo": "carreira",
   "rotulo": "Gerente de projetos",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Planeja e acompanha projetos: escopo, prazos, custos, riscos e equipe.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-040",
     "trecho": "Contexto da gerência de projetos nas organizações"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Gerir projetos de TI: recursos, escopo, custos e prazos",
    "Planejar atividades e acordos de nível de serviço",
    "Administrar equipes"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 1425-15 — Gerente de operação de tecnologia da informação",
     "url": "https://buscadorncm.com.br/cbo/142515",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-040",
     "forca": "principal",
     "porque": "Cobre escopo, tempo, custo, qualidade, recursos humanos, riscos e aquisições.",
     "trecho": "Gerência dos riscos do projeto"
    },
    {
     "disciplina": "d-049",
     "forca": "principal",
     "porque": "Optativa sobre ciclo de vida, estimativas, riscos e métodos ágeis em projetos de software.",
     "trecho": "Gerência em métodos ágeis"
    },
    {
     "disciplina": "d-017",
     "forca": "apoio",
     "porque": "Mostra os processos de software que o gerente coordena.",
     "trecho": "processos de software"
    },
    {
     "disciplina": "d-102",
     "forca": "apoio",
     "porque": "Ajuda a pensar o projeto como negócio.",
     "trecho": "Estruturação de planos de negócios"
    }
   ]
  },
  "c-docencia": {
   "id": "c-docencia",
   "tipo": "carreira",
   "rotulo": "Docência e pós-graduação",
   "ppcStatus": "citado",
   "cobertura": null,
   "descricao": "Segue em especialização, mestrado e doutorado e pode atuar como professor e pesquisador.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (texto: 'ingressar na carreira docente e/ou de pesquisa')",
   "evidencia": [],
   "baseInformacao": "ppc",
   "atividades": [],
   "habilidades": [],
   "fontesInfo": [],
   "relacaoCurso": [
    {
     "disciplina": "d-002",
     "forca": "principal",
     "porque": "Dá a base da metodologia científica, necessária à pós-graduação.",
     "trecho": "Normalização do trabalho científico (ABNT)"
    },
    {
     "disciplina": "d-091",
     "forca": "principal",
     "porque": "O TCC é a primeira experiência de pesquisa orientada.",
     "trecho": "Elaboração de um artigo científico para congresso ou revista"
    }
   ]
  },
  "c-pesquisador-ia": {
   "id": "c-pesquisador-ia",
   "tipo": "carreira",
   "rotulo": "Pesquisador em inteligência artificial",
   "ppcStatus": "variante",
   "cobertura": null,
   "descricao": "Pesquisa novos métodos e aplicações de inteligência artificial.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-096",
     "trecho": "arquiteturas cognitivas"
    }
   ],
   "varianteDe": "c-pesquisador",
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Conduzir pesquisa científica em computação",
    "Divulgar resultados em publicações e eventos"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2031-05 — Pesquisador em ciências da computação e informática",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=203105",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-034",
     "forca": "principal",
     "porque": "Apresenta aprendizado de máquina, redes neurais e representação do conhecimento.",
     "trecho": "Aprendizado de Máquina"
    },
    {
     "disciplina": "d-096",
     "forca": "principal",
     "porque": "Optativa de laboratório com arquiteturas cognitivas.",
     "trecho": "arquiteturas cognitivas"
    },
    {
     "disciplina": "d-031",
     "forca": "apoio",
     "porque": "Estatística é a linguagem para avaliar resultados.",
     "trecho": "Testes de Hipóteses"
    }
   ]
  },
  "c-pesquisador-computacao": {
   "id": "c-pesquisador-computacao",
   "tipo": "carreira",
   "rotulo": "Pesquisador em computação",
   "ppcStatus": "variante",
   "cobertura": null,
   "descricao": "Pesquisa teoria e algoritmos de computação, em geral em pós-graduação.",
   "descricaoFonte": "editorial",
   "ancora": "PPC §6.1 (funções do egresso)",
   "evidencia": [
    {
     "disciplina": "d-028",
     "trecho": "computabilidade e decidibilidade"
    },
    {
     "disciplina": "d-064",
     "trecho": "Conceitos avançados de projeto de algoritmos aplicados em diferentes domínios de problemas"
    }
   ],
   "varianteDe": "c-pesquisador",
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Conduzir pesquisa científica em computação",
    "Divulgar resultados em publicações e eventos"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2031-05 — Pesquisador em ciências da computação e informática",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=203105",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-028",
     "forca": "principal",
     "porque": "Optativa sobre computabilidade e os limites do que se pode calcular.",
     "trecho": "computabilidade e decidibilidade"
    },
    {
     "disciplina": "d-038",
     "forca": "principal",
     "porque": "Trata de complexidade e de problemas NP-completos.",
     "trecho": "Problemas do tipo NP-Completo e Algoritmos Aproximados"
    },
    {
     "disciplina": "d-027",
     "forca": "apoio",
     "porque": "Optativa de grafos e algoritmos clássicos.",
     "trecho": "algoritmo de Djikstra"
    },
    {
     "disciplina": "d-064",
     "forca": "apoio",
     "porque": "Optativa de projeto avançado de algoritmos.",
     "trecho": "Conceitos avançados de projeto de algoritmos aplicados em diferentes domínios de problemas"
    }
   ]
  },
  "c-dev-backend": {
   "id": "c-dev-backend",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor back-end",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Constrói a parte do sistema que roda no servidor: regras de negócio, dados e integrações.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-023",
     "trecho": "Desenvolvimento lado-servidor"
    },
    {
     "disciplina": "d-041",
     "trecho": "arquiteturas complexas (com uso de REST API e GraphQL)"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Desenvolver APIs do lado do servidor",
    "Lidar com operações de banco de dados",
    "Garantir que o sistema suporte alto volume de acessos"
   ],
   "habilidades": [
    "Linguagens de programação de servidor",
    "Bancos de dados relacionais",
    "APIs REST",
    "Autenticação e autorização",
    "Controle de versão (Git)"
   ],
   "fontesInfo": [
    {
     "rotulo": "roadmap.sh — Backend Developer",
     "url": "https://roadmap.sh/backend",
     "tipo": "roadmap.sh"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-023",
     "forca": "principal",
     "porque": "Trata do desenvolvimento do lado servidor e da arquitetura de aplicações web.",
     "trecho": "Desenvolvimento lado-servidor"
    },
    {
     "disciplina": "d-016",
     "forca": "principal",
     "porque": "Implementação de aplicações com SQL e SGBD.",
     "trecho": "Implementação de aplicações usando um SGBDR"
    },
    {
     "disciplina": "d-041",
     "forca": "principal",
     "porque": "Cita arquiteturas complexas com REST API e GraphQL.",
     "trecho": "REST API e GraphQL"
    },
    {
     "disciplina": "d-022",
     "forca": "apoio",
     "porque": "Persistência de dados e padrões de projeto.",
     "trecho": "Persistência de dados"
    },
    {
     "disciplina": "d-010",
     "forca": "apoio",
     "porque": "Base de orientação a objetos.",
     "trecho": "O Modelo de Objetos e seus pilares"
    }
   ]
  },
  "c-dev-frontend": {
   "id": "c-dev-frontend",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor front-end",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Constrói a parte do sistema que o usuário vê e usa no navegador.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-023",
     "trecho": "Desenvolvimento de lado-cliente. Linguagens de marcação (HMTL e CSS). Linguagens de Script (Javascript)"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Construir os elementos visuais e interativos que o usuário vê e usa",
    "Criar interfaces responsivas e acessíveis",
    "Trabalhar com designers e outros desenvolvedores"
   ],
   "habilidades": [
    "HTML, CSS e JavaScript",
    "Design responsivo e acessibilidade",
    "Consumo de APIs REST",
    "Testes e desempenho web",
    "Controle de versão (Git)"
   ],
   "fontesInfo": [
    {
     "rotulo": "roadmap.sh — Frontend Developer",
     "url": "https://roadmap.sh/frontend",
     "tipo": "roadmap.sh"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-023",
     "forca": "principal",
     "porque": "Ensina o desenvolvimento do lado cliente: marcação, estilo e scripts.",
     "trecho": "Linguagens de Script (Javascript)"
    },
    {
     "disciplina": "d-026",
     "forca": "principal",
     "porque": "Trata de interfaces, protótipos e avaliação com usuários.",
     "trecho": "Protótipos e Técnicas de Design centrado no Usuário"
    },
    {
     "disciplina": "d-022",
     "forca": "apoio",
     "porque": "Aborda o tratamento de eventos de interface.",
     "trecho": "Tratamento de eventos de interface"
    },
    {
     "disciplina": "d-010",
     "forca": "apoio",
     "porque": "Base de orientação a objetos.",
     "trecho": "O Modelo de Objetos e seus pilares"
    }
   ]
  },
  "c-dev-fullstack": {
   "id": "c-dev-fullstack",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor full-stack",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Atua nas duas pontas do sistema: interface e servidor.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-023",
     "trecho": "Desenvolvimento de lado-cliente"
    },
    {
     "disciplina": "d-023",
     "trecho": "Desenvolvimento lado-servidor"
    },
    {
     "disciplina": "d-016",
     "trecho": "Modelo relacional"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Trabalhar no front-end e no back-end de uma aplicação",
    "Gerenciar bancos de dados (SQL e NoSQL)",
    "Projetar APIs e usar controle de versão"
   ],
   "habilidades": [
    "HTML, CSS e JavaScript",
    "Programação de servidor",
    "Bancos de dados",
    "Design de APIs",
    "Git"
   ],
   "fontesInfo": [
    {
     "rotulo": "roadmap.sh — Full Stack Developer",
     "url": "https://roadmap.sh/full-stack",
     "tipo": "roadmap.sh"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-010",
     "forca": "principal",
     "porque": "Programação orientada a objetos é a base do código dos dois lados.",
     "trecho": "O Modelo de Objetos e seus pilares"
    },
    {
     "disciplina": "d-009",
     "forca": "principal",
     "porque": "Estruturas de dados e algoritmos de busca e ordenação.",
     "trecho": "Algoritmos de busca e ordenação"
    },
    {
     "disciplina": "d-017",
     "forca": "principal",
     "porque": "Processo de desenvolvimento, requisitos e métodos ágeis.",
     "trecho": "desenvolvimento ágil de software"
    },
    {
     "disciplina": "d-016",
     "forca": "principal",
     "porque": "Modelagem e uso de bancos de dados.",
     "trecho": "Normalização"
    },
    {
     "disciplina": "d-023",
     "forca": "principal",
     "porque": "Cliente e servidor na mesma ementa.",
     "trecho": "Desenvolvimento de lado-cliente"
    },
    {
     "disciplina": "d-026",
     "forca": "principal",
     "porque": "Projeto de interfaces centradas no usuário.",
     "trecho": "Interfaces e Interações"
    },
    {
     "disciplina": "d-022",
     "forca": "apoio",
     "porque": "Persistência de dados e padrões de projeto.",
     "trecho": "Padrões de Projeto de Software"
    }
   ]
  },
  "c-dev-web": {
   "id": "c-dev-web",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor web",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Desenvolve sites e aplicações para a web.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-023",
     "trecho": "Arquitetura de aplicações WEB"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Desenvolver a interface gráfica e a navegação de sistemas web",
    "Montar a estrutura do banco de dados e codificar",
    "Testar, instalar e documentar sistemas",
    "Escolher linguagens e ferramentas de desenvolvimento"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 3171-05 — Desenvolvedor web (técnico)",
     "url": "https://buscadorncm.com.br/cbo/317105",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-023",
     "forca": "principal",
     "porque": "Cobre arquitetura de aplicações web, cliente e servidor.",
     "trecho": "Arquitetura de aplicações WEB"
    },
    {
     "disciplina": "d-016",
     "forca": "principal",
     "porque": "O banco de dados é parte do sistema web.",
     "trecho": "Implementação de aplicações usando um SGBDR"
    },
    {
     "disciplina": "d-026",
     "forca": "apoio",
     "porque": "Interface e usabilidade.",
     "trecho": "Interfaces e Interações"
    },
    {
     "disciplina": "d-041",
     "forca": "apoio",
     "porque": "Arquiteturas com REST API.",
     "trecho": "REST API e GraphQL"
    }
   ]
  },
  "c-dev-mobile": {
   "id": "c-dev-mobile",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor mobile",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Desenvolve aplicativos para celulares e tablets.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-039",
     "trecho": "Desenvolvimento de um sistema para dispositivos móveis"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Desenvolver aplicativos para celulares, tablets e outros dispositivos",
    "Construir interfaces adaptáveis a diferentes tamanhos de tela",
    "Estruturar apps de forma modular, escalável e testável",
    "Garantir desempenho, acessibilidade, segurança e privacidade do app"
   ],
   "habilidades": [
    "Kotlin",
    "Jetpack Compose",
    "Arquitetura de apps",
    "Testes"
   ],
   "fontesInfo": [
    {
     "rotulo": "Get started with Android development — Android Developers (Google) (cobre apenas Android)",
     "url": "https://developer.android.com/get-started/overview",
     "tipo": "Documentação oficial"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-039",
     "forca": "principal",
     "porque": "Dedicada ao desenvolvimento para smartphones e tablets, com emuladores e persistência.",
     "trecho": "Utilização de Emuladores e Padrões de programação para smartphones e tablets"
    },
    {
     "disciplina": "d-010",
     "forca": "principal",
     "porque": "Base de orientação a objetos.",
     "trecho": "O Modelo de Objetos e seus pilares"
    },
    {
     "disciplina": "d-022",
     "forca": "apoio",
     "porque": "Eventos de interface e persistência de dados.",
     "trecho": "Tratamento de eventos de interface"
    },
    {
     "disciplina": "d-026",
     "forca": "apoio",
     "porque": "Projeto de interfaces para o usuário.",
     "trecho": "Interfaces e Interações"
    }
   ]
  },
  "c-arquiteto-software": {
   "id": "c-arquiteto-software",
   "tipo": "carreira",
   "rotulo": "Arquiteto de software",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Define a estrutura geral de sistemas complexos e as decisões técnicas que a sustentam.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-041",
     "trecho": "Desenvolvimento de software com arquiteturas complexas (com uso de REST API e GraphQL)"
    }
   ],
   "baseInformacao": "ppc",
   "atividades": [],
   "habilidades": [],
   "fontesInfo": [],
   "relacaoCurso": [
    {
     "disciplina": "d-041",
     "forca": "principal",
     "porque": "Cita desenvolvimento com arquiteturas complexas (REST API e GraphQL).",
     "trecho": "arquiteturas complexas"
    },
    {
     "disciplina": "d-022",
     "forca": "principal",
     "porque": "Aborda padrões de projeto de software.",
     "trecho": "Padrões de Projeto de Software"
    },
    {
     "disciplina": "d-037",
     "forca": "apoio",
     "porque": "Arquitetura de sistemas distribuídos.",
     "trecho": "Arquitetura de Sistemas Distribuídos"
    },
    {
     "disciplina": "d-017",
     "forca": "apoio",
     "porque": "Processos e metodologias que moldam o projeto.",
     "trecho": "processos de software"
    }
   ]
  },
  "c-devops": {
   "id": "c-devops",
   "tipo": "carreira",
   "rotulo": "DevOps",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Une desenvolvimento e operação, automatizando a entrega e o funcionamento dos sistemas.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-041",
     "trecho": "Estudo e uso de ferramentas para práticas DevOps"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Simplificar o ciclo de vida do software unindo desenvolvimento e operações",
    "Automatizar entrega e infraestrutura (CI/CD)",
    "Monitorar e gerenciar configuração"
   ],
   "habilidades": [
    "Automação",
    "Contêineres",
    "Plataformas de nuvem",
    "Pipelines de CI/CD",
    "Monitoramento"
   ],
   "fontesInfo": [
    {
     "rotulo": "roadmap.sh — DevOps Engineer",
     "url": "https://roadmap.sh/devops",
     "tipo": "roadmap.sh"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-041",
     "forca": "principal",
     "porque": "Cita o estudo e uso de ferramentas para práticas DevOps.",
     "trecho": "Estudo e uso de ferramentas para práticas DevOps"
    },
    {
     "disciplina": "d-030",
     "forca": "apoio",
     "porque": "Concorrência e gerenciamento de recursos do sistema operacional.",
     "trecho": "Concorrência e sincronização de processos"
    },
    {
     "disciplina": "d-029",
     "forca": "apoio",
     "porque": "Redes são parte do ambiente em que o software roda.",
     "trecho": "Modelo de referência TCP/IP"
    },
    {
     "disciplina": "d-037",
     "forca": "apoio",
     "porque": "Tolerância a falhas e sistemas distribuídos.",
     "trecho": "Tolerância a Falhas"
    }
   ]
  },
  "c-ux": {
   "id": "c-ux",
   "tipo": "carreira",
   "rotulo": "Designer de experiência do usuário (UX)",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Estuda como as pessoas usam um sistema e projeta experiências fáceis e agradáveis.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-026",
     "trecho": "Protótipos e Técnicas de Design centrado no Usuário"
    },
    {
     "disciplina": "d-026",
     "trecho": "Técnicas de avaliação de sistemas interativos"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Investigar necessidades e comportamentos dos usuários",
    "Criar personas para representar públicos-alvo",
    "Desenhar wireframes e protótipos interativos",
    "Conduzir testes de usabilidade",
    "Iterar o design com base nos resultados"
   ],
   "habilidades": [
    "Pesquisa com usuários",
    "Pensamento centrado no usuário",
    "Resolução de problemas",
    "Comunicação",
    "Colaboração"
   ],
   "fontesInfo": [
    {
     "rotulo": "What is User Experience (UX) Design? — Interaction Design Foundation",
     "url": "https://ixdf.org/literature/topics/user-experience-design",
     "tipo": "Entidade"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-026",
     "forca": "principal",
     "porque": "Trata de design centrado no usuário, protótipos e avaliação de sistemas interativos.",
     "trecho": "Técnicas de avaliação de sistemas interativos"
    },
    {
     "disciplina": "d-023",
     "forca": "apoio",
     "porque": "Permite transformar o projeto em páginas funcionais.",
     "trecho": "Linguagens de marcação (HMTL e CSS)"
    },
    {
     "disciplina": "d-002",
     "forca": "apoio",
     "porque": "Métodos de pesquisa ajudam a planejar estudos com usuários.",
     "trecho": "Métodos e técnicas de pesquisa"
    }
   ]
  },
  "c-ui": {
   "id": "c-ui",
   "tipo": "carreira",
   "rotulo": "Designer de interfaces (UI)",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Projeta as interfaces com que o usuário interage.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-026",
     "trecho": "Interfaces e Interações"
    },
    {
     "disciplina": "d-026",
     "trecho": "Protótipos e Técnicas de Design centrado no Usuário"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Definir layouts, cores e tipografia das interfaces",
    "Projetar interfaces gráficas, de voz e de gestos",
    "Produzir wireframes, mockups e protótipos",
    "Garantir navegação intuitiva e comportamento consistente dos elementos"
   ],
   "habilidades": [
    "Teoria das cores",
    "Tipografia",
    "Hierarquia visual",
    "Ferramentas como Figma",
    "Acessibilidade"
   ],
   "fontesInfo": [
    {
     "rotulo": "User Interface (UI) Design — Interaction Design Foundation",
     "url": "https://ixdf.org/literature/topics/ui-design",
     "tipo": "Entidade"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-026",
     "forca": "principal",
     "porque": "Trata de interfaces, interações e protótipos.",
     "trecho": "Interfaces e Interações"
    },
    {
     "disciplina": "d-070",
     "forca": "apoio",
     "porque": "Optativa com cor e animação.",
     "trecho": "Fundamentos de cor"
    },
    {
     "disciplina": "d-023",
     "forca": "apoio",
     "porque": "Linguagens usadas para implementar a interface.",
     "trecho": "Linguagens de marcação (HMTL e CSS)"
    }
   ]
  },
  "c-dev-visual": {
   "id": "c-dev-visual",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor de aplicações visuais e gráficas",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Programa aplicações com imagens, gráficos e animação.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-070",
     "trecho": "Desenvolvimento de jogos gráficos e sistemas de Computação gráfica"
    },
    {
     "disciplina": "d-095",
     "trecho": "Aplicações de processamento de imagens em sistemas"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Construir a interface visual de sites e aplicações",
    "Implementar layouts responsivos",
    "Garantir acessibilidade das páginas",
    "Otimizar o desempenho web",
    "Testar e depurar o código no navegador"
   ],
   "habilidades": [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "Acessibilidade"
   ],
   "fontesInfo": [
    {
     "rotulo": "Frontend Developer Roadmap — roadmap.sh",
     "url": "https://roadmap.sh/frontend",
     "tipo": "Guia de carreira"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-070",
     "forca": "principal",
     "porque": "Optativa que chega ao desenvolvimento de jogos gráficos e sistemas de computação gráfica.",
     "trecho": "Desenvolvimento de jogos gráficos e sistemas de Computação gráfica"
    },
    {
     "disciplina": "d-095",
     "forca": "principal",
     "porque": "Optativa que aplica processamento de imagens em sistemas.",
     "trecho": "Aplicações de processamento de imagens em sistemas"
    },
    {
     "disciplina": "d-021",
     "forca": "apoio",
     "porque": "Vetores e transformações lineares sustentam a geometria gráfica.",
     "trecho": "Vetores: operações e base"
    },
    {
     "disciplina": "d-097",
     "forca": "apoio",
     "porque": "Animação e simulação física em jogos.",
     "trecho": "Programação da animação"
    }
   ]
  },
  "c-dev-bd": {
   "id": "c-dev-bd",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor de banco de dados",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Escreve consultas e programas que armazenam e recuperam dados.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-016",
     "trecho": "Implementação de aplicações usando um SGBDR"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Organizar e proteger sistemas de armazenamento de dados",
    "Monitorar o desempenho e a disponibilidade dos bancos",
    "Realizar backups e atualizar permissões de acesso",
    "Corrigir erros do sistema",
    "Projetar novos bancos a partir de requisitos técnicos"
   ],
   "habilidades": [
    "Capacidade analítica",
    "Atenção a detalhes",
    "Resolução de problemas",
    "Comunicação"
   ],
   "fontesInfo": [
    {
     "rotulo": "Database Administrators and Architects — U.S. Bureau of Labor Statistics",
     "url": "https://www.bls.gov/ooh/computer-and-information-technology/database-administrators.htm",
     "tipo": "Órgão público"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-016",
     "forca": "principal",
     "porque": "Ensina SQL e a implementação de aplicações sobre um SGBD.",
     "trecho": "Implementação de aplicações usando um SGBDR"
    },
    {
     "disciplina": "d-063",
     "forca": "principal",
     "porque": "Optativa com bancos objeto-relacionais e distribuídos.",
     "trecho": "banco de dados objeto-relacional"
    },
    {
     "disciplina": "d-015",
     "forca": "apoio",
     "porque": "Estruturas de dados como árvores B sustentam o armazenamento.",
     "trecho": "árvores B"
    }
   ]
  },
  "c-eng-dados": {
   "id": "c-eng-dados",
   "tipo": "carreira",
   "rotulo": "Engenheiro de dados",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Organiza e movimenta grandes volumes de dados para que possam ser analisados.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-063",
     "trecho": "data warehouse"
    },
    {
     "disciplina": "d-068",
     "trecho": "Regras de Associação"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Projetar sistemas de coleta, armazenamento e análise de dados em escala",
    "Construir pipelines ETL/ELT automatizados",
    "Monitorar a qualidade dos dados e corrigir inconsistências",
    "Manter a escalabilidade da infraestrutura de dados"
   ],
   "habilidades": [
    "SQL",
    "Python",
    "Bancos relacionais e NoSQL",
    "Computação em nuvem",
    "Data warehouses e data lakes"
   ],
   "fontesInfo": [
    {
     "rotulo": "What is data engineering? — IBM",
     "url": "https://www.ibm.com/think/topics/data-engineering",
     "tipo": "Referência técnica"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-063",
     "forca": "principal",
     "porque": "Optativa que cita data warehouse e bancos distribuídos.",
     "trecho": "data warehouse"
    },
    {
     "disciplina": "d-016",
     "forca": "principal",
     "porque": "Base de modelagem e consulta.",
     "trecho": "Modelo relacional"
    },
    {
     "disciplina": "d-068",
     "forca": "apoio",
     "porque": "Optativa de mineração de dados sobre grandes bases.",
     "trecho": "Regras de Associação"
    },
    {
     "disciplina": "d-037",
     "forca": "apoio",
     "porque": "Dados em larga escala costumam estar distribuídos.",
     "trecho": "Arquitetura de Sistemas Distribuídos"
    }
   ]
  },
  "c-analista-dados": {
   "id": "c-analista-dados",
   "tipo": "carreira",
   "rotulo": "Analista de dados",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Examina dados para responder perguntas e apoiar decisões.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-068",
     "trecho": "Regras de Associação"
    },
    {
     "disciplina": "d-031",
     "trecho": "Testes de Hipóteses"
    },
    {
     "disciplina": "d-036",
     "trecho": "Sistemas de informação de suporte ao processo operacional, decisório tático e estratégico (SPT, SAD, SIG, EIS)"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Transformar dados em informações para apoiar decisões",
    "Coletar, limpar e analisar dados",
    "Visualizar resultados e identificar tendências"
   ],
   "habilidades": [
    "Análise estatística",
    "Programação (Python ou R)",
    "Visualização de dados",
    "Modelagem preditiva"
   ],
   "fontesInfo": [
    {
     "rotulo": "roadmap.sh — Data Analyst",
     "url": "https://roadmap.sh/data-analyst",
     "tipo": "roadmap.sh"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-031",
     "forca": "principal",
     "porque": "Estatística descritiva, regressão, probabilidade e testes de hipóteses.",
     "trecho": "Medidas de dispersão"
    },
    {
     "disciplina": "d-016",
     "forca": "principal",
     "porque": "Dados vêm de bancos de dados; é preciso consultá-los.",
     "trecho": "Modelo relacional"
    },
    {
     "disciplina": "d-036",
     "forca": "apoio",
     "porque": "Sistemas de apoio à decisão usam dados para decidir.",
     "trecho": "Sistemas de informação de suporte ao processo operacional"
    },
    {
     "disciplina": "d-068",
     "forca": "apoio",
     "porque": "Optativa de mineração de dados.",
     "trecho": "Regras de Associação"
    }
   ]
  },
  "c-cientista-dados": {
   "id": "c-cientista-dados",
   "tipo": "carreira",
   "rotulo": "Cientista de dados",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Usa estatística e aprendizado de máquina para encontrar padrões e fazer previsões a partir de dados.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-034",
     "trecho": "Aprendizado de Máquina. Redes Neurais Artificiais"
    },
    {
     "disciplina": "d-068",
     "trecho": "Regras de Associação"
    },
    {
     "disciplina": "d-031",
     "trecho": "Testes de Hipóteses"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Extrair conhecimento dos dados com programação, estatística e aprendizado de máquina",
    "Coletar, limpar e analisar dados",
    "Comunicar resultados para decisões"
   ],
   "habilidades": [
    "Matemática e estatística",
    "Programação (Python ou R)",
    "Análise exploratória",
    "Aprendizado de máquina",
    "Visualização"
   ],
   "fontesInfo": [
    {
     "rotulo": "roadmap.sh — AI and Data Scientist",
     "url": "https://roadmap.sh/ai-data-scientist",
     "tipo": "roadmap.sh"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-034",
     "forca": "principal",
     "porque": "Apresenta aprendizado de máquina e redes neurais.",
     "trecho": "Aprendizado de Máquina. Redes Neurais Artificiais"
    },
    {
     "disciplina": "d-031",
     "forca": "principal",
     "porque": "Probabilidade, variáveis aleatórias e testes de hipóteses.",
     "trecho": "Testes de Hipóteses"
    },
    {
     "disciplina": "d-021",
     "forca": "principal",
     "porque": "Álgebra linear (matrizes, autovalores) sustenta os modelos.",
     "trecho": "Autovalores e autovetores"
    },
    {
     "disciplina": "d-012",
     "forca": "apoio",
     "porque": "Derivadas e integrais aparecem na otimização dos modelos.",
     "trecho": "Derivadas e Aplicações"
    },
    {
     "disciplina": "d-068",
     "forca": "apoio",
     "porque": "Optativa de mineração de dados.",
     "trecho": "Regras de Associação"
    }
   ]
  },
  "c-dev-ia": {
   "id": "c-dev-ia",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor de IA e aprendizagem de máquina",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Constrói sistemas que aprendem com dados e resolvem problemas com técnicas de inteligência artificial.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-034",
     "trecho": "Aprendizado de Máquina. Redes Neurais Artificiais"
    },
    {
     "disciplina": "d-096",
     "trecho": "arquiteturas cognitivas"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Aplicar modelos e ferramentas de IA para melhorar produtos e experiências",
    "Usar aprendizado de máquina, linguagem natural e visão computacional"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "roadmap.sh — AI Engineer",
     "url": "https://roadmap.sh/ai-engineer",
     "tipo": "roadmap.sh"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-034",
     "forca": "principal",
     "porque": "Aprendizado de máquina, redes neurais e sistemas especialistas.",
     "trecho": "Aprendizado de Máquina. Redes Neurais Artificiais"
    },
    {
     "disciplina": "d-096",
     "forca": "apoio",
     "porque": "Optativa de laboratório com arquiteturas cognitivas.",
     "trecho": "arquiteturas cognitivas"
    },
    {
     "disciplina": "d-021",
     "forca": "apoio",
     "porque": "Álgebra linear dá a base dos modelos.",
     "trecho": "Álgebra de matrizes e determinantes"
    },
    {
     "disciplina": "d-038",
     "forca": "apoio",
     "porque": "Complexidade dos algoritmos e eficiência.",
     "trecho": "Análise de complexidade de algoritmos"
    }
   ]
  },
  "c-mineracao": {
   "id": "c-mineracao",
   "tipo": "carreira",
   "rotulo": "Especialista em mineração de dados",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Aplica técnicas para descobrir padrões e regras em grandes bases de dados.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-068",
     "trecho": "Regras de Associação"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Coletar dados de diversas fontes",
    "Limpar e padronizar os dados",
    "Analisar os dados para identificar padrões e tendências",
    "Construir modelos preditivos de aprendizado de máquina",
    "Comunicar as descobertas de forma clara"
   ],
   "habilidades": [
    "Programação (Python ou R)",
    "Estatística",
    "Aprendizado de máquina",
    "Pensamento crítico"
   ],
   "fontesInfo": [
    {
     "rotulo": "AI and Data Scientist Roadmap — roadmap.sh",
     "url": "https://roadmap.sh/ai-data-scientist",
     "tipo": "Guia de carreira"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-068",
     "forca": "principal",
     "porque": "Optativa dedicada a regras de associação, sequências e classificação.",
     "trecho": "Regras de Associação"
    },
    {
     "disciplina": "d-031",
     "forca": "apoio",
     "porque": "Estatística dá a base para interpretar padrões.",
     "trecho": "Introdução a Estatística"
    },
    {
     "disciplina": "d-063",
     "forca": "apoio",
     "porque": "Data warehouse é fonte comum de dados.",
     "trecho": "data warehouse"
    }
   ]
  },
  "c-bi": {
   "id": "c-bi",
   "tipo": "carreira",
   "rotulo": "Analista de BI (inteligência de negócios)",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Transforma dados da organização em relatórios e painéis que apoiam a decisão.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-036",
     "trecho": "Sistemas de informação de suporte ao processo operacional, decisório tático e estratégico (SPT, SAD, SIG, EIS)"
    },
    {
     "disciplina": "d-063",
     "trecho": "data warehouse"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Coletar dados de bancos e planilhas",
    "Tratar inconsistências e erros nos dados",
    "Aplicar técnicas estatísticas para achar padrões",
    "Apresentar resultados em gráficos e relatórios"
   ],
   "habilidades": [
    "Visualização de dados",
    "Power BI",
    "Excel",
    "Estatística",
    "Python ou R"
   ],
   "fontesInfo": [
    {
     "rotulo": "Data Analyst Roadmap — roadmap.sh",
     "url": "https://roadmap.sh/data-analyst",
     "tipo": "Guia de carreira"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-036",
     "forca": "principal",
     "porque": "Trata de sistemas de apoio à decisão em níveis operacional, tático e estratégico.",
     "trecho": "Sistemas de informação de suporte ao processo operacional, decisório tático e estratégico (SPT, SAD, SIG, EIS)"
    },
    {
     "disciplina": "d-063",
     "forca": "apoio",
     "porque": "Data warehouse é a base de muitos painéis.",
     "trecho": "data warehouse"
    },
    {
     "disciplina": "d-019",
     "forca": "apoio",
     "porque": "Gestão da informação e fluxos de informação.",
     "trecho": "Ambientes e fluxos de informação"
    },
    {
     "disciplina": "d-075",
     "forca": "apoio",
     "porque": "Optativa sobre técnicas e modelos analíticos de inteligência.",
     "trecho": "principais técnicas e modelos analíticos"
    }
   ]
  },
  "c-analista-redes": {
   "id": "c-analista-redes",
   "tipo": "carreira",
   "rotulo": "Analista de redes",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Monitora, configura e resolve problemas em redes de computadores.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-029",
     "trecho": "Modelo de referência TCP/IP"
    },
    {
     "disciplina": "d-032",
     "trecho": "encaminhamento na Internet: protocolos de roteamento"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Monitorar a performance e administrar recursos de rede",
    "Corrigir falhas e controlar o acesso aos dados",
    "Instalar e configurar software",
    "Documentar com diagramas e pesquisar novas tecnologias"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2124-10 — Analista de redes e de comunicação de dados",
     "url": "https://buscadorncm.com.br/cbo/212410",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-029",
     "forca": "principal",
     "porque": "Redes, camadas, endereçamento e protocolos.",
     "trecho": "Modelo de referência TCP/IP"
    },
    {
     "disciplina": "d-032",
     "forca": "principal",
     "porque": "Optativa com roteamento, redes sem fio e multimídia.",
     "trecho": "protocolos de roteamento"
    },
    {
     "disciplina": "d-037",
     "forca": "apoio",
     "porque": "Comunicação e segurança em sistemas distribuídos.",
     "trecho": "Segurança em Sistemas Distribuídos"
    },
    {
     "disciplina": "d-066",
     "forca": "apoio",
     "porque": "Optativa de tópicos avançados em redes e sistemas.",
     "trecho": "Sistemas Operacionais, Arquitetura e Organização de Computadores e Redes de Computadores"
    }
   ]
  },
  "c-infra": {
   "id": "c-infra",
   "tipo": "carreira",
   "rotulo": "Analista e administrador de infraestrutura e sistemas",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Mantém servidores, sistemas operacionais e a estrutura em que os sistemas funcionam.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-030",
     "trecho": "Gerenciamento de memória. Memória virtual. Conceito de processo"
    },
    {
     "disciplina": "d-029",
     "trecho": "Redes de Computadores (WAN, MAN, LAN e PAN)"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Instalar e configurar sistemas operacionais, conectividade e aplicativos",
    "Definir parâmetros de desempenho e controlar níveis de serviço",
    "Atender chamados, diagnosticar e corrigir falhas",
    "Cuidar de segurança, backup e auditoria"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2123-15 — Administrador de sistemas operacionais",
     "url": "https://buscadorncm.com.br/cbo/212315",
     "tipo": "CBO"
    },
    {
     "rotulo": "CBO 2124-20 — Analista de suporte computacional",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=212420",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-030",
     "forca": "principal",
     "porque": "Memória, processos, arquivos e dispositivos de um sistema operacional.",
     "trecho": "Gerenciamento de memória"
    },
    {
     "disciplina": "d-029",
     "forca": "principal",
     "porque": "Redes de computadores.",
     "trecho": "Redes de Computadores (WAN, MAN, LAN e PAN)"
    },
    {
     "disciplina": "d-024",
     "forca": "apoio",
     "porque": "Memória, cache e entrada e saída.",
     "trecho": "Estruturas de memória: memória principal, secundária, cache e registradores"
    },
    {
     "disciplina": "d-066",
     "forca": "apoio",
     "porque": "Optativa de tópicos em sistemas e redes.",
     "trecho": "Sistemas Operacionais, Arquitetura e Organização de Computadores e Redes de Computadores"
    }
   ]
  },
  "c-distribuidos": {
   "id": "c-distribuidos",
   "tipo": "carreira",
   "rotulo": "Especialista em sistemas distribuídos",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Projeta sistemas formados por várias máquinas que trabalham juntas e toleram falhas.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-037",
     "trecho": "Arquitetura de Sistemas Distribuídos"
    },
    {
     "disciplina": "d-037",
     "trecho": "Tolerância a Falhas"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Projetar a arquitetura de sistemas com vários componentes",
    "Escolher bancos de dados, filas e caches adequados",
    "Planejar balanceamento de carga para suportar crescimento",
    "Definir logging e monitoramento do sistema"
   ],
   "habilidades": [
    "Escalabilidade",
    "Desempenho",
    "Segurança",
    "Padrões arquiteturais"
   ],
   "fontesInfo": [
    {
     "rotulo": "System Design Roadmap — roadmap.sh",
     "url": "https://roadmap.sh/system-design",
     "tipo": "Guia de carreira"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-037",
     "forca": "principal",
     "porque": "Cobre arquitetura, sincronização e tolerância a falhas.",
     "trecho": "Tolerância a Falhas"
    },
    {
     "disciplina": "d-030",
     "forca": "apoio",
     "porque": "Concorrência e sincronização de processos.",
     "trecho": "Concorrência e sincronização de processos"
    },
    {
     "disciplina": "d-029",
     "forca": "apoio",
     "porque": "Comunicação em rede.",
     "trecho": "Modelo de referência TCP/IP"
    }
   ]
  },
  "c-dev-sistemas": {
   "id": "c-dev-sistemas",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor de software de sistemas",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Desenvolve software próximo ao hardware, como componentes de sistemas operacionais.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-030",
     "trecho": "Gerenciamento de memória. Memória virtual. Conceito de processo"
    },
    {
     "disciplina": "d-024",
     "trecho": "Formato das instruções e linguagem de máquina"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Projetar e desenvolver sistemas operacionais e software de base",
    "Analisar as necessidades dos usuários e da organização",
    "Documentar o software para facilitar a manutenção",
    "Testar e manter os programas em funcionamento"
   ],
   "habilidades": [
    "Análise de requisitos",
    "Resolução de problemas",
    "Atenção a detalhes",
    "Comunicação"
   ],
   "fontesInfo": [
    {
     "rotulo": "Software Developers — Occupational Outlook Handbook, U.S. Bureau of Labor Statistics",
     "url": "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
     "tipo": "Órgão público"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-030",
     "forca": "principal",
     "porque": "Núcleo do sistema operacional: processos, memória e arquivos.",
     "trecho": "Gerenciamento de memória"
    },
    {
     "disciplina": "d-024",
     "forca": "principal",
     "porque": "Instruções, linguagem de máquina e organização do processador.",
     "trecho": "Formato das instruções e linguagem de máquina"
    },
    {
     "disciplina": "d-013",
     "forca": "apoio",
     "porque": "Circuitos lógicos e memória.",
     "trecho": "Sistemas de Numeração e Códigos"
    }
   ]
  },
  "c-dev-jogos": {
   "id": "c-dev-jogos",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor de jogos",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Programa jogos digitais: animação, colisões, física e inteligência dos personagens.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-097",
     "trecho": "Motores de Jogos. Game Loop"
    }
   ],
   "baseInformacao": "ppc",
   "atividades": [],
   "habilidades": [],
   "fontesInfo": [],
   "relacaoCurso": [
    {
     "disciplina": "d-097",
     "forca": "principal",
     "porque": "Optativa dedicada: motores de jogos, game loop, colisões, física e IA para jogos.",
     "trecho": "Motores de Jogos. Game Loop"
    },
    {
     "disciplina": "d-070",
     "forca": "apoio",
     "porque": "Optativa de computação gráfica com animação.",
     "trecho": "Animação"
    },
    {
     "disciplina": "d-021",
     "forca": "apoio",
     "porque": "Vetores e transformações para posição e movimento.",
     "trecho": "Vetores: operações e base"
    },
    {
     "disciplina": "d-034",
     "forca": "apoio",
     "porque": "Inteligência artificial para personagens.",
     "trecho": "Resolução de problemas e busca no espaço de estados"
    }
   ]
  },
  "c-dev-automacao": {
   "id": "c-dev-automacao",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor de automação",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Desenvolve programas que controlam e supervisionam processos automatizados.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-098",
     "trecho": "Noções sobre a Supervisão e Automação de Processos"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Codificar programas e especificar a arquitetura de sistemas",
    "Instalar e corrigir sistemas, elaborar testes",
    "Pesquisar inovações tecnológicas"
   ],
   "habilidades": [],
   "fontesInfo": [
    {
     "rotulo": "CBO 2124-15 — Analista de sistemas de automação",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=212415",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-098",
     "forca": "principal",
     "porque": "Optativa que apresenta controladores lógicos programáveis e supervisão de processos.",
     "trecho": "Noções sobre a Supervisão e Automação de Processos"
    },
    {
     "disciplina": "d-013",
     "forca": "apoio",
     "porque": "Circuitos lógicos e combinacionais.",
     "trecho": "Circuitos Lógicos e Combinacionais"
    },
    {
     "disciplina": "d-099",
     "forca": "apoio",
     "porque": "Sensores, atuadores e programas de controle.",
     "trecho": "Sensores e atuadores para robôs"
    }
   ]
  },
  "c-dev-robotica": {
   "id": "c-dev-robotica",
   "tipo": "carreira",
   "rotulo": "Desenvolvedor e integrador de robótica",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Cria programas de controle para robôs e integra sensores e atuadores.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-099",
     "trecho": "Criação e desenvolvimento de programas de controle para robôs"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Programar o posicionamento e a operação de robôs em processos automatizados",
    "Integrar robôs, controladores lógicos programáveis e demais sistemas de automação",
    "Testar o funcionamento de componentes eletroeletrônicos e mecânicos instalados",
    "Analisar falhas e executar manutenção de sistemas automatizados",
    "Documentar alterações de projeto e planos de manutenção"
   ],
   "habilidades": [
    "Programação de CLP",
    "Automação",
    "Integração de sistemas",
    "Eletrônica"
   ],
   "fontesInfo": [
    {
     "rotulo": "CBO 3001-10 Técnico em mecatrônica - robótica (ocupação mais próxima na CBO), via VRI Consulting",
     "url": "https://www.vriconsulting.com.br/trabalhista/ocupacao.php?cbo=300110",
     "tipo": "CBO"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-099",
     "forca": "principal",
     "porque": "Optativa sobre robótica: sensores, atuadores e programas de controle.",
     "trecho": "Criação e desenvolvimento de programas de controle para robôs"
    },
    {
     "disciplina": "d-098",
     "forca": "apoio",
     "porque": "Noções de eletricidade, acionamentos e automação.",
     "trecho": "Noções de Acionamentos de Cargas Industriais"
    },
    {
     "disciplina": "d-013",
     "forca": "apoio",
     "porque": "Circuitos digitais.",
     "trecho": "Circuitos Lógicos e Combinacionais"
    }
   ]
  },
  "c-comp-cientifica": {
   "id": "c-comp-cientifica",
   "tipo": "carreira",
   "rotulo": "Computação científica e algoritmos numéricos",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Usa métodos numéricos e matemática computacional para resolver problemas científicos e de engenharia.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-079",
     "trecho": "cálculo de raízes de funções algébricas e transcendentes por métodos numéricos"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Construir formalmente métodos numéricos para problemas científicos",
    "Analisar matematicamente a precisão e a convergência dos métodos",
    "Implementar algoritmos computacionais de métodos numéricos",
    "Simular computacionalmente fenômenos complexos"
   ],
   "habilidades": [
    "Métodos numéricos",
    "Modelagem matemática",
    "Programação",
    "Elementos finitos"
   ],
   "fontesInfo": [
    {
     "rotulo": "Métodos Numéricos (linha de pesquisa) — LNCC, Ministério da Ciência, Tecnologia e Inovação",
     "url": "https://lncc.br/linhasdepesquisa/metodosnumericos",
     "tipo": "Órgão público"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-079",
     "forca": "principal",
     "porque": "Optativa de métodos numéricos: raízes, interpolação e integração numérica.",
     "trecho": "cálculo de raízes de funções algébricas e transcendentes por métodos numéricos"
    },
    {
     "disciplina": "d-021",
     "forca": "principal",
     "porque": "Sistemas lineares e álgebra matricial.",
     "trecho": "Sistemas lineares: resolução e escalonamento"
    },
    {
     "disciplina": "d-012",
     "forca": "apoio",
     "porque": "Derivadas e integrais.",
     "trecho": "Derivadas e Aplicações"
    },
    {
     "disciplina": "d-038",
     "forca": "apoio",
     "porque": "Complexidade dos algoritmos.",
     "trecho": "Análise de complexidade de algoritmos"
    }
   ]
  },
  "c-esp-algoritmos": {
   "id": "c-esp-algoritmos",
   "tipo": "carreira",
   "rotulo": "Especialista em algoritmos",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Projeta e analisa algoritmos eficientes para problemas difíceis.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-038",
     "trecho": "Análise de complexidade de algoritmos"
    },
    {
     "disciplina": "d-064",
     "trecho": "Conceitos avançados de projeto de algoritmos aplicados em diferentes domínios de problemas"
    }
   ],
   "baseInformacao": "ppc",
   "atividades": [],
   "habilidades": [],
   "fontesInfo": [],
   "relacaoCurso": [
    {
     "disciplina": "d-038",
     "forca": "principal",
     "porque": "Divisão e conquista, gulosos, programação dinâmica e NP-completude.",
     "trecho": "Análise de complexidade de algoritmos"
    },
    {
     "disciplina": "d-064",
     "forca": "principal",
     "porque": "Optativa de estratégias especiais de projeto de algoritmos.",
     "trecho": "Estratégias especiais de projeto de Algoritmo"
    },
    {
     "disciplina": "d-027",
     "forca": "principal",
     "porque": "Optativa de grafos e algoritmos como Prim, Kruskal e Dijkstra.",
     "trecho": "algoritmos de Prim e Kruskal"
    },
    {
     "disciplina": "d-015",
     "forca": "apoio",
     "porque": "Árvores e algoritmos em grafos.",
     "trecho": "Grafos: representação e algoritmos"
    }
   ]
  },
  "c-governanca": {
   "id": "c-governanca",
   "tipo": "carreira",
   "rotulo": "Analista de governança de TI",
   "ppcStatus": "derivado",
   "cobertura": "suficiente",
   "descricao": "Ajuda a organização a decidir, controlar e alinhar o uso da tecnologia aos objetivos do negócio.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-019",
     "trecho": "Governança de TIC e objetivos estratégicos"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Definir controles e objetivos de gestão de TI alinhados às metas do negócio",
    "Estabelecer linguagem comum entre TI, executivos e auditores",
    "Documentar a conformidade com normas e regulamentos",
    "Monitorar e melhorar as práticas de TI com base em um framework"
   ],
   "habilidades": [
    "COBIT",
    "Gestão de riscos",
    "Conformidade",
    "Auditoria de TI"
   ],
   "fontesInfo": [
    {
     "rotulo": "COBIT (definição) — TechTarget, sobre o framework da ISACA",
     "url": "https://www.techtarget.com/cybersecurity/definition/COBIT",
     "tipo": "Referência técnica"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-019",
     "forca": "principal",
     "porque": "Trata de governança de TIC, modelos e normas.",
     "trecho": "Modelos e Normas relativos à Governança de TIC"
    },
    {
     "disciplina": "d-075",
     "forca": "apoio",
     "porque": "Optativa sobre inteligência competitiva.",
     "trecho": "O processo de inteligência"
    },
    {
     "disciplina": "d-059",
     "forca": "apoio",
     "porque": "Optativa de gestão do conhecimento.",
     "trecho": "Modelos de diagnóstico e gestão do conhecimento"
    }
   ]
  },
  "c-processos": {
   "id": "c-processos",
   "tipo": "carreira",
   "rotulo": "Analista de processos",
   "ppcStatus": "derivado",
   "cobertura": "parcial",
   "descricao": "Mapeia e melhora os processos da organização, apoiado em informatização e automação.",
   "descricaoFonte": "editorial",
   "ancora": "Ementas do PPC (ver evidencia)",
   "evidencia": [
    {
     "disciplina": "d-019",
     "trecho": "Inovação em Automação e Informatização de Processos"
    },
    {
     "disciplina": "d-074",
     "trecho": "gerenciamento de processos"
    }
   ],
   "baseInformacao": "fonte-externa",
   "atividades": [
    "Identificar e documentar os processos existentes da organização",
    "Modelar processos com notações como BPMN",
    "Analisar o processo atual para achar oportunidades de melhoria",
    "Propor o processo futuro desejado",
    "Definir e acompanhar indicadores de desempenho"
   ],
   "habilidades": [
    "BPMN",
    "Modelagem de processos",
    "Pensamento crítico",
    "Indicadores de desempenho"
   ],
   "fontesInfo": [
    {
     "rotulo": "Guia para Formação de Analistas de Processos — ABPMP Brasil (publicado pelo Governo de Goiás)",
     "url": "https://goias.gov.br/saude/wp-content/uploads/sites/34/2017/08/livro-guia-para-formacao-de-analistas-de-processos-425.pdf",
     "tipo": "Entidade"
    }
   ],
   "relacaoCurso": [
    {
     "disciplina": "d-019",
     "forca": "principal",
     "porque": "Cita automação e informatização de processos.",
     "trecho": "Inovação em Automação e Informatização de Processos"
    },
    {
     "disciplina": "d-074",
     "forca": "apoio",
     "porque": "Optativa sobre gerenciamento de processos e controle da qualidade.",
     "trecho": "gerenciamento de processos"
    },
    {
     "disciplina": "d-036",
     "forca": "apoio",
     "porque": "Sistemas de informação apoiam processos operacionais.",
     "trecho": "Sistemas de informação de suporte ao processo operacional"
    }
   ]
  }
 },
 "funcoesCitadasPpc": [
  {
   "texto": "Engenheiro de Software",
   "carreira": "c-engenheiro-software"
  },
  {
   "texto": "Programador",
   "carreira": "c-programador"
  },
  {
   "texto": "Web Designer",
   "carreira": "c-web-designer"
  },
  {
   "texto": "Analista de teste",
   "carreira": "c-analista-teste"
  },
  {
   "texto": "Analista de sistemas",
   "carreira": "c-analista-sistemas"
  },
  {
   "texto": "Analista de requisitos",
   "carreira": "c-analista-requisitos"
  },
  {
   "texto": "Analista de negócios",
   "carreira": "c-analista-negocios"
  },
  {
   "texto": "Administrador de bancos de dados",
   "carreira": "c-dba"
  },
  {
   "texto": "Administrador e gerente de redes de computadores",
   "carreira": "c-admin-redes"
  },
  {
   "texto": "Gerente de área de sistemas de informação",
   "carreira": "c-gerente-area-si"
  },
  {
   "texto": "Empresário na área de sistemas de informação",
   "carreira": "c-empresario-si"
  },
  {
   "texto": "Consultor na área de sistemas de informação",
   "carreira": "c-consultor-si"
  },
  {
   "texto": "Pesquisador",
   "carreira": "c-pesquisador"
  },
  {
   "texto": "Gerente de projetos",
   "carreira": "c-gerente-projetos"
  }
 ],
 "docenciaPesquisa": "c-docencia",
 "cursosVizinhos": {
  "OBADM": {
   "nome": "Administração (IFMG Ouro Branco)",
   "nota": "Bacharelado em Administração, oferecido no campus desde 2013, além do técnico em Administração."
  },
  "OBLCOMP": {
   "nome": "Licenciatura em Computação (IFMG Ouro Branco)",
   "nota": "Curso do campus desde 2012."
  },
  "OBLPED": {
   "nome": "Licenciatura em Pedagogia (IFMG Ouro Branco)",
   "nota": "Curso do campus desde 2017."
  },
  "OBENGM": {
   "nome": "Engenharia Metalúrgica (IFMG Ouro Branco)",
   "nota": "Bacharelado em Engenharia Metalúrgica, oferecido no campus desde 2013."
  },
  "OBBGEMT": {
   "nome": "Outro curso do campus",
   "nota": "A disciplina Álgebra Linear I também é cursada em outro curso do campus, que o projeto pedagógico não nomeia."
  }
 },
 "esperado": {
  "porPrefixo": {
   "OBADM": 23,
   "OBLCOMP": 17,
   "OBLPED": 2,
   "OBENGM": 2,
   "OBBGEMT": 1
  },
  "disciplinasComEquivalente": 37,
  "cargaPorEixo": {
   "matematica": 256,
   "computacional": 640,
   "ti": 832,
   "administrativa": 224,
   "profissional-social": 192,
   "complementar": 860
  },
  "percentualPorEixo": {
   "matematica": 9,
   "computacional": 21,
   "ti": 28,
   "administrativa": 7,
   "profissional-social": 6,
   "complementar": 29
  },
  "cargaPorPeriodo": {
   "1": 320,
   "2": 320,
   "3": 320,
   "4": 320,
   "5": 320,
   "6": 320,
   "7": 288,
   "8": 256
  }
 }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = PPC_DATA; }
