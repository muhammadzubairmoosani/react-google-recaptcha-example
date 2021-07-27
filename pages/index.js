import styles from "../styles/Home.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from "react";

export default function Home() {
  const recaptchaRef = useRef()

  const siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
  const secret = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'

  const validateHuman = (token) => {
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
        sitekey={siteKey}
        size="invisible"
        ref={recaptchaRef}
      />
    </div>
  );
}
