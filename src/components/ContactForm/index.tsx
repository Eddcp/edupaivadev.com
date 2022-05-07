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
            className="peer w-full h-10 border-2 focus:border-red-500 focus:outline-none transition-colors"
            required
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="name"
            className="absolute peer-placeholder-shown:top-2 -top-4 peer-focus:-top-4 peer-placeholder-shown:left-2 left-1 peer-focus:left-1 peer-placeholder-shown:text-sm text-xs peer-focus:text-xs peer-placeholder-shown:text-black text-white peer-focus:text-white transition-all duration-200 ease-in-out cursor-text"
          >
            Nome
          </label>
        </div>
        <div className="relative col-span-2 lg:col-span-1">
          <input
            type="email"
            id="email"
            className="peer pl-2 w-full h-10 border-2 focus:border-red-500 focus:outline-none transition-colors"
            required
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className="absolute peer-placeholder-shown:top-2 -top-4 peer-focus:-top-4 peer-placeholder-shown:left-2 left-1 peer-focus:left-1 peer-placeholder-shown:text-sm text-xs peer-focus:text-xs peer-placeholder-shown:text-black text-white peer-focus:text-white transition-all duration-200 ease-in-out cursor-text"
          >
            Email
          </label>
        </div>
        <div className="relative col-span-2">
          <textarea
            id="message"
            className="peer w-full h-full border-2 focus:border-red-500 focus:outline-none transition-colors"
            rows={5}
            required
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="message"
            className="absolute peer-placeholder-shown:top-2 -top-4 peer-focus:-top-4 peer-placeholder-shown:left-2 left-1 peer-focus:left-1 peer-placeholder-shown:text-sm text-xs peer-focus:text-xs peer-placeholder-shown:text-black text-white peer-focus:text-white transition-all duration-200 ease-in-out cursor-text"
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
