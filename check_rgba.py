import re

with open('assets/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# I will replace any rgba that is not var()
# Let's just find them and print to see what's left
matches = re.findall(r'rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,\s*[0-9.]+\)', css)
unique_matches = set(matches)
for match in unique_matches:
    print(match)
