import Skill from "../Models/Skill.js";

//create 

export const createSkill = async(req,res)=>{
    const skill = await Skill.create(req.body);
    res.status(201).json
};

// read 
export const getSkill = async(req,res)=>{
    const skills = await Skill.find();
    res.json(skills);
};

// update

export const updateSkill = async(req,res)=>{
    const skill= await Skill.findByIdAndUpdate(
        req.params.id,
        req.body,
    {new:true}
    );
    res.json(skill);
};

//delete

 export const deleteSkill = async (req,res)=>{
    const skill = await Skill.findByIdAndDelete(
        req.params.id
    );
    res.json({message:"Skill deleted"})
 };