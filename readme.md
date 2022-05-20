# Lista de comandos úteis ao trabalhar com GIT

# Navegação nos diretórios

### Criar uma nova pasta (criar um diretório)

```bash
mkdir <NOMEDAPASTA>
```

### Navegar para dentro desta pasta (mudar de diretório)

```bash
cd <NOMEDAPASTA>
```

### Listar os itens dentro de um diretório

```bash
ls
```

# GIT

### Inicializa o Git em uma pasta

```bash
git init
```

### Checar o estado das mudanças em um repositório

```bash
git status
```

### Ver mudanças em arquivos

```bash
git diff
```

### Preparar um arquivo para ser commitado

```bash
git add <NOMEDOARQUIVO>
```

### Preparar para commit todos os arquivos que foram modificados

```bash
git add .
```

### Para fazer commit ("salvar") as mudanças que você fez com uma curta mensagem de descrição

```bash
git commit -m "sua mensagem de commit"
```

# Configuração GIT

A seguir, configure o Git de forma que ele saiba quem você é:

### Defina seu nome:

```bash
git config --global user.name "Seu nome"
```

### Defina seu email:

```bash
git config --global user.email "seu.email@example.com"
```

### Adicione seu nome de usuário GitHub:

```bash
git config --global user.username <USUARIO>
```

### Você pode checar novamente o que você colocou na sua configuração Git digitando:

```bash
git config --global user.username
```

### Adicionar remotos

```bash
git remote add <NOMEDOREMOTO> <URL>
```

### Remover remotos

```bash
git remote rm <NOMEDOREMOTO>
```

### Mudar o URL de um remoto

```bash
git remote set-url <NOMEDOREMOTO> <URL>
```

### Receber mudanças de um remoto

```bash
git pull <NOMEDOREMOTO> <NOMEDOBRANCH>
```

### Ver os endereços dos remotos

```bash
git remote -v
```

### Enviar mudanças

```bash
git push <NOMEDOREMOTO> <NOMEDOBRANCH>
```

### Renomear branch

Só é possível renomear branch de forma local, para renomear um branch remoto, altere a branch local, exclua o branch remoto e reenvie as modificações.

#### Renomear branch atual

```bash
git branch -m "novo-nome"
```

#### Renomear outra branch

```bash
git branch -m "nome-antigo" "novo-nome"
```

### Remover branch do remoto

```bash
git push --delete <NOMEDOREMOTO> <NOMEDOBRANCH>
```

### Remover branch local

```bash
git branch -D <NOMEDOBRANCH>
```

# Repositório bare

## Explicações retiradas do link https://pt.stackoverflow.com/questions/80182/qual-%C3%A9-a-diferen%C3%A7a-entre-git-init-e-git-init-bare

> ## Author: **cantoni**
>
> ## Respondida em: _11/08/2015 às 17:01_
>
> O que é: <p>
> Ao incializar um repositório como bare não será permitido editar arquivos (git add) e commitar mudanças (git commit), já que o mesmo não possui uma working tree. Você deve atualizar um repositório bare utilizando git push.<p>
>
> Quando é usado:<p>
> Você inicializa um repositório como bare quando deseja que ele seja o respositório central.

> ## Author: Sergio Cabral
>
> ## Respondida em: 14/09/2019 às 4:51
>
> Outra diferença entre os repositórios do tipo --bare e do tipo Working Tree é que no primeiro caso não são armazenados commits perdidos, mas apenas são armazenados commits que pertençam à trilha de um branch. Veja abaixo...
>
> Criei o primeiro repositório (nome: git-bare) com git init --bare. Ou seja, ele é o servidor. É o do lado esquerdo, onde não existe branches remotos porque este é o próprio repositório remoto.
>
> Criei o segundo repositório (nome: git-working-tree) com git clone recebendo do primeiro. Ele é o da direita. Tem branches locais vinculados aos branches remotos.
>
> (Os textos 'first', 'second', 'third', 'fourth', 'alfa', 'beta' e 'delta' são os comentários dos commits. Os nomes 'master' e 'greek' são nomes dos branches.)
>
> ![alt text](/statics/vk18B.png)<p>
>
> Agora eu vou apagar o branch chamado 'greek' tanto no git-bare (comando: git push --delete origin greek) como localmente no git-working-tree (comando: git branch -D greek). Veja como fica a árvore:
>
> ![alt text](/statics/JQrTT.png)
>
> O repositório git-bare apaga o que não é mais referenciado
>
> O repositório git-bare apaga tanto o branch como seus comits. Por isso o nome 'bare' que tem o sentido de puro. Ele só armazena os comits que podem ser referenciados. Na foto vemos que a árvore dele ficou reduzida por este motivo.
>
> Por outro lado, o repositório git-working-tree, que equivale a um repositório local que usamos comumente, não apaga os commits, que agora só podem ser referenciados diretamente pelo seu hash com um comando do tipo git checkout 7fa897b7. Por isso sua árvore não tem sua estrutura modificada.
>
> EM RESUMO: commits nunca são descartados em repositórios do tipo working-tree, mas são apagados em repositórios do tipo bare.
>
> Em termos práticos, você só consegue recuperar um branch apagado no servidor se ele existir em um repositório local. Isso porque ele e seus commits foram totalmente removidos do servidor.
>
> Mas é muito estranho que o tamanho do repositório bare não diminui de tamanho em disco após excluir um branch remoto. Ou seja, os arquivos ainda estão lá de alguma forma. Para enxugar o repositório, apagando o que não é mais referenciado ou o que nunca mais pode ser referenciado (este último caso) use o comando git gc --prune

## Para criar um repositório compartilhado em rede local ou no próprio computador:

### Crie uma pasta que servira como pasta repositório essa pasta também poderá ser compartilhada na rede local

```bash
mkdir <NOME-DA-PASTA-REPOSITÓRIO>
```

### inicie o repositório sem um diretório de trabalho

```bash
git init --bare
```

### adicione o endereço da pasta repositório aos repositórios de cada programador seguindo os passos da sessão anterior
