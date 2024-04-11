'use client';

/*
import Image from 'next/image';
import styles from './product.module.css';
import { useBasket } from '@/context/basket';

const Product = ({ product, view }) => {
	const { addToBasket } = useBasket();
	const { imagePath, title, description, price, priceBefore, _id } = product;


	return (
		<div className={styles.productContainer}>
			<div className={styles.product}>
				<Image
					className={styles.productImg}
					src={imagePath}
					alt={title}
					width={500}
					height={500}
				/>
				<div className={styles.detailContainer}>
					<div className={styles.details}>
						<h3>{title}</h3>
						<div className={styles.detailsSecond}>
							<p>
								{description}
							</p>
						</div>
					</div>
					<div className={styles.actions}>
						<div className={styles.prices}>
							<p className={styles.price}>${price.toFixed(2)}</p>
							{priceBefore > 0 && (
								<p>
									<s> ${priceBefore.toFixed(2)}</s>
								</p>
							)}
						</div>
						<button
							className={styles.orderBtn}
							onClick={(e) => {
								e.preventDefault();
								addToBasket(_id);
							}}
						>
							Buy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
*/

import Image from "next/image";
import styles from "./product.module.css";
import { useBasket } from "@/context/basket";

const Product = ({ product, view }) => {
  const { addToBasket } = useBasket();
  const { imagePath, title, description, price, priceBefore, _id } = product;

  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        <Image
          className={styles.productImg}
          src={imagePath}
          alt={title}
          width={500}
          height={500}
        />
        <div className={styles.detailContainer}>
          <div className={styles.details}>
            <h3>{title}</h3>
            {view === "list" && (
              <div className={styles.detailsSecond}>
                <p>{description}</p>
              </div>
            )}
          </div>
          <div className={styles.actions}>
            <div className={styles.prices}>
              <p className={styles.price}>${price.toFixed(2)}</p>
            
            </div>
            <button
              className={styles.orderBtn}
              onClick={(e) => {
                e.preventDefault();
                addToBasket(_id);
              }}
            >
              Add to basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;