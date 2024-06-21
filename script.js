function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("sub").value,
        message : document.getElementById("mess").value,
    }

    emailjs.send("service_621kral","template_h0t28qn",parms).then(alert("Email Sent!!!"))

}
