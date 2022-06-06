import mongoose, { mongo } from "mongoose";

const SmallContentSchema = mongoose.Schema({ 
    title:{type: String}, 
    description: { type: String}, 
    photoUrl: {type: String, trim: true}, 
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

const SmallContent = mongoose.model('SmallContent', SmallContentSchema); 
export default SmallContent; 