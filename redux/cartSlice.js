import {createslice} from "@redux/toolkit";

const cartSlice = createSlice({
	name:"cart",
	initialState:{
		products:[],
		quantity:0,
		total:0,

	},
	reducers:{
		addProduct: (state,action)=>{
			state,products=[];
			state.quantity +=0;
			state.total =0;

		},

	},
});
export const {addProduct, reset}= casrtSlice.actions;
export default cartSlice.reducer;