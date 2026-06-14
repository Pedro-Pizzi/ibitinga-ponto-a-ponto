# Ibitinga Ponto a Ponto

Vitrine digital de empresas, bordados e eventos reais de Ibitinga-SP, a Capital Nacional do Bordado. O visitante navega por peças, lojas, fábricas, marcas infantis, crochê, eventos e bancas da Feirinha, com fotos e links baseados em fontes públicas.

Projeto de extensão: **Atividade Extensionista II: Tecnologia Aplicada à Inclusão Digital**  
CST em Análise e Desenvolvimento de Sistemas - UNINTER.

- **Stack:** React.js + Vite + Tailwind CSS
- **Experiência:** mobile first, navegação por teclado, foco visível, contraste e textos alternativos
- **Conteúdo:** empresas reais, imagens oficiais ou registros reais, WhatsApp/site/fonte pública
- **Deploy recomendado:** Vercel conectado ao GitHub

## Como Rodar

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
npm run dev
```

O Vite abre em:

```bash
http://localhost:5173
```

Para gerar a versão final:

```bash
npm run build
npm run preview
```

## Estrutura Principal

- `src/data/lojas.js`: empresas reais, contatos, endereços, fontes e imagens.
- `src/data/artesaos.js`: vitrine de peças e linhas reais divulgadas por empresas ou bancas.
- `src/data/eventos.js`: Feirinha, Feira do Bordado, Corpus Christi e ações públicas.
- `public/imagens/reais/`: imagens oficiais baixadas de sites públicos das empresas/eventos.
- `src/components/`: seções da página, cards, modais, catálogo e botões.

## Fontes Usadas

A curadoria reúne informações públicas de sites oficiais, guias comerciais e perfis públicos. Entre as fontes usadas estão Lavive, Juma Enxovais, AM Bordados, Paulinha Baby, Lunenê Baby, Sakura Enxovais, Crochê Vitória, Feira do Bordado de Ibitinga, Prefeitura de Ibitinga, ACII e guias locais.

## Publicar na Vercel pelo GitHub

Este é o fluxo recomendado. A Vercel lê o repositório do GitHub, cria deploy automático a cada push e gera previews para alterações futuras.

### 1. Criar o repositório no GitHub

Se estiver usando o terminal:

```bash
git init
git add .
git commit -m "Projeto Ibitinga Ponto a Ponto"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/ibitinga-ponto-a-ponto.git
git push -u origin main
```

Também é possível criar o repositório manualmente no site do GitHub e depois rodar os mesmos comandos acima trocando `SEU-USUARIO`.

### 2. Importar na Vercel

1. Acesse `https://vercel.com/new`.
2. Entre com GitHub ou conecte sua conta GitHub.
3. Escolha o repositório `ibitinga-ponto-a-ponto`.
4. Confira as configurações:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Clique em **Deploy**.

Depois disso, todo `git push` na branch `main` publica uma nova versão em produção. Branches e pull requests geram previews automáticos.

## Publicar pela Vercel CLI

Use este caminho apenas se quiser publicar pelo terminal em vez do painel da Vercel.

Primeiro faça login:

```bash
npx vercel@54.9.1 login
```

Depois, dentro da pasta do projeto:

```bash
npm run vercel:preview
```

Na primeira vez, responda às perguntas do CLI:

- Set up and deploy? `Y`
- Which scope? escolha sua conta ou time
- Link to existing project? `N`, se ainda não criou na Vercel
- Project name? `ibitinga-ponto-a-ponto`
- Directory? `./`
- Want to modify settings? `N`

Quando o preview estiver correto, publique em produção:

```bash
npm run vercel:prod
```

Se o CLI reclamar de token inválido, rode:

```bash
npx vercel@54.9.1 logout
npx vercel@54.9.1 login
```

Depois repita `npm run vercel:prod`.
