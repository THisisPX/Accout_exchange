import re

with open('assets/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Tabs
css = css.replace('background: #f1f5f9;', 'background: var(--df-bg-panel);')
css = css.replace('linear-gradient(135deg, #3b82f6, #2563eb)', 'var(--df-primary)')
css = css.replace('color: #1e3a5f;', 'color: var(--df-primary);')
css = css.replace('rgba(59, 130, 246, 0.35)', 'var(--df-primary-glow)')

# Other common old colors
css = css.replace('#ffffff', 'var(--df-text-main)')
css = css.replace('#FFFFFF', 'var(--df-text-main)')
css = css.replace('#f9fafb', 'var(--df-bg-panel)')
css = css.replace('#f3f4f6', 'var(--df-border)')
css = css.replace('#e5e7eb', 'var(--df-border)')
css = css.replace('#e2e8f0', 'var(--df-border)')
css = css.replace('#64748b', 'var(--df-text-muted)')
css = css.replace('#475569', 'var(--df-text-muted)')
css = css.replace('#4b5563', 'var(--df-text-muted)')
css = css.replace('#374151', 'var(--df-text-main)')
css = css.replace('#1f2937', 'var(--df-text-main)')
css = css.replace('#111827', 'var(--df-text-main)')
css = css.replace('#3b82f6', 'var(--df-primary)')
css = css.replace('#2563eb', 'var(--df-primary)')

# Some rgba
css = css.replace('rgba(255, 255, 255, 0.7)', 'var(--df-border-light)')

# Table
css = css.replace('background: #f9fafb;', 'background: var(--df-bg-hover);')

# Account Card
css = css.replace('background: linear-gradient(145deg, #1A1A1A 0%, #0A0A0A 100%);', 'background: var(--df-bg-card);')

# Filter Panel
css = css.replace('linear-gradient(145deg, #1A1A1A 0%, #0A0A0A 100%);', 'var(--df-bg-card);')

with open('assets/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Done")