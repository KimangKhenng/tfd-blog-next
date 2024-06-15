
import messagesKh from './locales/kh-KH'
import messagesEn from './locales/en-US'

export default defineI18nConfig(() => ({
    // legacy: true,
    locale: 'kh-KH',
    messages: {
        "en-US": messagesKh,
        "kh-KH": messagesEn,
    },
}))
