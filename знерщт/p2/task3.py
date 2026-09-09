num1 = float(input("Введіть перше число: "))
operator = input("Введіть знак операції: ")
num2 = float(input("Введіть друге число: "))

if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        print("Помилка: дільник не може бути нулем.")
        result = None
elif operator == "//":
    if num2 != 0:
        result = num1 // num2
    else:
        print("Помилка: дільник не може бути нулем.")
        result = None
elif operator == "%":
    if num2 != 0:
        result = num1 % num2
    else:
        print("Помилка: дільник не може бути нулем.")
        result = None
elif operator == "**":
    result = num1 ** num2
else:
    print("Помилка: невідомий знак операції.")
    result = None

if result is not None:
    print(f"{num1} {operator} {num2} = {str(result)}")