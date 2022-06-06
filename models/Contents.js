import mongoose from "mongoose";

const ContentsSchema = mongoose.Schema({ 
    title: { type: String}, 
    description: { type: String}, 
    smalltitle: [{type: mongoose.Schema.Types.ObjectId,ref: 'SmallContent'}],
    photoUrl: {type: String, trim: true}, 
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})

const Contents = mongoose.model('Contents', ContentsSchema); 
export default Contents; 