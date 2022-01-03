const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodeMailer = require("nodemailer");
const { render } = require("express/lib/response");

const app = express();
const port = process.env.PORT||3000

// Setup engine views
app.set("view engine","ejs");


// Body Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Static Folder
app.use('/public',express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/project',(req,res)=>{
    res.render('project');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.post('/send',(req,res)=>{
    const output=`
    <p>You have a new contact request</p>
    <h3>Contact Detail</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    let transporter = nodeMailer.createTransport({
        service:'gmail',
        auth:{
            user:'mtestmotest@gmail.com',
            pass:'mtestmotest123'
        }
    });

    let mailOption ={
        from:'"Nodemailer Contact" <mtestmotest@gmail.com>',
        to:'mj.esm.1999@gmail.com',
        subject:req.body.subject,
        html:output
    };

    transporter.sendMail(mailOption,(error,info)=>{
        if(error){
            return console.log(error);
        }
        console.log('Message sent %s',info.messageId);
        console.log('Preview URL %s',nodeMailer.getTestMessageUrl(info));
        res.render('contact');
    })
})

app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
});