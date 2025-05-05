// src/app/[lang]/page.tsx
import { redirect } from 'next/navigation'

export default function LangRootRedirect({ params }: { params: { lang: string } }) {
  redirect(`/${params.lang}/search`)
}
