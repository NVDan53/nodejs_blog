const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

// Create a object 
const Course = new Schema({
    name:{type:String, maxlength:255,required:true},
    description:{type:String,maxlength:600},
    image: {type:String,maxlength:255},
    videoId:{type: String, required:true},
    level:{type:String},
    slug: { type: String, slug: 'name', unique:true },
},{
    timestamps:true,
});

module.exports=mongoose.model('Course',Course);

