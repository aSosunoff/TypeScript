# TypeScript

### Инициализация npm
```
такая как и в 1_init
```
### Для работы с модулями устанавливаем http сервер
```
npm i --save-dev http-server
```
### Запускаем
```
./node_modules/.bin/http-server -o \".\\\" -p 8080
```

```javascript
// ошибки будут из за отсутствия расширения на импорт файлах. Их можно поставить в .ts файлах 

import {Device, Phone, Call} from "./module_1.js";

// пока не разобрался почему или как правильно нужно компилировать
```
