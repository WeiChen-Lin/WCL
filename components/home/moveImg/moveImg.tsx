import Image from 'next/image'

type Props = {
  img_site: string
}

export default function MoveImg(props: Props) {
  const { img_site } = props
  return <Image src={img_site} />
}
