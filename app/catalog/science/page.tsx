export default async function Science() {
  await new Promise((r) => setTimeout(r, 2000));
  return <h2>Наукова література</h2>;
}