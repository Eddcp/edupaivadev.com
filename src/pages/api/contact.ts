import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body
  console.log(req.body)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  })

  try {
    await transporter.sendMail({
      from: email,
      to: 'contatoedupaivadev@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
    })
    return res.status(200)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error
    return res.status(400).json({ error: errorMessage })
  }
}
