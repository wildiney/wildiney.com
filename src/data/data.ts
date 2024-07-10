import * as reacticons from 'react-icons/ai'

export type IconKey = keyof typeof reacticons

export type ISocialMedia = {
  icon: IconKey
  link: string
  site: string
}

export const socialMedia: ISocialMedia[] = [
  {
    icon: 'AiOutlineBehance',
    site: 'Behance',
    link: 'https://www.behance.net/wildiney',
  },
  {
    icon: 'AiOutlineYoutube',
    site: 'YouTube',
    link: 'https://www.youtube.com/watch?v=5aU_i7rOnlA&list=PLEFS0XFJyys1QVGZ7WL23hCtWcLj4NV2y',
  },
  {
    icon: 'AiOutlineLinkedin',
    site: 'LinkedIn',
    link: 'https://linkedin.com/in/wildiney',
  },
  {
    icon: 'AiOutlineGithub',
    site: 'Github',
    link: 'https://github.com/wildiney/',
  },

  {
    icon: 'AiOutlineWhatsApp',
    site: 'WhatsApp',
    link: 'https://wa.me/5511981591082',
  },
  {
    icon: 'AiOutlineMail',
    site: 'E-mail',
    link: 'mailto:wildiney@gmail.com',
  },
]
