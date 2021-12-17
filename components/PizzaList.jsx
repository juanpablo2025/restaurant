import styles from "../styles/pizzaList.module.css"
import PizzaCard from "./PizzaCard"


export const PizzaList = () => {
	return (
		<div className={styles.container}>
			<h1 classNsme={styles.title}>THe best pizza</h1>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nemo debitis animi nostrum officia possimus reprehenderit praesentium minus quasi ipsa, labore sed! Id, atque molestias itaque eaque ex illum dicta!

			</p>
			<div className={styles.wrapper}>
				<pizzaCard />
				<pizzaCard />
				<pizzaCard />
				<pizzaCard />
				<pizzaCard />
				<pizzaCard />
				<pizzaCard />
				<pizzaCard />
				<pizzaCard />

			</div>

		</div>
	)
}
export default PizzaList;
