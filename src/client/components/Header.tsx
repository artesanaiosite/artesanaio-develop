// src/client/components/Header.tsx
'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '@/core/context/CartContext'
import { siteConfig } from '@/client/config/site.config'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { totalItems } = useCart()
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`

  return (
    <header
      className="w-full fixed top-0 z-50 backdrop-blur"
      style={{
        background: `linear-gradient(
          to right,
          color-mix(in srgb, var(--color-accent) 80%, black),
          var(--color-accent)
        )`,
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        <Image
          src={siteConfig.logoHorizontal}
          alt={siteConfig.logoAlt}
          width={140}
          height={60}
        />

        {/* Desktop */}
        <nav className="hidden md:flex gap-8 text-sm text-white">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-70 transition">
              {link.label}
            </Link>
          ))}

          <Link href="/loja/carrinho" className="inline-flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Carrinho
            {totalItems > 0 && (
              <span className="bg-white text-black text-[0.65rem] px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          className="hidden md:block px-4 py-2 rounded-lg font-semibold bg-white text-black hover:opacity-80 transition"
        >
          {siteConfig.headerCta}
        </a>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden text-white">
          <Link href="/loja">Loja</Link>

          <Link href="/loja/carrinho" className="relative">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-white">
          {siteConfig.mobileNavLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}