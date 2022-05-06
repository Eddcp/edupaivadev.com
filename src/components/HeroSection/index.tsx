import Image from 'next/image'

const HeroSection = () => (
  <>
    <section className="lg:mt-20 fade-in-start">
      <div className="flex flex-col-reverse justify-between lg:flex-row lg:mx-auto lg:w-[85%] ">
        <div className="flex flex-col items-center text-left">
          <h1 data-fade="1" className="text-3xl font-bold sm:text-5xl lg:mt-20">
            Desenvolvimento pessoal, profissional e financeiro.
          </h1>
          <p data-fade="2" className="mt-6 text-base text-white sm:text-lg">
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
            width="2048"
            height="2048"
          />
        </div>
      </div>
    </section>
  </>
)

export default HeroSection
