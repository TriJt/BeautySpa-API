import mongoose from "mongoose";

const SmallServicesSchema = mongoose.Schema({ 
    name: { type: String}, 
    description: { type: String}, 
    content:[{type: mongoose.Schema.Types.ObjectId,ref: 'Contents'}], 
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

const SmallServices = mongoose.model('SmallService', SmallServicesSchema); 
export default SmallServices; 
