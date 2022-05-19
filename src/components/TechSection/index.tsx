import techStack from './content'
import Typescript from '@/components/TechSection/icons/Typescript.svg'
import NodeJS from '@/components/TechSection/icons/NodeJS.svg'
import Java from '@/components/TechSection/icons/Java.svg'
import Spring from '@/components/TechSection/icons/Spring.svg'
import AWS from '@/components/TechSection/icons/AWS.svg'
import NextJS from '@/components/TechSection/icons/NextJS.svg'
import ReactJS from '@/components/TechSection/icons/ReactJS.svg'
import Javascript from '@/components/TechSection/icons/Javascript.svg'

type Component = {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const components: Component = {
  Typescript: Typescript,
  NodeJS: NodeJS,
  Java: Java,
  Spring: Spring,
  AWS: AWS,
  NextJS: NextJS,
  ReactJS: ReactJS,
  Javascript: Javascript
}

const TechSection = () => (
  <section className="mt-10 bg-red lg:mt-28">
    <div className="layout">
      <div className="grid py-16 lg:grid-cols-12 lg:mx-auto lg:w-[85%]">
        <div className="flex col-span-3 justify-start items-center text-2xl font-bold uppercase">
          Tecnologias
        </div>
        <div className="col-span-9">
          <ul className="flex flex-row flex-wrap w-full">
            {techStack.map((techItem, index) => {
              const { label } = techItem
              const TechSvg = components[label]
              return (
                <li
                  className="m-2 font-antarctican text-sm uppercase	 sm:justify-items-stretch lg:justify-between"
                  key={index}
                >
                  <div className="flex flex-col	justify-center items-center w-24 h-28 text-center bg-primary rounded-md">
                    {TechSvg !== undefined ? (
                      <TechSvg className={`block fill-current h-10 w-10`} />
                    ) : (
                      ''
                    )}
                    <span className="mt-2">{label}</span>
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
