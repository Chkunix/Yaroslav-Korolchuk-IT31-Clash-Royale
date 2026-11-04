export default async function Catalog() {
  await new Promise((r) => setTimeout(r, 2000));
  return <h2>Каталог книг</h2>;
}