export const projects = [
  {
    id: 'aro',
    title: 'ARO',
    subtitle: 'PropTech · Platform',
    description: 'Redesign of a unique B2B & B2C platform with 3D interactive map of Dubai for property listings and exploration.',
    descriptionRu: 'Редизайн уникальной B2B & B2C платформы с 3D интерактивной картой Дубая для поиска и просмотра объектов недвижимости.',
    tags: ['PropTech', 'Platform'],
    url: 'https://aro.ae',
    color: '#0a1628',
    accentColor: '#3b82f6',
    image: null,
    media: {
      thumbnail: '/media/arothumbnail.jpg',
      preview: '/media/aropreview_720p.mp4',
      isVideoPreview: true,
      loop: true,
      autoplay: false,
    },
    caseStudy: {
      year: '2024',
      role: 'Product Designer',
      duration: '5 months',
      client: 'ARO PropTech',
      // heroMedia — верхний блок страницы (над заголовком)
      heroMedia: {
        image: '/media/aropreviewimage.jpg',
        video: '/media/aropreview_1080p.mp4',
        ratio: '16/11',
      },
      overview:
        "ARO is a next-generation real estate platform combining a 3D interactive map of Dubai with smart property search for both buyers and agents. The challenge was designing a complex B2B/B2C product that feels intuitive for all user types.",
      challenge:
        "The platform needed to serve two very different audiences — property buyers wanting to explore Dubai visually, and agents managing listings and pipelines — within a single, coherent interface.",
      solution:
        "We designed a context-aware UI that adapts its primary flows based on user role. The 3D map became the centrepiece of the B2C experience, while the B2B dashboard was restructured with a data-dense but scannable layout.",
      results: [
        { value: '3×', label: 'Agent retention' },
        { value: '+71%', label: 'Map engagement' },
        { value: '-45%', label: 'Onboarding drop-off' },
        { value: '+28%', label: 'Sales Conversion' },
      ],
      sections: [
        // image/video здесь — отдельный слот для секции в гриде (независимо от heroMedia)
        { type: 'hero', ratio: '16/9', label: '3D map interface', image: '/media/aro3d.jpg' },
        { type: 'fullwidth', ratio: '21/9', label: 'Platform overview', image: '/media/aromobilescreens.jpg' },
        {
          type: 'grid-2', ratio: '16/10', label: 'B2C search flow & B2B dashboard', items: [
            { image: '/media/aroprojects.jpg', video: '/media/aroprojects__720p.mp4' },
            { image: '/media/aro3projectview.jpg' },
          ]
        },
        {
          type: 'grid-3', ratio: '9/19', label: 'Mobile app screens', items: [
            { image: '/media/aromobile1.jpg' },
            { image: '/media/aromobile2.jpg' },
            { image: '/media/aromobile3.jpg' },
          ]
        },
        { type: 'quote', text: "ARO's new design made complex data feel effortless to navigate.", textRu: '«Новый дизайн ARO сделал сложные данные интуитивно понятными.»', author: 'ARO Product Team' },
        { type: 'grid-masonry', label: 'Component library highlights' },
      ],
      ru: {
        overview:
          "ARO — платформа нового поколения для рынка недвижимости, объединяющая интерактивную 3D-карту Дубая с умным поиском объектов для покупателей и агентов. Задача — создать сложный B2B/B2C продукт, интуитивно понятный для всех типов пользователей.",
        challenge:
          "Платформа должна была обслуживать две совершенно разные аудитории — покупателей недвижимости, желающих исследовать Дубай визуально, и агентов, управляющих объявлениями и пайплайнами — в рамках единого согласованного интерфейса.",
        solution:
          "Мы разработали контекстно-адаптивный UI, меняющий основные флоу в зависимости от роли пользователя. 3D-карта стала центральным элементом B2C-опыта, а B2B-дашборд был переработан в насыщенный данными, но легко сканируемый интерфейс.",
        results: [
          { value: '3×', label: 'Удержание агентов' },
          { value: '+71%', label: 'Вовлечённость в карту' },
          { value: '-45%', label: 'Отток при онбординге' },
          { value: '+28%', label: 'Конверсия в сделку' },
        ],
      },
    },
  },
  {
    id: 'axcapital',
    title: 'AX CAPITAL',
    subtitle: 'The Most Trusted Real Estate Agency in Dubai',
    description: 'UX/UI design for a premium real estate agency. Focused on lead generation, conversion and brand positioning.',
    descriptionRu: 'UX/UI дизайн для премиального агентства недвижимости. Фокус на лидогенерации, конверсии и позиционировании бренда.',
    tags: ['Real Estate', 'Corporate Website'],
    url: 'https://axcapital.ae',
    color: '#1a1a2e',
    accentColor: '#6366f1',
    image: null,
    // Карточка на главной
    media: {
      thumbnail: '/media/axcapitalthumbnail.jpg',
      preview: '/media/axcapitalpreview_720p.mp4',
      isVideoPreview: true,
      loop: true,
      autoplay: false,
    },
    caseStudy: {
      year: '2023',
      role: 'Lead UX/UI Designer',
      duration: '3 months',
      client: 'AX Capital Real Estate',
      // Верхний hero-блок страницы кейса
      heroMedia: {
        image: '/media/axcapitalpreview.jpg',
        video: '/media/axcapitalpreview_1080p.mp4',
      },
      overview:
        "AX Capital is one of Dubai's top real estate agencies, handling billions in property transactions annually. The goal was to redesign their digital presence to reflect their premium positioning and significantly improve lead generation.",
      challenge:
        "The existing website had fragmented UX, poor mobile performance, and no clear conversion funnel. Leads were being lost at multiple touchpoints.",
      solution:
        "We rebuilt the information architecture from scratch, introduced a streamlined property search experience, and created a design system aligned with the brand's luxury identity. Every screen was optimised for conversion with clear CTAs and trust signals.",
      results: [
        { value: '+58%', label: 'Lead conversion' },
        { value: '2.4×', label: 'Session duration' },
        { value: '-34%', label: 'Bounce rate' },
        { value: '4.8★', label: 'Google rating' },
      ],
      sections: [
        { type: 'hero', ratio: '16/11', label: 'Homepage hero redesign', image: '/media/axcapitalhero.jpg' },
        {
          type: 'grid-2', ratio: '4/3', label: 'Property listing & detail page', items: [
            { image: '/media/axcapitallistings.jpg' },
            { image: '/media/axcapitallisting.jpg' },
          ]
        },
        { type: 'fullwidth', ratio: '21/9', label: 'Mobile experience', image: '/media/axcapitalmobilescreens.jpg' },
        {
          type: 'grid-3', ratio: '1/1', label: 'UI components & design tokens', items: [
            { image: '/media/axcolors.jpg' },
            { image: '/media/axtypo.jpg' },
            { image: '/media/axspacing.jpg' },
          ]
        },
        { type: 'quote', text: "The new design turned our website into our best-performing sales channel.", textRu: '«Новый дизайн превратил наш сайт в лучший канал продаж.»', author: 'AX Capital Marketing Team' },
        { type: 'grid-masonry', label: 'Visual identity applied across product' },
      ],
      ru: {
        overview:
          "AX Capital — одно из ведущих агентств недвижимости Дубая, ежегодно проводящее сделки на миллиарды долларов. Задача — редизайн цифрового присутствия бренда, отражающий его премиальное позиционирование и значительно улучшающий лидогенерацию.",
        challenge:
          "Существующий сайт страдал от фрагментированного UX, низкой мобильной производительности и отсутствия чёткой конверсионной воронки. Лиды терялись в нескольких точках контакта.",
        solution:
          "Мы полностью переработали информационную архитектуру, внедрили удобный поиск объектов и создали дизайн-систему, соответствующую премиальному стилю бренда. Каждый экран оптимизирован для конверсии с чёткими CTA и элементами доверия.",
        results: [
          { value: '+58%', label: 'Конверсия лидов' },
          { value: '2.4×', label: 'Длительность сессии' },
          { value: '-34%', label: 'Показатель отказов' },
          { value: '4.8★', label: 'Рейтинг в Google' },
        ],
      },
    },
  },
  {
    id: 'paxful',
    title: 'Paxful',
    subtitle: 'P2P Crypto Marketplace',
    description: 'Freelance UI design for landing and marketing pages. Created custom vector icon set used across Security Features section.',
    descriptionRu: 'Freelance UI дизайн лендингов и маркетинговых страниц. Создание кастомного набора иконок для раздела Безопасности.',
    tags: ['Fintech', 'Crypto'],
    url: null,
    color: '#0e1a14',
    accentColor: '#22c55eff',
    image: null,
    media: {
      thumbnail: '/media/paxfulpreview.jpg',
      preview: '/media/paxful_1080.mp4',
      isVideoPreview: true,
      loop: true,
      autoplay: false,
    },
    caseStudy: {
      year: '2022',
      role: 'UI Designer (Freelance)',
      duration: '2 months',
      client: 'Paxful Inc.',
      heroMedia: {
        image: '/media/paxfulpreview.jpg',
        video: '/media/paxful_1080.mp4',
      },
      overview:
        "Paxful is one of the world's largest peer-to-peer Bitcoin marketplaces. I was brought in to redesign key marketing and landing pages, and to create a cohesive custom icon set for the Security section.",
      challenge:
        "The marketing pages lacked visual consistency and failed to communicate trust — a critical factor for a crypto platform. The Security section in particular felt generic and unconvincing.",
      solution:
        "I designed a full custom vector icon set of 40+ icons aligned with the brand language, and rebuilt the landing pages with a stronger visual hierarchy, cleaner layout, and trust-forward messaging.",
      results: [
        { value: '40+', label: 'Custom icons created' },
        { value: '+22%', label: 'Page conversion' },
        { value: '2 mo', label: 'Delivery timeline' },
        { value: '100%', label: 'Brand consistency' },
      ],
      sections: [
        { type: 'hero', ratio: '16/9', label: 'Landing page redesign', image: '/media/paxfulhero.jpg' },
        {
          type: 'grid-2', ratio: '16/11', label: 'Security section before & after', items: [
            { image: '/media/paxfulsecurity.jpg' },
            { image: '/media/paxfulsecurityfeatures.jpg' },
          ]
        },
        { type: 'fullwidth', ratio: '21/9', label: 'Icon system overview', image: '/media/paxfulreviewsection.jpg' },
        {
          type: 'grid-3', ratio: '1/1', label: 'Individual icon designs', items: [
            { image: '/media/paxfulicons1.jpg' },
            { image: '/media/paxfulicons2.jpg' },
            { image: '/media/paxfulicons3.jpg' },
          ]
        },
        { type: 'quote', text: "The icon set gave our security messaging the credibility it needed.", textRu: '«Иконки придали нашим материалам о безопасности необходимую убедительность.»', author: 'Paxful Design Team' },
        { type: 'grid-masonry', label: 'Marketing page variations' },
      ],
      ru: {
        overview:
          "Paxful — один из крупнейших в мире P2P-маркетплейсов для Bitcoin. Меня привлекли для редизайна ключевых маркетинговых страниц и создания единого набора кастомных иконок для раздела Безопасности.",
        challenge:
          "Маркетинговые страницы страдали от визуальной непоследовательности и не внушали доверия — критического фактора для криптоплатформы. Раздел «Безопасность» выглядел особенно слабо и неубедительно.",
        solution:
          "Я разработал кастомный набор из 40+ иконок, согласованных с языком бренда, и пересобрал лендинги с более сильной визуальной иерархией, чистой вёрсткой и убедительными сигналами доверия.",
        results: [
          { value: '40+', label: 'Иконок создано' },
          { value: '+22%', label: 'Конверсия страниц' },
          { value: '2 мес', label: 'Срок сдачи' },
          { value: '100%', label: 'Консистентность бренда' },
        ],
      },
    },
  },
  {
    id: 'bigapple',
    title: 'Big Apple Moving',
    subtitle: 'Dubai Movers You Can Trust',
    description: 'Website redesign on WordPress with custom plugin development for booking and inventory management.',
    descriptionRu: 'Редизайн сайта на WordPress с разработкой кастомного плагина для бронирования и управления инвентарём.',
    tags: ['Logistics', 'Corporate Website'],
    url: 'https://bigapplemoving.com',
    color: '#1a1208',
    accentColor: '#f59e0b',
    image: null,
    // Карточка на главной
    media: {
      thumbnail: '/media/bamthumbnail.jpg',
      preview: '/media/bampreview_720p.mp4',
      isVideoPreview: true,
      loop: true,
      autoplay: false,
    },
    caseStudy: {
      year: '2023',
      role: 'Designer & WordPress Developer',
      duration: '2 months',
      client: 'Big Apple Moving Dubai',
      // Верхний hero-блок страницы кейса
      heroMedia: {
        image: '/media/bampreview_img.jpg',
        video: '/media/bampreview_1080p.mp4',
      },
      overview:
        "Big Apple Moving is a NY-based relocation company serving both residential and corporate clients. The project involved a full website redesign plus custom WordPress plugin development for online booking and inventory tracking.",
      challenge:
        "The old website was outdated, mobile-unfriendly, and relied entirely on phone calls for bookings. There was no way for clients to get instant quotes or track their moves.",
      solution:
        "We redesigned the site with a modern, trust-building aesthetic and built a custom booking plugin that calculates moving quotes in real time based on inventory, distance and service tier. Clients can now track their booking status online.",
      results: [
        { value: '+180%', label: 'Online bookings' },
        { value: '-60%', label: 'Phone inquiries' },
        { value: '5★', label: 'Google reviews' },
        { value: '2×', label: 'Monthly revenue' },
      ],
      sections: [
        { type: 'hero', ratio: '16/9', label: 'New homepage design', image: '/media/bampreview_img.jpg' },
        {
          type: 'grid-2', ratio: '4/3', label: 'Booking flow & quote calculator', items: [
            { image: '/media/bam1.jpg' },
            { image: '/media/bam2.jpg' },
          ]
        },
        { type: 'fullwidth', ratio: '21/9', label: 'Services overview page', video: '/media/bamreviews.mp4' },
        {
          type: 'grid-3', ratio: '9/19', label: 'Mobile screens', items: [
            { image: '/media/bammobile1.jpg' },
            { image: '/media/bammobile2.jpg' },
            { image: '/media/bammobile3.jpg' },
          ]
        },
        { type: 'quote', text: "The booking plugin transformed how we run the business — it's now our main sales channel.", textRu: '«Плагин бронирования изменил наш бизнес — теперь это наш главный канал продаж.»', author: 'Big Apple Moving Management' },
        { type: 'grid-masonry', label: 'UI details & interactions' },
      ],
      ru: {
        overview:
          "Big Apple Moving — компания по переезду в Нью-Йорке, обслуживающая как частных, так и корпоративных клиентов. Проект включал полный редизайн сайта и разработку кастомного плагина WordPress для онлайн-бронирования и учёта имущества.",
        challenge:
          "Старый сайт был устаревшим, неудобным на мобильных и полностью зависел от телефонных звонков для приёма заявок. У клиентов не было возможности получить мгновенный расчёт или отследить статус переезда.",
        solution:
          "Мы создали современный доверительный дизайн и разработали кастомный плагин бронирования, рассчитывающий стоимость переезда в реальном времени на основе описи, расстояния и уровня услуг. Теперь клиенты могут отслеживать свой заказ онлайн.",
        results: [
          { value: '+180%', label: 'Онлайн-бронирований' },
          { value: '-60%', label: 'Звонков в офис' },
          { value: '5★', label: 'Рейтинг Google' },
          { value: '2×', label: 'Ежемесячная выручка' },
        ],
      },
    },
  },
]

export const skills = [
  { icon: '🔍', title: 'UX Research', desc: 'User journeys, CJM, heatmaps, prototype testing' },
  { icon: '✦', title: 'UI Design', desc: 'From wireframes to pixel-perfect visual language' },
  { icon: '⬡', title: 'Prototyping', desc: 'Interactive Figma prototypes for validation' },
  { icon: '⊞', title: 'Design Systems', desc: 'Scalable component libraries in Figma' },
  { icon: '</>', title: 'Web Development', desc: 'HTML, CSS, Sass — clean & responsive' },
  { icon: '⊕', title: 'WordPress', desc: 'Theme development, Elementor, Tilda' },
]

export const stats = [
  { value: '10+', label: 'Years experience' },
  { value: '30+', label: 'Projects completed' },
  { value: '20+', label: 'Happy clients' },
  { value: '6+', label: 'Industries' },
]