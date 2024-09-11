import ru from '@/locale/ru.json'
import en from '@/locale/en.json'

const lang = {
    RU: ru,
    EN: en,
}

export default {

    /**
     * Init a language plugin
     *
     * @param app
     */
    install: (app) => {
        app.config.globalProperties.$locale = (key, locale) => {
            const arrayKeys =  key.split('.')
            const translate = lang[locale || import.meta.env.VITE_LOCALE]

            let result = null

            arrayKeys.forEach((el) => {
                result = translate[el] ? translate[el] : result[el]
            })

            return result
        }
    },
}