# Arte Que Veste: Manual de Gestão 2026

## Introdução e Diagnóstico
Este manual consolida a transição da identidade visual da **Arte Que Veste** para uma operação de e-commerce real, estruturada e juridicamente segura em Aracaju/Sergipe. O objetivo principal é harmonizar a estética única da xilogravura nordestina com a solidez técnica de uma loja virtual profissional em 2026.

Os arquivos `index.html` e `loja.html` construídos representam um *frontend* de altíssimo nível, dotado de animações GSAP fluidas, catálogo por categorias e tamanhos brasileiros. Contudo, um site estático não processa pagamentos, não controla estoque real em banco de dados, não calcula frete por CEP e não emite notas fiscais de forma autônoma.

## Capítulo 1: Fundamentos Jurídicos e Tributários (Aracaju/SE)
Atualizado com base na legislação vigente em junho de 2026, este capítulo substitui diretrizes anteriores com valores e órgãos corretos.

### 1.1 Abertura de Empresa: O Caminho Real em Sergipe
Em Sergipe, a formalização não ocorre por portais isolados. O processo é integrado entre a Receita Federal, a Junta Comercial de Sergipe (Jucese) e a Prefeitura:
- **MEI (Microempreendedor Individual):** Ponto de partida obrigatório via Portal do Empreendedor (`gov.br`). Emissão imediata de CNPJ para a CNAE principal `47.81-4/00`.
- **ME (Microempresa):** Utiliza o sistema estadual **AGILIZA SE** para viabilidade e registro na Jucese.
- **Alvará de Localização e Funcionamento:** Expedido pela Secretaria Municipal de Finanças (**SEFIN** de Aracaju), com base no Decreto Municipal nº 2.469, solicitado integralmente pelo portal **SLIM Aracaju**.

### 1.2 Tributos em 2026
- **DAS-MEI:** Calculado sobre o salário mínimo de R$ 1.621 em 2026, com vencimento todo dia 20.
- **ICMS em Sergipe:** Alíquota interna padrão de 19% + 1% destinado ao FECOEP (Fundo Estadual de Combate e Erradicação da Pobreza), totalizando **20%** (art. 40, I do RICMS/SE).

## Capítulo 2: A Reforma Tributária (EC 132/2023) em 2026
2026 é oficialmente o "ano de teste" da Reforma Tributária brasileira.
- As notas fiscais passam a destacar a CBS (0,9%) e o IBS (0,1%), mas esses valores são integralmente compensados com o PIS/Cofins atual, gerando **zero impacto no caixa** da empresa neste ano.
- Para quem está no Simples Nacional ou MEI (caso da **Arte Que Veste**), o pagamento continua unificado via DAS.

## Capítulo 3: Do Arquivo HTML à Loja Online Real
Para transformar o design atual em um e-commerce funcional, existem três caminhos principais:
1. **Opção A (SaaS):** Migrar o catálogo para plataformas prontas como Nuvemshop ou Shopify.
2. **Opção B (Backend Próprio - Recomendado):** Manter 100% do HTML/CSS/JS atual como frontend e construir um backend leve (FastAPI + PostgreSQL) para gerenciar produtos, estoque, frete e pagamentos via API.
3. **Opção C (WooCommerce):** Utilizar WordPress com o plugin WooCommerce.

## Capítulo 4: Experiência do Consumidor e LGPD
Além do Código de Defesa do Consumidor, o Decreto nº 7.962/2013 estabelece o **direito de arrependimento**: o cliente pode desistir da compra em até 7 dias corridos após o recebimento, sem necessidade de justificativa, com reembolso integral.
A coleta de dados de clientes exige o cumprimento da Lei Geral de Proteção de Dados (LGPD), mantendo Política de Privacidade e utilizando gateways certificados PCI-DSS.

## Capítulo 5: Gestão Financeira, Custos e Conclusão
- **Investimento Único:** Abertura MEI (R$ 0), Domínio R$ 40/ano, Fotos profissionais (R$ 500 - R$ 1.500), Estoque inicial de 50 peças (R$ 2.000 - R$ 3.000).
- **Custos Fixos Mensais:** DAS-MEI (~R$ 73) e hospedagem backend (R$ 0 a R$ 30).
- **Margem Bruta Esperada:** Entre 45% e 50% por peça vendida.

> **Direitos Reservados à Arte Que Veste**
> Criação Conceitual e Visual: Pedro Belentani
> Aracaju, Sergipe, Brasil — 2026
