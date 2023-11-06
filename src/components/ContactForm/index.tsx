import axios from 'axios'
import { useState, ChangeEvent } from 'react'

const ContactForm = () => {
  const [form, setForm] = useState('')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target
    setForm(Object.assign({}, form, { [name]: value }))
  }

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await axios.post('/api/contact', form)
      alert('Success!')
    } catch (error) {
      alert('An error ocurred')
    }
  }

  return (
    <form
      aria-label="contact-form"
      name="contact-form"
      className="mt-5 text-custom-black lg:mt-0"
      onSubmit={onSubmitForm}
    >
      <div className="grid grid-cols-2 gap-6">
        <div className="relative col-span-2 lg:col-span-1">
          <input
            type="text"
            id="name"
            name="name"
            className="peer h-10 w-full border-2 transition-colors focus:border-red-500 focus:outline-none"
            required
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="name"
            className="absolute -top-4 left-1 cursor-text text-xs text-white transition-all duration-200 ease-in-out peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-black peer-focus:-top-4 peer-focus:left-1 peer-focus:text-xs peer-focus:text-white"
          >
            Nome
          </label>
        </div>
        <div className="relative col-span-2 lg:col-span-1">
          <input
            type="email"
            id="email"
            name="email"
            className="peer h-10 w-full border-2 pl-2 transition-colors focus:border-red-500 focus:outline-none"
            required
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className="absolute -top-4 left-1 cursor-text text-xs text-white transition-all duration-200 ease-in-out peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-black peer-focus:-top-4 peer-focus:left-1 peer-focus:text-xs peer-focus:text-white"
          >
            Email
          </label>
        </div>
        <div className="relative col-span-2">
          <textarea
            id="message"
            name="message"
            className="peer h-full w-full border-2 transition-colors focus:border-red-500 focus:outline-none"
            rows={4}
            required
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="message"
            className="absolute -top-4 left-1 cursor-text text-xs text-white transition-all duration-200 ease-in-out peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-black peer-focus:-top-4 peer-focus:left-1 peer-focus:text-xs peer-focus:text-white"
          >
            Mensagem
          </label>
        </div>
        <div className="col-span-2 font-antarctican">
          <button
            type="submit"
            className="h-10 w-full bg-red text-base font-semibold uppercase text-white"
          >
            Enviar mensagem
          </button>
        </div>
      </div>
    </form>
  )
}
export default ContactForm
