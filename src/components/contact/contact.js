
"use client";

import { useState } from "react";
import * as Yup from "yup";
import styles from "./contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const schema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      schema.validateSync(
        {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
        { abortEarly: false }
      );

      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setErrorMessage(error.message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Send a message to us</h1>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;