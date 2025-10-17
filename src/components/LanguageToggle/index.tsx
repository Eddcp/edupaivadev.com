import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LanguageToggle = () => {
    const router = useRouter()
    const { t } = useTranslation('common')

    const changeLanguage = (locale: string) => {
        router.push(router.asPath, router.asPath, { locale })
    }

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => changeLanguage('pt')}
                className={`px-2 py-1 text-sm font-medium transition-colors ${router.locale === 'pt'
                        ? 'text-red border-b-2 border-red'
                        : 'text-white hover:text-gray-300'
                    }`}
            >
                {t('language.portuguese')}
            </button>
            <span className="text-white">|</span>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 text-sm font-medium transition-colors ${router.locale === 'en'
                        ? 'text-red border-b-2 border-red'
                        : 'text-white hover:text-gray-300'
                    }`}
            >
                {t('language.english')}
            </button>
        </div>
    )
}

export default LanguageToggle
