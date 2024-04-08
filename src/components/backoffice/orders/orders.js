'use client';
import { useEffect, useState } from 'react';
import styles from './orders.module.css';
import Image from 'next/image';

const Orders = () => {
	const [orders, setOrders] = useState([]);
	const [newOrder, setNewOrder] = useState({
		email: '',
		products: [{ id: '', amount: '' }],
	});

	const getOrders = async () => {
		const response = await fetch('http://localhost:3000/api/orders');
		const data = await response.json();
		setOrders(data);
	};

	const addProduct = () => {
		setNewOrder((prevState) => ({
			...prevState,
			products: [...prevState.products, { id: '', amount: '' }],
		}));
	};

	useEffect(() => {
		getOrders();
	}, []);

	const handleDelete = async (id) => {
		let response = await fetch('http://localhost:3000/api/order?id=' + id, {
			method: 'DELETE',
		});
		let data = await response.json();

		getOrders();
	};

	const handleNewOrderChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...newOrder.products];
		list[index][name] = value;
		setNewOrder({ ...newOrder, products: list });
	};

	const handleNewOrderSubmit = async (e) => {
		e.preventDefault();
		let orderToCreate = {
			...newOrder,
			created: new Date().toISOString(),
		};
		let response = await fetch('http://localhost:3000/api/order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(orderToCreate),
		});
		let data = await response.json();

		getOrders();
	};

	return (
		<div className={styles.orders}>
			<div className={styles.createOrder}>
				<form onSubmit={handleNewOrderSubmit} className={styles.form}>
					<h2>Create Order</h2>
					<input
						type="text"
						name="email"
						placeholder="Email"
						onChange={(e) =>
							setNewOrder({ ...newOrder, email: e.target.value })
						}
						className={styles.input}
					/>
					{newOrder.products.map((x, i) => {
						return (
							<div className={styles.box} key={i}>
								<input
									name="id"
									placeholder="Product ID"
									value={x.id}
									onChange={(e) => handleNewOrderChange(e, i)}
									className={styles.input}
								/>
								<input
									name="amount"
									placeholder="Amount"
									value={x.amount}
									onChange={(e) => handleNewOrderChange(e, i)}
									className={styles.input}
								/>
							</div>
						);
					})}
					<button type="button" onClick={addProduct} className={styles.button}>
						Add Product
					</button>
					<button type="submit" className={styles.button}>
						Create Order
					</button>
				</form>
			</div>
			<div className={styles.ordersContainer}>
				{orders.map((order, index) => {
					return (
						<div className={styles.order} key={index}>
							<h3>
								{' '}
								<b>Order</b> {index + 1}
							</h3>
							<p>
								{' '}
								<b>Email:</b> {order.email}
							</p>
							{order.products.map((product, productIndex) => {
								return (
									<div className={styles.product} key={productIndex}>
										<p>
											<b>Product ID:</b> {product.id}
										</p>
										<p>
											<b>Amount:</b> {product.amount}
										</p>
									</div>
								);
							})}
							<p>
								<b>Created:</b> {new Date(order.created).toLocaleString()}
							</p>
							<button onClick={() => handleDelete(order._id)}>
								Delete Order
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Orders;
