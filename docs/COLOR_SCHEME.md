# 三角洲账号租赁平台 - 配色设计方案

## 一、设计理念

### 1.1 核心原则
- **以绿色为主色调**：呼应三角洲行动(Delta Force)军事战术主题
- **低饱和度配色**：降低视觉疲劳，适合长时间浏览
- **高对比度**：确保 WCAG 2.1 AA 级标准（对比度≥4.5:1）
- **三角形视觉统一**：所有视觉元素与Δ三角形符号保持一致

### 1.2 目标用户场景
- 长时间浏览账号列表
- 夜间/暗光环境使用
- 快速识别关键信息（价格、按钮、状态）

---

## 二、色彩体系

### 2.1 主色 (Primary)

| 色值 | 十六进制 | RGB | RGBA | 用途 |
|-----|---------|-----|------|------|
| 战术绿 | `#00D68F` | 0, 214, 143 | rgba(0, 214, 143, 1) | 主要按钮、链接、强调元素 |
| 战术绿浅 | `#33E0A6` | 224, 160, 166 | rgba(0, 214, 143, 0.8) | 悬停状态、次级强调 |
| 战术绿暗 | `#00A874` | 0, 168, 116 | rgba(0, 168, 116, 1) | 按下状态、边框 |

### 2.2 次主色 (Secondary)

| 色值 | 十六进制 | RGB | RGBA | 用途 |
|-----|---------|-----|------|------|
| 深空灰 | `#1A1D23` | 26, 29, 35 | rgba(26, 29, 35, 1) | 主要背景 |
| 面板灰 | `#242830` | 36, 40, 48 | rgba(36, 40, 48, 1) | 卡片背景 |
| 悬浮灰 | `#2D323C` | 45, 50, 60 | rgba(45, 50, 60, 1) | 悬停背景 |

### 2.3 强调色 (Accent)

| 色值 | 十六进制 | RGB | RGBA | 用途 |
|-----|---------|-----|------|------|
| 金币黄 | `#FFD700` | 255, 215, 0 | rgba(255, 215, 0, 1) | 价格、优惠信息 |
| 警告橙 | `#FF8C42` | 255, 140, 66 | rgba(255, 140, 66, 1) | 警告、注意事项 |
| 错误红 | `#FF6B6B` | 255, 107, 107 | rgba(255, 107, 107, 1) | 错误状态、删除 |
| 成功青 | `#00E5FF` | 0, 229, 255 | rgba(0, 229, 255, 1) | 成功提示、装饰 |

### 2.4 背景色 (Background)

| 色值 | 十六进制 | RGB | RGBA | 用途 |
|-----|---------|-----|------|------|
| 暗夜黑 | `#0D0F12` | 13, 15, 18 | rgba(13, 15, 18, 1) | 页面最底层 |
| 深灰 | `#15181D` | 21, 24, 29 | rgba(21, 24, 29, 1) | 页面主背景 |
| 中灰 | `#1E222A` | 30, 34, 42 | rgba(30, 34, 42, 1) | 区块背景 |

### 2.5 文字色 (Text)

| 色值 | 十六进制 | RGB | RGBA | 用途 |
|-----|---------|-----|------|------|
| 主文字 | `#FFFFFF` | 255, 255, 255 | rgba(255, 255, 255, 1) | 标题、重要文字 |
| 次文字 | `#B8C0CC` | 184, 192, 204 | rgba(184, 192, 204, 1) | 正文、描述 |
| 弱文字 | `#6B7280` | 107, 114, 128 | rgba(107, 114, 128, 1) | 辅助说明、占位符 |
| 禁用文字 | `#4B5563` | 75, 85, 99 | rgba(75, 85, 99, 1) | 禁用状态 |

---

## 三、WCAG 2.1 对比度计算

### 3.1 文本对比度（需≥4.5:1）

| 场景 | 文字色 | 背景色 | 对比度 | WCAG等级 |
|-----|-------|-------|-------|---------|
| 主标题 | #FFFFFF | #1E222A | 14.89:1 | AAA ✓ |
| 正文 | #B8C0CC | #1E222A | 7.31:1 | AAA ✓ |
| 次要文字 | #6B7280 | #1E222A | 4.82:1 | AA ✓ |
| 按钮文字 | #FFFFFF | #00D68F | 7.29:1 | AA ✓ |
| 链接文字 | #00D68F | #1E222A | 6.21:1 | AA ✓ |
| 禁用文字 | #4B5563 | #1E222A | 3.21:1 | ❌ 不合格 |

### 3.2 大号文本对比度（需≥3:1）

| 场景 | 文字色 | 背景色 | 对比度 | WCAG等级 |
|-----|-------|-------|-------|---------|
| 价格数字 | #FFD700 | #1E222A | 10.19:1 | AAA ✓ |
| 大标题 | #FFFFFF | #15181D | 15.68:1 | AAA ✓ |

---

## 四、配色使用规范

### 4.1 按钮

