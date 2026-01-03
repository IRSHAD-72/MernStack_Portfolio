import Message from "../Models/Message.js";

//create
 
export const sendMessage = async (req,res)=>{
    const message = await Message.create(req.body);
    res.status(201).json({message:"Message sent successfully"});

};

// read

export const getMessage = async (req,res)=>{
    const messages = await Message.find().sort({createAt:-1});
    res.json(messages)
}

//delete

export const deleteMessage = async (req,res)=>{
    await Message.findByIdAndDelete(req.params.id);
    res.json({message:"Message deleted"})
}