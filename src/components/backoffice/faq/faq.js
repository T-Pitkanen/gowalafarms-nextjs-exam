"use client";

import styles from "./faq.module.css";
import { useState, useEffect } from "react";

const Faqs = () => {
	const [faqs, setFaqs] = useState([]);

	const getFaqs = async () => {
		const response = await fetch('http://localhost:3000/api/faqs');
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
			console.log('You question and an answer!');
			return;
		}

		const formData = new FormData();
		formData.append('question', question.value);
		formData.append('answer', answer.value);
		

		let response = await fetch('http://localhost:3000/api/faq', {
			method: 'POST',
			body: formData,
		});

		let data = await response.json();

		getFaqs();
	};

	const handleDelete = async (e, id) => {
		e.preventDefault();
		let response = await fetch('http://localhost:3000/api/faq?id=' + id, {
			method: 'DELETE',
		});
		let data = await response.json();

		getFaqs();
	};

	return (
		<div className={styles.container}>
			<h2>FAQs</h2>
			<div className={styles.reviews}>
				{faqs.map((faq, index) => {
					return (
						<span className={styles.reviewsContainer} key={index}>
							
							<p>{faq.question}</p>
							<p>{faq.answer}</p>
							<button onClick={(e) => handleDelete(e, faq._id)}>
								Delete
							</button>
						</span>
					);
				})}
			</div>

			<h3>Add New Faq</h3>

			<form onSubmit={handleSubmit}>
				<label>
					{' '}
					Question
					<input
						type="question"
						name="question"
						placeholder="Question"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Answer
					<textarea
						type="answer"
						name="answer"
						placeholder="answer"
						defaultValue={''}
					/>
				</label>
				
				<button>Upload</button>
			</form>
		</div>
	);
};


export default Faqs;
