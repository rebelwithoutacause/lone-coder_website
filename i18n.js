(function(){
  var translations = {
    en: {
      nav_about: 'About',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Contact',
      cta_start: 'Start a Project',
      about_role: 'Software Developer & QA Specialist',
      about_bio: '"Lone Coder" is my personal brand for developing and testing software solutions for businesses and private clients. I develop and test web applications, backend systems, and Chrome extensions, focusing on quality, reliability, and a great user experience. I work directly with clients to understand their requirements and deliver custom software projects from idea to finished product — requirements gathering, planning, execution, and maintenance, all in one place. I offer comprehensive software development and quality services, including manual and automated testing, API testing, defect detection, tracking and resolution, test automation, and Docker-based deployment.',
      about_certs: 'View certificates',
      status_available: 'Available',
      status_remote: 'Remote',
      status_pricing: 'Contact for pricing',
      services_eyebrow: 'Services Provided',
      service_testing: 'Manual & Automation Testing',
      service_software_testing: 'Software Testing',
      service_ued: 'User Experience Design (UED)',
      service_webdev: 'Web Development',
      service_appdev: 'Application Development',
      service_chrome: 'Chrome Extensions',
      service_support: 'Customer Support',
      service_dataentry: 'Data Entry',
      service_datareport: 'Data Reporting',
      service_research: 'Online Research',
      service_personal: 'Personal Assistance',
      service_virtual: 'Virtual Assistance',
      service_automation: 'Automation Tools & Digital Products',
      portfolio_eyebrow: 'Portfolio',
      portfolio_tag: 'Live App',
      portfolio_launch: 'Launch App',
      p1_highlight: '4 generation modes + real-time strength scoring, zero dependencies.',
      p1_desc: 'A retro terminal-style password generator with multiple generation modes and strength analysis.',
      p2_highlight: 'Zero backend, zero signup — a working inbox in one click.',
      p2_desc: 'A retro hacker-themed disposable email service — instant addresses, real-time inbox polling, and a Matrix-green CRT interface. No registration, no backend.',
      p3_highlight: '40 questions across 4 categories, plus a live weather feed.',
      p3_desc: 'A 90s-styled quiz game with 40 questions across chess, programming, IT, and horror trivia, plus retro tech facts and a live weather forecast.',
      p4_highlight: '~25-topic AI character engine with memory, 100% client-side.',
      p4_desc: 'A horror-inspired reinterpretation of the classic ELIZA chatbot, in the spirit of Harvester (1996) — a ~25-topic conversation engine with short-term memory, running entirely in the browser. Switch between Harvester, Philosophy, and Casual reply modes, with optional voice narration for an extra unsettling touch.',
      p5_highlight: '20 mysteries, 50 horror films, and 28 cursed recipes — fully playable in 4 languages.',
      p5_desc: 'A dark, VHS-styled Halloween web app — The Spirit of Halloween — featuring cursed recipes, classic horror movies, and ancient mysteries, fully translated into English, Bulgarian, Russian, and German.',
      contact_eyebrow: 'Contact',
      contact_heading: 'Tell me about your project',
      form_first: 'First name',
      form_last: 'Last name',
      form_email: 'Email',
      form_subject: 'Subject',
      form_message: 'Project details',
      form_submit: 'Send Inquiry',
      contact_divider: 'or reach out directly',
      footer_text: '© 2026 Lone Coder. Quality matters. Every line counts.',
      aria_toggle_menu: 'Toggle menu',
      aria_github: 'GitHub',
      aria_linkedin: 'LinkedIn',
      aria_copy_email: 'Copy email address',
      aria_lang_switch: 'Change language',
      form_sending: 'Sending...',
      form_success: "Thanks — your inquiry has been sent. I'll get back to you soon.",
      form_error: 'Something went wrong — please email me directly instead.',
      form_captcha_required: 'Please confirm the reCAPTCHA before sending.',
      email_copied: '(copied)'
    },
    bg: {
      nav_about: 'За мен',
      nav_portfolio: 'Портфолио',
      nav_contact: 'Контакти',
      cta_start: 'Започни проект',
      about_role: 'Софтуерен разработчик и QA специалист',
      about_bio: '„Lone Coder“ е моят личен бранд за разработка и тестване на софтуерни решения за бизнеси и частни клиенти. Разработвам и тествам уеб приложения, backend системи и Chrome разширения, като се фокусирам върху качеството, надеждността и доброто потребителско изживяване. Работя директно с клиентите, за да разбера изискванията им и да доставя индивидуални софтуерни проекти от идея до завършен продукт — събиране на изисквания, планиране, изпълнение и поддръжка, всичко на едно място. Предлагам цялостни услуги в областта на софтуерната разработка и качеството, включващи ръчно и автоматизирано тестване, API тестване, откриване, проследяване и отстраняване на дефекти, тестова автоматизация и Docker-базирано внедряване.',
      about_certs: 'Виж сертификатите',
      status_available: 'Свободен',
      status_remote: 'Дистанционно',
      status_pricing: 'Цена по договаряне',
      services_eyebrow: 'Предлагани услуги',
      service_testing: 'Ръчно и автоматизирано тестване',
      service_software_testing: 'Софтуерно тестване',
      service_ued: 'Потребителско изживяване (UED)',
      service_webdev: 'Уеб разработка',
      service_appdev: 'Разработка на приложения',
      service_chrome: 'Chrome разширения',
      service_support: 'Клиентска поддръжка',
      service_dataentry: 'Въвеждане на данни',
      service_datareport: 'Отчитане на данни',
      service_research: 'Онлайн проучвания',
      service_personal: 'Лична асистенция',
      service_virtual: 'Виртуална асистенция',
      service_automation: 'Автоматизирани инструменти и цифрови продукти',
      portfolio_eyebrow: 'Портфолио',
      portfolio_tag: 'Работещо приложение',
      portfolio_launch: 'Отвори приложението',
      p1_highlight: '4 режима на генериране + оценка на сложността в реално време, без зависимости.',
      p1_desc: 'Генератор на пароли в ретро стил, с няколко режима и анализ на сигурността.',
      p2_highlight: 'Без backend, без регистрация — работещ пощенски адрес за секунди.',
      p2_desc: 'Ретро хакерска тематична услуга за временни имейл адреси — мигновени адреси, обновяване на входящата поща в реално време и CRT интерфейс в стил Матрицата. Без регистрация, без backend.',
      p3_highlight: '40 въпроса в 4 категории, плюс прогноза за времето в реално време.',
      p3_desc: 'Куиз игра в стил 90-те с 40 въпроса за шах, програмиране, IT и хорър, плюс ретро технологични факти и текуща прогноза за времето.',
      p4_highlight: '~25-тематичен AI диалогов модул с памет, 100% в браузъра.',
      p4_desc: 'Хорър интерпретация на класическия чатбот ELIZA, в духа на Harvester (1996) — диалогов модул с ~25 теми и краткосрочна памет, работещ изцяло в браузъра. Превключвай между режимите Harvester, Philosophy и Casual, с опционален глас за допълнителна зловеща атмосфера.',
      p5_highlight: '20 мистерии, 50 хорър филма и 28 прокълнати рецепти — с пълна поддръжка на 4 езика.',
      p5_desc: 'Мрачно уеб приложение в стил VHS за Halloween — „Духът на Хелоуин“ — с прокълнати рецепти, класически хорър филми и древни мистерии, напълно преведено на английски, български, руски и немски.',
      contact_eyebrow: 'Контакти',
      contact_heading: 'Разкажи ми за твоя проект',
      form_first: 'Име',
      form_last: 'Фамилия',
      form_email: 'Имейл',
      form_subject: 'Тема',
      form_message: 'Детайли за проекта',
      form_submit: 'Изпрати запитване',
      contact_divider: 'или се свържи директно',
      footer_text: '© 2026 Lone Coder. Качеството е важно. Всеки ред има значение.',
      aria_toggle_menu: 'Отвори/затвори менюто',
      aria_github: 'GitHub',
      aria_linkedin: 'LinkedIn',
      aria_copy_email: 'Копирай имейл адреса',
      aria_lang_switch: 'Смени езика',
      form_sending: 'Изпращане...',
      form_success: 'Благодаря — запитването е изпратено. Ще се свържа с теб скоро.',
      form_error: 'Нещо се обърка — моля, пиши ми директно на имейл.',
      form_captcha_required: 'Моля, потвърди reCAPTCHA преди изпращане.',
      email_copied: '(копирано)'
    },
    ru: {
      nav_about: 'Обо мне',
      nav_portfolio: 'Портфолио',
      nav_contact: 'Контакты',
      cta_start: 'Начать проект',
      about_role: 'Разработчик ПО и QA-специалист',
      about_bio: '«Lone Coder» — мой личный бренд в области разработки и тестирования программных решений для бизнеса и частных клиентов. Я разрабатываю и тестирую веб-приложения, backend-системы и расширения для Chrome, уделяя особое внимание качеству, надёжности и удобству использования. Я работаю напрямую с клиентами, чтобы понять их требования и реализовать индивидуальные программные проекты от идеи до готового продукта — сбор требований, планирование, выполнение и поддержка, всё в одном месте. Я предлагаю комплексные услуги в области разработки ПО и обеспечения качества, включая ручное и автоматизированное тестирование, тестирование API, обнаружение, отслеживание и устранение дефектов, автоматизацию тестирования и развёртывание на основе Docker.',
      about_certs: 'Посмотреть сертификаты',
      status_available: 'Свободен',
      status_remote: 'Удалённо',
      status_pricing: 'Цена по договорённости',
      services_eyebrow: 'Предоставляемые услуги',
      service_testing: 'Ручное и автоматизированное тестирование',
      service_software_testing: 'Тестирование ПО',
      service_ued: 'Дизайн пользовательского опыта (UED)',
      service_webdev: 'Веб-разработка',
      service_appdev: 'Разработка приложений',
      service_chrome: 'Расширения для Chrome',
      service_support: 'Поддержка клиентов',
      service_dataentry: 'Ввод данных',
      service_datareport: 'Отчётность по данным',
      service_research: 'Онлайн-исследования',
      service_personal: 'Личный ассистент',
      service_virtual: 'Виртуальный ассистент',
      service_automation: 'Инструменты автоматизации и цифровые продукты',
      portfolio_eyebrow: 'Портфолио',
      portfolio_tag: 'Рабочее приложение',
      portfolio_launch: 'Открыть приложение',
      p1_highlight: '4 режима генерации + оценка надёжности в реальном времени, без зависимостей.',
      p1_desc: 'Генератор паролей в ретро-терминальном стиле с несколькими режимами и анализом надёжности.',
      p2_highlight: 'Без сервера, без регистрации — рабочий почтовый ящик в один клик.',
      p2_desc: 'Сервис одноразовой почты в ретро-хакерском стиле — мгновенные адреса, обновление входящих в реальном времени и CRT-интерфейс в стиле Матрицы. Без регистрации, без backend.',
      p3_highlight: '40 вопросов в 4 категориях, плюс прогноз погоды в реальном времени.',
      p3_desc: 'Викторина в стиле 90-х с 40 вопросами по шахматам, программированию, IT и хоррору, плюс ретро-факты о технологиях и актуальный прогноз погоды.',
      p4_highlight: 'Диалоговый движок с ~25 темами и памятью, на 100% работающий в браузере.',
      p4_desc: 'Хоррор-переосмысление классического чат-бота ELIZA в духе Harvester (1996) — диалоговый движок с ~25 темами и кратковременной памятью, полностью работающий в браузере. Переключайтесь между режимами Harvester, Philosophy и Casual, с опциональной голосовой озвучкой для дополнительной жути.',
      p5_highlight: '20 тайн, 50 фильмов ужасов и 28 проклятых рецептов — полностью на 4 языках.',
      p5_desc: 'Мрачное веб-приложение о Хэллоуине в стиле VHS — «Дух Хэллоуина» — с проклятыми рецептами, классическими фильмами ужасов и древними тайнами, полностью переведённое на английский, болгарский, русский и немецкий.',
      contact_eyebrow: 'Контакты',
      contact_heading: 'Расскажите о своём проекте',
      form_first: 'Имя',
      form_last: 'Фамилия',
      form_email: 'Email',
      form_subject: 'Тема',
      form_message: 'Детали проекта',
      form_submit: 'Отправить заявку',
      contact_divider: 'или свяжитесь напрямую',
      footer_text: '© 2026 Lone Coder. Качество имеет значение. Каждая строка на счету.',
      aria_toggle_menu: 'Открыть/закрыть меню',
      aria_github: 'GitHub',
      aria_linkedin: 'LinkedIn',
      aria_copy_email: 'Скопировать email',
      aria_lang_switch: 'Сменить язык',
      form_sending: 'Отправка...',
      form_success: 'Спасибо — ваша заявка отправлена. Я свяжусь с вами в ближайшее время.',
      form_error: 'Что-то пошло не так — пожалуйста, напишите мне напрямую на почту.',
      form_captcha_required: 'Пожалуйста, подтвердите reCAPTCHA перед отправкой.',
      email_copied: '(скопировано)'
    },
    de: {
      nav_about: 'Über mich',
      nav_portfolio: 'Portfolio',
      nav_contact: 'Kontakt',
      cta_start: 'Projekt starten',
      about_role: 'Softwareentwickler & QA-Spezialist',
      about_bio: '„Lone Coder" ist meine persönliche Marke für die Entwicklung und das Testen von Softwarelösungen für Unternehmen und Privatkunden. Ich entwickle und teste Webanwendungen, Backend-Systeme und Chrome-Erweiterungen mit Fokus auf Qualität, Zuverlässigkeit und ein gutes Benutzererlebnis. Ich arbeite direkt mit Kunden zusammen, um ihre Anforderungen zu verstehen und individuelle Softwareprojekte von der Idee bis zum fertigen Produkt zu liefern — Anforderungsanalyse, Planung, Umsetzung und Wartung, alles aus einer Hand. Ich biete umfassende Dienstleistungen in den Bereichen Softwareentwicklung und Qualitätssicherung, darunter manuelles und automatisiertes Testen, API-Tests, Fehlererkennung, -verfolgung und -behebung, Testautomatisierung und Docker-basiertes Deployment.',
      about_certs: 'Zertifikate ansehen',
      status_available: 'Verfügbar',
      status_remote: 'Fernarbeit',
      status_pricing: 'Preis auf Anfrage',
      services_eyebrow: 'Angebotene Leistungen',
      service_testing: 'Manuelles & automatisiertes Testen',
      service_software_testing: 'Softwaretests',
      service_ued: 'User Experience Design (UED)',
      service_webdev: 'Webentwicklung',
      service_appdev: 'Anwendungsentwicklung',
      service_chrome: 'Chrome-Erweiterungen',
      service_support: 'Kundensupport',
      service_dataentry: 'Dateneingabe',
      service_datareport: 'Datenauswertung',
      service_research: 'Online-Recherche',
      service_personal: 'Persönliche Assistenz',
      service_virtual: 'Virtuelle Assistenz',
      service_automation: 'Automatisierungstools & digitale Produkte',
      portfolio_eyebrow: 'Portfolio',
      portfolio_tag: 'Live-App',
      portfolio_launch: 'App öffnen',
      p1_highlight: '4 Generierungsmodi + Echtzeit-Sicherheitsbewertung, ohne Abhängigkeiten.',
      p1_desc: 'Ein Passwortgenerator im Retro-Terminal-Stil mit mehreren Modi und Sicherheitsanalyse.',
      p2_highlight: 'Kein Backend, keine Anmeldung — ein funktionierendes Postfach mit einem Klick.',
      p2_desc: 'Ein Wegwerf-E-Mail-Dienst im Retro-Hacker-Stil — sofortige Adressen, Echtzeit-Postfachabfrage und ein Matrix-grünes CRT-Interface. Keine Registrierung, kein Backend.',
      p3_highlight: '40 Fragen in 4 Kategorien, plus Live-Wetterdaten.',
      p3_desc: 'Ein Quiz im 90er-Jahre-Stil mit 40 Fragen zu Schach, Programmierung, IT und Horror, dazu Retro-Technikfakten und eine aktuelle Wettervorhersage.',
      p4_highlight: 'KI-Charakter-Engine mit ~25 Themen und Gedächtnis, 100 % clientseitig.',
      p4_desc: 'Eine Horror-Neuinterpretation des klassischen ELIZA-Chatbots im Geiste von Harvester (1996) — eine Dialog-Engine mit ~25 Themen und Kurzzeitgedächtnis, die vollständig im Browser läuft. Wechsle zwischen den Antwortmodi Harvester, Philosophy und Casual, mit optionaler Sprachausgabe für zusätzliche Gänsehaut.',
      p5_highlight: '20 Mysterien, 50 Horrorfilme und 28 verfluchte Rezepte — vollständig in 4 Sprachen.',
      p5_desc: 'Eine düstere Halloween-Webanwendung im VHS-Stil — Der Geist von Halloween — mit verfluchten Rezepten, klassischen Horrorfilmen und uralten Mysterien, vollständig übersetzt ins Englische, Bulgarische, Russische und Deutsche.',
      contact_eyebrow: 'Kontakt',
      contact_heading: 'Erzähl mir von deinem Projekt',
      form_first: 'Vorname',
      form_last: 'Nachname',
      form_email: 'E-Mail',
      form_subject: 'Betreff',
      form_message: 'Projektdetails',
      form_submit: 'Anfrage senden',
      contact_divider: 'oder direkt Kontakt aufnehmen',
      footer_text: '© 2026 Lone Coder. Qualität zählt. Jede Zeile zählt.',
      aria_toggle_menu: 'Menü öffnen/schließen',
      aria_github: 'GitHub',
      aria_linkedin: 'LinkedIn',
      aria_copy_email: 'E-Mail-Adresse kopieren',
      aria_lang_switch: 'Sprache ändern',
      form_sending: 'Wird gesendet...',
      form_success: 'Danke — deine Anfrage wurde gesendet. Ich melde mich bald bei dir.',
      form_error: 'Etwas ist schiefgelaufen — bitte schreib mir direkt eine E-Mail.',
      form_captcha_required: 'Bitte bestätige die reCAPTCHA vor dem Absenden.',
      email_copied: '(kopiert)'
    }
  };

  var FLAGS = {
    en: '<svg viewBox="0 0 60 40"><rect width="60" height="40" fill="#00247d"/><path d="M0,0 60,40 M60,0 0,40" stroke="#fff" stroke-width="8"/><path d="M0,0 60,40 M60,0 0,40" stroke="#cf142b" stroke-width="4"/><path d="M30,0 30,40 M0,20 60,20" stroke="#fff" stroke-width="14"/><path d="M30,0 30,40 M0,20 60,20" stroke="#cf142b" stroke-width="8"/></svg>',
    bg: '<svg viewBox="0 0 60 40"><rect width="60" height="13.33" y="0" fill="#fff"/><rect width="60" height="13.33" y="13.33" fill="#00966e"/><rect width="60" height="13.34" y="26.66" fill="#d62612"/></svg>',
    ru: '<svg viewBox="0 0 60 40"><rect width="60" height="13.33" y="0" fill="#fff"/><rect width="60" height="13.33" y="13.33" fill="#0039a6"/><rect width="60" height="13.34" y="26.66" fill="#d52b1e"/></svg>',
    de: '<svg viewBox="0 0 60 40"><rect width="60" height="13.33" y="0" fill="#000"/><rect width="60" height="13.33" y="13.33" fill="#dd0000"/><rect width="60" height="13.34" y="26.66" fill="#ffce00"/></svg>'
  };
  var STORAGE_KEY = 'lc_lang';
  var current = localStorage.getItem(STORAGE_KEY) || 'en';
  if (!translations[current]) current = 'en';

  function t(key){
    return (translations[current] && translations[current][key]) || translations.en[key] || '';
  }

  function applyTranslations(){
    document.documentElement.setAttribute('lang', current);

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var val = t(el.getAttribute('data-i18n'));
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      var val = t(el.getAttribute('data-i18n-aria'));
      if (val) el.setAttribute('aria-label', val);
    });

    var flagEl = document.getElementById('langFlag');
    var codeEl = document.getElementById('langCode');
    if (flagEl) flagEl.innerHTML = FLAGS[current];
    if (codeEl) codeEl.textContent = current.toUpperCase();

    document.querySelectorAll('.lang-menu li').forEach(function(li){
      li.classList.toggle('active', li.getAttribute('data-lang') === current);
    });
  }

  function setLang(lang){
    if (!translations[lang]) return;
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
  }

  window.LC_I18N = {
    t: t,
    setLang: setLang,
    get lang(){ return current; }
  };

  applyTranslations();

  var langBtn = document.getElementById('langBtn');
  var langMenu = document.getElementById('langMenu');

  if (langBtn && langMenu){
    langBtn.addEventListener('click', function(e){
      e.stopPropagation();
      var isOpen = langMenu.classList.toggle('active');
      langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    langMenu.querySelectorAll('li').forEach(function(li){
      li.addEventListener('click', function(){
        setLang(li.getAttribute('data-lang'));
        langMenu.classList.remove('active');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function(e){
      if (!langMenu.contains(e.target) && !langBtn.contains(e.target)){
        langMenu.classList.remove('active');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
