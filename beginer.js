function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        time : document.getElementById("time").value,
        date : document.getElementById("date").value,
        subject : document.getElementById("sub").value,
        message : document.getElementById("mess").value,
    }

    emailjs.send("service_wbrsdzr","template_y56ifqj",parms).then(alert("Email Sent!!!"))

}
