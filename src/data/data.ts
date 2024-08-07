import * as reacticons from 'react-icons/ai'

export type ISocialMedia = {
  icon: React.ComponentType
  link: string
  site: string
}

export const socialMedia: ISocialMedia[] = [
  {
    icon: reacticons.AiOutlineBehance,
    site: 'Behance',
    link: 'https://www.behance.net/wildiney',
  },
  {
    icon: reacticons.AiOutlineYoutube,
    site: 'YouTube',
    link: 'https://www.youtube.com/watch?v=5aU_i7rOnlA&list=PLEFS0XFJyys1QVGZ7WL23hCtWcLj4NV2y',
  },
  {
    icon: reacticons.AiOutlineLinkedin,
    site: 'LinkedIn',
    link: 'https://linkedin.com/in/wildiney',
  },
  {
    icon: reacticons.AiOutlineGithub,
    site: 'Github',
    link: 'https://github.com/wildiney/',
  },

  {
    icon: reacticons.AiOutlineWhatsApp,
    site: 'WhatsApp',
    link: 'https://wa.me/5511981591082',
  },
  {
    icon: reacticons.AiOutlineMail,
    site: 'E-mail',
    link: 'mailto:wildiney@gmail.com',
  },
]
