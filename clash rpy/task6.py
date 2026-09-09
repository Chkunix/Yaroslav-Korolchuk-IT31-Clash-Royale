name = input("Введіть ваше ім'я: ")
age = int(input("Введіть ваш вік: "))

in_range = 18 <= age <= 60
is_even = age % 2 == 0
both = in_range and is_even
either = in_range or is_even
years_left = 60 - age

print(f"{name}, вік {age}")
print(f"Вік у діапазоні 18-60: {in_range}")
print(f"Вік парний: {is_even}")
print(f"Обидві умови одночасно: {both}")
print(f"Хоча б одна умова: {either}")
print(f"Років до 60: {years_left}")