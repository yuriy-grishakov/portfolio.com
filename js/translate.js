var arrLang = {
  'ru': {

    'portfolio': 'Портфолио',
    'service': 'Услуги',
    'reviews': 'Отзывы',

    'offer__subtitle': 'Привет, меня зовут Юрий',
    'offer__title-1': 'Я фрилансер,',
    'offer__title-2': 'веб-разработчик',
    'offer__btn': 'Смотреть портфолио',

    'profit-title': 'Заказав сайт у меня – Вы получите',
    'profit-item__title-1': 'Увеличение лояльности клиентов',
    'profit-item__title-2': 'Повышение узнаваемости бренда',
    'profit-item__title-3': 'Увеличение продаж за счет новых клиентов',
    'profit-item__title-4': 'Формирование имиджа компании',

    'service-title': 'Чем я могу вам помочь',
    'service-subtitle': 'Я частный веб-мастер, дизайнер. Закажите необычный дизайн сайт для своего проекта',
    'service-item-0': 'Создание сайтов с нуля',
    'service-item-1': 'Редизайн старого сайта',
    'service-item-2': 'Разработка интернет-магазинов',
    'service-item-3': 'Оформления аккаунтов в социальных сетях',
    'service-item-4': 'Дизайн полиграфической продукции',
    'service-btn': 'Смотреть отзывы',

    'portfolio-tab-1': 'Создание сайтов',
    'portfolio-tab-2': 'Другие услуги',
    'load-more': 'Показать еще',
    'view': 'Смотреть работу',

    'reviews-title': 'Отзывы клиентов',

    'reviews-subtitle': 'Разработка сайтов на основе индивидуального проекта c уникальным дизайном и продуманным интерфейсом',
  },

  'uk': {

    'portfolio': 'Портфоліо',
    'service': 'Послуги',
    'reviews': 'Відгуки',

    'offer__subtitle': 'Привіт, мене звуть Юрій',
    'offer__title-1': 'Я фрілансер,',
    'offer__title-2': 'веб-розробник',
    'offer__btn': 'Дивитись портфоліо',


    'profit-title': 'Замовивши сайт у мене – Ви отримаєте',
    'profit-item__title-1': 'Збільшення лояльності клієнтів',
    'profit-item__title-2': 'Підвищення впізнаваності бренду',
    'profit-item__title-3': 'Збільшення продажів за рахунок нових клієнтів',
    'profit-item__title-4': 'Формування іміджу компанії',

    'service-title': 'Чим я можу вам допомогти',
    'service-subtitle': 'Я — приватний веб-майстер, дизайнер. Замовте незвичайний дизайн сайту для свого проекту',
    'service-item-0': 'Створення сайтів з нуля',
    'service-item-1': 'Редизайн старого сайту',
    'service-item-2': 'Розробка інтернет-магазинів',
    'service-item-3': 'Оформлення акаунтів у соціальних мережах',
    'service-item-4': 'Дизайн поліграфічної продукції',
    'service-btn': 'Дивитися відгуки',

    'portfolio-tab-1': 'Створення сайтів',
    'portfolio-tab-2': 'Інші послуги',
    'load-more': 'Показати ще',
    'view': 'Дивитись роботу',

    'reviews-title': 'Відгуки клієнтів',

    'reviews-subtitle': 'Розробка сайтів на основі індивідуального проекту з унікальним дизайном та продуманим інтерфейсом',
  }
}

$(function() {
  $('.languages__translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});



const langRU  = document.getElementById('ru');
const langUK  = document.getElementById('uk');




langRU.addEventListener('click', () => {
  langRU.classList.add('active');
  langUK.classList.remove('active');
});

langUK.addEventListener('click', () => {
  langUK.classList.add('active');
  langRU.classList.remove('active');
});













