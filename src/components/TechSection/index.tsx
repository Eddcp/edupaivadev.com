import techStack from './content'

const TechSection = () => (
  <section className="mt-10 bg-red lg:mt-28">
    <div className="layout">
      <div className="grid py-16 lg:grid-cols-12 lg:mx-auto lg:w-[85%]">
        <div className="col-span-3 text-2xl font-bold uppercase">
          Tecnologias
        </div>
        <div className="col-span-9">
          <ul className="flex flex-row flex-wrap w-full xl:flex-nowrap">
            {techStack.map((techItem, index) => {
              const { label } = techItem
              return (
                <li
                  className="m-2 sm:justify-items-stretch lg:justify-between"
                  key={index}
                >
                  <div className="w-24 h-28 text-center bg-primary rounded-md">
                    {label}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default TechSection
