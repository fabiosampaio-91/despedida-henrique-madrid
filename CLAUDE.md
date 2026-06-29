# CLAUDE.md — despedida-henrique-madrid

Onboarding para qualquer agente de IA que trabalhe neste repo.

## O que é este repo

Site de página única para a despedida de solteiro do Henrique Elvas em Madrid.
Site estático (HTML/CSS/JS vanilla), alojado no GitHub Pages, redeploy automático a cada push para `main`. Sem build.

Live: https://fabiosampaio-91.github.io/despedida-henrique-madrid/

## Estrutura

```
index.html            Página única (todo o conteúdo)
assets/styles.css     Tema de festa
assets/data.js        Fonte única de verdade dos locais (DATA = {...})
assets/app.js         Render dos cartões + filtro + confetti + reveal
assets/img/           Mockups das t-shirts
```

Os dados dos locais vivem **só** em `assets/data.js`. Para mudar texto de um sítio, edita aí, não no HTML.

## Regras de conteúdo

- **Idioma: português de Portugal (PT-PT)**, não do Brasil. Todo o site é em PT-PT.
- **Sem travessões (em dash `—`)**. Usa vírgulas, dois-pontos ou pontos finais.
- **Tom casual e direto**, como falar com um grupo de amigos.
- **Nomes próprios ficam no original** (nomes de locais, moradas, bairros).
- Quando houver dúvidas sobre detalhes de um sítio (ambiente, hora de fecho, se vira festa), **verifica na web** antes de escrever.

## Votação (importante)

A votação é feita **FORA do site**, num único formulário do Google. **Não** voltar a meter votação dentro do site (sem localStorage, sem backend, sem widget): o GitHub Pages é estático e não partilha votos entre pessoas.

Cada tema (almoço, rooftops, brunch, atividade, jantar, t-shirts) tem um botão **"Votar"** que abre o formulário em nova aba.

### URL do formulário

O URL está como placeholder `__GOOGLE_FORM_URL__`. Quando o link real existir, faz find/replace do placeholder em todo o repo (ver README.md). Aparece em `index.html`.

## Como atualizar

1. Edita `index.html` (estrutura/cópia) e/ou `assets/data.js` (locais).
2. Pré-visualiza local: `python3 -m http.server 8080`.
3. Commit e push para `main`. O GitHub Pages faz redeploy sozinho.

Commit ou push **só quando for pedido**.
