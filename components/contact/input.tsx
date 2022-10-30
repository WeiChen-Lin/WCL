interface ContactInputInterface {
  label: string
  css: string
}

const ContactInput = (props: ContactInputInterface) => {
  const { label, css } = props
  return (
    <>
      <div className={`flex flex-col ${css}`}>
        <div className='mx-4 text-lg text-slate-700'>{label.toUpperCase()}</div>
        <input
          type='text'
          className={`bg-white/10 rounded-xl p-4 focus:outline-none mx-4`}
        />
      </div>
    </>
  )
}

const ContactTextField = (props: ContactInputInterface) => {
  const { label, css } = props
  return (
    <>
      <div className={`flex flex-col ${css}`}>
        <div className='mx-4 text-lg text-slate-700'>{label.toUpperCase()}</div>
        <textarea
          className={`bg-white/10 rounded-xl p-4 focus:outline-none mx-4`}
        />
      </div>
    </>
  )
}

const ContactSendMailBtn = () => {}

export { ContactInput, ContactTextField, ContactSendMailBtn }
