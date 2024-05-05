Кампери в оренду

Цей проект створений для компанії, що надає послуги з оренди камперів в Україні. Застосунок складається з трьох основних сторінок:


Домашня сторінка

На цій сторінці користувач зустрічає загальний опис послуг, які надає компанія. Стилізація та оформлення цієї сторінки виконані відповідно до дизайну застосунку.

Каталог камперів

Тут користувач може переглядати каталог камперів різної комплектації та фільтрувати їх за місцем знаходження, обладнанням та типом. На першій сторінці каталогу рендеряться 4 оголошення, а їх решта - по кліку на кнопку "Load more".

Сторінка оголошень

Тут зберігаються оголошення, які були додані користувачем в улюблені. Користувач може додавати оголошення до улюблених, клікнувши на кнопку у вигляді "серця", та видаляти їх, клікнувши повторно. Також доступний функціонал для детального перегляду камперу та оформлення бронювання.


Структура проекту

src/components: Вміщує компоненти React, такі як Home, Catalog, Favorites, AdvertCard, Modal, та інші.
src/redux: Містить файли Redux для керування станом додатка.
src/api: Включає Axios для роботи з API.
src/routes: Маршрутизація за допомогою React Router.
public: Статичні файли та зображення.


Технічні особливості

Використано Redux для керування станом додатка.
Для запитів використовується Axios.
Робота виконана на React з використанням бандлера Vite.
Інтерактивність працює відповідно до технічного завдання.
Весь код відформатований та без коментарів (коментарі видалено з міркувань чистоти коду).
Проєкт задеплоєний на GitHub Pages за адресою https://your-github-username.github.io/campers-rental-app.


Запуск проекту локально

Клонуйте репозиторій: git clone https://github.com/your-github-username/campers-rental-app.git

Перейдіть до папки проекту: cd campers-rental-app

Встановіть залежності: npm install

Запустіть проект: npm run dev