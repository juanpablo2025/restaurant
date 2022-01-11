import mongoose from "mongoose";

const OrderSchama = new mongoose.Schema(
	{
		customer:{
			type:
			string,
			required: true,
			maxlength:200,

		},
		address:{
			type:String,
			required:true,
			maxlength:60,
		
		},
		total:{
			type: String,
			required:true,


		},
		status:{
			type:Number,
			required:true,
		},
		method:{
			type:number,
			required:true
		},
	},
	{timestamp:true}
);	
export default mongoose.models.Order ||mongoose.model("Order", OrderSchama);
