num = int(input("Введіть ціле число: "))

if num > 0:
    print("Число додатне.")
    if num % 2 == 0:
        print("Число парне.")
    else:
        print("Число непарне.")
elif num < 0:
    print("Число від'ємне.")
    if num % 2 == 0:
        print("Число парне.")
    else:
        print("Число непарне.")