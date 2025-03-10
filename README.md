# React + TypeScript + Vite

### Todo List Frontend

Este projeto é uma aplicação de lista de tarefas (Todo List) desenvolvida com **React**, **TypeScript**, **Material UI** e **Vite**. A aplicação permite que os usuários criem, visualizem, editem, marquem como concluídas e excluam tarefas. Ela interage com uma API RESTful para persistir as tarefas.

**Tecnologias Utilizadas:**

  **React**: Biblioteca para construção da interface de usuário.
  **TypeScript**: Para tipagem estática, melhorando a segurança e a manutenção do código.
  **Material UI**: Biblioteca de componentes para estilização e design responsivo.
  **Vite**: Ferramenta de bundling rápido para desenvolvimento.

 **Funcionalidades:**
  
   **Exibição de Tarefas**: A lista de tarefas é carregada da API quando a página é carregada.
  **Adição de Tarefas**: O usuário pode adicionar novas tarefas através de um formulário.
  **Edição de Tarefas**: A tarefa pode ser marcada como concluída e suas atualizações são refletidas na API.
   **Exclusão de Tarefas**: As tarefas podem ser excluídas da lista, sendo removidas também da API.

   Claro! Aqui está um resumo teórico para o **README**:

---
 **Modal Personalizado com Material UI**

Este projeto utiliza o componente **Dialog** do **Material UI** para criar um modal (janela modal) personalizável. O modal é uma interface sobreposta que exibe conteúdo, geralmente para interações com o usuário, como formulários, alertas ou confirmações.

### **Características do Modal:**
- **Título Personalizável**: O modal pode exibir um título, que é passado como uma **prop**.
- **Fechar Modal**: Inclui um botão de fechar no canto superior direito, que permite ao usuário fechar o modal. A função de fechamento é controlada via **prop**.
- **Conteúdo Dinâmico**: O conteúdo do modal é flexível, podendo ser qualquer componente React passado como **children**.
- **Estilização**: O modal é estilizado usando o sistema de estilização do **Material UI** para garantir uma interface limpa e consistente.

### **Como Funciona:**
- O modal é controlado por um estado **`open`** que determina se o modal está visível ou não.
- O título e o conteúdo do modal são dinâmicos, permitindo fácil personalização.
- A funcionalidade de fechar o modal é tratada por uma função **`handleClose`** que altera o estado **`open`**.


**Estrutura do Projeto:**

 **Home.tsx**: Página principal que exibe a lista de tarefas.
 **TodoForm.tsx**: Componente para adicionar novas tarefas.
 **TodoItem.tsx**: Componente que exibe cada tarefa individualmente com opções para editar, excluir e marcar como concluída.

 **Como Rodar Localmente:**
1. Instalar dependências:
   bash
   npm install
  
2. Rodar o servidor de desenvolvimento:
   bash
   npm run dev
   

**Benefícios e Manutenção:**

**Componentização**: Facilita a adição de novas funcionalidades.
**Escalabilidade**: O projeto pode ser facilmente expandido com novos recursos, como filtros e autenticação.

Este projeto segue as melhores práticas de desenvolvimento front-end, utilizando tecnologias modernas para oferecer uma experiência de usuário fluida e uma base de código organizada.
