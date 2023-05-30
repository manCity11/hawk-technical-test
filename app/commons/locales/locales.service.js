import dayjs from 'dayjs';

const BASE_LOCALES = {
  fr: {
    globals: {
      yes: /* istanbul ignore next */ () => 'yes',
      no: /* istanbul ignore next */ () => 'no',
    },
  },
};

const LocaleServiceMethod = () => {
  let messages;
  const i18n = {
    /* istanbul ignore next */
    get(id, value = {}) {
      const newMessage = _.get(messages, id);
      const message = newMessage ? newMessage(value) : '';

      return /(<([^>]+)>)|(&[A-z]+;)/ig.test(message) ? { __html: message } : message;
    },
  };

  return {
    /* istanbul ignore next */
    getI18n() {
      return i18n;
    },
    initLocales(locales = {}, lang = 'en') {
      messages = locales;

      if (locales.moment) {
        const dateLocales = {
          custom: {
            months: (locales?.months?.() || '').split('_'),
            monthsShort: (locales?.monthsShort?.() || '').split('_'),
            weekdays: (locales?.weekdays?.() || '').split('_'),
          },
          dateFormats: {
            L: locales.moment?.presets?.L?.(),
            LT: locales.moment?.presets?.LT?.(),
            LL: locales.moment?.presets?.LL?.(),
          },
        };

        dayjs.locale(lang, {
          ...dateLocales.custom,
          formats: dateLocales.dateFormats,
        });
      }

      return i18n;
    },
    fetchLocales(locales_url, lang = 'en') {
      const base = _.get(document.getElementsByTagName('base'), '[0].href', '/');
      const localesFilePath = `${base}${locales_url[lang]}`;

      function loadScript() {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');

          script.async = true;
          script.src = localesFilePath;
          script.onload = resolve;
          script.onerror = reject;

          document.body.appendChild(script);
        });
      }

      return loadScript()
        // eslint-disable-next-line no-underscore-dangle
        .then(() => this.initLocales(window.__LOCALES__, lang));
    },
    getDefaultLocales(lang = 'en') {
      return this.initLocales(BASE_LOCALES[lang], lang);
    },
  };
};

export const LocalesService = LocaleServiceMethod();
