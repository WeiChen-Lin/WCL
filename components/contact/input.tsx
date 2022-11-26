import { ChangeEvent } from 'react'

interface ContactInputInterface {
  value: string
  label: string
  css: string
  onChange: (e: ChangeEvent) => void
}

const ContactInput = (props: ContactInputInterface) => {
  const { label, css, onChange, value } = props

  return (
    <>
      <div className={`flex flex-col ${css}`}>
        <div className='mx-4 text-lg text-slate-700'>{label.toUpperCase()}</div>
        <input
          type='text'
          className={`bg-white/10 rounded-xl p-4 focus:outline-none mx-4`}
          onChange={(e) => {
            onChange(e)
          }}
          value={value}
        />
      </div>
    </>
  )
}

const ContactTextField = (props: ContactInputInterface) => {
  const { label, css, onChange, value } = props
  return (
    <>
      <div className={`flex flex-col ${css}`}>
        <div className='mx-4 text-lg text-slate-700'>{label.toUpperCase()}</div>
        <textarea
          className={`bg-white/10 rounded-xl p-4 focus:outline-none mx-4`}
          onChange={(e) => {
            onChange(e)
          }}
          value={value}
        />
      </div>
    </>
  )
}

const ContactSendMailBtn = () => {}

export { ContactInput, ContactTextField, ContactSendMailBtn }
