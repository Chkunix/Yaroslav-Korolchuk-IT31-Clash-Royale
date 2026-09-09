day = 17

is_positive = day > 0
is_even = day % 2 == 0
both_conditions = is_positive and is_even

print("day =", day)
print("is_positive =", is_positive)
print("is_even =", is_even)
print("is_positive and is_even =", both_conditions)

print()

month = 3
product = day * month

is_positive2 = product > 0
is_even2 = product % 2 == 0
both_conditions2 = is_positive2 and is_even2

print("product (day * month) =", product)
print("is_positive2 =", is_positive2)
print("is_even2 =", is_even2)
print("is_positive2 and is_even2 =", both_conditions2)