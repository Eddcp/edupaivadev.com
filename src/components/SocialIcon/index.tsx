import Github from '@/components/SocialIcon/icons/Github.svg'
import Youtube from '@/components/SocialIcon/icons/Youtube.svg'
import Linkedin from '@/components/SocialIcon/icons/Linkedin.svg'
import Twitter from '@/components/SocialIcon/icons/Twitter.svg'
import Instagram from '@/components/SocialIcon/icons/Instagram.svg'

type Component = {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const components: Component = {
  Github: Github,
  Youtube: Youtube,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram
}

type Icon = {
  type: string
  url: string
  size: number
}

const SocialIcon = (icon: Icon) => {
  const SocialSvg = components[icon.type]

  return (
    <a
      className="text-sm hover:text-white transition"
      target="_blank"
      rel="noopener noreferrer"
      href={icon.url}
    >
      <span className="sr-only">{icon.type}</span>
      <SocialSvg
        className={`fill-current hover:fill-white h-${icon.size} w-${icon.size}`}
      />
    </a>
  )
}

export default SocialIcon
