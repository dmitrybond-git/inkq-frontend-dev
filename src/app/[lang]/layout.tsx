import React from 'react'
import Link from 'next/link'

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const { lang } = params
  const toggleLang = lang === 'ru' ? 'en' : 'ru'

  return (
    <>
      <header className="w-full px-6 py-4 flex justify-between items-center shadow bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-tight">Inkq</h1>
        <Link href={`/${toggleLang}/search`} className="text-sm text-blue-600 hover:underline">
          Switch to {toggleLang.toUpperCase()}
        </Link>
      </header>

      <main className="p-4 max-w-4xl w-full mx-auto">{children}</main>

      <footer className="text-center text-xs text-gray-400 py-6">
        &copy; {new Date().getFullYear()} InkQ
      </footer>
    </>
  )
}