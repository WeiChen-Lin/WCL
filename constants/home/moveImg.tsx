import {
  Maple,
  Drink,
  Meat,
  Surf,
  Skateboard,
  Dog,
  Mountain,
  Cat,
  BubbleTea,
  Earth,
  Planet,
  Plant,
  Sun,
  Bat
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
  },
  {
    name: 'bubbletea',
    icon: <BubbleTea />
  },
  {
    name: 'earth',
    icon: <Earth />
  },
  {
    name: 'planet',
    icon: <Planet />
  },
  {
    name: 'plant',
    icon: <Plant />
  },
  {
    name: 'sun',
    icon: <Sun />
  },
  {
    name: 'bat',
    icon: <Bat />
  }
]
export default moveImgIcons
