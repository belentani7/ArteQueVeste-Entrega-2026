// Comprehensive Manual for Arte Que Veste 2026
#import "report-theme.typ": report-accent, report-theme

#show: report-theme.with(
  title: "Arte Que Veste: Manual de Gestão 2026",
  author: "Pedro Belentani (Visão Conceitual) & Jhon Assis (Titular)",
  rhythm: "report",
  running-header: true,
)

// ---------- Title page ----------
#page(margin: (top: 20%, x: 2.2cm), numbering: none, header: none)[
  #set par(first-line-indent: 0em)
  #align(center)[
    #image("images/image_1782173087065.jpeg", width: 50%)
    #v(1em)
    #text(size: 28pt, weight: "bold", fill: report-accent)[Arte Que Veste]
    #v(0.5em)
    #text(size: 16pt, fill: luma(80))[Manual Completo de Implantação e Gestão 2026]
    #v(1em)
    #text(size: 14pt, style: "italic")[Guia Forense Passo a Passo — Edição Ampliada e Unificada]
    #v(2em)
    #line(length: 40%, stroke: 0.5pt + luma(160))
    #v(2em)
    #text(size: 12pt)[
      *Visão Conceitual:* Pedro Belentani \
      *Titular da Marca:* Jhon Assis (Jhon Assis Ateliê) \
      *Operação:* Aracaju, Sergipe, Brasil
    ]
  ]
]

// ---------- Table of contents ----------
#page(numbering: none, header: none)[
  #outline(title: [Sumário], indent: 1.5em)
]

// ---------- Main body ----------
#counter(page).update(1)

= Introdução e Diagnóstico
Este manual consolida a transição da identidade visual da *Arte Que Veste* para uma operação de e-commerce real, estruturada e juridicamente segura em Aracaju/Sergipe. O objetivo principal é harmonizar a estética única da xilogravura nordestina com a solidez técnica de uma loja virtual profissional em 2026.

== A Revelação: Site Estático vs. Loja Virtual Real
Os arquivos `index.html` e `loja.html` construídos representam um *frontend* de altíssimo nível, dotado de animações GSAP fluidas. Contudo, para se tornar uma loja real, faltam os outros 4 pilares:
1. *Backend:* O cérebro que processa pedidos e regras.
2. *Banco de Dados:* A memória que guarda produtos e clientes.
3. *Integrações:* Conexões con APIs de pagamento (Mercado Pago) e frete (Melhor Envio).
4. *Painel Administrativo:* O controle total para o gestor.

= PARTE I — Fundamentos Jurídicos e Tributários (Aracaju/SE)
Atualizado em junho de 2026 com valores e órgãos corretos.

== 1.1 Abertura de Empresa em Sergipe
O processo é integrado entre Receita Federal, Jucese e Prefeitura:
- *Portal do Empreendedor:* Início para MEI (CNPJ imediato).
- *AGILIZA SE:* Sistema Redesim para ME/EPP e etapa municipal do MEI.
- *SLIM Aracaju:* Portal para obtenção do Alvará de Localização via Secretaria Municipal de Finanças (SEFIN).

== 1.2 Tributos em 2026
- *DAS-MEI:* Baseado no salário mínimo de R\$ 1.621 em 2026.
- *ICMS Sergipe:* Alíquota de 20% (19% + 1% FECOEP).
- *DIFAL:* Diferencial de alíquota para vendas interestaduais, recolhido de forma simplificada no DAS para optantes do Simples.

= PARTE II — Reforma Tributária (EC 132/2023)
2026 é o "ano de teste" da reforma:
- *CBS (Federal):* 0,9% destacado em notas fiscais.
- *IBS (Estadual/Municipal):* 0,1% destacado.
- *Impacto:* Zero impacto imediato no caixa, pois são compensados com PIS/Cofins. A decisão estratégica entre Simples Tradicional ou Híbrido deve ocorrer até setembro de 2026.

= PARTE III — Arquitetura Técnica Recomendada
A *Opção B (Backend Próprio)* é a recomendada para a Arte Que Veste:
- *Frontend:* Mantém 100% do HTML/CSS/JS atual.
- *Backend:* FastAPI + PostgreSQL.
- *Vantagem:* Preservação total da identidade visual autoral sem mensalidades de plataforma SaaS.

= PARTE IV — Logística, Estoque e Marketing
== 4.1 Logística de Saída (Aracaju)
Utilização do *Melhor Envio* para descontos de até 70% em Correios e transportadoras privadas. CEP de origem: Aracaju/SE.

== 4.2 Gestão de Estoque
- *SKU:* Padrão CATEGORIA-MODELO-NÚMERO (ex: CAM-BMB-001).
- *Inventário:* Mensalmente para garantir a integridade entre o sistema digital e o estoque físico.

== 4.3 Marketing Digital (Instagram)
Foco no perfil "@"artequeveste79:
- *Mix de Conteúdo:* 40% Produto, 25% Bastidores, 20% Cultural, 10% Depoimentos, 5% Promoção.

= PARTE V — Atendimento e LGPD
== 5.1 Experiência do Cliente
O Decreto nº 7.962/2013 garante o direito de arrependimento em até 7 dias. O atendimento via WhatsApp Business deve ser ágil e humanizado.

== 5.2 Segurança de Dados
Conformidade total com a LGPD (Lei nº 13.709/2018). Nunca armazene dados de cartão de crédito; use gateways certificados PCI-DSS.

= Conclusão e Créditos
A *Arte Que Veste* é um manifesto de resistência cultural. Este manual serve como bússola para que a visão artística se torne um negócio próspero.

#v(2em)
#align(center)[
  #image("images/image-18.jpg", width: 40%)
  #v(1em)
  #text(weight: "bold", size: 12pt)[Direitos Reservados à Arte Que Veste] \
  #text(size: 10pt, style: "italic")[Criação Conceitual e Visual: Pedro Belentani] \
  #text(size: 10pt)[Titular: Jhon Assis (Jhon Assis Ateliê)] \
  #text(size: 9pt)[Aracaju, Sergipe, Brasil — 2026]
]
