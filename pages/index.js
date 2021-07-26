import styles from "../styles/Home.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from "react";

export default function Home() {
  const recaptchaRef = useRef()


  const validateHuman = (token) => {
    const secret = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY

    const api = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`

    fetch(api, { method: 'POST' })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }

  const _onSubmit = async (e) => {
    e.preventDefault();

    const token = await recaptchaRef.current.executeAsync()

    recaptchaRef.current.reset()

    validateHuman(token)
  }


  return (
    <div className={styles.container}>

      <form onSubmit={_onSubmit}>
        <input className={styles.input_field} required placeholder="Message..." />

        <button className={styles.send_btn}>Send</button>
      </form>


      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        size="invisible"
        ref={recaptchaRef}
      />
    </div>
  );
}
