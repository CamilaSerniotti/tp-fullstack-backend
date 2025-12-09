import mongoose from 'mongoose';
const schema=new mongoose.Schema({
 title:String,
 done:Boolean,
 userId:String
});
export default mongoose.model('Task',schema);