type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=8", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Помилка завантаження");
  }

  const users: User[] = await res.json();

  return (
    <main>
      <h1>Список користувачів</h1>
      {users.map((u) => (
        <div key={u.id}>
          <p>Ім'я: {u.name}</p>
          <p>Email: {u.email}</p>
          <p>Місто: {u.address.city}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}