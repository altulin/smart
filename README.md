# React + TypeScript + Vite

## Тестовое задание

### node v20.12.2

### Разработка велась в ветках `develop` и `tailwindcss`

#### Технологии: React, TypeScript, Redux, RTK Query, TailwindCss, Shadcn UI, Feature-Sliced Design (FSD)

### Команда для разработки `npm run dev`

#### Задание:

Реализовать приложение для отображения гео - маркеров на карте.
Рекомендуемый стек: React, TypeScript, Redux, Axios, TailwindCss, Shadcn UI, Feature-Sliced Design (FSD)
Картографический провайдер https://www.mapbox.com / можно на Яндекс картах если привычнее.

- Не обязательно но будет плюсом: использование mockapi (https://mokky.gitbook.io/welcome или любой другой) для моделирования взаимодействия с бэкэнд / хранения данных.

Функциональность приложения:

- Просмотр карты c масштабированием и навигацией;
- Выполнение поиска и прямое геокодирование (получение координат из поисковой строки адреса);
- Хранение, отображение списка геомаркеров;

Интерфейс приложения:

- Строка поиска где пользователь может задать текстовое значение;
- Список гео маркеров (Наименование маркера, Адрес и координаты);
- Область карта (не менее 2/3 экрана) которая отображает маркеры из списка;

Use case "Добавить маркер":

1. Пользователь вводит в строку поиска произвольное значение (адрес который хочет найти);
2. Выполняется поисковый запрос в mapbox, результаты поиска (найденные адреса) отображаются в выпадающем списке, пользователь выбирает подходящий.
3. Когда адрес выбран, открывается форма подтверждения в которой отображаются: адрес, координаты из выбранного элемента, а также поля ввода "Наименование" и "Описание" в которое пользователь водит произвольные значения. Поля "Наименование" и "Описание" обязательные для заполнения.
4. По нажатию Сохранить - запись добавляется в панель со списком маркеров. Гео маркер добавляется на карту в соответствующую позицию координат.

Use case “Выбор маркера”:

1. При нажатии на ячейку в панели с именем маркера - карта устанавливается в позицию - маркер по центру.

Use case "Редактирование маркера":

1. При нажатии на маркер - открывается форма редактирования.
2. Пользователь может изменить поля "Наименование" и "Описание" и сохранить.

Use case "Удаление маркера":

1. При двойном нажатии на маркер на карте появляется Запрос подтверждения "Удалить маркер?"
2. Если подтверждение получено - данные маркера удаляются.
