// src/client/config/site.config.ts
// ⚠️ PREENCHA ESSES DADOS PARA CADA CLIENTE

export const siteConfig = {
  nome: "Nome do Negócio",

  // Logo
  logoHorizontal: "/logo-artesanaio-horizontal.png",
  logoVertical: "/logo-artesanaio.jpeg",
  logoAlt: "Logo da Artesanaio",

  // WhatsApp
  whatsapp: "5521986369426",
  whatsappDisplay: "(21) 98636-9426",
  whatsappMensagem: "Olá! Vim pelo site e gostaria de mais informações.",

  // Header
  headerCta: "Fale conosco",

  // Redes sociais
  instagram: "@instagram",
  facebook: "",
  tiktok: "",

  cidade: "Nilopolis, Rio de Janeiro",

  // Navegação desktop
  navLinks: [
    { label: "Início",   href: "/" },
    { label: "Sobre",    href: "/sobre" },
    { label: "Loja",     href: "/loja" },
    { label: "Blog",     href: "/blog" },
    { label: "Contato",  href: "https://wa.me/5521986369426" },
  ],

  // Navegação mobile
  mobileNavLinks: [
    { label: "Início",   href: "/" },
    { label: "Sobre",    href: "/sobre" },
    { label: "Loja",     href: "/loja" },
    { label: "Carrinho", href: "/loja/carrinho" },
    { label: "Contato",  href: "https://wa.me/5521986369426" },
  ],

  // Footer — benefícios
  benefits: [
    { title: "Benefício 1", description: "Descrição do benefício" },
    { title: "Benefício 2", description: "Descrição do benefício" },
    { title: "Benefício 3", description: "Descrição do benefício" },
  ],

  // Footer — links
  footerNavLinks: [
    { label: "Início",  href: "/" },
    { label: "Sobre",   href: "/sobre" },
    { label: "Blog",    href: "/blog" },
    { label: "Loja",    href: "/loja" },
    { label: "Contato", href: "https://wa.me/5521986369426" },
  ],
footerDescription:
    'Artesanato feito à mão com carinho e atenção aos detalhes. Pulseiras de miçanga, macramê, toalhas bordadas e presentes personalizados.',

  copyrightTagline:
    '© 2026 Artesanaio — Artesanato feito à mão',

  seo: {
    titulo: 'Artesanaio – Artesanato feito à mão no Rio de Janeiro',
    descricao:
      'Pulseiras de miçanga, macramê artesanal, toalhas bordadas e presentes artesanais feitos à mão no Rio de Janeiro. Peças únicas e personalizadas, com atendimento direto pelo WhatsApp.',
    url: 'https://artesanaio.com.br',
    ogImage: '/og-artesanaio.png',
    keywords: [
      'artesanato',
      'pulseiras de miçanga',
      'macramê artesanal',
      'presentes artesanais',
      'acessórios feitos à mão',
      'Artesanaio',
      'Rio de Janeiro',
      'whatsapp artesanato',
    ],
  },

 theme: {
  bgPrimary:       "#F5F1EB",  // fundo principal (bege claro)
  bgSecondary:     "#E7DED2",  // seções alternadas
  bgTertiary:      "#D6C7B5",  // blocos de destaque
  bgCard:          "#FFFFFF",  // cards brancos (como no site atual)
  bgHover:         "#EFE7DC",
  overlay:         "#00000020",

  textPrimary:     "#3E2C23",  // marrom escuro (títulos)
  textSecondary:   "#5C4033",  // marrom médio
  textTertiary:    "#7A5C4A",  
  textMuted:       "#9C7C65",
  textLight:       "#FFFFFF",
  textHeroMuted:   "#6B4F3A",

  // 🎯 CORES PRINCIPAIS DO CLIENTE
  accent:          "#8B5E3C",  // marrom principal
  accentHover:     "#6F4A2F",
  accentLight:     "#C8A27A",  // dourado/bege

  // botão WhatsApp (mantido fiel ao cliente)
  success:         "#2F7D57",
  error:           "#dc2626",
  info:            "#8B5E3C",

  border:          "#D6C7B5",
  borderLight:     "#E7DED2",

  adminBg:         "#F5F1EB",
  adminText:       "#3E2C23",
  adminBorder:     "#D6C7B5",
}
}