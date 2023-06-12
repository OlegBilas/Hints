# Hints

Розширення для роботи у VS Code: 
HTML CSS Support, 
Formatting Toggle, 
Prettier, 
Live Server, 
Live SASS Compiler, 
AutorenameTag, 
AutocloseTag, 
ESLint, 
ES7 React Redux Graph QL..., 
VSCode-styled components, 
colorise, 
One Dark Pro.

Скорочення сніппета ES7 React Redux Graph QL..., :
rfc - React functional component
rcc - React class component
nfn - іменова (named) стрілочна функція
anfn - неіменова (anamed) стрілочна функція
imd - іменований імпорт
ims - імпорт styled component (import styled from 'шлях')
cs - деструктуризація із this.state

Для підключення автозбереження, перевірити налаштування у пункті меню File - (галка в Autosave).
Для автоматичного форматування коду при зміні фокуса, прописати такі налаштування в файлі settings.json у папці .vscode для Prettier:
{
"formattingToggle.affects": [
    "editor.formatOnPaste",
    "editor.formatOnSave",
    "editor.formatOnType"
  ],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "files.autoSave": "onFocusChange"
}
