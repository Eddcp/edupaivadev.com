// import { useState } from 'react'

const ContactForm = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  // const [submitted, setSubmitted] = useState(false)

  return (
    <form className="text-custom-black">
      <div className="grid grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            id="form-name"
            className="peer h-10 border-2 focus:border-red-500 focus:outline-none transition-colors"
          />
          <label
            htmlFor="form-name"
            className="absolute top-1 peer-focus:-top-4 left-0 peer-focus:text-xs peer-focus:text-red-600 transition-all cursor-text"
          >
            Nome
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="form-email"
            className="peer h-10 border-2 focus:border-red-500 focus:outline-none transition-colors"
          />
          <label
            htmlFor="form-email"
            className="absolute top-1 peer-focus:-top-4 left-0 peer-focus:text-xs peer-focus:text-red-600 transition-all cursor-text"
          >
            Email
          </label>
        </div>
        <div className="relative col-span-2">
          <textarea
            id="form-message"
            className="peer w-full h-10 border-2 focus:border-red-500 focus:outline-none transition-colors"
          />
          <label
            htmlFor="form-message"
            className="absolute top-1 peer-focus:-top-4 left-0 peer-focus:text-xs peer-focus:text-red-600 transition-all cursor-text"
          >
            Mensagem
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </div>
    </form>
  )
}
export default ContactForm
