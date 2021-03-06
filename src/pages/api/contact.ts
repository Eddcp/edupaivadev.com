import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'
const OAuth2 = google.auth.OAuth2
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

/* eslint-disable */
const nodemailer = require('nodemailer')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body
  const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  })

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        console.log('problem oauth', err)
        reject()
      }
      resolve(token)
    })
  })

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure:true,
    port: 465,
    auth: {
      type: 'OAuth2',
      user: process.env.SMTP_USER,
      accessToken,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
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
    return res.status(200).end()

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error
    const errorResponse = res.status(400).json({ error: errorMessage })
    res.end()
    return errorResponse
  }
}
