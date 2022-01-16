import{configureStore} from "@redux/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
	redicer:{
		cart:cartReducer,
	},
});