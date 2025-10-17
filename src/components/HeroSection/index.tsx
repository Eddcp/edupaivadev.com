import Image from 'next/legacy/image'
import SocialLinks from '../SocialLinks'
import { useTranslation } from 'next-i18next'

const HeroSection = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <section className="relative lg:mt-20">
        <div className="flex flex-col-reverse justify-between lg:mx-auto lg:w-[85%] lg:flex-row">
          <div className="flex flex-col items-center text-left">
            <h1 className="text-3xl font-bold sm:text-5xl lg:mt-20">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-base text-white sm:text-lg">
              {t('hero.description')}
            </p>
            <div className="mt-8 w-full">
              <SocialLinks
                className="sm:w-[40%] lg:w-[60%] xl:w-[40%]"
                size={10}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/img/3dlogo.png"
              alt="logo 3d"
              width="2048"
              height="2048"
            />
          </div>
        </div>
        <a
          href="#highlights"
          className="absolute inset-x-0 bottom-[-5.5em] mx-auto w-[72px] animate-bounce cursor-pointer py-5 text-center lg:bottom-[-11em]"
        >
          <Image
            src="/img/scroll-down.svg"
            alt={t('hero.scrollDown')}
            width="72"
            height="27"
          />
        </a>
      </section>
    </>
  )
}

export default HeroSection
