import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema({ 
    name: { type: String}, 
    description:{ type: String,}, 
    photoUrl: { type: String, trim: true}, 
    duration:Number, 
    priceBase: Number, 
    smallservice: [{type: mongoose.Schema.Types.ObjectId,ref: 'SmallServices'}], 
    slots: [{type: mongoose.Schema.Types.ObjectId,ref: 'Slot'}], 
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

ServiceSchema.index({name: 1}); 

const Services = mongoose.model('Service', ServiceSchema); 
export default Services; 