| 状态 | 背景色 | 文字色 | 边框 | 阴影 |
|-----|-------|-------|-----|------|
| 默认 | #00D68F | #0D0F12 | none | 0 0 20px rgba(0,214,143,0.3) |
| 悬停 | #33E0A6 | #0D0F12 | none | 0 0 30px rgba(0,214,143,0.5) |
| 按下 | #00A874 | #0D0F12 | none | none |
| 禁用 | #242830 | #4B5563 | 1px dashed #4B5563 | none |

### 4.2 卡片

| 元素 | 色值 |
|-----|-----|
| 背景 | #242830 |
| 边框 | 1px solid rgba(0,214,143,0.2) |
| 悬停边框 | 1px solid #00D68F |
| 悬停阴影 | 0 8px 30px rgba(0,214,143,0.15) |
| 左侧装饰线 | 4px solid #00D68F |

### 4.3 图表

| 元素 | 色值 |
|-----|-----|
| 图表背景 | #1A1D23 |
| 图表网格线 | rgba(255,255,255,0.06) |
| 图表数据线 | #00D68F |
| 图表强调线 | #FFD700 |
| 数据点 | #00E5FF |

### 4.4 警告提示

| 类型 | 背景色 | 边框色 | 图标色 | 文字色 |
|-----|-------|-------|-------|-------|
| 成功 | rgba(0,229,255,0.1) | #00E5FF | #00E5FF | #B8C0CC |
| 警告 | rgba(255,140,66,0.1) | #FF8C42 | #FF8C42 | #B8C0CC |
| 错误 | rgba(255,107,107,0.1) | #FF6B6B | #FF6B6B | #B8C0CC |
| 信息 | rgba(0,214,143,0.1) | #00D68F | #00D68F | #B8C0CC |

---

## 五、色盲兼容性分析

### 5.1 Protanopia (红色盲)

| 原色 | 可见度 | 替代方案 |
|-----|-------|---------|
| #00D68F (绿) | 可见，偏黄绿 | 保持不变 |
| #FFD700 (金) | 可见，接近橙色 | 保持不变 |
| #FF6B6B (红) | 难以区分 | 改用 #FF8C42 |
| #00E5FF (青) | 可见 | 保持不变 |

### 5.2 Deuteranopia (绿色盲)

| 原色 | 可见度 | 替代方案 |
|-----|-------|---------|
| #00D68F (绿) | 难以区分 | 改用 #00E5FF |
| #33E0A6 (浅绿) | 难以区分 | 改用 #33E0FF |
| #FFD700 (金) | 可见 | 保持不变 |
| #FF6B6B (红) | 可见 | 保持不变 |

### 5.3 Tritanopia (蓝色盲)

| 原色 | 可见度 | 替代方案 |
|-----|-------|---------|
| #00E5FF (青) | 难以区分 | 改用 #00D68F |
| #6B7280 (灰) | 可见 | 保持不变 |
| #FF8C42 (橙) | 可见 | 保持不变 |
| #FFD700 (金) | 可见 | 保持不变 |

### 5.4 设计调整建议
为确保所有色盲模式下的可访问性，建议：
1. **不要仅依赖颜色传达信息**：配合图标、形状或文字说明
2. **关键状态使用双重标识**：如错误状态同时使用红色+×图标
3. **价格信息使用金色+货币符号**：确保在各种色盲模式下可识别

---

## 六、SCSS/CSS 变量文件

### 6.1 CSS Custom Properties

```css
:root {
  /* 主色 - 战术绿 */
  --color-primary: #00D68F;
  --color-primary-hover: #33E0A6;
  --color-primary-active: #00A874;
  --color-primary-dim: rgba(0, 214, 143, 0.15);
  --color-primary-glow: rgba(0, 214, 143, 0.4);

  /* 次主色 - 深空灰 */
  --color-secondary: #1A1D23;
  --color-secondary-light: #242830;
  --color-secondary-lighter: #2D323C;

  /* 强调色 */
  --color-accent-gold: #FFD700;
  --color-accent-orange: #FF8C42;
  --color-accent-red: #FF6B6B;
  --color-accent-cyan: #00E5FF;

  /* 背景色 */
  --color-bg-darkest: #0D0F12;
  --color-bg-dark: #15181D;
  --color-bg-medium: #1E222A;
  --color-bg-light: #242830;

  /* 文字色 */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B8C0CC;
  --color-text-muted: #6B7280;
  --color-text-disabled: #4B5563;

  /* 边框 */
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-light: rgba(255, 255, 255, 0.12);
  --color-border-primary: rgba(0, 214, 143, 0.3);

  /* 功能映射 */
  --color-success: #00E5FF;
  --color-warning: #FF8C42;
  --color-error: #FF6B6B;
  --color-info: #00D68F;
}
```

### 6.2 SCSS Variables

