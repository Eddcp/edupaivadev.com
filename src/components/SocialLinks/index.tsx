import SocialIcon from '../SocialIcon'
import links from './content'

type Icon = {
  type: string
  url: string
  size: number
}

const SocialLinks = () => (
  <nav>
    <ul className="flex justify-end items-center">
      {links.map((link, i) => {
        const icon: Icon = {
          type: link.label,
          url: link.url,
          size: 8
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
