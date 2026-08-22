
#set page(
  paper: "a4",
  margin: (x: 2cm, y: 2.5cm),
  background: image("/home/ubuntu/Yvienendeeso_content/images/image_1782173085743.jpeg", width: 100%, height: 100%, fit: "cover"),
)

#set text(
  font: "Open Sans",
  size: 11pt,
  fill: rgb("#2E1104"),
)

#show heading: it => [
  #set text(font: "Playfair Display", fill: rgb("#4A2311"))
  #block(it)
  #v(0.5em)
  #line(length: 100%, stroke: 1pt + rgb("#4A2311"))
  #v(1em)
]

// Portada
#align(center + horizon)[
  #image("/home/ubuntu/Yvienendeeso_content/images/portada_magica.png", width: 60%)
  #v(2em)
  #text(size: 32pt, weight: "bold", font: "Playfair Display")[ARTE QUE VESTE]
  #v(1em)
  #text(size: 18pt)[Manual Completo de Implantação e Gestão]
  #v(0.5em)
  #text(size: 14pt, style: "italic")[Guia Forense Passo a Passo — Edição Ampliada 2026]
  #v(2em)
  #text(size: 12pt)[Visão Conceitual: Pedro Belentani]
  #text(size: 10pt)[Operação em Aracaju/SE]
]

#pagebreak()

// Sumário
#outline(title: "Sumário", indent: 2em)

#pagebreak()

= Introdução
Este manual consolida a estratégia de transição da identidade visual da *Arte Que Veste* para uma operação de e-commerce real e sustentável em Aracaju, Sergipe. O foco é unir a tradição da xilogravura nordestina com as melhores práticas de gestão digital de 2026.

= Capítulo 1: Fundamentos Jurídicos e Tributários
A operação em Aracaju exige conformidade com a legislação municipal e estadual atualizada.

== 1.1 Escolha do Regime
O regime **MEI** é recomendado para a fase inicial, permitindo um crescimento estruturado com carga tributária simplificada.

== 1.2 Abertura em Sergipe
O fluxo de abertura é integrado via **AGILIZA SE** e **Portal do Empreendedor**. O Alvará de Localização deve ser solicitado através do portal **SLIM Aracaju**, sob responsabilidade da Secretaria Municipal de Finanças.

== 1.3 Tributação 2026
O **ICMS em Sergipe** é de 20% (19% padrão + 1% FECOEP). O DAS-MEI mensal deve ser pago rigorosamente até o dia 20 de cada mês.

#align(center)[
  #image("/home/ubuntu/Yvienendeeso_content/images/image_1782173083109.jpeg", width: 40%)
  #text(size: 9pt, style: "italic")[Onde a luz chega, a prosperidade floresce.]
]

= Capítulo 2: A Reforma Tributária 2026
2026 marca o início da transição para o novo sistema tributário brasileiro (EC 132/2023).

- **Ano de Teste**: As notas fiscais já apresentam CBS (0,9%) e IBS (0,1%) de forma informativa.
- **Simples Nacional**: Permanece sem alterações no fluxo de caixa imediato, mas exige planejamento para a migração gradual até 2033.

= Capítulo 3: Do HTML à Loja Real
A transição técnica é o pilar da expansão digital.

== 3.1 Arquitetura Recomendada
Manter o frontend atual com animações **GSAP** e integrar um backend robusto via API (FastAPI + PostgreSQL). Esta abordagem preserva a identidade visual exclusiva criada por Pedro Belentani.

== 3.2 Segurança e LGPD
A conformidade com a **Lei Geral de Proteção de Dados** é obrigatória. A loja deve atuar como controladora responsável, garantindo a criptografia de dados sensíveis e o uso de gateways certificados PCI-DSS.

#align(center)[
  #image("/home/ubuntu/Yvienendeeso_content/images/image_1782173081666.jpeg", width: 40%)
  #text(size: 9pt, style: "italic")[Quem caminha com fé, nunca se perde no sertão.]
]

= Capítulo 4: Marketing e Identidade Visual
O Instagram (@artequeveste79) atua como o principal canal de aquisição e branding.

- **Mix de Conteúdo**: Equilíbrio entre produto (40%), bastidores (25%) e cultura nordestina (20%).
- **SEO e Autoridade**: Uso de palavras-chave como *xilogravura* e *moda autoral* para atrair tráfego qualificado.

= Capítulo 5: Gestão Operacional e Logística
A eficiência na entrega é o que consolida a confiança do cliente.

- **Logística**: Integração com **Melhor Envio** para cálculos reais de frete.
- **Unboxing**: A embalagem deve ser uma extensão da arte, proporcionando uma experiência memorável.

#align(center)[
  #image("/home/ubuntu/Yvienendeeso_content/images/image_1782173077267.jpeg", width: 40%)
  #text(size: 9pt, style: "italic")[Uma pequena luz já basta para mudar a noite inteira.]
]

= Conclusão e Créditos
A *Arte Que Veste* é um manifesto de resistência cultural. Este manual serve como bússola para que a visão artística se torne um negócio próspero e perene.

*Todos os direitos reservados ao titular da marca.*
*Criação Conceitual e Visual: Pedro Belentani.*

#align(center)[
  #image("/home/ubuntu/Yvienendeeso_content/images/image-18.jpg", width: 50%)
]
