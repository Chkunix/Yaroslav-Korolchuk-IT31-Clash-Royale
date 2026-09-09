name = "Yaroslav"
surname = "Korolchuk"
group = "IT-31"
d = 3
m = 6
y = 2009
c = 9

input_date = int(input("Введіть вашу дату у вигляді ддммрррр (наприклад 03062009): "))

if input_date > 0:
    totall = 0
    count = 0
    max_digit = None
    min_digit = None
    reversed_num = 0

    while input_date > 0:
        digit = input_date % 10

        totall = totall + digit
        count += 1

        if max_digit is None or digit > max_digit:
            max_digit = digit
        if min_digit is None or digit < min_digit:
            min_digit = digit

        reversed_num = reversed_num * 10 + digit

        input_date = input_date // 10

    print(f"Кількість цифр: {count}")
    print(f"Сума цифр: {totall}")
    print(f"Найбільша цифра: {max_digit}")
    print(f"Найменша цифра: {min_digit}")
    print(f"Число у зворотному порядку: {reversed_num}")
else:
    print("Ви ввели некоректну дату (0 або від'ємне число).")