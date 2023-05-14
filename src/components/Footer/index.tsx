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
        <div className="grid grid-cols-1 lg:grid-cols-8 lg:mx-auto lg:w-[85%]">
          <div className="flex flex-col text-left lg:col-span-2">
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
            <div className="mt-6">
              <SocialLinks size={6} className="w-[80%]" />
            </div>
          </div>
          <div className="lg:col-span-3 lg:px-12">
            <p className="mt-12 text-lg font-semibold">
              Tem alguma sugestão de conteúdo, contribuição ou melhoria que
              deseja compartilhar com a gente?
            </p>

            <p className="mt-4">
              Fale com a gente no formulário{' '}
              {SizeHelper.isDesktop(width) ? 'ao lado' : 'abaixo'}{' '}
            </p>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
      <p className="mt-10 h-12 min-h-full leading-[3rem] text-center bg-secondary">
        © 2023 edupaivadev All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
