import styles from 'styles/skill/listitem.module.css'

interface ListItemProps {
  name: string
  onChange: Function
}

export default function ListItem(props: ListItemProps) {
  const { name, onChange } = props

  return (
    <div
      className={`${styles.listitem} mx-5 my-1`}
      onClick={() => {
        onChange(name)
      }}
    >
      {name}
    </div>
  )
}
