import next from "next";

type Users = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

export default async function UsersPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=8",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Помилка завантаження");
  const users: Users[] = await res.json();

  return (
    <main>
      <h1>Список користувачів</h1>
      {users.map((u) => (
        <article key={u.id}>
          <h2>{u.name}</h2>
          <p>Email: {u.email}</p>
          <p>Місто: {u.address.city}</p>
        </article>
      ))}
    </main>
  );
}