grade=int(input("Введіть бал: "))
missed_classes=int(input("Введіть кількість пропущених занять: "))
if grade<0 or grade>100:
    print("Помилка: бал повинен бути від 0 до 100.")
if missed_classes>16*0.3:
    print("Попередження: недопуск через пропущені заняття.")    
elif grade>=90:
    letter_grade="A"
    ects="NEEERD"
elif grade>=82:
    letter_grade="B"
    ects="GOOD"
elif grade>=74:
    letter_grade="C"
    ects="GOOD"
elif grade>=64:
    letter_grade="D"
    ects="SATISFACTORY"
elif grade>=60:
    letter_grade="E"
    ects="SATISFACTORY"
elif grade>=0:
    letter_grade="F"
    ects="FAIL"
else:
    letter_grade="Unknown"
    ects="Unknown"


print(f"Бал: {grade}, Оцінка: {letter_grade}, ECTS: {ects}")