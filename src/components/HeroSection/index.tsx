import Image from 'next/image'

const HeroSection = () => (
  <>
    <section className="py-20">
      <div className="flex flex-col-reverse justify-between lg:flex-row">
        <div className="flex flex-col items-center text-left">
          <h1 className="mt-20 text-3xl font-bold sm:text-5xl">
            Desenvolvimento pessoal, profissional e financeiro.
          </h1>
          <p className="mt-6 text-base text-white sm:text-lg">
            Meu nome é Eduardo Paiva e atuo como desenvolvedor há mais de 5
            anos. Desde cedo na carreira percebi a ironia e dificuldade da
            classe de se desenvolver para além do campo técnico. Aqui você
            encontra informação e formação em tecnologia, cultura,
            entretenimento, independência financeira e liberdade geográfica.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/img/3dlogo.png"
            alt="logo 3d"
            width="2500"
            height="2000"
          />
        </div>
      </div>
    </section>
  </>
)

export default HeroSection
