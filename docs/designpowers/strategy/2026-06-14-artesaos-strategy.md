# Design Strategy: Seção de Artesãos (Herança da Técnica)

## Design Principles

### Técnica como Narrativa
**The principle:** A navegação deve educar o usuário sobre as técnicas tradicionais de Ibitinga.
**What this means in practice:** Agrupar artesãos por técnica (Rechileu, Crochê, Ponto Cruz) e fornecer uma pequena descrição do que é cada técnica.
**What this means we will NOT do:** Não faremos uma lista alfabética simples sem contexto cultural.

### Acesso Direto e Humano
**The principle:** Priorizar o contato direto com o artesão.
**What this means in practice:** O botão de WhatsApp deve ser visualmente distinto e o elemento de ação primário em cada card.
**What this means we will NOT do:** Não usaremos formulários de contato genéricos ou intermediários.

### Estética Vernacular
**The principle:** O design deve refletir a tatilidade do artesanato.
**What this means in practice:** Uso de cores da paleta local (terracota, anil, musgo) e elementos visuais que remetam a tecidos e linhas.
**What this means we will NOT do:** Evitaremos um visual excessivamente corporativo ou "tech" frio.

## Experience Map

1. **Entrada:** Link no cabeçalho ou scroll para a seção "Mestres do Bordado".
2. **Descoberta:** Navegação por categorias de técnica. O usuário escolhe "Rechileu" e vê quem faz.
3. **Engajamento:** Leitura da bio curta e visualização das fotos do artesão trabalhando (fotos autênticas).
4. **Conversão:** Clique no WhatsApp. A mensagem pré-definida já menciona a técnica de interesse.

## Success Metrics

| Metric | What It Measures | Target | How to Measure |
|--------|-----------------|--------|---------------|
| Engajamento por Técnica | Cliques nas categorias de técnica | > 40% dos visitantes da seção | Analytics (cliques) |
| Intenção de Compra | Cliques no botão WhatsApp | > 10% de conversão na seção | Analytics (eventos) |
| Acessibilidade | Task completion (encontrar artesão) | 100% em testes de leitor de tela | Auditoria manual/Lighthouse |

## Constraints and Trade-offs
* **Escalabilidade vs. Intimidade:** Optamos por cards ricos e informativos em vez de uma lista densa. Isso limita a quantidade de artesãos visíveis sem scroll, mas aumenta a qualidade da conexão.
