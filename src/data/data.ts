import * as reacticons from 'react-icons/ai'

export type ISocialMedia = {
  icon: React.ComponentType
  link: string
  site: string
  ariaLabel?: string
}

export const socialMedia: ISocialMedia[] = [
  {
    icon: reacticons.AiOutlineBehance,
    site: 'Behance',
    link: 'https://www.behance.net/wildiney',
    ariaLabel: "See my portfolio at Behance"
  },
  {
    icon: reacticons.AiOutlineYoutube,
    site: 'YouTube',
    link: 'https://www.youtube.com/watch?v=5aU_i7rOnlA&list=PLEFS0XFJyys1QVGZ7WL23hCtWcLj4NV2y',
    ariaLabel: "See this playlist with my work on Youtube.com"
  },
  {
    icon: reacticons.AiOutlineLinkedin,
    site: 'LinkedIn',
    link: 'https://linkedin.com/in/wildiney',
    ariaLabel: "See my resumé on LinkedIn"
  },
  {
    icon: reacticons.AiOutlineGithub,
    site: 'Github',
    link: 'https://github.com/wildiney/',
    ariaLabel: "See some of my coding projects on Github"
  },

  {
    icon: reacticons.AiOutlineWhatsApp,
    site: 'WhatsApp',
    link: 'https://wa.me/5511981591082',
    ariaLabel: "Say hi on WhatsApp"
  },
  {
    icon: reacticons.AiOutlineMail,
    site: 'E-mail',
    link: 'mailto:wildiney@gmail.com',
    ariaLabel: "Send me an email"
  },
]
