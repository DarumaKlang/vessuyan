# 🔮 Glassmorphism Theme Guide

## ธีมกระจก (Glassmorphism) - อัพเดทล่าสุด

Vessuyan ขณะนี้มีธีมกระจกที่สมบูรณ์แบบพร้อมใช้งาน

---

## 🎨 CSS Classes สำหรับ Glassmorphism

### Basic Classes

#### `.glass-effect` (Default)
```html
<div class="glass-effect p-6 rounded-xl">
  <!-- Content -->
</div>
```
**Properties:**
- Background: `rgba(26, 15, 46, 0.7)`
- Blur: `10px`
- Border: `1px solid rgba(109, 40, 217, 0.2)`
- **ใช้:** Default glass effect สำหรับ cards, modals

#### `.glass-sm` (Small)
```html
<div class="glass-sm p-4 rounded-lg">
  <!-- Subtle glass effect -->
</div>
```
- Background: `rgba(26, 15, 46, 0.5)` (ร่ายขึ้น)
- Blur: `4px` (ละเอียด)
- Border: `rgba(109, 40, 217, 0.15)`
- **ใช้:** Small badges, tooltips, subtle elements

#### `.glass-md` (Medium)
```html
<div class="glass-md p-6 rounded-xl">
  <!-- Standard glass effect -->
</div>
```
- Background: `rgba(26, 15, 46, 0.65)`
- Blur: `10px`
- Border: `rgba(109, 40, 217, 0.25)`
- **ใช้:** Normal cards, sections

#### `.glass-lg` (Large)
```html
<div class="glass-lg p-8 rounded-2xl">
  <!-- Strong glass effect -->
</div>
```
- Background: `rgba(26, 15, 46, 0.8)` (ด้านขึ้น)
- Blur: `16px` (หนาขึ้น)
- Border: `rgba(109, 40, 217, 0.3)`
- **ใช้:** Hero sections, modals, overlays

---

## ✨ Glassmorphism with Neon Glow

### Glow Variants

#### `.glass-glow-purple`
```html
<div class="glass-glow-purple p-6 rounded-xl">
  <!-- Purple neon glow -->
</div>
```
- Neon border: `rgba(182, 36, 255, 0.3)` (Purple)
- Glow shadow: `0 0 20px rgba(182, 36, 255, 0.15)`
- Inset glow: `inset 0 0 20px rgba(182, 36, 255, 0.05)`

#### `.glass-glow-cyan`
```html
<div class="glass-glow-cyan p-6 rounded-xl">
  <!-- Cyan neon glow -->
</div>
```
- Neon border: `rgba(6, 182, 212, 0.3)` (Cyan)
- Glow shadow: `0 0 20px rgba(6, 182, 212, 0.15)`

#### `.glass-glow-magenta`
```html
<div class="glass-glow-magenta p-6 rounded-xl">
  <!-- Magenta neon glow -->
</div>
```
- Neon border: `rgba(236, 72, 153, 0.3)` (Magenta)
- Glow shadow: `0 0 20px rgba(236, 72, 153, 0.15)`

---

## 🎯 Tailwind CSS + Glassmorphism

### Backdrop Effects (Tailwind)

```html
<!-- Blur effects -->
<div class="backdrop-blur-md">...</div>  <!-- blur: 8px -->
<div class="backdrop-blur-lg">...</div>  <!-- blur: 12px -->
<div class="backdrop-blur-xl">...</div>  <!-- blur: 16px -->
<div class="backdrop-blur-2xl">...</div> <!-- blur: 24px -->

<!-- Brightness effects -->
<div class="backdrop-brightness-75">...</div>   <!-- darker -->
<div class="backdrop-brightness-100">...</div>  <!-- normal -->
<div class="backdrop-brightness-125">...</div>  <!-- brighter -->
```

### Combine with Colors

```html
<!-- Glass effect with border + shadow -->
<div class="
  bg-glass-bg backdrop-blur-lg 
  border border-neon-violet/30 
  rounded-xl p-6
  hover:shadow-glow-purple transition-all
">
  Content
</div>
```

---

## 🔄 Hover Effects

### Automatic Hover State

```html
<div class="glass-effect hover:shadow-glow-purple ...">
  <!-- On hover:
       - Background: rgba(26, 15, 46, 0.85)
       - Border color: rgba(109, 40, 217, 0.4)
       - Glow shadow: 0 0 30px rgba(182, 36, 255, 0.2)
  -->
</div>
```

