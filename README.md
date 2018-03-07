# Мой Конфиг

### Установка стандартная

    npm i

### Режим разработки

    npm run start

### Сборка

    npm run build

### Запуск тестов 
    
    npm jest

### Сборка

Сборка осуществляется на webpack v.3, в ближайшее время планирую мигрировать на webpack v.4 

### Технологии

Разработка ведётся на [TypeScript](https://www.typescriptlang.org)

WEB framework React 16

state managment Redux, [Redux-Saga](https://github.com/redux-saga/redux-saga)

Рутинг [React-Router v.4](https://reacttraining.com/react-router/web/guides/philosophy)

В данном конфиге используется архитектура [Redux Duck](https://github.com/erikras/ducks-modular-redux)

### Стили

Стили на SCSS, с последующей обработкой PostCSS, мимификация [CSSO](https://github.com/css/csso), autoprfixer [nextCSS](https://github.com/MoOx/postcss-cssnext)

### Storybook

Все компоненты предварительно верстаются в [Storybook](https://storybook.js.org), с несколькими addon-ами

Конфиги Storybook лежат в папке _**.storybook**_