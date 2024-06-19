const {queue}=require("./queue")

const addData=async(req,res)=>{
    const {data}=req.body
    try{
        const job=await queue.add({data})
        return res.status(201).json({ message: `Job added with ID: ${job.id}` })
    }catch(err){
        console.log(err)
    }
}

module.exports={addData};