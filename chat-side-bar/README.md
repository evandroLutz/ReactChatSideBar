# React Chat App / Aplicativo de Chat React

## 📖 Overview / Visão Geral

This is a simple chat application built with **React** and **styled-components**.
It allows users to create new conversations, view existing ones, and send messages in a chat interface.

Este é um aplicativo de chat simples feito com **React** e **styled-components**.
Permite aos usuários criar novas conversas, visualizar conversas existentes e enviar mensagens em uma interface de chat.

---

## 🛠 Features / Funcionalidades

* Create a new conversation / Criar nova conversa
* View past conversations / Visualizar conversas anteriores
* Dynamic UI using **styled-components** / UI dinâmica com **styled-components**

---

## ⚙️ Installation / Instalação

1. Clone the repository / Clone o repositório:

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Install dependencies / Instale as dependências:

```bash
npm install
```

3. Start the development server / Inicie o servidor de desenvolvimento:

```bash
npm start
```

* The app will run on `http://localhost:3000` / O app rodará em `http://localhost:3000`.

---

## 🚀 Deployment / Deploy

To deploy using **GitHub Pages**:

Para publicar usando **GitHub Pages**:

1. Install gh-pages:

```bash
npm install --save gh-pages
```

2. Add the homepage in `package.json`:

```json
"homepage": "https://your-username.github.io/your-repo"
```

3. Add deploy scripts:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy the app:

```bash
npm run deploy
```

---

## 💻 Usage / Uso

* Click **“Nova Conversa / New Conversation”** to start a new chat.

* Select a conversation to view past messages.

* Type a message and press **Enter** or click **Enviar / Send** to send it.

* Clique em **“Nova Conversa / New Conversation”** para iniciar um novo chat.

* Selecione uma conversa para visualizar mensagens anteriores.

* Digite uma mensagem e pressione **Enter** ou clique em **Enviar / Send** para enviar.

---

## 📂 Folder Structure / Estrutura de Pastas

```
src/
├── components/       # React components / Componentes React
├── interfaces/       # TypeScript interfaces / Interfaces TypeScript
├── pages/            # Chat pages / Páginas do chat
├── App.tsx
├── index.tsx
```

---

## 📝 License / Licença

MIT License
