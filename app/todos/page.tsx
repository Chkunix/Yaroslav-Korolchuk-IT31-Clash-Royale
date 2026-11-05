type Todo = { id: number; title: string; completed: boolean };

export default async function TodosPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Помилка завантаження");
  const todos: Todo[] = await res.json();

  return (
    <main>
      <h1>Список завдань</h1>
      {todos.map((t) => (
        <p key={t.id}>
          {t.title} — {t.completed ? "виконано" : "не виконано"}
        </p>
      ))}
    </main>
  );
}