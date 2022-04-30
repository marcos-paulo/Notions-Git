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
# Repositório compartilhado local
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
