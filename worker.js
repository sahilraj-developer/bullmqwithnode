// const {Worker} = require('bullmq');

// const sendMail =()=> new Promise((res,rej)=> setTimeout(()=> res(),5*1000));

// const worker = new Worker("email-queue", async (job)=>{
//     console.log(`message rec id: ${job.id}`);
//     console.log("Processing message");
//     console.log(`Sending Email to ${job.data.mail}`);

//     await sendMail();

//     console.log("email sent");
// });


const { Worker } = require("bullmq");

const sendMail = () =>
  new Promise((res) => setTimeout(res, 5000));

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`message rec id: ${job.id}`);
    console.log("Processing message");
    console.log(`Sending Email to ${job.data.email}`);

    await sendMail();

    console.log("email sent");
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.log(`Job ${job.id} failed: ${err.message}`);
});