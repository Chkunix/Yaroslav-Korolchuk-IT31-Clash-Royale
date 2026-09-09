age = int(input("Введіть ваш вік: "))
name = str(input("Введіть ваше ім'я: "))

if name == "":
    name = "Anonymouse"

if age <= 0:
    category = "баланда."
elif age <= 6:
    category = "child."
elif age <= 18:
    category = "schoolchild."
elif age <= 64:
    category = "adult."
else:
    category = "senior."

print("Вітаю,", name + "!")
print(f"Ваша категорія: {category}")