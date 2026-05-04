// src/client/components/Footer.tsx
'use client'

import Link from "next/link"
import Image from "next/image"
import { Settings } from "lucide-react"
import { siteConfig } from '@/client/config/site.config'

export default function Footer() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`

  return (
    <footer className="w-full">

      {/* BENEFÍCIOS */}
      <div
        className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 py-16 text-center px-4"
        style={{
          backgroundColor: 'var(--color-bg-tertiary)',
          borderTop: '1px solid var(--color-border)',
          color: 'var(--color-text-primary)'
        }}
      >
        <div>
          <h4 className="font-semibold text-lg">Feito à Mão</h4>
          <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
            Cada peça com cuidado artesanal
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Peças Exclusivas</h4>
          <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
            Produção sob encomenda
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Entrega no Brasil</h4>
          <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
            Envios para todo o país
          </p>
        </div>
      </div>

      {/* FOOTER PRINCIPAL */}
      <div
        className="w-full py-16"
        style={{
          background: `linear-gradient(
            to right,
            color-mix(in srgb, var(--color-accent) 80%, black),
            var(--color-accent)
          )`,
          color: 'var(--color-text-light)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* LOGO */}
          <div>
            <Image
              src={siteConfig.logoVertical}
              alt={siteConfig.logoAlt}
              width={160}
              height={80}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed opacity-90">
              {siteConfig.footerDescription}
            </p>

            <div className="flex gap-4 mt-4 opacity-90">
              <span>📷</span>
              <span>💬</span>
            </div>
          </div>

          {/* EXPLORAR */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Explorar</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {siteConfig.footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-70 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>

            <p className="text-sm opacity-80 mb-2">WhatsApp</p>

            <Link
              href={whatsappHref}
              target="_blank"
              className="font-semibold hover:opacity-80"
              style={{ color: 'var(--color-accent-light)' }}
            >
              {siteConfig.whatsappDisplay}
            </Link>

            <p className="mt-4 text-sm opacity-80">
              Atendimento online para todo o Brasil.
            </p>
          </div>

          {/* INPUT */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Receba novidades</h4>

            <p className="text-sm opacity-80 mb-4">
              Fique por dentro das novidades e lançamentos exclusivos.
            </p>

            <div
              className="flex items-center rounded-full px-4 py-2"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-text-light) 10%, transparent)',
                border: '1px solid color-mix(in srgb, var(--color-text-light) 20%, transparent)',
              }}
            >
              <input
                type="text"
                placeholder="Seu WhatsApp"
                className="bg-transparent outline-none text-sm flex-1"
                style={{ color: 'var(--color-text-light)' }}
              />

              <Link
                href={whatsappHref}
                target="_blank"
                className="ml-2 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--color-bg-primary) 30%, transparent)'
                }}
              >
                📲
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        className="flex items-center justify-center gap-2 py-6 text-xs"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-accent) 85%, black)',
          color: 'color-mix(in srgb, var(--color-text-light) 70%, transparent)',
        }}
      >
        <Link
          href="/admin/login"
          className="opacity-60 hover:opacity-100 transition"
          aria-label="Admin"
        >
          <Settings className="w-3 h-3" />
        </Link>

        <span>
          © {new Date().getFullYear()} {siteConfig.nome}
          {siteConfig.copyrightTagline ? ` — ${siteConfig.copyrightTagline}` : ""}
        </span>
      </div>

    </footer>
  )
}