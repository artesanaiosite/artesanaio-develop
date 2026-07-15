// prisma/seedBlogArtesanato.ts

import 'dotenv/config'
import { PrismaClient } from '../src/generated/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🧹 Resetando blog...')

  await prisma.postSEO.deleteMany()
  await prisma.post.deleteMany()
  await prisma.blogCategory.deleteMany()

  console.log('✅ Blog limpo!')

  // ─────────────────────────────────────────
  // 📂 CATEGORIAS COM IMAGEM (HOME)
  // ─────────────────────────────────────────
  const [presentes, acessorios, estilo] = await Promise.all([
    prisma.blogCategory.create({
      data: {
        name: 'Presentes Artesanais',
        slug: 'presentes-artesanais',
        description: 'Ideias de presentes artesanais personalizados e feitos à mão.',
        image: '/produtos/toalha-bordada-nome-personalizado.jpg',
        showOnHome: true,
        featured: true,
        order: 1,
      },
    }),

    prisma.blogCategory.create({
      data: {
        name: 'Acessórios Artesanais',
        slug: 'acessorios-artesanais',
        description: 'Pulseiras, colares e acessórios artesanais exclusivos.',
        image: '/produtos/colar-ajustavel-madeira-micanga.jpg',
        showOnHome: true,
        featured: false,
        order: 2,
      },
    }),

    prisma.blogCategory.create({
      data: {
        name: 'Estilo e Segurança',
        slug: 'estilo-e-seguranca',
        description: 'Acessórios que unem estilo, proteção e praticidade no dia a dia.',
        image: '/produtos/Cordinha-de-celular-phone-strap-guarda-celular-salva-celular-pulseira-de-celular-de-miçanga.jpg',
        showOnHome: true,
        featured: false,
        order: 3,
      },
    }),
  ])

  // ─────────────────────────────────────────
  // 📝 POSTS (SEO FORTE)
  // ─────────────────────────────────────────
  const posts = [
    // 1. Pulseiras em macramê
    {
      title:
        'Pulseiras em Macramê: O Acessório Artesanal que Combina com Qualquer Estilo',
      slug: 'pulseiras-em-macrame-acessorio-artesanal',
      excerpt:
        'Descubra por que as pulseiras em macramê artesanal conquistaram o Brasil e como escolher a peça perfeita para expressar sua personalidade.',
      content: `
## Pulseiras em macramê: o acessório artesanal que conquistou o Brasil

As pulseiras em macramê deixaram de ser apenas um detalhe artesanal para se tornarem verdadeiros símbolos de estilo, autenticidade e conexão com o feito à mão. Produzidas com técnicas ancestrais de nós manuais, cada peça carrega exclusividade, delicadeza e história.

Diferente dos acessórios industrializados, as pulseiras artesanais em macramê possuem personalidade própria. Cada nó é cuidadosamente trabalhado, criando combinações únicas que valorizam desde looks casuais até produções mais sofisticadas.

Outro grande diferencial é a versatilidade. Você pode usar pulseiras de macramê sozinhas para um visual minimalista ou misturadas com outros acessórios para criar composições modernas e cheias de identidade.

As versões com missangas coloridas estão entre as favoritas de quem ama acessórios criativos e vibrantes. Já os modelos em tons neutros conquistam quem prefere elegância discreta e atemporal.

Além da beleza, comprar artesanato é uma forma de apoiar o trabalho manual e incentivar pequenos produtores brasileiros. Cada compra representa valorização da arte, do cuidado e do amor colocado em cada detalhe.

Se você procura um acessório que vá além da moda e carregue significado, as pulseiras artesanais em macramê são a escolha perfeita.
      `,
      categoryId: acessorios.id,
      seo: {
        metaTitle:
          'Pulseiras em macramê artesanal: estilo, exclusividade e significado',
        metaDesc:
          'Saiba por que as pulseiras em macramê artesanal conquistaram o Brasil e como escolher o modelo ideal para o seu estilo.',
        keywords:
          'pulseiras em macramê, pulseira artesanal, acessórios artesanais, pulseiras com missangas, pulseiras femininas artesanais, macramê brasileiro, pulseiras feitas à mão, acessórios boho, pulseiras coloridas, artesanato brasileiro',
      },
    },

    // 2. Colares artesanais com missangas
    {
      title:
        'Colares Artesanais com Missangas: Tendência Atemporal que Nunca Sai de Moda',
      slug: 'colares-artesanais-com-missangas',
      excerpt:
        'Conheça os colares artesanais com missangas que unem delicadeza, autenticidade e estilo em uma única peça.',
      content: `
## Colares artesanais com missangas: delicadeza e autenticidade

Os colares artesanais com missangas conquistaram espaço definitivo no universo da moda por transmitirem autenticidade e exclusividade. Mais do que acessórios, essas peças representam criatividade, cuidado manual e originalidade.

Cada colar artesanal possui combinações únicas de cores, formatos e texturas. Isso faz com que nenhuma peça seja exatamente igual à outra, tornando cada acessório especial para quem usa.

Os modelos em macramê com detalhes em missangas são perfeitos para compor looks modernos, leves e elegantes. Eles combinam facilmente com vestidos, camisetas básicas, roupas praianas e até produções sofisticadas.

Outra vantagem dos colares feitos à mão é a durabilidade. Quando produzidos artesanalmente com materiais de qualidade, eles oferecem resistência sem perder a delicadeza visual.

Além disso, acessórios artesanais carregam um valor emocional muito maior do que produtos produzidos em massa. Eles contam histórias, representam tradições e aproximam as pessoas da arte manual.

Escolher um colar artesanal é investir em estilo, exclusividade e na valorização do trabalho feito com carinho.
      `,
      categoryId: acessorios.id,
      seo: {
        metaTitle:
          'Colares artesanais com missangas: delicadeza e autenticidade',
        metaDesc:
          'Descubra colares artesanais com missangas feitos à mão, cheios de estilo, exclusividade e valor emocional.',
        keywords:
          'colar artesanal, colares com missangas, colar em macramê, acessórios femininos artesanais, colares boho, colares feitos à mão, bijuterias artesanais, moda artesanal, colares delicados, artesanato brasileiro',
      },
    },

    // 3. Toalhinhas bordadas
    {
      title:
        'Toalhinhas Bordadas em Ponto Cruz: Charme e Delicadeza para Sua Casa',
      slug: 'toalhinhas-bordadas-ponto-cruz',
      excerpt:
        'Transforme sua decoração com toalhinhas artesanais bordadas à mão em ponto cruz.',
      content: `
## Toalhinhas bordadas em ponto cruz: charme para a casa inteira

As toalhinhas bordadas em ponto cruz são verdadeiros clássicos do artesanato brasileiro. Elas trazem aconchego, delicadeza e personalidade para qualquer ambiente da casa.

Muito além da decoração, essas peças carregam memória afetiva e tradição. O bordado em ponto cruz atravessa gerações, mantendo viva uma arte manual cheia de significado.

As toalhinhas artesanais podem ser utilizadas em mesas, aparadores, cozinhas, banheiros e até como peças decorativas especiais em eventos e celebrações.

O grande diferencial está nos detalhes. Cada ponto é feito manualmente, com precisão e cuidado, criando desenhos delicados que tornam cada peça única.

Além da estética encantadora, as toalhinhas bordadas também são excelentes opções de presente. Elas demonstram carinho, sofisticação e valorização do trabalho artesanal.

Se você busca uma decoração acolhedora e cheia de personalidade, investir em peças bordadas em ponto cruz é uma escolha que nunca sai de moda.
      `,
      categoryId: presentes.id,
      seo: {
        metaTitle:
          'Toalhinhas bordadas em ponto cruz: delicadeza para sua casa',
        metaDesc:
          'Veja como as toalhinhas bordadas em ponto cruz deixam a decoração mais aconchegante, charmosa e cheia de personalidade.',
        keywords:
          'toalhinhas bordadas, ponto cruz, toalhinha artesanal, decoração artesanal, bordado ponto cruz, toalhas decorativas, artesanato brasileiro, decoração delicada, peças bordadas à mão, toalhinhas personalizadas',
      },
    },

    // 4. Chaveiros bordados
    {
      title:
        'Chaveiros Bordados: Pequenos Detalhes que Fazem Grande Diferença',
      slug: 'chaveiros-bordados-artesanais',
      excerpt:
        'Veja como os chaveiros artesanais bordados se tornaram tendência em presentes criativos e personalizados.',
      content: `
## Chaveiros bordados: pequenos no tamanho, grandes no significado

Os chaveiros bordados conquistaram quem busca acessórios criativos, delicados e cheios de personalidade. Pequenos no tamanho, mas enormes em significado, eles são perfeitos para presentear ou complementar o dia a dia com estilo.

Produzidos artesanalmente em ponto cruz, cada chaveiro recebe atenção especial em cada detalhe. Isso torna cada peça única e muito mais especial do que produtos industrializados.

Os modelos personalizados estão entre os mais procurados. Nomes, iniciais, flores, personagens e frases delicadas transformam os chaveiros em lembranças afetivas inesquecíveis.

Além de funcionais, eles também são usados como acessórios decorativos em bolsas, mochilas e nécessaires.

Presentear com artesanato transmite carinho e autenticidade. É uma maneira de demonstrar cuidado através de algo produzido manualmente com dedicação.

Os chaveiros bordados unem utilidade, beleza e valor emocional em uma única peça.
      `,
      categoryId: presentes.id,
      seo: {
        metaTitle:
          'Chaveiros bordados artesanais: presentes criativos e personalizados',
        metaDesc:
          'Conheça chaveiros bordados em ponto cruz, perfeitos para presentes criativos, lembrancinhas artesanais e acessórios delicados.',
        keywords:
          'chaveiro bordado, chaveiro em ponto cruz, chaveiro artesanal, chaveiros personalizados, artesanato bordado, lembrancinhas artesanais, presentes personalizados, chaveiros feitos à mão, acessórios artesanais, ponto cruz artesanal',
      },
    },

    // 5. Artesanato feito à mão
    {
      title:
        'Artesanato Feito à Mão: Por Que Produtos Artesanais Têm Tanto Valor?',
      slug: 'artesanato-feito-a-mao-valor',
      excerpt:
        'Entenda por que peças artesanais carregam exclusividade, emoção e autenticidade.',
      content: `
## Artesanato feito à mão: produtos com alma e significado

Em um mundo dominado pela produção em massa, o artesanato feito à mão se destaca pela autenticidade e pelo valor emocional presente em cada detalhe.

Quando você compra uma peça artesanal, não está adquirindo apenas um produto. Está levando história, dedicação, criatividade e horas de trabalho manual.

Pulseiras em macramê, colares com missangas, toalhinhas bordadas e chaveiros em ponto cruz possuem algo que máquinas jamais conseguem reproduzir: identidade.

Cada peça artesanal é única. Pequenas variações tornam os produtos exclusivos e especiais, valorizando ainda mais quem os produz e quem os utiliza.

Outro fator importante é a conexão emocional. Produtos feitos à mão despertam sensação de aconchego, carinho e proximidade.

Além disso, consumir artesanato fortalece pequenos empreendedores e ajuda a manter técnicas tradicionais vivas no Brasil.

Valorizar o artesanal é escolher produtos com alma, significado e autenticidade.
      `,
      categoryId: estilo.id,
      seo: {
        metaTitle:
          'Artesanato feito à mão: por que produtos artesanais têm tanto valor',
        metaDesc:
          'Descubra por que peças artesanais feitas à mão carregam exclusividade, emoção e autenticidade.',
        keywords:
          'artesanato feito à mão, produtos artesanais, artesanato brasileiro, peças artesanais, acessórios artesanais, decoração artesanal, presentes artesanais, trabalho manual, artesanato exclusivo, feito à mão',
      },
    },

    // 6. Presentes artesanais
    {
      title:
        'Presentes Artesanais: Ideias Criativas para Surpreender Quem Você Ama',
      slug: 'presentes-artesanais-ideias-criativas',
      excerpt:
        'Descubra presentes feitos à mão que unem beleza, carinho e exclusividade.',
      content: `
## Presentes artesanais: ideias criativas para surpreender

Encontrar um presente especial nem sempre é fácil. Por isso, os produtos artesanais vêm ganhando destaque entre pessoas que desejam surpreender de forma criativa e significativa.

Presentes feitos à mão carregam emoção. Eles demonstram cuidado, atenção aos detalhes e valorização do trabalho artesanal.

Pulseiras em macramê, colares com missangas, toalhinhas bordadas e chaveiros personalizados são opções perfeitas para aniversários, datas especiais, lembranças afetivas e até presentes corporativos.

Além de lindos, esses produtos possuem exclusividade. Afinal, peças artesanais dificilmente são idênticas, tornando cada presente único.

Outro diferencial é a possibilidade de personalização. Bordados com nomes, combinações de cores especiais e modelos exclusivos tornam o presente ainda mais memorável.

Quem recebe um produto artesanal sente o carinho presente em cada detalhe da peça.

Se você quer fugir dos presentes comuns e criar momentos inesquecíveis, apostar no artesanato é a melhor escolha.
      `,
      categoryId: presentes.id,
      seo: {
        metaTitle:
          'Presentes artesanais: ideias criativas e personalizadas para surpreender',
        metaDesc:
          'Conheça ideias de presentes artesanais feitos à mão, perfeitos para surpreender com carinho e exclusividade.',
        keywords:
          'presentes artesanais, presentes personalizados, artesanato brasileiro, pulseiras artesanais, colares artesanais, chaveiros bordados, presentes criativos, produtos feitos à mão, presentes delicados, lembranças artesanais',
      },
    },
  ]

  for (const p of posts) {
    await prisma.post.create({
      data: {
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        content: p.content,
        categoryId: p.categoryId,
        published: true,
        seo: {
          create: p.seo,
        },
      },
    })
  }

  console.log('🎉 Blog com imagens e SEO pronto!')
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end()
  })