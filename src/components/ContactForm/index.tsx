import { useState, ChangeEvent } from 'react'

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [form, setForm] = useState('')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(e)
    const { value, name } = e.target
    setForm(Object.assign({}, form, { [name]: value }))
  }

  return (
    <form
      aria-label="contact-form"
      name="contact-form"
      className="text-custom-black"
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="relative col-span-2 lg:col-span-1">
          <input
            type="text"
            id="form-name"
            value={inputs.name}
            className="peer w-full h-10 border-2 focus:border-red-500 focus:outline-none transition-colors"
            required
            onChange={handleChange}
          />
          <label
            htmlFor="form-name"
            className="absolute top-2 peer-focus:-top-4 left-2 peer-focus:left-0 text-sm peer-focus:text-xs peer-focus:text-white transition-all cursor-text"
          >
            Nome
          </label>
        </div>
        <div className="relative col-span-2 lg:col-span-1">
          <input
            type="email"
            id="form-email"
            value={inputs.email}
            className="peer pl-2 w-full h-10 border-2 focus:border-red-500 focus:outline-none transition-colors"
            required
            onChange={handleChange}
          />
          <label
            htmlFor="form-email"
            className="absolute top-2 peer-focus:-top-4 left-2 peer-focus:left-0 text-sm peer-focus:text-xs peer-focus:text-white transition-all cursor-text"
          >
            Email
          </label>
        </div>
        <div className="relative col-span-2">
          <textarea
            id="form-message"
            value={inputs.message}
            className="peer w-full h-full border-2 focus:border-red-500 focus:outline-none transition-colors"
            rows={5}
            required
            onChange={handleChange}
          />
          <label
            htmlFor="form-message"
            className="absolute top-2 peer-focus:-top-4 left-2 peer-focus:left-0 text-sm peer-focus:text-xs peer-focus:text-white transition-all cursor-text"
          >
            Mensagem
          </label>
        </div>
        <div className="col-span-2 font-antarctican">
          <button
            type="submit"
            className="w-full h-10 text-base font-semibold text-white uppercase bg-red"
          >
            Enviar mensagem
          </button>
        </div>
      </div>
    </form>
  )
}
export default ContactForm
