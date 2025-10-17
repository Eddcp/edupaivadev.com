module.exports = {
    i18n: {
        defaultLocale: 'pt',
        locales: ['pt', 'en'],
        localeDetection: true,
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
}
