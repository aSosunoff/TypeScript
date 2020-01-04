# TypeScript

### Инициализация npm
```
npm init -y
```
### Локальная установка Type Script
```
npm i --save-dev typescript
```
### Инициализация Type Script
```
.\node_modules\.bin\tsc -init
```
### Компилируем Type Script
```
.\node_modules\.bin\tsc
```
* Настройки для компилятора в .\tsconfig.json

### Для отслеживания в реальном времени

```
.\node_modules\.bin\tsc -w
```
### или
```
tsconfig.json >

{
    "compilerOptions": {
        "watch": true,
    }
}
```