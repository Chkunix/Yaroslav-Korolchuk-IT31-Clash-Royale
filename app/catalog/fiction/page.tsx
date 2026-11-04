let failed = false;

export default async function Fiction({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  await new Promise((r) => setTimeout(r, 2000));

  if (error === "1" && !failed) {
    failed = true;
    throw new Error("Тестова помилка");
  }

  return <h2>Художня література</h2>;
}