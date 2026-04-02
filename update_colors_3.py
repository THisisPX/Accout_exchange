import re

with open('assets/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Backgrounds
css = re.sub(r'#[A-Fa-f0-9]{3,6}', lambda m: {
    '#f8fafc': 'var(--df-bg-hover)',
    '#f1f5f9': 'var(--df-bg-panel)',
    '#fef3c7': 'var(--df-primary-dim)',
    '#e0e7ff': 'var(--df-primary-dim)',
    '#fafafa': 'var(--df-bg-hover)',
    '#f0f9ff': 'var(--df-bg-hover)',
    '#fcd34d': 'var(--df-primary)',
    '#fbbf24': 'var(--df-primary-hover)',
    '#f59e0b': 'var(--df-primary-hover)',
    '#22d3ee': 'var(--df-secondary)',
    '#06b6d4': 'var(--df-secondary)',
    '#c4b5fd': 'var(--df-primary-dim)',
    '#8b5cf6': 'var(--df-primary)',
    '#fce7f3': 'var(--df-primary-dim)',
    '#fbcfe8': 'var(--df-primary-dim)',
    '#1e3a5f': 'var(--df-bg-panel)',
    '#0f172a': 'var(--df-bg-dark)',
    '#d1d5db': 'var(--df-border)',
    '#9ca3af': 'var(--df-border-light)',
    '#cbd5e1': 'var(--df-border-light)',
    '#bae6fd': 'var(--df-border-light)',
    '#bfdbfe': 'var(--df-border-light)',
    '#6b7280': 'var(--df-text-muted)',
    '#92400e': 'var(--df-text-main)',
    '#dc2626': 'var(--df-primary)',
    '#4338ca': 'var(--df-text-main)',
    '#78350f': 'var(--df-text-main)',
    '#164e63': 'var(--df-text-main)',
    '#5b21b6': 'var(--df-text-main)',
    '#a855f7': 'var(--df-text-main)',
    '#be185d': 'var(--df-text-main)',
    '#a16207': 'var(--df-text-main)',
    '#000000': '#000000',
    '#FFFFFF': '#FFFFFF',
    '#FF5A00': '#FF5A00',
    '#FF8833': '#FF8833',
}.get(m.group(0).lower(), m.group(0)), css)

# Make sure --df-bg-card etc are handled correctly if there's any remaining syntax error.
with open('assets/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Done")