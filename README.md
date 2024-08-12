# [Assista ao vídeo de demonstração](https://drive.google.com/file/d/1ZJZOj3_fa_FfItDlxWnF121OaIba2O8h/view?usp=drive_link)
# [Assista ao vídeo de demonstração](https://drive.google.com/file/d/1ZJZOj3_fa_FfItDlxWnF121OaIba2O8h/view?usp=drive_link)
# [Assista ao vídeo de demonstração](https://drive.google.com/file/d/1ZJZOj3_fa_FfItDlxWnF121OaIba2O8h/view?usp=drive_link)
# [Assista ao vídeo de demonstração](https://drive.google.com/file/d/1ZJZOj3_fa_FfItDlxWnF121OaIba2O8h/view?usp=drive_link)

# Frontend Core Notes

Este repositório contém o código-fonte de um sistema de gerenciamento e criação de notas, desenvolvido utilizando React. A aplicação permite criar, ler, atualizar e excluir tarefas, além de oferecer funcionalidades como marcação de itens favoritos, definição de cores para as tarefas, filtros e mais.

## Índice

-   [Funcionalidades da Aplicação](#funcionalidades-da-aplicação)
-   [Requisitos](#requisitos)
-   [Instalação](#instalação)
-   [Rodando a Aplicação](#rodando-a-aplicação)
-   [Estrutura de Pastas](#estrutura-de-pastas)
-   [Licença](#licença)

## Funcionalidades da Aplicação

A aplicação oferece as seguintes funcionalidades:

-   **Gerenciamento de Tarefas:**
    -   Criar, ler, atualizar e excluir itens de tarefas utilizando a API.
    -   Marcar um item como favorito.
    -   Definir uma cor para cada item de tarefa.
    -   Filtrar itens por favoritos, cor e título.
    -   Exibir itens favoritos no topo da lista.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

-   **Node.js** (versão 16.15.0 ou superior)
-   **npm** (versão 8.5.5 ou superior)
-   **Git** (para clonar o repositório)

## Instalação

Siga os passos abaixo para clonar e instalar o projeto em sua máquina local.

### 1. Clonar o Repositório

Abra seu terminal e execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/LucaaasEduaaardo/frontend-core-notes.git
cd frontend-core-notes
```

### 2. Instalar Dependências

Após clonar o repositório, instale as dependências necessárias:

```bash
npm install
```

## Rodando a Aplicação

Após a instalação das dependências, você pode iniciar a aplicação localmente.

### 1. Iniciar o Servidor de Desenvolvimento

Para rodar o servidor de desenvolvimento, execute o comando:

```bash
npm start
```

Este comando iniciará a aplicação e automaticamente abrirá o navegador em `http://localhost:3000`. Qualquer alteração no código-fonte atualizará automaticamente a página.

### 2. Build para Produção

Para gerar uma build otimizada para produção, utilize o comando:

```bash
npm run build
```

Este comando criará uma pasta `build` contendo os arquivos estáticos que podem ser servidos em um servidor web.

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

```
frontend-core-notes/
├── .vscode/                # Configurações específicas do Visual Studio Code
├── node_modules/           # Módulos Node.js instalados
├── public/                 # Arquivos públicos (HTML, ícones, etc.)
├── src/                    # Código-fonte da aplicação
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── Card/           # Componente de Cartão para exibição das notas
│   │   ├── ColorPicker/    # Componente para seleção de cores
│   │   ├── CreateNote/     # Componente para criar novas notas
│   │   ├── IconButton/     # Botões de ícone reutilizáveis
│   │   ├── InputSearch/    # Componente de busca
│   │   ├── Navbar/         # Barra de navegação
│   │   ├── TextEditor/     # Editor de texto para notas
│   │   ├── TextEditorModal/ # Modal para edição de notas
│   │   └── index.tsx       # Ponto de entrada para os componentes
│   ├── icons/              # Ícones personalizados usados na aplicação
│   │   ├── CloseIcon/      # Ícone de fechar
│   │   ├── ColoredCircleIcon/ # Ícone de círculo colorido
│   │   ├── ColorFillIcon/  # Ícone de preenchimento de cor
│   │   ├── PencilIcon/     # Ícone de lápis (edição)
│   │   ├── SearchIcon/     # Ícone de pesquisa
│   │   ├── StarIcon/       # Ícone de estrela (favoritar)
│   │   └── TextPlus/       # Ícone de adição de texto
│   ├── lib/                # Funções e bibliotecas auxiliares
│   ├── pages/              # Páginas da aplicação
│   ├── styles/             # Arquivos de estilo (CSS, SCSS)
│   ├── types/              # Definições de tipos TypeScript
│   ├── index.tsx           # Ponto de entrada da aplicação
│   ├── reportWebVitals.ts  # Ferramentas de monitoramento de performance
│   ├── setupTests.ts       # Arquivo de configuração para testes
├── .editorconfig           # Configuração de formatação de código
├── .eslintrc.json          # Configuração do ESLint
├── .gitignore              # Arquivos e pastas ignorados pelo Git
├── .prettierrc             # Configuração do Prettier
├── package-lock.json       # Versões exatas das dependências instaladas
├── package.json            # Configurações do npm e scripts
└── README.md               # Documentação do projeto
```

## Funcionalidades da Aplicação

-   [x] Criar, ler, atualizar e excluir itens de tarefas utilizando a API.

    -   [x] Criar
    -   [x] ler
    -   [x] atualizar e excluir itens de tarefas utilizando a API.
    -   [x] excluir

-   [x] Marcar um item como favorito.
-   [x] Definir uma cor para cada item de tarefa.
-   [x] Exibir a lista de tarefas
-   [x] Filtrar itens.

    -   [x] Favoritos
    -   [x] Cor
    -   [x] Titulo

-   [x] Exibir itens favoritos no topo da lista.

## Requisitos Técnicos

-   [x] Construir o frontend utilizando React.
-   [x] Seguir as melhores práticas e utilizar ferramentas modernas de desenvolvimento web.
-   [x] Garantir que a aplicação seja responsiva e visualmente atraente.

## Adicionais

> fiquei sem tempo para terminar

-   [x] Trabalhar com tipos e interfaces corretas.
-   [x] Implementar regras do eslint.
-   [x] Configurar o prettier.
-   [ ] Trabalhar em contêineres Docker.
-   [ ] Implementar testes.
-   [ ] Configurar CI/CD.

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
