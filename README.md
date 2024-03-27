# Ficha Catalográfica

## 📌 Acessos rápidos
- [Aplicação produção](https://www.extranet.ceuma.br/ficha-catalografica)
- [Servidor de produção](http://melpomene.ceuma.edu.br:9000/)

## 📚 Sobre o projeto

Projeto referente a Ficha Catalográfica que é breve descrição bibliográfica de um item, como um livro, contendo informações como autor, título, editora, data de publicação, número de páginas, assuntos tratados e número de catalogação, facilitando a identificação e organização de materiais em bibliotecas.


### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Ter o node instalado em sua máquina
```

## 🚀 Como executar

- Clone o repositório `git clone git@devops.ceuma.edu.br:nti-ceuma-applications/ficha-catalografica.git`
- Entre na pasta `cd /ficha-catalografica`
- Instale as dependências com `ni install`
- Inicie a aplicação com `nr dev`

Acesse a url [`http://localhost:3000`] para 

## 🛠 Tecnologias utilizadas

<details>
  <pre>
  "dependencies": {
      "@hookform/resolvers": "^3.1.0",
      "@radix-ui/react-popover": "^1.0.5",
      "@radix-ui/react-tooltip": "^1.0.5",
      "@stitches/react": "^1.2.8",
      "axios": "^1.4.0",
      "next": "13.2.4",
      "pdfmake": "^0.2.7",
      "phosphor-react": "^1.4.1",
      "preline": "^2.0.3",
      "react": "18.2.0",
      "react-dom": "18.2.0",
      "react-hook-form": "^7.44.3",
      "react-select": "^5.7.2",
      "zod": "^3.21.4"
    },
    "devDependencies": {
      "@rocketseat/eslint-config": "^1.2.0",
      "@types/node": "18.15.10",
      "@types/pdfmake": "^0.2.2",
      "@types/react": "18.0.29",
      "@types/react-dom": "18.0.11",
      "eslint": "^8.36.0",
      "eslint-config-next": "13.2.4",
      "typescript": "5.0.2"
    }
  </pre>
</details>



## 🐙 Como fazer deploy?

### Deploy em servidor de teste
- Crie uma branch para a alteração que você deseja
- Depois que estiver com sua alteração, faça merge com a branch `develop`
- Crie uma branch de release de acordo com a versão atual (`release/vX.X.X`), a partir da `develop`
- Faça o push da branch de `release/vX.X.X`

*Para acompanhar o processo de build, procure por CI/CD --> jobs na interface do gitlab dentro do repositório*

### Deploy em servidor de produção
- Agora para subir no servidor de produção precisamos criar uma tag do projeto de acordo com a ultima versão de branch release, com este comando `git tag -a vX.X.X -m "vX.X.X"`
- Rodar este comando para subir a tag em produção `git push origin --tags`
- Com isso o projeto ja ira buildar no servidor de produção `https://extranet.ceuma.br/ficha-catalografica`
