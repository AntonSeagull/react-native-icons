# react-native-icons-svg

[![npm version](https://img.shields.io/npm/v/react-native-icons-svg.svg)](https://www.npmjs.com/package/react-native-icons-svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

[English](#english) | [Русский](#русский)

---

<a name="english"></a>

## 🌟 Features

- 🎨 **43,125+ icons** from popular icon packs
- 🌲 **Tree-shaking support** - only imported icons are bundled
- ⚡ **Lightweight** - each icon is ~2-3 KB
- 🎯 **TypeScript support** - full type definitions included
- 📱 **React Native SVG** - powered by react-native-svg
- 🎨 **Customizable** - change size, color, and style

## 🔍 Icon Browser

**Browse and search all 43,125+ icons easily!**

Visit **[antonseagull.com/react-native-icons](https://antonseagull.com/react-native-icons)** to:

- 🔎 Search icons by name or keywords
- 👀 Preview icons before using them
- 📋 Copy import statements with one click
- 🎨 View all available icon packs
- ⚡ Find the perfect icon for your app quickly

## 📦 Installation

```bash
npm install react-native-icons-svg react-native-svg
```

or

```bash
yarn add react-native-icons-svg react-native-svg
```

> **Note**: `react-native-svg` is a peer dependency and must be installed separately.

## 🚀 Usage

### ✅ Correct Usage (Recommended)

Import only the icons you need using **named imports**:

```jsx
import React from 'react';
import { View } from 'react-native';
import { AiFillHeart, AiFillStar, AiOutlineUser } from 'react-native-icons-svg';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AiFillHeart size={48} color="red" />
      <AiFillStar size={48} color="gold" />
      <AiOutlineUser size={48} color="blue" />
    </View>
  );
}
```

✅ **Bundle size**: ~7-10 KB (only 3 icons + utilities)

### ❌ Incorrect Usage (Avoid)

**DON'T** import the entire library:

```jsx
// ❌ BAD: This imports ALL 43,125 icons!
import * as Icons from 'react-native-icons-svg';

function App() {
  return <Icons.AiFillHeart size={48} />;
}
```

❌ **Bundle size**: ~687 MB (all icons included)

**DON'T** re-export everything:

```jsx
// ❌ BAD: This includes all icons in your bundle!
export * from 'react-native-icons-svg';
```

## 📖 Icon Props

All icons accept the following props:

| Prop    | Type     | Default   | Description                        |
| ------- | -------- | --------- | ---------------------------------- |
| `size`  | `number` | `24`      | Icon size in pixels                |
| `color` | `string` | `'black'` | Icon color                         |
| `style` | `object` | -         | Additional styles                  |
| `...`   | -        | -         | Any other `react-native-svg` props |

### Example

```jsx
<AiFillHeart size={32} color="red" style={{ margin: 10 }} opacity={0.8} />
```

## 🎨 Available Icon Packs

The library includes **43,125+** icons from popular icon packs:

| Icon Pack             | Prefix | Examples                          | Count   |
| --------------------- | ------ | --------------------------------- | ------- |
| Ant Design Icons      | `Ai`   | `AiFillHeart`, `AiOutlineUser`    | 800+    |
| Bootstrap Icons       | `Bs`   | `BsFillStarFill`, `BsCheckCircle` | 2,000+  |
| Font Awesome          | `Fa`   | `FaUser`, `FaHome`                | 2,000+  |
| Feather               | `Fi`   | `FiHome`, `FiUser`                | 280+    |
| Game Icons            | `Gi`   | `GiSword`, `GiShield`             | 4,000+  |
| Heroicons             | `Hi`   | `HiHome`, `HiUser`                | 460+    |
| Ionicons              | `Io`   | `IoHome`, `IoHeart`               | 1,300+  |
| Material Design Icons | `Md`   | `MdHome`, `MdFavorite`            | 5,000+  |
| Phosphor Icons        | `Pi`   | `PiHeart`, `PiStar`               | 6,000+  |
| Remix Icon            | `Ri`   | `RiHome`, `RiUser`                | 2,700+  |
| Tabler Icons          | `Tb`   | `TbHome`, `TbUser`                | 4,400+  |
| VS Code Icons         | `Vsc`  | `VscHome`, `VscFile`              | 430+    |
| Weather Icons         | `Wi`   | `WiDaySunny`, `WiNightClear`      | 220+    |
| And many more...      | -      | -                                 | 43,125+ |

## 🌲 Tree-Shaking

This library is **fully optimized for tree-shaking**. Modern bundlers (Metro, Webpack, Rollup) will automatically remove unused icons from your bundle.

### How it works:

1. **Named exports**: Each icon is exported individually
2. **No side effects**: Declared in `package.json` as `"sideEffects": false`
3. **ES modules**: Built in ESM format for optimal tree-shaking

### Bundle size comparison:

| Usage                  | Icons Included | Bundle Size |
| ---------------------- | -------------- | ----------- |
| 1 icon                 | 1 icon         | ~2-3 KB     |
| 3 icons                | 3 icons        | ~7-10 KB    |
| 10 icons               | 10 icons       | ~15-20 KB   |
| `import * as Icons...` | ALL 43,125     | ~687 MB ⚠️  |

## 📚 Examples

### Basic Example

```jsx
import { AiFillHeart } from 'react-native-icons-svg';

<AiFillHeart size={24} color="red" />;
```

### With Custom Styles

```jsx
import { AiFillStar } from 'react-native-icons-svg';

<AiFillStar
  size={32}
  color="gold"
  style={{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }}
/>;
```

### Dynamic Icon Selection

```jsx
import { AiFillHeart, AiOutlineHeart } from 'react-native-icons-svg';

function FavoriteButton({ isFavorite }) {
  const Icon = isFavorite ? AiFillHeart : AiOutlineHeart;
  return <Icon size={24} color={isFavorite ? 'red' : 'gray'} />;
}
```

## 🛠️ Development

### Regenerate icon exports

If you add new icons, regenerate the index file:

```bash
npm run generate-index
npm run prepare
```

## 📄 License

MIT © [Anton Seagull](https://github.com/AntonSeagull)

## 🙏 Credits

This library includes icons from the following projects:

- [Ant Design Icons](https://ant.design/components/icon/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Feather Icons](https://feathericons.com/)
- [Game Icons](https://game-icons.net/)
- [Heroicons](https://heroicons.com/)
- [Ionicons](https://ionic.io/ionicons)
- [Material Design Icons](https://materialdesignicons.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Remix Icon](https://remixicon.com/)
- [Tabler Icons](https://tabler-icons.io/)
- [VS Code Icons](https://microsoft.github.io/vscode-codicons/)
- [Weather Icons](https://erikflowers.github.io/weather-icons/)
- And many more!

---

<a name="русский"></a>

# react-native-icons-svg (Русская версия)

## 🌟 Возможности

- 🎨 **43,125+ иконок** из популярных наборов
- 🌲 **Поддержка tree-shaking** - в сборку попадают только импортированные иконки
- ⚡ **Легковесность** - каждая иконка ~2-3 КБ
- 🎯 **Поддержка TypeScript** - полные определения типов
- 📱 **React Native SVG** - работает на react-native-svg
- 🎨 **Настраиваемость** - изменяйте размер, цвет и стиль

## 🔍 Браузер иконок

**Удобный поиск по всем 43,125+ иконкам!**

Посетите **[antonseagull.com/react-native-icons](https://antonseagull.com/react-native-icons)** чтобы:

- 🔎 Искать иконки по названию или ключевым словам
- 👀 Предпросматривать иконки перед использованием
- 📋 Копировать импорты одним кликом
- 🎨 Просматривать все доступные наборы иконок
- ⚡ Быстро находить идеальную иконку для вашего приложения

## 📦 Установка

```bash
npm install react-native-icons-svg react-native-svg
```

или

```bash
yarn add react-native-icons-svg react-native-svg
```

> **Внимание**: `react-native-svg` является peer dependency и должен быть установлен отдельно.

## 🚀 Использование

### ✅ Правильное использование (Рекомендуется)

Импортируйте только нужные иконки используя **именованные импорты**:

```jsx
import React from 'react';
import { View } from 'react-native';
import { AiFillHeart, AiFillStar, AiOutlineUser } from 'react-native-icons-svg';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AiFillHeart size={48} color="red" />
      <AiFillStar size={48} color="gold" />
      <AiOutlineUser size={48} color="blue" />
    </View>
  );
}
```

✅ **Размер бандла**: ~7-10 КБ (только 3 иконки + утилиты)

### ❌ Неправильное использование (Избегайте)

**НЕ ИМПОРТИРУЙТЕ** всю библиотеку целиком:

```jsx
// ❌ ПЛОХО: Это импортирует ВСЕ 43,125 иконок!
import * as Icons from 'react-native-icons-svg';

function App() {
  return <Icons.AiFillHeart size={48} />;
}
```

❌ **Размер бандла**: ~687 МБ (все иконки включены)

**НЕ РЕЭКСПОРТИРУЙТЕ** все иконки:

```jsx
// ❌ ПЛОХО: Это включает все иконки в ваш бандл!
export * from 'react-native-icons-svg';
```

## 📖 Свойства иконок

Все иконки принимают следующие свойства:

| Свойство | Тип      | По умолчанию | Описание                                 |
| -------- | -------- | ------------ | ---------------------------------------- |
| `size`   | `number` | `24`         | Размер иконки в пикселях                 |
| `color`  | `string` | `'black'`    | Цвет иконки                              |
| `style`  | `object` | -            | Дополнительные стили                     |
| `...`    | -        | -            | Любые другие свойства `react-native-svg` |

### Пример

```jsx
<AiFillHeart size={32} color="red" style={{ margin: 10 }} opacity={0.8} />
```

## 🎨 Доступные наборы иконок

Библиотека включает **43,125+** иконок из популярных наборов:

| Набор иконок          | Префикс | Примеры                           | Количество |
| --------------------- | ------- | --------------------------------- | ---------- |
| Ant Design Icons      | `Ai`    | `AiFillHeart`, `AiOutlineUser`    | 800+       |
| Bootstrap Icons       | `Bs`    | `BsFillStarFill`, `BsCheckCircle` | 2,000+     |
| Font Awesome          | `Fa`    | `FaUser`, `FaHome`                | 2,000+     |
| Feather               | `Fi`    | `FiHome`, `FiUser`                | 280+       |
| Game Icons            | `Gi`    | `GiSword`, `GiShield`             | 4,000+     |
| Heroicons             | `Hi`    | `HiHome`, `HiUser`                | 460+       |
| Ionicons              | `Io`    | `IoHome`, `IoHeart`               | 1,300+     |
| Material Design Icons | `Md`    | `MdHome`, `MdFavorite`            | 5,000+     |
| Phosphor Icons        | `Pi`    | `PiHeart`, `PiStar`               | 6,000+     |
| Remix Icon            | `Ri`    | `RiHome`, `RiUser`                | 2,700+     |
| Tabler Icons          | `Tb`    | `TbHome`, `TbUser`                | 4,400+     |
| VS Code Icons         | `Vsc`   | `VscHome`, `VscFile`              | 430+       |
| Weather Icons         | `Wi`    | `WiDaySunny`, `WiNightClear`      | 220+       |
| И многие другие...    | -       | -                                 | 43,125+    |

## 🌲 Tree-Shaking

Эта библиотека **полностью оптимизирована для tree-shaking**. Современные сборщики (Metro, Webpack, Rollup) автоматически удалят неиспользуемые иконки из вашего бандла.

### Как это работает:

1. **Именованные экспорты**: Каждая иконка экспортируется отдельно
2. **Без побочных эффектов**: Объявлено в `package.json` как `"sideEffects": false`
3. **ES модули**: Собрано в ESM формате для оптимального tree-shaking

### Сравнение размеров бандла:

| Использование          | Включено иконок | Размер бандла |
| ---------------------- | --------------- | ------------- |
| 1 иконка               | 1 иконка        | ~2-3 КБ       |
| 3 иконки               | 3 иконки        | ~7-10 КБ      |
| 10 иконок              | 10 иконок       | ~15-20 КБ     |
| `import * as Icons...` | ВСЕ 43,125      | ~687 МБ ⚠️    |

## 📚 Примеры

### Базовый пример

```jsx
import { AiFillHeart } from 'react-native-icons-svg';

<AiFillHeart size={24} color="red" />;
```

### С пользовательскими стилями

```jsx
import { AiFillStar } from 'react-native-icons-svg';

<AiFillStar
  size={32}
  color="gold"
  style={{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }}
/>;
```

### Динамический выбор иконки

```jsx
import { AiFillHeart, AiOutlineHeart } from 'react-native-icons-svg';

function FavoriteButton({ isFavorite }) {
  const Icon = isFavorite ? AiFillHeart : AiOutlineHeart;
  return <Icon size={24} color={isFavorite ? 'red' : 'gray'} />;
}
```

## 🛠️ Разработка

### Регенерация экспортов иконок

Если вы добавили новые иконки, регенерируйте индексный файл:

```bash
npm run generate-index
npm run prepare
```

## ⚠️ Важные замечания

### ✅ ДЕЛАЙТЕ:

```jsx
// ✅ Импортируйте только то, что нужно
import { AiFillHeart, AiFillStar } from 'react-native-icons-svg';
```

### ❌ НЕ ДЕЛАЙТЕ:

```jsx
// ❌ Не импортируйте всё
import * as Icons from 'react-native-icons-svg';

// ❌ Не реэкспортируйте всё
export * from 'react-native-icons-svg';
```

## 📄 Лицензия

MIT © [Anton Seagull](https://github.com/AntonSeagull)

## 🙏 Благодарности

Эта библиотека включает иконки из следующих проектов:

- [Ant Design Icons](https://ant.design/components/icon/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Feather Icons](https://feathericons.com/)
- [Game Icons](https://game-icons.net/)
- [Heroicons](https://heroicons.com/)
- [Ionicons](https://ionic.io/ionicons)
- [Material Design Icons](https://materialdesignicons.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Remix Icon](https://remixicon.com/)
- [Tabler Icons](https://tabler-icons.io/)
- [VS Code Icons](https://microsoft.github.io/vscode-codicons/)
- [Weather Icons](https://erikflowers.github.io/weather-icons/)
- И многие другие!

---

Made with ❤️ using [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
