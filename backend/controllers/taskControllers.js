const task = require('../models/Task')
exports.registerTask = async(req, res)=>{
   try{
     const title=req.body.title
     const description= req.body.description
     const Status = req.body.status||"pending"
     const user=req.user.id
    const tasks = await task.create({
        title,
        description,
        Status,
        user
    })
    res.status(201).send({msg:"Task created successfully"})
   }
   catch(error){
    res.status(500).send(error)
   }
}

exports.displayTask = async(req,res) => {
    try{
        const userTask = await task.find({user:req.user.id})
        res.status(200).json(userTask)
    }
    catch(err){
        res.status(500).json({msg:'No task please go'})
    }
    
}
exports.getTaskById = async(req,res)=>{
    try{
        const userId = await task.findOne({
            _id:req.params.id,
            user:req.user.id
        })
        res.status(200).json(userId)
    }
    catch(err){
        res.status(500).json({msg:'No task for this user'})
    }
}
exports.updateTask= async(req,res)=>{
    try{
    const uTask = await task.findOneAndUpdate({
        _id:req.params.id,
        user:req.user.id,
    },
    {
        title:req.body.title,
        description:req.body.description,
        Status:req.body.Status
    }, {new:true})
    if(!uTask){
        res.json({msg:"no task exist"})
    }
    res.json(uTask)
}
catch(err){
    res.json(err)
}
}
exports.updateTaskPatch = async(req,res)=>{
    try{
        const pTask = await task.findOneAndUpdate({
            _id:req.params.id,
            user:req.user.id,
        },
        req.body,
        {new:true},
    )
    if(!pTask){
        res.json({msg: 'no task exist'})
    }
    res.json(pTask)
    }catch(err){
        res.json(err)
    }
}
exports.deleteTask = async(req,res)=>{
    try{
        const dTask = await task.findOneAndDelete({
            _id:req.params.id,
            user:req.user.id
        })
        res.json(dTask)
    }catch(err){
        res.json(err)
    }
}