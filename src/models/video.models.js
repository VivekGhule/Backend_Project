import mongoose, {Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new Schema({
    videoFile : {
        type : String, // Cloudnery url
        required :true, 
    },
    thumbnail : {
      type : String,  // Cloudnery url
        required :true,   
    },
    title : {
      type : String,
        required :true,   
    },
    description : {
      type : String,
        required :true,   
    },
    duration : {
      type : Number,  // Cloudnery url
        required :true,   
    },
    views : {
      type : Number,  // Cloudnery url
      default : 0
    },
    isPublish : {
      type : Boolean,  // Cloudnery url
      default : true
    },
    owner : {
      type : Schema.Types.ObjectId,  
      ref : "User"
    },

     
},{timestamps : true})


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema) 