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
      <div className="grid py-16 lg:mx-auto lg:w-[85%] lg:grid-cols-12">
        <div className="col-span-3 flex items-center justify-start text-2xl font-bold uppercase">
          Tecnologias
        </div>
        <div className="col-span-9">
          <ul className="flex w-full flex-row flex-wrap">
            {techStack.map((techItem, index) => {
              const { label } = techItem
              const TechSvg = components[label]
              return (
                <li
                  className="m-2 font-antarctican text-sm uppercase	 sm:justify-items-stretch lg:justify-between"
                  key={index}
                >
                  <div className="flex h-28	w-24 flex-col items-center justify-center rounded-md bg-primary text-center">
                    {TechSvg !== undefined ? (
                      <TechSvg className={`block h-10 w-10 fill-current`} />
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
