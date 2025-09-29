# 📝 Todo List - React Native

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Aplicação mobile moderna para gerenciar suas tarefas diárias

[![Ver Demo Interativa](https://img.shields.io/badge/📱_Ver_Demo_Interativa-purple?style=for-the-badge)](https://nicollasdelgado.github.io/Todo-List/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NicollasDelgado/Todo-List)

</div>

---

## 🎯 Sobre o Projeto

O **Todo List** é uma aplicação mobile multiplataforma desenvolvida com **React Native** e **Expo** para ajudar você a organizar suas tarefas de maneira simples, prática e eficiente. Com uma interface nativa e performática, você pode adicionar, editar, marcar como concluída e excluir tarefas facilmente.

## ✨ Funcionalidades

- ✅ **Adicionar tarefas** - Crie novas tarefas rapidamente
- ✏️ **Editar tarefas** - Modifique tarefas existentes
- ☑️ **Marcar como concluída** - Alterne entre pendente e concluída
- 🗑️ **Excluir tarefas** - Remova tarefas indesejadas
- 💾 **Persistência de dados** - Salva automaticamente com AsyncStorage
- 📱 **Design responsivo** - Interface adaptável e nativa
- 🎨 **Interface moderna** - Design limpo e intuitivo
- ⚡ **Performance otimizada** - Rápido e fluido

---

## 🚀 Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)** - Framework para desenvolvimento mobile
- **[Expo](https://expo.dev/)** - Plataforma para desenvolvimento React Native
- **JavaScript** - Linguagem de programação
- **AsyncStorage** - Armazenamento local de dados
- **React Hooks** - Gerenciamento de estado

---

## 📦 Como Rodar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

```bash
# Instalar Expo CLI globalmente
npm install -g expo-cli
```

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/NicollasDelgado/Todo-List.git
```

2. **Navegue até o diretório**
```bash
cd Todo-List
```

3. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

4. **Inicie o projeto**
```bash
npm start
# ou
expo start
```

### Executando no seu dispositivo

Após iniciar o projeto, você terá as seguintes opções:

- **📱 iOS**: Pressione `i` para abrir no simulador (somente macOS)
- **🤖 Android**: Pressione `a` para abrir no emulador
- **📲 Dispositivo físico**: 
  1. Instale o app **Expo Go** no seu smartphone
     - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)
     - [Android - Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
  2. Escaneie o QR Code que aparece no terminal

---

## 📱 Teste Agora Mesmo!

Você pode experimentar o app de duas formas:

### 1️⃣ **Simulador Web Interativo**
[![Demo](https://img.shields.io/badge/🌐_Abrir_Simulador-8A2BE2?style=for-the-badge)](https://nicollasdelgado.github.io/Todo-List/)

Teste todas as funcionalidades diretamente no navegador sem instalar nada!

### 2️⃣ **No seu Celular com Expo Go**

1. Baixe o **Expo Go** no seu smartphone
2. Escaneie o QR Code abaixo (quando o projeto estiver rodando)
3. Pronto! O app abrirá no seu celular

---

## 🎯 Estrutura do Projeto

```
Todo-List/
│
├── App.js                  # Componente principal
├── app.json               # Configurações do Expo
├── package.json           # Dependências do projeto
│
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Task.js
│   │   ├── TaskInput.js
│   │   └── TaskList.js
│   │
│   ├── screens/           # Telas da aplicação
│   │   └── HomeScreen.js
│   │
│   ├── styles/            # Estilos globais
│   │   └── global.js
│   │
│   ├── utils/             # Funções utilitárias
│   │   └── storage.js
│   │
│   └── contexts/          # Contextos React
│       └── TaskContext.js
│
├── assets/                # Imagens, ícones e fontes
│   ├── icon.png
│   └── splash.png
│
└── README.md
```

---

## 🔧 Scripts Disponíveis

```bash
# Iniciar o projeto em modo de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na web
npm run web

# Criar build de produção para Android
eas build --platform android

# Criar build de produção para iOS
eas build --platform ios
```

---

## 📱 Compatibilidade

- ✅ **iOS** 13.0 ou superior
- ✅ **Android** 6.0 ou superior (API 23+)
- ✅ **Expo Go**
- ✅ **Build nativo** (EAS Build)

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Se você deseja contribuir com este projeto:

1. Faça um **Fork** do projeto
2. Crie uma branch para sua feature
   ```bash
   git checkout -b feature/MinhaNovaFuncionalidade
   ```
3. Commit suas mudanças
   ```bash
   git commit -m 'Adiciona nova funcionalidade X'
   ```
4. Push para a branch
   ```bash
   git push origin feature/MinhaNovaFuncionalidade
   ```
5. Abra um **Pull Request**

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">

### **Nicollas Delgado**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NicollasDelgado)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)

</div>

---

## 🙏 Agradecimentos

- Comunidade **Expo** e **React Native**
- A todos que contribuírem com o projeto
- À comunidade **open source** por inspiração e aprendizado

---

## 🔮 Próximas Funcionalidades

Planejamos implementar as seguintes funcionalidades:

- [x] ✅ Filtrar tarefas (todas, ativas, concluídas)
- [ ] Adicionar categorias/tags às tarefas
- [ ] Definir prioridades (alta, média, baixa)
- [ ] Adicionar datas de vencimento com notificações
- [ ] Tema escuro/claro
- [ ] Sincronização com Firebase/Backend
- [ ] Suporte a múltiplas listas
- [ ] Compartilhamento de tarefas
- [ ] Estatísticas de produtividade

---

## 🐛 Problemas Conhecidos

Se encontrar algum problema, por favor [abra uma issue](https://github.com/NicollasDelgado/Todo-List/issues).

---

## 📞 Contato

Para questões, sugestões ou feedback, sinta-se à vontade para:

- 🐛 [Abrir uma issue](https://github.com/NicollasDelgado/Todo-List/issues)
- 📧 Enviar um email
- 💼 Conectar-se no LinkedIn

---

<div align="center">

### ⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

**Feito com ❤️ usando React Native e Expo**

</div>
