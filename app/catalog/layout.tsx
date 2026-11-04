import Link from "next/link";

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Link href="/catalog/fiction">Художня</Link> |{" "}
        <Link href="/catalog/science">Наукова</Link> |{" "}
        <Link href="/catalog/fiction?error=1">Тест помилки</Link>
      </nav>
      {children}
    </div>
  );
}