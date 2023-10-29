import SocialLinks from '@/components/SocialLinks'
import Image from 'next/legacy/image'

const AboutPage = () => (
  <>
    <section className="flex items-center mt-20 mb-40 layout">
      <div className="grid gap-8 mx-auto max-w-2xl md:grid-cols-6 lg:max-w-[80rem]">
        <figure className="flex flex-col col-span-2 justify-center items-center">
          <Image
            src="/img/me.jpg"
            className="rounded-full"
            alt="Selfie de Eduardo Paiva, homem branco com uma barba média, atrás da foto um portão eletrônico marrom"
            width="300"
            height="300"
          />
        </figure>
        <div className="flex flex-col col-span-4 items-start">
          <h1 className="text-3xl font-bold sm:text-5xl">Sobre mim</h1>
          <p className="mt-10">
            Meu nome é Eduardo Costa de Paiva, trabalho com TI há mais de 5
            anos, nesse tempo pude trabalhar tanto com tecnologias{' '}
            <span className="font-bold">frontend</span> web como tecnologias{' '}
            <span className="font-bold">backend</span>. Dentre essas estão:
            React, NextJS, Jest, SASS, PostCSS, Grunt, Gulp, Webpack, NodeJS,
            Java, Spring Boot, Spring Cloud, JUnit, Mockito, PostgreSQL, Oracle,
            dando manutenção e evoluindo arquiteturas monolíticas e/ou
            arquitetura de microsserviços. Pude trabalhar diretamente com o
            serviço de cloud fornecido pela{' '}
            <span className="font-bold">AWS</span> utilizando tecnologias como
            AWS Lambda com Serverless Framework, AWS DynamoDB, AWS SQS/SNS, AWS
            KMS, AWS EC2, AWS ECS, AWS S3.
          </p>
          <p className="mt-5">
            No meu tempo livre gosto muito de ler livros sobre desenvolvimento
            pessoal, mas também adoro ficção científica e fantasia. Já tive uma
            banda na adolescência e arranho um pouco na guitarra, gosto de
            tatuagens, de conhecer pessoas e bandas novas, viajar e
            principalmente ir em shows e festivais. Podem me seguir no twitter
            pessoal, porém é só shitpost, memes e reclamações: @nomadsedentario
          </p>
          <p>Todos os links de indicação do site são links de afiliados</p>
          <div className="mt-8 w-full">
            <SocialLinks
              className="sm:w-[40%] lg:w-[60%] xl:w-[40%]"
              size={10}
            />
          </div>
        </div>
      </div>
    </section>
    <hr className="h-0.5 bg-red border-none layout" />
  </>
)

export default AboutPage
