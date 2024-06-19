const bull=require("bull")

const redisOptions={
    host:'127.0.0.1',
    port:6379
}

const queue=new bull('queue',{redis:redisOptions})

module.exports={queue}