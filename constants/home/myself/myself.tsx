import {
  Facebook,
  Github,
  LinkedIn,
  Instagram
} from 'public/home/myself/myself_icons'

interface socailMedia {
  media_name: string
  link: string
  icon: JSX.Element
}
const socailMedias: socailMedia[] = [
  {
    media_name: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100000236708064',
    icon: <Facebook />
  },
  {
    media_name: 'github',
    link: 'https://github.com/WeiChen-Lin',
    icon: <Github />
  },
  {
    media_name: 'linkedIn',
    link: 'https://www.linkedin.com/in/weichenlin160/',
    icon: <LinkedIn />
  },
  {
    media_name: 'instagram',
    link: 'https://www.instagram.com/a8130301/',
    icon: <Instagram />
  }
]

export default socailMedias
