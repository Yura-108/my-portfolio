export const cards = [
  {
    title: "Знакомство\nи брифинг",
    description: "Обсуждаем проект, цели, аудиторию. Погружаюсь в контекст, задаю вопросы, чтобы лучше понять ваш продукт и запрос."
  },
  {
    title: "Исследование и концепция",
    description: "Анализирую референсы, конкурентов, собираю визуальное и смысловое направление.",
  },
  {
    title: "Структура\nи прототип",
    description: "Создаю структуру сайта и интерактивный прототип, чтобы вы увидели структуру до визуального оформления.",
  },
  {
    title: "Мудборд и направление",
    description: "Создаю мудборд — визуальную подборку, которая задаёт атмосферу и стиль будущего дизайна. Согласовываем общее направление.",
  },
  {
    title: "Дизайн",
    description: "Прорабатываю визуальный стиль, типографику, цвета, композицию."
  },
  {
    title: "Верстка",
    description: "Переношу сайт (таплинк) на платформу.",
  },
  {
    title: "Завершение и рекомендации",
    description: "Передаю материалы и даю рекомендации по дальнейшему использованию сайта (таплинка).",
  }
];
export const skills = [
  {
    title: "знание программ",
    badges: [
      { name: "Figma", className: "" },
      { name: "Illustrator", className: "" },
      { name: "Photoshop", className: "" }
    ]
  },
  {
    title: "аналитика и исследование",
    badges: [
      { name: "Конкурентный анализ", className: "order-1" },
      { name: "Анализ персон", className: "order-3 lg:order-2" },
      { name: "CJM", className: "order-4 md:order-6 lg:order-3" },
      { name: "Сводный анализ", className: "order-6 md:order-4"},
      { name: "JTBD", className: "order-5" },
      { name: "User Flow", className: "order-2 lg:order-6" }
    ]
  },
  {
    title: "информационная архитектура",
    badges: [
      { name: "Основы UX и UI дизайна", className: "order-3 lg:order-2" },
      { name: "Функциональный прототип", className: "order-5 md:order-1" },
      { name: "Вайрфреймы", className: "order-1 md:order-5" },
      { name: "Сущности", className: "order-2 md:order-4" },
      { name: "Создание структуры", className: "order-4 md:order-2" }
    ]
  },
  {
    title: "визуальный стиль",
    badges: [
      { name: "Поиск изображений", className: "order-3 lg:order-1" },
      { name: "Работа с цветом", className: "order-2 md:order-4 lg:order-2" },
      { name: "Типографика", className: "order-1 lg:order-4" },
      { name: "Выстраивание композиции", className: "order-4 md:order-2 lg:order-3" }
    ]
  },
  {
    title: "передача проекта",
    badges: [
      { name: "Адаптивы", className: "order-1 md:order-3" },
      { name: "Подготовка макета", className: "order-2" },
      { name: "Авторский надзор", className: "order-3 md:order-1" }
    ]
  },
];
export const menu = [
  {
    title: "Проекты",
    link: "#"
  },
  {
    title: "Этапы работы",
    link: "#"
  },
  {
    title: "Услуги",
    link: "#"
  },
  {
    title: "Контакты",
    link: "#"
  },
];
export const services = [
  {
    title: "одностраничный сайт",
    labels: ['от 20 рабочих дней', 'от 250$', 'работа по договору']
  },
  {
    title: "интеренет-магазин",
    labels: ['от 20 рабочих дней', 'от 630$', 'работа по договору']
  },
  {
    title: "корпоративный сайт",
    labels: ['от 30 рабочих дней', 'от 760$', 'работа по договору']
  },
  {
    title: "редизайн сайта",
    labels: ['от 20 рабочих дней', 'от 760$', 'работа по договору']
  },
];
export const contactItems = [
  { label: "для связи", value: "Telegram", link: "https://t.me/Dazzz_px" },
  { label: "профиль", value: "Instagram", link: "https://www.instagram.com/pixel__warden" },
  { label: "портфолио", value: "Behance", link: "https://www.behance.net/29edf15a" }
];
export const gridCells = [
  // --- 1 РЯД ---
  { type: 'main', itemIdx: 0, delay: 0.4, classes: "md:col-start-1 md:row-start-1" },

  // справа от "для связи" → летит вправо
  { type: 'filler', delay: 0.5, direction: "left", classes: "" },
  { type: 'filler', delay: 0.6, direction: "left", classes: "" },

  // --- 2 РЯД ---
  // ниже → летит вниз
  { type: 'filler', delay: 0.7, direction: "right", classes: "" },

  { type: 'main', itemIdx: 1, delay: 0.6, classes: "md:col-start-2 md:row-start-2" },

  // вправо от центра
  { type: 'filler', delay: 0.7, direction: "left", classes: "" },

  // --- 3 РЯД ---
  { type: 'filler', delay: 1.0, direction: "right", classes: "" },
  { type: 'filler', delay: 0.9, direction: "right", classes: "" },

  { type: 'main', itemIdx: 2, delay: 0.8, classes: "md:col-start-3 md:row-start-3" },
];
