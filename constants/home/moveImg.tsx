import {
  Maple,
  Drink,
  Meat,
  Surf,
  Skateboard,
  Dog,
  Mountain,
  Cat
} from 'public/home/moveImg'

interface moveImg {
  name: string
  icon: JSX.Element
}
const moveImgIcons: moveImg[] = [
  {
    name: 'maple',
    icon: <Maple />
  },
  {
    name: 'drink',
    icon: <Drink />
  },
  {
    name: 'meat',
    icon: <Meat />
  },
  {
    name: 'surf',
    icon: <Surf />
  },
  {
    name: 'skateboard',
    icon: <Skateboard />
  },
  {
    name: 'dog',
    icon: <Dog />
  },
  {
    name: 'mountain',
    icon: <Mountain />
  },
  {
    name: 'cat',
    icon: <Cat />
  }
]
export default moveImgIcons
