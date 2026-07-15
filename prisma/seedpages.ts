// prisma/seed.ts
import 'dotenv/config'
import { PrismaClient } from '../src/generated/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🧹 Limpando Paginas...')


  await prisma.customPage.deleteMany()

  console.log('✅ Paginas limpas!')

  // ─────────────────────────────────────────
  // 📄 PÁGINAS CUSTOMIZADAS
  // ─────────────────────────────────────────
  await prisma.customPage.createMany({
  data: [
    {
      slug: 'sobre',
      title: 'Sobre a Artesanaio',
      introText:
        'A Artesanaio é uma marca artesanal de Nilópolis, Rio de Janeiro, especializada em acessórios feitos à mão com macramê, miçanga e ponto cruz. Cada peça é criada com cuidado, identidade própria e acabamento artesanal.',
      section1Title: 'Uma marca nascida do amor pelo artesanato',
      section1Text:
        'Localizada na Baixada Fluminense, a Artesanaio nasceu da paixão por transformar técnicas manuais em produtos únicos e cheios de personalidade. Trabalhamos com macramê, miçanga e ponto cruz para criar cordões, pulseiras, cordinhas de celular, chaveiros e toalhinhas personalizadas — tudo feito à mão, com dedicação e carinho em cada detalhe.',
    },
    {
      slug: 'personalizado',
      title: 'Peças feitas sob medida para você',
      introText:
        'Na Artesanaio, cada peça pode ser personalizada de acordo com as suas cores, estilo e ocasião. Encomendas especiais são bem-vindas — basta entrar em contato pelo WhatsApp.',
      section1Title: 'O que pode ser personalizado?',
      section1Text:
        'Cores dos fios, combinações de técnicas, tamanhos e acabamentos podem ser ajustados conforme o pedido. Seja para presentear, usar no dia a dia ou compor um look especial, a Artesanaio cria a peça ideal para cada cliente.',
      faq: [
        {
          pergunta: 'Posso escolher as cores das peças?',
          resposta:
            'Sim! A maioria das peças pode ser feita nas cores que você preferir. Basta informar na hora do pedido pelo WhatsApp.',
        },
        {
          pergunta: 'Vocês fazem encomendas em quantidade?',
          resposta:
            'Sim, aceitamos pedidos em quantidade para eventos, presentes corporativos e kits personalizados. Entre em contato para combinarmos os detalhes.',
        },
        {
          pergunta: 'Qual o prazo para peças personalizadas?',
          resposta:
            'O prazo varia de acordo com a complexidade e a quantidade da encomenda. Em geral, entre 5 e 15 dias úteis após a confirmação do pedido.',
        },
        {
          pergunta: 'Como faço meu pedido personalizado?',
          resposta:
            'É simples! Entre em contato pelo WhatsApp, informe o tipo de peça, as cores desejadas e a ocasião. A gente cuida do resto com muito carinho.',
        },
      ],
    },
  ],
})
console.log('✅ Páginas sobre e personalizado criadas — artesanaio.com.br')

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })