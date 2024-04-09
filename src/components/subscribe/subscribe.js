"use client";
import { useState } from "react";
import * as Yup from "yup";
import styles from "./subscribe.module.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const [email] = event.target.elements;
  
    try {
      schema.validateSync(
        {
          email: email.value,
        },
        { abortEarly: false }
      );
  
      //update state
  
      setEmail(email.value);
  
      const response = await fetch("http://localhost:3000/api/subscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
        }),
      });
  
      const data = await response.json();
      console.log("Server response:", data);
  
     
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
      <div className={`wrapper`}>
        <div className={styles.formWrapper}>
          <h3>Subscribe</h3>
          <span>Get news about nec dairy products</span>
          <p>
            Continually productize compelling quality for packed with Elated
            Themes Setting up to website and it crating pages .
            {/* <p>{errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}</p> */}
          </p>
          
          <form onSubmit={handleSubmit}>
          <input
					placeholder="Email"
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
            {error && <div>{error}</div>}
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
