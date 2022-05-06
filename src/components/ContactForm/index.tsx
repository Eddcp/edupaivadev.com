// import { useState } from 'react'

const ContactForm = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  // const [submitted, setSubmitted] = useState(false)

  return (
    <form className="text-custom-black">
      <div className="relative">
        <label htmlFor="name" className="absolute top-0">
          Nome
        </label>
        <input type="text" name="name" placeholder=" " />
      </div>
      <div className="relative">
        <label htmlFor="email" className="absolute top-0">
          Email
        </label>
        <input type="email" name="email" />
      </div>
      <div className="relative">
        <label htmlFor="message" className="absolute top-0">
          Mensagem
        </label>
        <textarea name="message" />
      </div>
      <input type="submit" value="Enviar" />
    </form>
  )
}
export default ContactForm
