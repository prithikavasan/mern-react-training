const task = require('../models/Task')


exports.registerTask = async(req, res)=>{

   try{
     const title=req.body.title
     const description= req.body.description
     const Status = req.body.status||"pending"
     const user=req.body.id

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