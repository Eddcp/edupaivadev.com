import ContactForm from 'components/ContactForm'
import Image from 'next/image'
import useWindowSize from '@/hooks/useWindowSize'
import SizeHelper from '@/utils/sizeHelper'
import SocialLinks from '../SocialLinks'

const Footer = () => {
  const { width } = useWindowSize()

  return (
    <footer>
      <div className="mt-10 layout">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-auto lg:w-[85%]">
          <div className="flex flex-col text-left">
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
              Hub de tecnologia e informação focado em conteúdos formativos e
              disruptivos. Quebre o código, a fronteira, seus limites e
              limitações.
            </p>
            <SocialLinks />
          </div>
          <div className="lg:px-12">
            <p className="mt-12 text-lg font-semibold">
              Tem alguma sugestão de conteúdo, contribuição ou melhoria que
              deseja compartilhar com a gente?
            </p>

            <p className="mt-4">
              Fale com a gente no formulário{' '}
              {SizeHelper.isDesktop(width) ? 'ao lado' : 'abaixo'}{' '}
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <p className="mt-10 h-12 min-h-full leading-[3rem] text-center bg-secondary">
        © 2022 edupaivadev All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
