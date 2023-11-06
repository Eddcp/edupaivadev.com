import SocialIcon from '../SocialIcon'
import links from './content'

type Icon = {
  type: string
  url: string
  size: number
}

type Props = {
  className?: string
  size: number
}

const SocialLinks = ({ className, size }: Props) => (
  <nav>
    <ul className={`flex content-start justify-between ${className}`}>
      {links.map((link, i) => {
        const icon: Icon = {
          type: link.label,
          url: link.url,
          size
        }
        return (
          <li key={i}>
            <SocialIcon {...icon} />
          </li>
        )
      })}
    </ul>
  </nav>
)

export default SocialLinks
