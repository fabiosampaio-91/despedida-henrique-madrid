# 🍾 Despedida Henrique Elvas · Madrid

Site de página única (em português de Portugal) para a **despedida de solteiro do Henrique Elvas** em Madrid: o plano de batalha de dois dias (sexta + sábado), com rooftops, bares, discotecas, atividades e t-shirts. Site estático, sem build, alojado no GitHub Pages.

> **🔴 Site:** https://fabiosampaio-91.github.io/despedida-henrique-madrid/
> **O plano:** Sexta (chegar → explorar → jantar em rooftop → bares) e Sábado (brunch de recuperação → atividade votada → rooftop → jantar que vira festa → discotecas).

---

## 🗳️ A votação é num formulário do Google (FORA do site)

O site é estático (GitHub Pages), por isso **não há votação dentro do site**: não dá para partilhar votos entre pessoas. A votação é toda feita **num único formulário do Google**, ligado a partir de cada secção com um botão **"Votar"**.

Temas que vão a votação: rooftops, brunch, atividade de sábado, jantar que vira festa e as t-shirts. (O almoço de sexta não vai a votação, é só uma sugestão.)

### URL do formulário

O formulário já está ligado: https://docs.google.com/forms/d/1yNAjBl7Az0UauBD_C5tCnVdWYDxGEhOss45QikAkNM4/viewform

Para trocar, faz find/replace do URL em [`index.html`](index.html) (aparece nos botões "Votar" e na secção Votação) e faz commit e push.

## 🛠️ Estrutura

Plain **HTML + CSS + JS vanilla**. Sem build, sem dependências, sem tracking.

| Ficheiro | O que é |
|---|---|
| [`index.html`](index.html) | Estrutura e conteúdo da página |
| [`assets/styles.css`](assets/styles.css) | Tema de festa (néon magenta/roxo/dourado, confetti) |
| [`assets/data.js`](assets/data.js) | **Fonte única de verdade**: todos os locais + links verificados |
| [`assets/app.js`](assets/app.js) | Render dos cartões, filtro de discotecas, confetti, scroll-reveal |
| [`assets/img/`](assets/img/) | Mockups das t-shirts (servidos a partir do repo, não de pasta local) |

### Correr localmente
```bash
python3 -m http.server 8080   # depois abre http://localhost:8080
```

### Deploy
GitHub Pages reconstrói automaticamente a cada push para `main`. Não há passo de build.

## 📚 Docs

- [`ACTION_PLAN.md`](ACTION_PLAN.md), [`SOURCES.md`](SOURCES.md), [`DECISIONS.md`](DECISIONS.md), [`TODO.md`](TODO.md)
- [`CLAUDE.md`](CLAUDE.md): instruções para o agente de IA que trabalha neste repo.
- [`Sources/`](Sources/): material original (incluindo os mockups de t-shirt usados como referência).

---

_Madrid · links verificados em junho de 2026 · Vamos, Henrique! 🥂_