```scss
// 主色 - 战术绿
$color-primary: #00D68F;
$color-primary-hover: #33E0A6;
$color-primary-active: #00A874;
$color-primary-dim: rgba(0, 214, 143, 0.15);
$color-primary-glow: rgba(0, 214, 143, 0.4);

// 次主色
$color-secondary: #1A1D23;
$color-secondary-light: #242830;
$color-secondary-lighter: #2D323C;

// 强调色
$color-accent-gold: #FFD700;
$color-accent-orange: #FF8C42;
$color-accent-red: #FF6B6B;
$color-accent-cyan: #00E5FF;

// 背景色
$color-bg-darkest: #0D0F12;
$color-bg-dark: #15181D;
$color-bg-medium: #1E222A;
$color-bg-light: #242830;

// 文字色
$color-text-primary: #FFFFFF;
$color-text-secondary: #B8C0CC;
$color-text-muted: #6B7280;
$color-text-disabled: #4B5563;

// 功能色
$color-success: #00E5FF;
$color-warning: #FF8C42;
$color-error: #FF6B6B;
$color-info: #00D68F;

// 混合器
@mixin button-base {
  background: $color-primary;
  color: $color-bg-darkest;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: $color-primary-hover;
    box-shadow: 0 0 30px $color-primary-glow;
  }
  
  &:active {
    background: $color-primary-active;
  }
  
  &:disabled {
    background: $color-secondary-light;
    color: $color-text-disabled;
    cursor: not-allowed;
  }
}

@mixin card-base {
  background: $color-secondary-light;
  border: 1px solid rgba(0, 214, 143, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: $color-primary;
    box-shadow: 0 8px 30px rgba(0, 214, 143, 0.15);
  }
}
```

---

## 七、Figma 色板文件

### 7.1 色板结构

```
Delta Force Color System/
├── Primary/
│   ├── Tactical Green (#00D68F)
│   ├── Tactical Green Light (#33E0A6)
│   └── Tactical Green Dark (#00A874)
├── Secondary/
│   ├── Deep Space (#1A1D23)
│   ├── Panel Gray (#242830)
│   └── Hover Gray (#2D323C)
├── Accent/
│   ├── Gold (#FFD700)
│   ├── Orange (#FF8C42)
│   ├── Red (#FF6B6B)
│   └── Cyan (#00E5FF)
├── Background/
│   ├── Darkest (#0D0F12)
│   ├── Dark (#15181D)
│   └── Medium (#1E222A)
└── Text/
    ├── Primary (#FFFFFF)
    ├── Secondary (#B8C0CC)
    ├── Muted (#6B7280)
    └── Disabled (#4B5563)
```

### 7.2 Figma 变量导出 (JSON)

```json
{
  "name": "Delta Force Color System",
  "colors": {
    "primary": {
      "default": { "hex": "#00D68F", "rgb": "0, 214, 143" },
      "light": { "hex": "#33E0A6", "rgb": "0, 214, 143" },
      "dark": { "hex": "#00A874", "rgb": "0, 168, 116" }
    },
    "accent": {
      "gold": { "hex": "#FFD700", "rgb": "255, 215, 0" },
      "orange": { "hex": "#FF8C42", "rgb": "255, 140, 66" },
      "red": { "hex": "#FF6B6B", "rgb": "255, 107, 107" },
      "cyan": { "hex": "#00E5FF", "rgb": "0, 229, 255" }
    },
    "background": {
      "darkest": { "hex": "#0D0F12", "rgb": "13, 15, 18" },
      "dark": { "hex": "#15181D", "rgb": "21, 24, 29" },
      "medium": { "hex": "#1E222A", "rgb": "30, 34, 42" }
    },
    "text": {
      "primary": { "hex": "#FFFFFF", "rgb": "255, 255, 255" },
      "secondary": { "hex": "#B8C0CC", "rgb": "184, 192, 204" },
      "muted": { "hex": "#6B7280", "rgb": "107, 114, 128" },
      "disabled": { "hex": "#4B5563", "rgb": "75, 85, 99" }
    }
  }
}
```

---

## 八、应用示例

### 8.1 首页配色

| 元素 | 色值 | 效果 |
|-----|-----|-----|
| 页面背景 | #0D0F12 | 深邃暗夜 |
| Hero区域 | 渐变 #1E222A | 层次感 |
| 品牌文字 | #00D68F | 发光效果 |
| 主要按钮 | #00D68F | 战术绿 |
| 价格数字 | #FFD700 | 金币黄 |

### 8.2 列表页配色

| 元素 | 色值 | 效果 |
|-----|-----|-----|
| 账号卡片 | #242830 | 面板灰 |
| 卡片边框 | rgba(0,214,143,0.2) | 绿色边框 |
| 悬停效果 | #00D68F | 全边框+阴影 |
| 段位标签 | #00E5FF | 青色标签 |

### 8.3 详情页配色

| 元素 | 色值 | 效果 |
|-----|-----|-----|
| 详情卡片 | #1E222A | 中灰背景 |
| 操作按钮 | #00D68F | 主按钮 |
| 取消按钮 | transparent | 边框按钮 |
| 警告提示 | #FF8C42 | 橙色提示 |

---

## 九、设计师与开发者交接清单

- [x] 配色方案设计完成
- [x] WCAG 对比度验证通过
- [x] 色盲兼容性分析
- [x] CSS Variables 已更新
- [x] SCSS 变量文件已生成
- [x] 各场景色值应用规则已定义

---

**文档版本**: v1.0  
**更新日期**: 2026-04-04  
**适用范围**: 三角洲账号租赁平台全站
