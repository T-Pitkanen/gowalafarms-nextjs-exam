'use client';
import { useEffect, useState } from 'react';
import styles from './products.module.css';
import Image from 'next/image';

const Products = () => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await fetch('http://localhost:3000/api/products');
		const data = await response.json();
		setProducts(data);
	};

	useEffect(() => {
		getProducts();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { title, description, file, price, discountInPercent, exclusive } = e.target.elements;

		if (!title.value || !price.value || !description.value || !discountInPercent.value || !exclusive.value || !file.files[0]) {
			console.log('You need to add a file, name, description and position!');
			return;
		}

		const formData = new FormData();
		formData.append('title', title.value);
		formData.append('price', price.value);
		formData.append('discountInPercent', discountInPercent.value);
		formData.append('exclusive', exclusive.value);
		formData.append('description', description.value);
		formData.append('file', file.files[0]);

		let response = await fetch('http://localhost:3000/api/product', {
			method: 'POST',
			body: formData,
		});

		let data = await response.json();

		getProducts();
	};

	const handleDelete = async (e, id) => {
		e.preventDefault();
		let response = await fetch('http://localhost:3000/api/product?id=' + id, {
			method: 'DELETE',
		});
		let data = await response.json();

		getProducts();
	};

	return (
		<div className={styles.container}>
			<h2>Products</h2>
			<div className={styles.reviews}>
				{products.map((product, index) => {
					return (
						<span className={styles.reviewsContainer} key={index}>
							<Image
								className={styles.reviewImg}
								src={product.imagePath}
								alt={product.title}
								width={100}
								height={100}
							/>
							<p>{product.title}</p>
							<p>{product.description}</p>
							<p>{product.discountInPercent}</p>
							<p>{product.exclusive}</p>
							<p>{product.price}</p>
							<button onClick={(e) => handleDelete(e, review._id)}>
								Delete
							</button>
						</span>
					);
				})}
			</div>

			<h3>Add New Product</h3>

			<form onSubmit={handleSubmit}>
				<label>
					{' '}
					Title
					<input
						type="text"
						name="title"
						placeholder="Product Title"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Price
					<input
						type="number"
						name="price"
						placeholder="Product Price"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Discount In Percent
					<input
						type="text"
						name="discountInPercent"
						placeholder="Discount In Percent"
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
					Exclusive?
					<input
						type="checkbox"
						name="exclusive"
						defaultValue={''}
					/>
				</label>
				<label>
					{' '}
					Product Image
					<input type="file" name="file" placeholder="Select File" />
				</label>
				<button>Upload</button>
			</form>
		</div>
	);
};

export default Products;
