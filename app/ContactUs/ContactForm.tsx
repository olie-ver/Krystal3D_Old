'use client'

import { ChangeEvent, useState } from 'react'
import { sendContactEmail } from './SendEmail';
import style from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    try {
      const result = await sendContactEmail(formData)
      if (result.success) {
        setName("");
        setSubject("");
        setEmail("");
        setMessage("");
        setStatus('Message sent successfully!');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }
  }

  return (
    <div className={style.ContactForm}>
      <form action={handleSubmit} className={style.Form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={style.InputField}
          value={name}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {setName(evt.target.value); setStatus(null);}}
        >
        </input>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className={style.InputField}
          value={subject}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {setSubject(evt.target.value); setStatus(null);}}
        />
        <input
          type="email"
          name="email"
          placeholder="Return Address"
          required
          className={style.InputField}
          value={email}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {setEmail(evt.target.value); setStatus(null);}}
        />
        <textarea
          name="message"
          placeholder="Message Content"
          required
          className={style.Message}
          value={message}
          onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => {setMessage(evt.target.value); setStatus(null);}}
        />
        <button
            type="submit"
            className={style.Send}
            >
            Send
        </button>
        {status && <p className={style.Error}>{status}</p>}
      </form>
    </div>
  )
}