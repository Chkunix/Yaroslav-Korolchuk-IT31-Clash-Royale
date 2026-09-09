print("Введіть дату:")
day = int(input("День: "))
month = int(input("Місяць: "))
year = int(input("Рік: "))

if month < 1 or month > 12:
    print(f"Date is invalid: month {month} is out of range (1-12)")
elif year <= 0:
    print(f"Date is invalid: year {year} is not positive")
elif month in [1, 3, 5, 7, 8, 10, 12]:
    if day < 1 or day > 31:
        print(f"Date is invalid: month {month} has only 31 days")
    else:
        print("Date is valid")
        if month == 2:
            if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
                if day < 1 or day > 29:
                    print(f"Date is invalid: month {month} has only 29 days in a leap year")
                else:
                    print("Date is valid")
            else:
                if day < 1 or day > 28:
                    print(f"Date is invalid: month {month} has only 28 days in a non-leap year")
                else:
                    print("Date is valid")
print("Дата введена коректно.")
    