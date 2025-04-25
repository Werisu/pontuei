# Pontuei 🧠✅❌

Aplicativo simples criado com **Angular 19 + Nx + TailwindCSS** para ajudar na correção de questões de estudo.

Você pode registrar respostas **certas** e **erradas** clicando em dois botões. Os contadores são exibidos em tempo real, facilitando o acompanhamento do seu desempenho.

---

## ✨ Funcionalidades

- 📊 Contador de respostas certas
- ❌ Contador de respostas erradas
- ♻️ (Em breve) Reset dos contadores
- 💾 (Opcional) Salvamento em localStorage

---

## 🚀 Tecnologias utilizadas

- [Nx](https://nx.dev/) (workspace monorepo)
- [Angular 19](https://angular.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [SCSS](https://sass-lang.com/)

---

## 📦 Como rodar o projeto

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/pontuei.git
cd pontuei
```

2. **Instale as dependências**

```bash
npm install
```

3. **Rode o app**

```bash
nx serve questcheck-app
```

O app estará disponível em: `http://localhost:4200`

---

## ⚙️ Configuração do TailwindCSS

Este projeto utiliza o TailwindCSS com o Angular. A configuração está no arquivo `tailwind.config.js`, e os estilos base são importados em:

```scss
apps/questcheck-app/src/styles.scss
```

Com os seguintes comandos:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📌 Organização Nx

```
.
├── apps/
│   └── questcheck-app/     # Aplicação principal Angular
├── libs/                   # (opcional) Bibliotecas compartilhadas
├── tailwind.config.js
├── angular.json / project.json
└── README.md
```

---

## 📄 Licença

Esse projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com 💻 por [Seu Nome]

```

---

Se quiser, posso personalizar com seu nome de usuário do GitHub, colocar badge, link pro repositório, ou até preparar um readme com imagem/gif do app rodando. Só avisar!
```
