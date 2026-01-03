import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description:String,
    techStack:[String],
    github:String,
    image:String,
},
{timestamps:true}
)

const Project = mongoose.model("Project",projectSchema);

export default Project;