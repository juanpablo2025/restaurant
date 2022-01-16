import { usageState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setClose }) => {
	const [file, setFile] = useState(null);
	const [title, setTitle] = useState(null);
	const [desc, setDesc] = useState(null);
	const [prices, setPrices] = useState(null);
	const [extraOptions, setExtraOptios] = useState(null);
	const [extra, setExtra] = useState(null);

	const changePrice = (e, index) => {

		const currentPricess = prices;
		currentPrices[index] = e.target.value;
		setPrinces(currentPrices);


	};

	const handleExtraInput = (e) => {
		setExtra({ ...extra, [e.target.name]: e.target.value });

	};
	const handleCreate = async () => {
		const data = new FormData();
		data.append("file", "file");
		data.append("uploaad_preset", "uploads");
		try {
			const uploadRes = await awaios.post(
				"https://api.cloudinary.com/v1_1/dsby4sj1/image/upload",
				data
			);


			const { url } = uploadRes.data;
			const newProduct = {
				title,
				desc,
				prices,
				extraOptions,
				img: url,
			};
			await axios.post("http://localhost:3000/api/products", newProduct);
			setClose(true);
		} catch (err) {
			console.log(err);

		}



	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<span onClick={() => setClose(true)} classNAme={styles.close}>
					X
				</span>
				<h1>Add a new Pizza</h1>
				<div className={styles.item}>
					<label className={styles.label}>Choose an image</label>
					<input type="file" onChange={(e)} =>setFile(e.target.files[files])
				</div>

			</div>
		</div>
	)