# Projeto MyFamilyAlbum.UI / MyFamilyAlbum.UI Project

Este projeto é um frontend desenvolvido em **React com TypeScript**, responsável por gerenciar álbuns e fotos. Ele consome a API do backend para exibir e manipular os dados.

This project is a frontend developed in **React with TypeScript**, responsible for managing albums and photos. It consumes the backend API to display and manipulate data.

## 📦 Pré-requisitos / Prerequisites

Antes de começar, certifique-se de ter instalado em sua máquina:
Before starting, make sure you have installed on your machine:

- **Node.js** (versão recomendada: 18+) / (recommended version: 18+)
- **Gerenciador de pacotes**: `npm` ou `yarn` / **Package manager**: `npm` or `yarn`

## 🚀 Como rodar o projeto / How to run the project

Siga os passos abaixo para executar o projeto localmente:
Follow the steps below to run the project locally:

1. **Clone o repositório:** / **Clone the repository:**

   ```sh
   git clone https://github.com/CristianFnds/MyFamilyAlbum.UI.git
   cd MyFamilyAlbum.UI
   ```

2. **Instale as dependências:** / **Install dependencies:**

   ```sh
   npm install  # ou / or yarn install
   ```

3. **Configure as variáveis de ambiente:** / **Set up environment variables:**

   - Crie um arquivo `.env` na raiz do projeto e adicione as configurações necessárias, por exemplo:
   - Create a `.env` file in the project root and add the necessary settings, for example:

     ```sh
     REACT_APP_API_URL=http://localhost:3000
     ```

4. **Inicie o projeto:** / **Start the project:**

   ```sh
   npm run dev
   ```

5. **Acesse no navegador:** / **Access in the browser:**
   O projeto será iniciado e pode ser acessado em [http://localhost:5173]
   The project will start and can be accessed at [http://localhost:5173]

## 🛠️ Melhorias Futuras / Future Improvements

Aqui estão algumas melhorias planejadas para o projeto:
Here are some planned improvements for the project:

✅ **Separar a lógica em hooks** / **Separate logic into hooks**:

- Criar hooks personalizados para melhorar a reutilização e organização do código.
- Create custom hooks to improve code reuse and organization.

✅ **Ajustar variáveis de ambiente** / **Adjust environment variables**:

- Melhorar o gerenciamento das variáveis de ambiente, garantindo que não sejam expostas no código-fonte.
- Improve environment variable management, ensuring they are not exposed in the source code.

✅ **Tratar retornos via alert** / **Handle returns via alert**:

- Substituir os `alert` por notificações mais amigáveis, como **toasts** (ex: `react-toastify`).
- Replace `alert` with more user-friendly notifications, such as **toasts** (e.g., `react-toastify`).
