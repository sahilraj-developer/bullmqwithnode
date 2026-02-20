const {Queue} = require('bullmq');

const notification = new Queue('email-queue');

async function init(){
    const res = await notification.add("email to sahil",{
        email:"sahil.dev",
        subject:"Welcome MEss",
        body:"Hey sahil Welcome"
    });
    console.log("job added to queue", res.id);
}
init();