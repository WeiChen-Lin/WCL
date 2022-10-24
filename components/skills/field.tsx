import styles from 'styles/skill/field.module.css'

interface Props {
  name: string
  current: string
  onChange: Function
}

export default function Field(props: Props) {
  const { name, onChange } = props
  const handleClick = (name: string) => {
    onChange(name)
  }
  return (
    <a
      className={`${styles.field}`}
      onClick={() => {
        handleClick(name)
      }}
    >
      {name}
    </a>
  )
}
