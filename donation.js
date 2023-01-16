function donate(){
    let amount = document.forms["donateForm"]["amount"].value;
    let currency = document.forms["donateForm"]["currency"].value;
    let user_name = document.forms["donateForm"]["name"].value;
    let email = document.forms["donateForm"]["email"].value;
    // let message = document.forms["donateForm"]["message"].value;
    let message = document.getElementById("message").value;
    let flutterLink = "null";

    if(currency == 1){
        currency = "ZMW";
    } else{
        currency = "USD";
    }
    
    // alert(amount + currency + user_name + email + message);

    switch(amount){
        case '1':
            amount = 20.00;
            // alert("Amount Selected: " + currency + " " + amount);
            
            flutterLink = "https://dashboard.flutterwave.com/donate/1lmbfjrz5bto";
            SendMessage(amount, currency, user_name, email, message, flutterLink);
            break;
        case '2':
            amount = 50.00;
            // alert("Amount Selected: " + currency + " " + amount);
            
            flutterLink = "https://dashboard.flutterwave.com/donate/ybft0annqwzd";
            SendMessage(amount, currency, user_name, email, message, flutterLink);
            break;
        case '3':
            amount = 100.00;
            // alert("Amount Selected: " + currency + " " + amount);
            
            flutterLink = "https://dashboard.flutterwave.com/donate/pntfbacoiei4";
            SendMessage(amount, currency, user_name, email, message, flutterLink);
            break;
        case '4':
            // alert("redirecting to another pages");
            flutterLink = "https://dashboard.flutterwave.com/donate/fbuza1huqnr8";
            break;
        default:
             alert("unknown Amount Selection ");
             break;
    }


    // // SendMessage(amount, currency, user_name, email, message),5000;

    ///LINK AS PARAMETER
    
    
}

function SendMessage(amount, currency, user_name, email, message, flutterLink){
    let msg = 'Name: ' + user_name + ' Email: ' + email + ' Donation: ' + currency + amount + ' Message from Donor: ' + message;
    // alert(msg);
    let whatsappLink = "https://wa.me/26962893773?text=" + msg;
    // window.document.location.href = "https://www.google.com";

    var link = "mailto:katongobupe444@gmail.com"
             + "?cc=katongobupe@hotmail.com"
             + "&subject=" + encodeURIComponent("Donations: Africa Access Water")
             + "&body=" + encodeURIComponent(msg)
    ;
    
    
    setTimeout(() => {
        window.open(whatsappLink);
        window.location.reload();
    }, 2000);

    // window.open(whatsappLink, "_self");
    window.open(flutterLink, '_self');



    
    // window.document.location.href = flutterLink;
    // window.document.location.href = link;
   
    
}
