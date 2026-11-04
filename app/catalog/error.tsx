"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <div>
      <p>Помилка: {error.message}</p>
      <button
        onClick={() =>
          startTransition(() => {
            router.refresh();
            reset();
          })
        }
      >
        Спробувати ще раз
      </button>
    </div>
  );
}   