//src/client/home/HomePage.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/core/lib/prisma";
import { siteConfig } from "@/client/config/site.config";

export default async function HomePage() {
  const categories = await prisma.blogCategory.findMany({
    where: { showOnHome: true },
    orderBy: { order: "asc" },
    take: 3,
  });

  return (
    <main className="w-full" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>

{/* HERO */}
<section
  className="w-full py-20 px-6 relative overflow-hidden"
  style={{ backgroundColor: 'var(--color-bg-primary)' }}
>

  {/* FUNDO DECORATIVO */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: "url('/bg-artesanaio-hero.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
      backgroundSize: "cover",
      opacity: 0.45,
    }}
  />

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* TEXTO */}
    <div>
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
        Artesanato feito à mão com{" "}
        <span style={{ color: 'var(--color-accent)' }}>amor e propósito.</span>
      </h1>

      <p className="text-lg mb-8 max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
        Pulseiras de miçanga, macramê e acessórios únicos feitos à mão.
        Presentes criativos e delicados para momentos especiais.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          className="px-6 py-3 rounded-lg font-semibold"
          style={{ backgroundColor: 'var(--color-success)', color: 'white' }}
        >
          Falar no WhatsApp
        </a>

        <a
          href="/loja"
          className="px-6 py-3 rounded-lg"
          style={{
            border: '1px solid var(--color-accent)',
            color: 'var(--color-accent)',
          }}
        >
          Ver peças
        </a>
      </div>
    </div>

    {/* CARDS */}
    <div className="flex flex-col gap-4">
      {[
        { icon: "🤍", title: "Feito à mão", desc: "Cada peça é feita manualmente com cuidado." },
        { icon: "💎", title: "Peças exclusivas", desc: "Produtos únicos e autorais." },
        { icon: "🚚", title: "Entrega para todo Brasil", desc: "Envios com segurança." },
      ].map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-4 rounded-xl p-5"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
          }}
        >
          <span className="text-2xl">{item.icon}</span>
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* COMO FUNCIONA */}
<section
  className="py-20 px-6 relative overflow-hidden"
  style={{ backgroundColor: 'var(--color-bg-secondary)' }}
>

  {/* FUNDO DECORATIVO */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: "url('/bg-artesanaio-como-funciona.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
      backgroundSize: "contain",
      opacity: 0.35,
    }}
  />

  <div className="relative max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-semibold mb-4">Como funciona?</h2>

    <p className="mb-12" style={{ color: 'var(--color-text-muted)' }}>
      Do pedido ao recebimento, tudo é feito com cuidado.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { step: "01", title: "Escolha sua peça", desc: "Navegue pela loja e escolha." },
        { step: "02", title: "Fale no WhatsApp", desc: "Finalize seu pedido rapidamente." },
        { step: "03", title: "Receba em casa", desc: "Entrega com segurança para todo Brasil." },
      ].map((item) => (
        <div
          key={item.step}
          className="rounded-xl p-8"
          style={{
            backgroundColor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
          }}
        >
          <span
            className="text-3xl font-bold"
            style={{ color: 'var(--color-accent-light)' }}
          >
            {item.step}
          </span>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            {item.title}
          </h3>

          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* CATEGORIAS (SUBSTITUI NOSSOS TIPOS DE ARTESANATO) */}
{categories.length > 0 && (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">

      <h2 className="text-3xl font-semibold mb-4">
        Conteúdos e inspirações
      </h2>

      <p className="mb-10" style={{ color: 'var(--color-text-muted)' }}>
        Explore ideias, dicas e inspirações para o seu estilo artesanal.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/blog/categoria/${cat.slug}`}
            className="group block rounded-xl p-6 text-left transition hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
              }}
            >
              <span style={{ color: 'var(--color-accent)' }} className="text-xl">
                🧵
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {cat.name}
            </h3>

            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {cat.description ?? "Veja conteúdos relacionados a essa categoria."}
            </p>

            <p
              className="text-sm font-semibold mt-4"
              style={{ color: 'var(--color-accent)' }}
            >
              Explorar →
            </p>
          </Link>
        ))}
      </div>

    </div>
  </section>
)}

      {/* SOBRE */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Peças únicas feitas à mão
            </h2>

            <p style={{ color: 'var(--color-text-muted)' }}>
              Cada criação é feita manualmente com atenção aos detalhes,
              utilizando técnicas artesanais para criar peças únicas e especiais.
            </p>
          </div>

          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image
              src="/artesanato.png"
              alt="Artesanato"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-semibold mb-4">
            Quer uma peça personalizada?
          </h2>

          <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>
            Entre em contato e faça seu pedido direto pelo WhatsApp.
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            className="px-8 py-4 rounded-lg font-semibold"
            style={{ backgroundColor: 'var(--color-success)', color: 'white' }}
          >
            Falar no WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}