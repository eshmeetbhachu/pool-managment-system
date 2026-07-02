import mongoose from "mongoose";

const dutySchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
        },
        description: {
            type:String,
        },
        assignedTo:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        assignedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
    }
)

export const Duty = mongoose.model("Duty",dutySchema);