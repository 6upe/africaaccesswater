function donate(){
    let amount = document.forms["donateForm"]["amount"].value;
    let currency = document.forms["donateForm"]["currency"].value;
    let user_name = document.forms["donateForm"]["name"].value;
    let email = document.forms["donateForm"]["email"].value;
    let message = document.forms["donateForm"]["message"].value;

    if(currency == 1){
        currency = "ZMW";
    } else{
        currency = "USD";
    }

    switch(amount){
        case '1':
            amount = 20.00;
            // alert("Amount Selected: " + currency + " " + amount);
            window.document.location.href = "https://dashboard.flutterwave.com/donate/1lmbfjrz5bto";
            break;
        case '2':
            amount = 50.00;
            // alert("Amount Selected: " + currency + " " + amount);
            window.document.location.href = "https://dashboard.flutterwave.com/donate/ybft0annqwzd";
            break;
        case '3':
            amount = 100.00;
            // alert("Amount Selected: " + currency + " " + amount);
            window.document.location.href = "https://dashboard.flutterwave.com/donate/pntfbacoiei4";
            break;
        case '4':
            // alert("redirecting to another pages");
            window.document.location.href = "https://dashboard.flutterwave.com/donate/fbuza1huqnr8";
            break;
        default:
             alert("unknown selection: ");
             break;
    }


    setTimeout(SendMessage(amount, currency, user_name, email, message),5000);
    // SendMessage(amount, currency, user_name, email, message);
    
}

function SendMessage(amount, currency, user_name, email, message){
    let msg = 'Name: ' + user_name + ' Email: ' + email + ' Donation: ' + currency + amount + ' Message from Donor ' + message;

        window.location.href = "https://wa.me/260962893773?text=" + msg;
}
