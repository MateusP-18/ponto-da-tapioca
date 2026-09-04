# Ponto da Tapioca — Landing Page

Site institucional de alta conversão para o **Ponto da Tapioca**, em Guaramiranga - CE.
Feito em HTML, CSS e JavaScript puros — sem build, sem dependências — pronto para publicar no **GitHub Pages**.

## Estrutura dos arquivos

```
├── index.html              → estrutura e conteúdo do site
├── css/style.css           → identidade visual, layout e animações
├── js/script.js            → menu mobile, WhatsApp, animações de entrada
├── assets/img/              → logo, favicons e ícones
├── favicon.ico
├── site.webmanifest
├── robots.txt
└── sitemap.xml
```

## Antes de publicar: o que você PRECISA atualizar

Reuni tudo o que estava público no Instagram, Google e no seu site atual, mas alguns
dados não estavam acessíveis publicamente (WhatsApp, endereço completo, preços exatos e
avaliações do Google). Deixei tudo pronto com placeholders fáceis de encontrar:

### 1. Número de WhatsApp (o mais importante!)
Abra `js/script.js` e edite a primeira linha do `CONFIG`:
```js
whatsappNumber: '5588900000000'   // troque pelo número real: 55 + DDD + número
```
Esse número é usado em **todos** os botões "Pedir no WhatsApp" do site automaticamente —
você só precisa trocar em um lugar.

### 2. Endereço completo
Hoje o site mostra apenas "Centro de Guaramiranga – CE" (o único dado público que encontrei).
Atualize o endereço completo em 3 lugares:
- `index.html` → seção `<!-- LOCALIZAÇÃO -->` (texto visível)
- `index.html` → rodapé (`<footer>`)
- `index.html` → bloco `<script type="application/ld+json">` no `<head>` (dado que o Google lê para exibir o negócio nas buscas)

### 3. Cardápio e preços
Não consegui extrair o texto do seu cardápio digital (o arquivo do Heyzine é renderizado
como imagem). Por isso:
- A seção "Nossos sabores" traz categorias e pratos **de exemplo**, sem preços.
- O botão "Abrir cardápio completo" já está linkado para o seu cardápio real:
  `https://heyzine.com/flip-book/dfcb0b511f.html`

Se quiser, me envie os itens e valores do cardápio (ou um print/texto) que eu atualizo
os cards com os pratos e preços reais.

### 4. Avaliações do Google
Os 3 depoimentos da seção "Avaliações" são **ilustrativos** — não são comentários reais.
Troque pelo texto de avaliações reais copiadas do seu perfil no Google (Perfil da
Empresa no Google > Avaliações). Estão em `index.html`, na seção `id="avaliacoes"`.

### 5. Fotos da galeria
A seção "Galeria" usa ilustrações/emojis como espaço reservado, para o site já carregar
rápido e sem depender de fotos externas. Para usar fotos reais do Instagram:
1. Salve as fotos em `assets/img/galeria/` (crie a pasta), formato `.jpg` otimizado (< 300KB cada).
2. Em `index.html`, troque cada `<div class="galeria-art ...">` por uma tag `<img>` apontando pro arquivo, mantendo a legenda em `<figcaption>`.

### 6. Domínio final
Depois de publicar no GitHub Pages, troque a URL de exemplo `https://pontodatapioca.github.io/`
pela URL real nos seguintes lugares de `index.html`: `<link rel="canonical">`, `og:url`,
`og:image`, `twitter:image`, e no `robots.txt` / `sitemap.xml`.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `ponto-da-tapioca`).
2. Envie todos os arquivos deste zip para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
5. Salve. Em alguns minutos o site estará em `https://SEU-USUARIO.github.io/ponto-da-tapioca/`
   (ou no domínio customizado, se você configurar um).

## Personalização rápida

- **Cores:** todas as cores ficam no topo de `css/style.css`, dentro de `:root { ... }`.
- **Textos:** todo o conteúdo está direto no `index.html`, em português, fácil de editar.
- **Animações:** respeitam a preferência do usuário por "menos movimento" (acessibilidade).

## Checklist final antes de divulgar

- [ ] Número de WhatsApp real em `js/script.js`
- [ ] Endereço completo (3 lugares)
- [ ] Cardápio com preços reais (opcional, o link já funciona)
- [ ] Avaliações reais do Google
- [ ] Fotos reais na galeria (opcional)
- [ ] Domínio final nas tags de SEO
- [ ] Testar o botão do WhatsApp em um celular de verdade
