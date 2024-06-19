const bull=require("bull")

const redisOptions={
    localhost:"128.0.0.1",
    port:6379
}

const queue=new bull('queue',{redis:redisOptions})
queue.process(async(job)=>{
    console.log(`data added with id ${job.id}`)
    console.log(`data: ${JSON.stringify(job.data)}`)
})

console.log("worker is running")