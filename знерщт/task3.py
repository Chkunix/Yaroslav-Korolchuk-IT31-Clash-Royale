name = "Yaroslav"
surname = "Korolchuk"

full_name = name + surname

vowels = "aeiouy"
vowel_count = 0
consonant_count = 0

for letter in full_name:
    if letter.lower() in vowels:
        vowel_count += 1
    else:
        consonant_count += 1

print(f"Голосних: {vowel_count}")
print(f"Приголосних: {consonant_count}")
print(f"Сума: {vowel_count + consonant_count}, довжина рядка: {len(full_name)}")