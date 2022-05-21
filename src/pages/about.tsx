import Image from 'next/image'

const AboutPage = () => (
  <>
    <section className="flex items-center sm:h-[calc(100vh_-_25rem)] layout">
      <div className="grid grid-cols-2">
        <div>
          <Image
            src="/img/me.jpg"
            alt="Selfie de Eduardo Paiva, homem branco com uma barba média, atrás da foto um portão eletrônico marrom"
            width="300"
            height="300"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold sm:text-5xl">Sobre mim</h1>
          <p>
            Meu nome é Eduardo Costa de Paiva, trabalho com TI há mais de 5
            anos, nesse tempo pude trabalhar tanto com tecnologias frontend web
            como tecnologias backend. Dentre essas estão: React, NextJS, Jest,
            SASS, PostCSS, Grunt, Gulp, Webpack, NodeJS, Java, Spring Boot,
            JUnit, Mockito, PostgreSQL, Oracle, dando manutenção e evoluindo
            arquitetura monolíticas ou arquitetura de microserviços. Pude
            trabalhar diretamente com o serviço de cloud fornecido pela AWS
            utilizando tecnologias como AWS Lambda com Serverless Framework, AWS
            DynamoDB, AWS SQS/SNS, AWS KMS, AWS EC2, AWS ECS.
          </p>
          <p>
            No meu tempo livre gosto muito de ler livros sobre desenvolvimento
            pessoal, mas também adoro ficção científica e fantasia. Já tive uma
            banda na adolescência e arranho um pouco na guitarra, gosto de
            tatuagens, de conhecer pessoas e bandas novas, viajar e
            principalmente ir em shows e festivais
          </p>
        </div>
      </div>
    </section>
  </>
)

export default AboutPage
