# Ramatech — Site institucional

Site institucional estático (HTML + CSS + JS) da Ramatech Metal Mecânica.

Conteúdo e imagens importados do site antigo (`ramatech.ind.br`), com nova identidade
visual em paleta teal (cores da logo) e layout responsivo.

## Estrutura

```
ramatech-site/
├── index.html              → página única (todas as seções)
├── favicon.png             → ícone do site
├── assets/
│   ├── css/style.css       → estilos (paleta teal)
│   ├── js/main.js          → menu, animações e formulário
│   └── img/                → logo, fotos e ícones
└── README.md
```

## Como publicar (Netlify, grátis)

1. Acesse https://app.netlify.com e crie conta (com e-mail ou GitHub).
2. Na tela inicial, arraste e solte a **pasta `ramatech-site`** na área indicada.
3. O Netlify gera um endereço temporário (ex.: `ramatech.netlify.app`) com HTTPS automático.
4. Para usar o domínio próprio, veja a seção abaixo.

## Apontar o domínio `ramatech.ind.br`

No painel do **Registro.br** (seu domínio → "Configurar endereçamento"):

| Tipo | Nome | Valor |
|---|---|---|
| A | (em branco) | IP do Netlify (o painel informa ao adicionar domínio) |
| A | www | mesmo IP |

No Netlify: **Site settings → Domain management → Add custom domain** → `ramatech.ind.br`
e `www.ramatech.ind.br`. Aguarde a propagação (minutos a poucas horas).

## Ajustes futuros opcionais

- **Logos dos clientes**: a seção "Principais clientes" (carrossel/marquee) já usa as logos reais,
  salvas em `assets/img/` (`elliott.png`, `hyundai.jpg`, `flowserve.png`, `semco.png`, etc.).
  Para trocar alguma, basta substituir o arquivo correspondente mantendo o mesmo nome.
- **Fotos**: as imagens atuais vieram do site antigo; podem ser substituídas por fotos novas
  em alta resolução (basta sobrescrever os arquivos em `assets/img/`).
