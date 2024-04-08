'use client';
import { useEffect, useState } from 'react';
import styles from './subscribers.module.css';

const Subscribers = () => {
	const [subscribers, setSubscribers] = useState([]);

	const getSubscribers = async () => {
		const response = await fetch('http://localhost:3000/api/subscribers');
		const data = await response.json();
		setSubscribers(data);
	};

	useEffect(() => {
		getSubscribers();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const { name, email, message } = e.target.elements;

			if (!name.value || !email.value) {
				console.log('You need to add a name, email, and message!');
				return;
			}

			let subscriber = {
				name: name.value,
				email: email.value,
				message: message.value,
			};

			let response = await fetch('http://localhost:3000/api/subscriber', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(subscriber),
			});

			console.log(subscriber);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			let data = await response.json();

			getSubscribers();
		} catch (error) {
			console.error('Error in handleSubmit:', error);
		}
	};

	const handleDelete = async (e, id) => {
		e.preventDefault();
		let response = await fetch(
			'http://localhost:3000/api/subscriber?id=' + id,
			{
				method: 'DELETE',
			}
		);
		let data = await response.json();

		getSubscribers();
	};

	return (
		<div className={styles.container}>
			<h2>Subscribers</h2>
			<table className={styles.subscribersTable}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Message</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{subscribers.map((subscriber, index) => {
						return (
							<tr key={index}>
								<td>{subscriber.name}</td>
								<td>{subscriber.email}</td>
								<td>{subscriber.message}</td>

								<td>
									<button onClick={(e) => handleDelete(e, subscriber._id)}>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			<h3>Add New Subscriber</h3>

			<form className={styles.subForm} onSubmit={handleSubmit}>
				<label>
					{' '}
					Name
					<input
						type="name"
						name="name"
						placeholder="Enter Name"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Email
					<input
						type="email"
						name="email"
						placeholder="Enter Email"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Text
					<textarea
						type="message"
						name="message"
						placeholder="Enter Message"
						defaultValue={''}
					/>
				</label>

				<button>Add New Subscriber</button>
			</form>
		</div>
	);
};

export default Subscribers;
