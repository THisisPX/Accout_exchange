import re

with open('assets/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace :root
new_root = """:root {
  --df-primary: #FF5A00;
  --df-primary-hover: #FF7B00;
  --df-primary-dim: rgba(255, 90, 0, 0.2);
  --df-primary-glow: rgba(255, 90, 0, 0.6);
  --df-secondary: #00E5FF;
  --df-secondary-dim: rgba(0, 229, 255, 0.2);
  --df-bg-dark: #0A0B0D;
  --df-bg-panel: #141518;
  --df-bg-card: #1E2024;
  --df-bg-hover: #2A2C31;
  --df-text-main: #FFFFFF;
  --df-text-muted: #A0A5AB;
  --df-text-dark: #60656B;
  --df-border: rgba(255, 255, 255, 0.1);
  --df-border-light: rgba(255, 255, 255, 0.2);
}"""
css = re.sub(r':root\s*\{[^}]+\}', new_root, css)

# Replace variables usage
css = css.replace('var(--tactical-green)', 'var(--df-primary)')
css = css.replace('var(--tactical-green-dim)', 'var(--df-primary-dim)')
css = css.replace('var(--tactical-green-glow)', 'var(--df-primary-glow)')
css = css.replace('var(--bg-dark)', 'var(--df-bg-dark)')
css = css.replace('var(--bg-dark-secondary)', 'var(--df-bg-panel)')
css = css.replace('var(--bg-military)', 'var(--df-bg-card)')
css = css.replace('var(--bg-steel)', 'var(--df-bg-hover)')
css = css.replace('var(--warning-orange)', 'var(--df-primary)')
css = css.replace('var(--text-primary)', 'var(--df-text-main)')
css = css.replace('var(--text-secondary)', 'var(--df-text-muted)')
css = css.replace('var(--text-dim)', 'var(--df-text-muted)')

# Fix orphaned code blocks
# Between .nav a.active::before and .hero
bad_code1 = """  color: #f8fafc;
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3), 0 4px 12px rgba(0, 0, 0, 0.3);
}
.nav a:hover::after {
  width: 60%;
}
.nav a.active {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(139, 92, 246, 0.3));
  color: #ffffff;
  border: 1px solid rgba(56, 189, 248, 0.5);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4), 0 0 40px rgba(139, 92, 246, 0.2);
}
.nav a.active::before {
  opacity: 1;
}"""
css = css.replace(bad_code1, '')

# Hardcoded colors replacement to df.qq.com style
css = css.replace('rgba(0, 255, 136, 0.02)', 'var(--df-primary-dim)')
css = css.replace('rgba(0, 255, 136, 0.03)', 'var(--df-border)')
css = css.replace('#0A0A0A', 'var(--df-bg-dark)')
css = css.replace('#1A1A1A', 'var(--df-bg-panel)')

# Button colors
css = css.replace('rgba(255, 107, 53, 0.1)', 'var(--df-primary-dim)')
css = css.replace('rgba(255, 107, 53, 0.3)', 'var(--df-border-light)')

# Update specific hardcoded gradients and shadows
css = re.sub(r'linear-gradient\(135deg, #f0f9ff 0%, #38bdf8 30%, #818cf8 60%, #c084fc 100%\)', 'linear-gradient(135deg, #FFFFFF 0%, #FF5A00 50%, #FF8833 100%)', css)
css = re.sub(r'rgba\(56, 189, 248, [0-9.]+\)', 'var(--df-primary-glow)', css)
css = re.sub(r'rgba\(139, 92, 246, [0-9.]+\)', 'var(--df-primary-dim)', css)
css = re.sub(r'rgba\(14, 165, 233, [0-9.]+\)', 'var(--df-primary-glow)', css)
css = re.sub(r'rgba\(0, 255, 136, [0-9.]+\)', 'var(--df-primary-glow)', css)

with open('assets/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Done")
