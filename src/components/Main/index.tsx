import Image from 'next/image'

const Main = () => (
  <>
    <section className="py-20">
      <div className="flex flex-col-reverse justify-between lg:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">
            Desenvolvimento pessoal, profissional e financeiro.
          </h1>
          <p className="text-white">
            Meu nome é Eduardo Paiva e atuo como desenvolvedor há 10 anos. Desde
            cedo na carreira percebi a ironia e dificuldade da classe de se
            desenvolver para além do campo técnico. Aqui você encontra
            informação e formação em tecnologia, cultura, entretenimento,
            independência financeira e liberdade geográfica.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/img/3dlogo.png"
            alt="logo 3d"
            width="1000"
            height="1000"
          />
        </div>
      </div>
    </section>
  </>
)

export default Main
