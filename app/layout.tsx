import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <header>
          <h1>Електронна бібліотека</h1>
          <nav>
            <Link href="/">Головна</Link> |{" "}
            <Link href="/catalog">Каталог книг</Link> |{" "}
            <Link href="/catalog/fiction">Художня література</Link> |{" "}
            <Link href="/catalog/science">Наукова література</Link> |{" "}
            <Link href="/contacts">Контакти</Link>
          </nav>
        </header>
        <hr />
        {children}
        <hr />
        <footer>© 2026 Електронна бібліотека</footer>
      </body>
    </html>
  );
}