"use client";

import styles from "./faq.module.css";
import { useState, useEffect } from "react";

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [id, setId] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getFaqs = async () => {
    const response = await fetch("http://localhost:3000/api/faqs");
    const data = await response.json();
    setFaqs(data);
  };

  useEffect(() => {
    getFaqs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { question, answer } = e.target.elements;

    if (!question.value || !answer.value) {
      console.log("You question and an answer!");
      return;
    }

    const formData = new FormData();
    formData.append("question", question.value);
    formData.append("answer", answer.value);

    let response = await fetch("http://localhost:3000/api/faq", {
      method: "POST",
      body: formData,
    });

    let data = await response.json();

    getFaqs();
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/api/faq?id=" + id, {
      method: "DELETE",
    });
    let data = await response.json();

    getFaqs();
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const question = event.target.question.value;
    const answer = event.target.answer.value;

    const response = await fetch(`http://localhost:3000/api/faq?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        question: question,
        answer: answer,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    getFaqs();

    setId("");
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className={styles.container}>
      <h2>F.A.Qs</h2>
      <div className={styles.faq}>
        {faqs.map((faq, index) => {
          return (
            <span className={styles.faqContainer} key={index}>
              <p>
                <b>ID:</b> {faq._id}
              </p>
              <p>
                <b>{faq.question}</b>
              </p>
              <p>{faq.answer}</p>
              <button onClick={(e) => handleDelete(e, faq._id)}>Delete</button>
            </span>
          );
        })}
      </div>

      <h3>Add New Question and Answer</h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="question"
          name="question"
          placeholder="Question"
          defaultValue={""}
        />

        <textarea
          type="answer"
          name="answer"
          placeholder="answer"
          defaultValue={""}
        />

        <button>Upload</button>
      </form>

      <h3>Update Existing Question and Answer</h3>

      <form className={styles.form} onSubmit={handleUpdate}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="text"
          name="question"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <textarea
          type="text"
          name="answer"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button>Upload</button>
      </form>
    </div>
  );
};

export default Faqs;
