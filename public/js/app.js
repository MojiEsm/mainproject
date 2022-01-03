var ifClose =1;

function openRegisterForm(){
    document.getElementById("login-form").style.display="none";
    document.getElementById("register-form").style.display="block";
}


function openForm(){
    document.getElementById("login-form").style.display="block";
    document.getElementById("body-form").style.display="block";
    document.getElementById("register-form").style.display="none";
}

function closeForm(){
    document.getElementById("login-form").style.display="none";
    document.getElementById("body-form").style.display="none";
    document.getElementById("register-form").style.display="none";
}

function sideBarMenu(){
    
    if(ifClose == 1){
        document.getElementById("sidebar-menu").style.display="block";
        ifClose = 0;
    }else if(ifClose == 0){
        document.getElementById("sidebar-menu").style.display="none";
        ifClose = 1;
    }
    
}



// Back To Top Functions
window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("backTop").style.display="block";
    }else{
        document.getElementById("backTop").style.display="none";
    }
}

function topFunction(){
    document.body.scrollTop =0;
    document.documentElement.scrollTo({
        top:0,
        behavior:"smooth"
    });
}



// Send Email SMTPJS
const btnSend = document.getElementById("submit");

btnSend.addEventListener('click',()=>{
Email.send({
    Host:"smtp.mailtrap.io",
    Username:"5ae108680f509a",
    Password:"64b76ab05ab1be",
    To:"mj.game.1999@gmail.com",
    From:document.getElementById("email").value,
    Subject:"What ever u want!",
    Body:document.getElementById("subject").value+"<br>"+ document.getElementById("message").value +"<br>"+ document.getElementById("email").value
}).then(msg=> alert("Email sent successfully!"));
})

