surname = "Іваненко"          

a = len(surname)              
b = 15                        
c = 7                        


result1 = a > c
result2 = b == b
result3 = 1 <= a <= 20

result4 = a < c 
result5 = b >= 1000
result6 = a != a 

print("result1 (a > c) =", result1, type(result1))
print("result2 (b == b) =", result2, type(result2))
print("result3 (1 <= a <= 20) =", result3, type(result3))
print("result4 (a < c) =", result4, type(result4))
print("result5 (b >= 1000) =", result5, type(result5))
print("result6 (a != a) =", result6, type(result6))