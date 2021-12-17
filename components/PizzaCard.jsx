import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";


const PizzaCard = () => {
	return (
		<div className={styles.container}>
			<img src="/img/pizza.png" alt="" width="500" height="500" />
			<h1 className={styles.title}>Fiori Di Zucca</h1>
			<span className={styles.price}>$19.90</span>
			<p className={styles.desc}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ipsam beatae architecto officiis nemo repellat, tempore delectus a. Excepturi sit alias nobis saepe iste dignissimos quaerat quo nam quas esse.
			</p>

		</div>
	)
}

export default PizzaCard
