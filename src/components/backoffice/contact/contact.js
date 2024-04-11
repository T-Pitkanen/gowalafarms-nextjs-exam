'use client'

import { useState, useEffect } from 'react';
import styles from './contact.module.css';

const Contact = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    
    const response = await fetch('http://localhost:3000/api/contacts');
    const data = await response.json();
    setMessages(data);
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/api/contact?id=${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

   
    getMessages();
  };

  return (
    <div className={styles.container}>
      {messages.map((message, index) => (
        <div key={index} className={styles.contact}>
          <h2>{message.name}</h2>
          <p>Email: {message.email}</p>
          <p>Phone: {message.phone}</p>
          <p>Message: {message.message}</p>
          <button onClick={() => handleDelete(message._id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Contact;