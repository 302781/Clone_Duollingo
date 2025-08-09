## 🎉 Relatório Técnico *Clone Duolingo Edition* 🐤

### 📦 Tour pela Estrutura de Arquivos do Projeto

Seja bem-vindo(a) ao **Clone Duolingo**, um projeto construído com amor (e código) usando **Next.js**, **TypeScript** e **Tailwind CSS**. A seguir, você embarca em uma jornada por pastas, arquivos e configurações, com explicações leves e cheias de energia técnica!

---
### Abaixar com ponentes
npx create-next-app@latest (Abaixar o **TyperScript**, **Eslint**,**Tailwind CSS**,**App Router**, **Importa alias**(caso queira)  e criar um arquivo),
npx shadcn-ui@latest init (Abaixar o **Next.js**),
npx shadcn@latest add button (Abaixar os componentes do Next.js)
---
Estrutura de pastas e arquivos
App (nome que você escolheu)
│
├── node_modules/               # 📦 Todas as dependências instaladas via npm
├── public/                     # 🌍 Arquivos estáticos (imagens, ícones, fontes...)
│
├── .eslintrc.json               # ✅ Configuração do ESLint (padrões de código)
├── next-env.d.ts                # 🛡️ Tipos automáticos do Next.js para TypeScript
├── next.config.mjs               # ⚙️ Configurações personalizadas do Next.js
├── package-lock.json             # 🔒 Versões travadas das dependências
├── package.json                  # 📜 Lista de dependências e scripts do projeto
├── postcss.config.js             # 🎨 Configuração do PostCSS (usado pelo Tailwind)
├── README.md                     # 📖 Este arquivo que você está lendo
├── tailwind.config.ts            # 🎨 Configurações do Tailwind CSS (cores, fontes, etc.)
└── tsconfig.json                 # 🔍 Configurações do compilador TypeScript

---

### 🌳 Raiz do Projeto — Onde tudo começa!

* 🐥 **`Clone_Duolingo` & `línguas`**
  Provavelmente os arquivos-estrela! Eles parecem guardar informações internas do app, como dados de idiomas, progresso do usuário ou configurações do clone do Duolingo.

* 📄 **`.gitignore`**
  O porteiro do Git. Ele controla quem entra e quem fica de fora do repositório — como `node_modules`, arquivos temporários e segredos não reveláveis.

* 🔍 **`eslint.config.mjs`**
  O fiscal do código! Aqui moram as regras do **ESLint**, que grita quando algo não está padronizado ou quando um erro aparece no seu TypeScript/JavaScript.

* 🧠 **`next-env.d.ts`**
  Um oráculo de tipos. Este arquivo garante que tudo que o Next.js precisa em termos de "tipos" funcione direitinho no seu ambiente TypeScript.

* 📦 **`package.json` & `package-lock.json`**

  * `package.json`: A certidão de nascimento do projeto — lista as dependências, scripts e tudo mais.
  * `package-lock.json`: O segurança do projeto — trava as versões exatas de cada dependência, evitando sustos no futuro.

* ✂️ **`postcss.config.mjs`**
  Aqui o **Tailwind CSS** prepara sua mágica: esse arquivo ajuda a processar os estilos com **PostCSS**, para que tudo fique bonito e responsivo.

* 🎨 **`tailwind.config.ts`**
  O baú das personalizações! Cores, fontes, espaçamentos… Tudo o que define a *vibe visual* do seu app fica aqui.

* 🧰 **`tsconfig.json`**
  O cérebro do TypeScript. Define regras, caminhos e como seu código deve ser interpretado e convertido para JavaScript.

* 📚 **`README.md`**
  A cartilha oficial do projeto. Aqui ficam as instruções para instalar, rodar e entender a ideia por trás do código.

---

### 🗂️ Pastas Importantes

#### 🧪 `node_modules/`

O laboratório secreto: aqui vivem **todas as bibliotecas** que o projeto depende — mais de mil arquivos mágicos que você nunca toca diretamente (mas que fazem tudo funcionar!).

#### 🌐 `public/`

A vitrine do projeto! Tudo que estiver aqui pode ser acessado publicamente no navegador. Inclui:

* `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` — ícones e imagens que compõem a UI (e dão aquele toque visual 👁️).

#### 🧬 `src/app/`

O núcleo do projeto! Usando o **App Router** do Next.js, essa pasta define as páginas, o layout e o comportamento geral do site. Dentro dela, encontramos:

* 🧿 `favicon.ico`
  O ícone fofo que aparece na aba do navegador. Um pequeno detalhe que faz toda diferença!

* 🎨 `global.css`
  Onde o Tailwind entra em ação! Define estilos globais, fontes, modo escuro, e dá aquele acabamento profissional à interface.

* 🧱 `layout.tsx`
  O arquiteto do app. Define a estrutura básica da página (`<html>`, `<body>`), importa as fontes bonitas (como *Geist*) e configura os metadados do projeto.

* 📄 `page.tsx`
  A estrela principal! Aqui está o conteúdo da página inicial. Ideal para mostrar instruções, imagens e chamadas para ação.

---

### ✅ Conclusão

Esse projeto está mais estruturado que um castelo de blocos! 🏰
Usando o que há de mais moderno no ecossistema web, ele oferece uma base sólida, modular e preparada para escalar — além de estar visualmente elegante graças ao Tailwind.

Se fosse um curso de línguas, já estaria no nível C2. 😉
