# Design State: Ibitinga Ponto a Ponto - Seção de Artesãos

## Briefing Summary
- **Problema:** Visibilidade para artesãos independentes.
- **Persona:** Turista buscando artesanato autêntico e artesão tradicional.
- **Meta:** Organização por técnica e contato direto via WhatsApp.

## Design Principles
- **Humanidade:** Rostos e mãos em foco.
- **Clareza:** Organização taxonômica por técnica.
- **Acessibilidade:** Foco em legibilidade e botões de ação claros.

## Decisions Log
- [2026-06-14] Escolhida abordagem "Herança da Técnica" (Caminho B).
- [2026-06-14] Uso de fotos reais do projeto para estética artesanal.
- [2026-06-14] Definidos princípios: Técnica como Narrativa, Acesso Direto e Estética Vernacular.

## Open Questions
- Como estruturar o componente `ArtesaoCard` para suportar diferentes tamanhos de bio?
- Qual a melhor forma de transição entre as categorias de técnica?

## Artefact Index
- Briefing: `docs/designpowers/briefs/2026-06-14-secao-artesaos.md`
- Strategy: `docs/designpowers/strategy/2026-06-14-artesaos-strategy.md`
- Data Source: `src/data/artesaos.js`

## Handoff Chain
- design-discovery → design-strategy: "Briefing aprovado. Foco em Herança da Técnica."
- design-strategy → writing-design-plans: "Estratégia definida. Foco em agrupamento por técnica e estética tátil. Agora precisamos detalhar as tarefas de implementação: refatoração de dados, novos componentes e integração no layout."
