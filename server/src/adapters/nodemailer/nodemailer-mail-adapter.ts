import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fb5d76385e6a89",
    pass: "f516387dcad5c1"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Team Feedget <oi@geedgeet.com',
      to: 'Tatiana Katia <tatiana.katia@gmail.com>',
      subject,
      html: body,
    }); 

  }
}