"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <p>Не вдалося отримати дані.</p>
      <button onClick={() => reset()}>Спробувати ще раз</button>
    </div>
  );
}