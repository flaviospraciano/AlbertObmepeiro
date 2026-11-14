# 🦉 Albert OBMEPeiro

Aplicativo-jogo para treinar as questões da **1ª fase da OBMEP – Nível 1** (6º e 7º anos), com trilha de fases, vidas, combos, conquistas, revisão dos erros e provas completas com cronômetro.

É um **PWA** (Progressive Web App): funciona no navegador, pode ser instalado no celular e funciona offline depois da primeira visita. Também pode virar app para Android/Windows/iOS pelo [PWABuilder](https://www.pwabuilder.com/).

## O que tem no app

- **335 questões originais** das provas de 2005 a 2025, com gabarito oficial.
- **Questões transcritas em texto**, com as 5 alternativas como botões e só as figuras como imagem. As questões que ainda não foram transcritas aparecem como imagem da prova original.
- **Explicação passo a passo** depois de cada resposta, além da solução oficial original.
- **Jornada em 3 mundos** (Fácil, Médio e Difícil) com fases de 8 questões, 5 vidas e até 3 estrelas.
- **Treino por assunto** (10 categorias) e **por ano** (prova completa com cronômetro ou treino comentado).
- **Reforço**: as questões erradas voltam em 1, 3 e 7 dias até serem dominadas. O jogador também marca *por que errou* e recebe dicas.
- **Estímulos**: XP, 10 níveis, combos, dias seguidos, meta diária, conquistas e ranking.
- **Duas contas**:
  - **Albertzão** (jogador): é só criar a conta.
  - **Admin Maestro** (professor): senha `728497`. Vê os jogadores, as questões mais erradas, edita assunto e dificuldade e faz backup.

- **Ponto e frequência**: o ponto é marcado sozinho quando o jogador entra no app. O Maestro vê quantas questões cada jogador fez por dia e recebe alerta de quem ficou um dia ou mais sem treinar. O jogador também é cobrado ao abrir o app.

> Com o Firebase configurado, cada aluno entra com **e-mail e senha** em qualquer celular, e o Maestro vê todos os alunos. Para entrar como Maestro, é preciso o e-mail e a senha do professor, o código Maestro e estar cadastrado na coleção `admins`, que é quem garante a segurança. Se o `firebase-config.js` ficar com a `apiKey` vazia, o app funciona em modo local, só no aparelho.

## Estrutura dos arquivos

```
index.html              → o app inteiro (HTML + CSS + JS)
questoes.js             → banco de questões (gabarito, assunto, dificuldade, transcrição)
pk/y2005.js … y2025.js  → imagens de cada prova (questões, figuras e soluções), carregadas sob demanda
manifest.webmanifest    → dados do PWA (nome, cores, ícones)
sw.js                   → service worker (uso offline)
firebase-config.js      → dados do projeto Firebase (apiKey vazia = modo local)
firestore.rules         → regras de segurança para colar no Firestore
icons/                  → ícone da coruja em vários tamanhos (+ versões "maskable")
.nojekyll               → faz o GitHub Pages servir todos os arquivos como estão
```

## Conectar ao Firebase (login com e-mail e senha)

O `firebase-config.js` já vem preenchido com o projeto **albertobmepeiro**. No Console do Firebase:

1. **Authentication → Método de login → E-mail/senha**: deixe *Ativado*. O login Anônimo não é usado.
2. **Authentication → Configurações → Domínios autorizados**: adicione `SEU-USUARIO.github.io`.
3. **Firestore Database → Regras**: cole o conteúdo de `firestore.rules` e clique em *Publicar*.

### Como fica para os alunos (Albertzão)
- Na primeira vez: **Criar conta**, com nome, e-mail, senha e avatar.
- Em qualquer celular: **Entrar**, com o mesmo e-mail e senha. O progresso vem da nuvem.
- O botão "Esqueci minha senha" manda um e-mail para trocar a senha.

### Como virar Admin Maestro
1. Entre no app com a sua conta normal (ou crie uma).
2. Abra **Perfil → Modo professor**, digite o código Maestro `728497` e toque em **Ativar**.
3. Pronto: aparece a aba **🎼 Maestro** com o painel de todos os alunos. Você continua jogando com a mesma conta.

O app registra o professor na coleção `admins` do Firestore, e as regras só deixam ler os dados dos alunos quem está nessa lista. Para tirar um professor, apague o documento dele em **Firestore → Dados → admins**. Para trocar o código, mude `ADMIN_PASS` no `index.html` e o mesmo número no `firestore.rules`, e publique as regras de novo.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `albert-obmepeiro`).
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório (pelo site, use *Add file → Upload files* e arraste tudo, incluindo as pastas `pk` e `icons`).
3. Vá em **Settings → Pages**. Em *Build and deployment*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e clique em **Save**.
4. Em 1 a 2 minutos, o app estará em `https://SEU-USUARIO.github.io/albert-obmepeiro/`.

## Gerar o app no PWABuilder

1. Abra [pwabuilder.com](https://www.pwabuilder.com/) e cole o endereço do GitHub Pages.
2. Ele vai ler o `manifest.webmanifest`, os ícones e o `sw.js`. A nota do manifesto e do service worker deve aparecer completa.
3. Clique em **Package for stores** e escolha a plataforma:
   - **Android** (Google Play): gera um `.aab`. Guarde bem o arquivo de chave (*signing key*) que ele entrega, porque ele é necessário para atualizar o app depois.
   - **Windows** (Microsoft Store).
   - **iOS**: gera um projeto para abrir no Xcode, em um Mac.

## Atualizar o app

Depois de alterar algum arquivo, troque a versão na primeira linha útil do `sw.js` (`albert-v1` → `albert-v2`) para os celulares baixarem a versão nova.

## Créditos

As questões e as soluções oficiais são da **OBMEP – Olimpíada Brasileira de Matemática das Escolas Públicas** (IMPA), usadas aqui com finalidade educacional. Provas e soluções originais: [obmep.org.br](https://www.obmep.org.br).

App criado por Flávio S. Praciano.