### Custom Hover + Transform

```html
<div class="glass-effect p-6 rounded-xl
  hover:shadow-glow-cyan 
  hover:scale-105
  hover:-translate-y-1
  transition-all duration-300
">
  Hoverable card
</div>
```

---

## 📦 Real-World Examples

### Navigation Bar with Glass

```tsx
<nav className="glass-md backdrop-blur-lg fixed top-0 w-full z-50">
  <div className="flex items-center justify-between p-4">
    {/* Logo, Links */}
  </div>
</nav>
```

### Card Grid with Glass

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {items.map(item => (
    <div key={item.id} className="glass-effect p-6 rounded-xl 
      hover:glass-lg hover:shadow-glow-purple transition-all">
      <h3 className="text-xl font-bold text-secondary-gold">
        {item.title}
      </h3>
      <p className="text-text-muted mt-2">{item.description}</p>
    </div>
  ))}
</div>
```

### Modal with Glass Overlay

```tsx
<div className="fixed inset-0 z-50">
  {/* Dark background */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
  
  {/* Modal */}
  <div className="glass-lg p-8 rounded-2xl m-auto">
    <h2 className="text-2xl font-bold gradient-text">Modal Title</h2>
    <p className="text-text-muted mt-4">Content here</p>
  </div>
</div>
```

### Button with Glass + Glow

```tsx
<button className="glass-glow-cyan px-6 py-3 rounded-lg
  font-bold text-neon-violet
  hover:shadow-glow-cyan hover:scale-110
  active:scale-95
  transition-all duration-200">
  Click Me
</button>
```

---

## 🎨 Color Palette (Updated)

| Name | Value | Use |
|------|-------|-----|
| `primary-dark` | `#0f0a1c` | Background |
| `primary-purple` | `#1a0f2e` | Dark sections |
| `primary-accent` | `#6d28d9` | Main accent |
| `secondary-gold` | `#fbbf24` | Headings |
| `accent-cyan` | `#06b6d4` | Borders, glow |
| `accent-magenta` | `#ec4899` | Highlights |
| `neon-violet` | `#b624ff` | Neon effects |
| `neon-cyan` | `#00ffff` | Bright highlights |
| `text-light` | `#f5f3ff` | Light text |
| `text-muted` | `#a0aec0` | Muted text |
| `glass-bg` | `rgba(15, 10, 28, 0.6)` | Glass background |

---

## ⚙️ Configuration Files

### `tailwind.config.ts` - New Additions
```typescript
backdropBlur: {
  'xs': '2px',
  'sm': '4px',
  'md': '8px',
  'lg': '12px',
  'xl': '16px',
  '2xl': '24px',
},
backdropBrightness: {
  '50': '.5',
  '75': '.75',
  '100': '1',
  '125': '1.25',
  '150': '1.5',
  '200': '2',
},
```

### `globals.css` - Glass Classes
```css
.glass-sm { /* Small */ }
.glass-md { /* Medium */ }
.glass-lg { /* Large */ }
.glass-glow-purple { /* Neon purple */ }
.glass-glow-cyan { /* Neon cyan */ }
.glass-glow-magenta { /* Neon magenta */ }
```

---

## 🚀 Tips & Best Practices

1. **Layer Glass Effects**
   - Use multiple glass elements for depth
   - Vary opacity/blur for visual hierarchy

2. **Combine with Animations**
   ```html
   <div class="glass-effect animate-pulse-glow 
     hover:shadow-glow-purple">
   ```

3. **Responsive Adjustments**
   ```html
   <div class="glass-sm md:glass-md lg:glass-lg">
   ```

4. **Accessibility**
   - Ensure sufficient contrast (WCAG AA)
   - Don't rely on blur alone for readability

5. **Performance**
   - Limit number of blur elements
   - Use `backdrop-filter` carefully on large elements
   - Test on older browsers (Safari compatibility)

---

## 🎓 Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `backdrop-filter` | ✅ 76+ | ✅ 103+ | ✅ 9+ | ✅ 79+ |
| `backdrop-blur` | ✅ 76+ | ✅ 103+ | ✅ 9+ | ✅ 79+ |

---

## 📝 Next Steps

1. ✅ ธีม glassmorphism ติดตั้งแล้ว
2. ✅ Classes พร้อมใช้งาน
3. → ใช้ classes ใน components ต่างๆ
4. → สร้าง design system จาก classes นี้

---

**Theme Status:** ✅ Ready for Production  
**Last Updated:** February 6, 2026
