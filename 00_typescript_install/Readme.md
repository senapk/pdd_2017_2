# Typescript install

- Instale o visual studio code. Baixe o .deb do site do visual studio e instalar

```
https://code.visualstudio.com/download
sudo apt install gdebi -y
sudo gdebi vscode.deb
```

- instalando o node 6 no ubuntu

      curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
      sudo apt-get install -y nodejs

- install typescript via npm

      sudo npm install -g typescript

- instalar módulo para ler do teclado	. Não use **sudo** nesse comando:

      npm install readline-sync

- se quiser fazer configurações adicionais no seu vscode:

      https://code.visualstudio.com/docs/languages/typescript

- Na pasta do seu projeto crie um arquivo **tsconfig.json** com o seguinte conteúdo:

```
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "sourceMap": true
    }
}
```

- Crie um arquivo **main.ts** para na pasta colocar seu código.

```typescript
declare function require(name:string);
var input = require('readline-sync');
let nome : string = input.question("Qual seu nome?").split(" ");
console.log("Hello " + nome)
```
