'use client';
import { useEffect, useState } from 'react';
import styles from './employees.module.css';
import Image from 'next/image';

const Employees = () => {
	const [employees, setEmployees] = useState([]);

	const getEmployees = async () => {
		const response = await fetch('http://localhost:3000/api/employees');
		const data = await response.json();
		setEmployees(data);
	};

	useEffect(() => {
		getEmployees();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { name, position, description, file } = e.target.elements;

		if (!name.value || !position.value || !description.value || !file.files[0]) {
			console.log('You need to add a file, name, description and position!');
			return;
		}

		const formData = new FormData();
		formData.append('name', name.value);
		formData.append('position', text.value);
		formData.append('description', description.value);
		formData.append('file', file.files[0]);

		let response = await fetch('http://localhost:3000/api/employee', {
			method: 'POST',
			body: formData,
		});

		let data = await response.json();

		getEmployees();
	};

	const handleDelete = async (e, id) => {
		e.preventDefault();
		let response = await fetch('http://localhost:3000/api/employee?id=' + id, {
			method: 'DELETE',
		});
		let data = await response.json();

		getEmployees();
	};

	return (
		<div className={styles.container}>
			<h2>Employees</h2>
			<div className={styles.reviews}>
				{employees.map((employee, index) => {
					return (
						<span className={styles.reviewsContainer} key={index}>
							<Image
								className={styles.reviewImg}
								src={employee.imagePath}
								alt={employee.title}
								width={100}
								height={100}
							/>
							<p>{employee.name}</p>
							<p>{employee.description}</p>
							<p>{employee.position}</p>
							<button onClick={(e) => handleDelete(e, review._id)}>
								Delete
							</button>
						</span>
					);
				})}
			</div>

			<h3>Add New Employee</h3>

			<form onSubmit={handleSubmit}>
				<label>
					{' '}
					Name
					<input
						type="name"
						name="name"
						placeholder="Reviewers Name"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Description
					<textarea
						type="text"
						name="description"
						placeholder="Description"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Employee Image
					<input type="file" name="file" placeholder="Select File" />
				</label>
				<button>Upload</button>
			</form>
		</div>
	);
};

export default Employees;
