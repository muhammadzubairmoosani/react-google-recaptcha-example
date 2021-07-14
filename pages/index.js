import styles from "../styles/Home.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";

export default function Home() {
  const [state, setState] = useState("");
  const [value, setValue] = useState("");
  const [isVarified, setIsVarified] = useState(false);

  function onChange(token) {
    console.log("Captcha token:", token);
    token && setIsVarified(true);
  }

  const _onClick = () => {
    setValue(state);
  };

  return (
    <div className={styles.container}>
      <p>{value}</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => setState(e.target.value)} value={state} />

        <button disabled={!isVarified} onClick={_onClick}>
          add value
        </button>
      </form>
      <br />
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
      />
    </div>
  );
}
