import { Request, Response} from 'express'

interface mailDataI {
  from: string,
  to: string,
  subject: string,
  text: string
}

export default function (req:Request, res:Response){

  require('dotenv').config()
  const nodemailer = require('nodemailer')

  const KEY: string = process.env.KEY_EMAIL;
  const SERVER: string = process.env.EMAIL_SERVER;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    tls:{
      rejectUnauthorized: true,
    },
    auth:{
      user: SERVER,
      pass: KEY
    }
  })
const mailData: mailDataI  = {
  from: req.body.email,
  to: SERVER,
  subject: req.body.subject,
  text: req.body.message 
}

transporter.sendMail(mailData, (err, info:string) => {
  if(err){
    console.error(`Unable to send the mail: ${err.message}`)
  }else{
    console.log(`Message Response ${info}`)
  }
})

  res.status(200)
}