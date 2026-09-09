d = 3
c = 9
n = d * c

print(f"n = {n}")

divisors = []
divisor_sum = 0

for i in range(1, n + 1):
    if n % i == 0:
        divisors.append(i)
        divisor_sum += i

print(f"Дільники числа {n}: {divisors}")
print(f"Кількість дільників: {len(divisors)}")
print(f"Сума дільників: {divisor_sum}")

if n < 2:
    print(f"{n} не є простим числом.")
else:
    for i in range(2, n):
        if n % i == 0:
            print(f"{n} не є простим числом, бо ділиться на {i}.")
            break
    else:
        print(f"{n} є простим числом.")

primes = []

for num in range(2, n + 1):
    is_prime = True
    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break