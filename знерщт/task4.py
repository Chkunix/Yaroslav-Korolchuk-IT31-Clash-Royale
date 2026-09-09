attempts = 0

while True:
    attempts += 1
    value = input("Введіть бал (0-100): ")

    if not value.lstrip("-").isdigit():
        print("Це не ціле число. Спробуйте ще раз.")
        continue

    score = int(value)

    if score < 0:
        print("Бал не може бути менше нуля. Спробуйте ще раз.")
        continue
    elif score > 100:
        print("Бал не може бути більше ста. Спробуйте ще раз.")
        continue
    else:
        break

print(f"Кількість спроб: {attempts}")

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Оцінка: {grade}")