# Catálogo CLI - Ficha 02

Uma aplicação de linha de comandos (CLI) desenvolvida em Node.js para gerir, pesquisar e filtrar um catálogo de itens, utilizando métodos modernos de arrays e manipulação de ficheiros.

## 🚀 Como Executar

Certifica-te de que tens o Node.js instalado. Abre o terminal na pasta do projeto e experimenta os seguintes comandos:

- `node app.js` - Lista todos os itens do catálogo.
- `node app.js book` - Lista apenas os itens da categoria "book".
- `node app.js search <termo>` - Pesquisa itens pelo nome ou tags (ex: `node app.js search javascript`).
- `node app.js top <n>` - Mostra os `N` itens mais caros (ex: `node app.js top 3`).
- `node app.js report` - Gera um ficheiro `report.json` com estatísticas do catálogo.
- `node check.js` - Executa as asserções de teste (em caso de sucesso, não devolve output no terminal).

## 📌 Notas de Desenvolvimento

- **Ficheiros Ignorados:** O ficheiro `report.json` gerado pelo comando *report* foi intencionalmente omitido do controlo de versões através do `.gitignore`.
- **Ferramentas de Apoio:** Inteligência Artificial utilizada para a correção de erros e esclarecimento de dúvidas ao longo do desenvolvimento e geração do README.