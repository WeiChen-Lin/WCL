type Props = {
  fill?: string
}

const Arrow = (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 199.109 199.109'
    xmlSpace='preserve'
    opacity={1}
    {...props}
  >
    <path
      style={{
        fill: '#010002',
      }}
      d='M15.235 103.518h9.763v-7.93h-9.759v-.011l61.234-61.234-5.63-5.63L0 99.553l70.843 70.843 5.63-5.619-61.238-61.248zM179.211 95.588h19.898v7.931h-19.898z'
    />
    <path
      style={{
        fill: '#010002',
      }}
      d='M74.744 95.588h19.902v7.931H74.744zM39.926 95.588h19.898v7.931H39.926zM109.57 95.588h19.895v7.931H109.57zM144.389 95.588h19.895v7.931h-19.895z'
    />
  </svg>
)

export { Arrow }
