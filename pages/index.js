import styles from "../styles/Home.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";

const Form = ({ token }) => (
  <form onSubmit={(e) => e.preventDefault()}>
    <input className={styles.input_field} required placeholder="Message..." />

    <button
      className={`${styles.send_btn} ${!token ? styles.disabled_send_btn : ""}`}
      disabled={!token}
    >
      Send
    </button>
  </form>
);

export default function Home() {
  const [token, setToken] = useState("");

  const onChange = (token) => token && setToken(token);

  return (
    <div className={styles.container}>
      {token && (
        <p className={styles.token}>
          <b> Captcha token:</b> {token}
        </p>
      )}

      <Form token={token} />

      <br />

      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
      />
    </div>
  );
}
