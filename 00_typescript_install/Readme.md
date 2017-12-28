# Typescript install

- Instale o visual studio code. Baixe o .deb do site do visual studio e instalar

```
https://code.visualstudio.com/download
sudo apt install gdebi -y
sudo gdebi vscode.deb
```

- instalando o node 6 no ubuntu

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

- install typescript via npm

```
sudo npm install -g typescript
```

- instalar módulo para ler do teclado. Não use **sudo** nesse comando:

```
cd ~
npm install readline-sync
```

- se quiser fazer configurações adicionais no seu vscode:

      https://code.visualstudio.com/docs/languages/typescript

- execute tsc --init na pasta que você quer colocar o projeto para criar o tsconfig.json

- Crie um arquivo **main.ts** para na pasta colocar seu código.

```typescript
declare function require(name: string): any;
var readline = require('readline-sync');
readline.setDefaultOptions({keepWhitespace : true});
let input = (text: string) => readline.question(text);

let nome = input("Qual seu nome");
console.log("Hello " + nome);
```

- Se quiser atribuir um comando para executar seu projeto, altere seu .vscode/tasks.json de acordo com o exemplo.
