import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name:String,
    level:String
});

const Skill = mongoose.model("Skill",skillSchema);

export default Skill;