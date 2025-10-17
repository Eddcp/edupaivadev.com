import Image from 'next/legacy/image'
import SocialLinks from '../SocialLinks'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <footer>
      <div className="layout mt-10">
        <div className="grid grid-cols-1 lg:mx-auto lg:w-[85%] lg:grid-cols-8">
          <div className="flex flex-col text-left lg:col-span-4">
            <div className="relative">
              <Image
                src="/img/logo.svg"
                alt="logo edupaivadev"
                width="250"
                height="57"
                className="object-left"
              />
            </div>
            <p className="mt-4">
              {t('footer.description')}
            </p>
            <div className="mt-6">
              <SocialLinks size={6} className="w-[80%]" />
            </div>
          </div>
          <div className="lg:col-span-4 lg:px-12">
            <p className="mt-12 text-lg font-semibold">
              {t('footer.suggestion')}
            </p>

            <p className="mt-4">{t('footer.contact')}</p>
          </div>
        </div>
      </div>
      <p className="mt-10 h-12 min-h-full bg-secondary text-center leading-[3rem]">
        {t('footer.copyright')}
      </p>
    </footer>
  )
}

export default Footer
