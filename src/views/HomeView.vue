<template>
  <v-col cols="12">
    <h1 class="
        mb-6
        text-h5
        text-md-h2
        text-xl-h1
        text-truncate
       ">
      Тестовое задание SquareGPS
    </h1>
    <p>Необходимо с помощью <b>Vuejs</b>, <b>Vuex</b>, <b>VueRouter</b>, <b>Vuetify</b> написать приложение. Хэдер
      приложения должен содержать меню из 2-х пунктов: <b>О задании</b> и <b>Карта</b>. В основной
      части приложения должно отображаться содержимое разделов.</p>
    <h4>Раздел “О задании”</h4>
    <p>В разделе должен быть текст этого задания, сверстанный аналогично.</p>
    <h4>Раздел “Карта”</h4>
    <p>На экране должны быть карта и список (см. пример):</p>
    <ol>
      <li>При клике на кнопку добавления, карта должна перейти в режим добавления
        маркера: в месте клика должен появится маркер, а в списке - запись с адресом
        точки.
        <ul>
          <li>Для поиска адреса можно использовать любое бесплатное API для
            геокодирования, например: <a class="text-blue" href="https://geocode.maps.co/" target="_blank">https://geocode.maps.co/</a>.</li>
          <li>В случае, если адрес не найден, необходимо вывести ошибку и не
            добавлять маркер в список.</li>
        </ul>
      </li>
      <li>При клике на маркер должна подсвечиваться запись в списке.</li>
      <li>При клике на запись в списке карта должна центрироваться на маркере.</li>
      <li>Маркеры должны храниться локально и не пропадать после перезагрузки
        страницы.</li>
      <li>В адресной строке должен отображаться id выбранного маркера.
        Локальное хранение данных должно быть организовано в виде сервиса,
        эмулирующего бекенд. (Необходим класс Backend, который псевдо-асинхронно
        сохраняет данные в localStorage)</li>
    </ol>
    <h4>Дополнительно:</h4>
    <ol>
      <li>Продумать отображение на мобильных устройствах.</li>
      <li>Предусмотреть локализацию.</li>
      <li>Необходимо с помощью <b>jest</b> написть 1 модульный тест на любой компонент.</li>
    </ol>
    <p><b>Напоминание</b>: тестовое задание призвано показать умение писать хороший модульный код, а также умение пользоваться указанными технологиями и не только.</p>
    <p>Этим кодом нужно гордиться.</p>
    <p>Пример:</p>
    <p>
      <img src="@/assets/img/example.png" alt="example" />
    </p>
  </v-col>
</template>

<style scoped>
h4{
  margin: 25px 0 15px;
}

p{
  margin: 15px 0;
}

ol, ul{
  padding-left: 30px;
}

li{
  margin-bottom: 10px;
}

@media(max-width: 1200px) {
  img{
    display: block;
    width: 100%;
  }
}
</style>