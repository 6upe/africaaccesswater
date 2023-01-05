function donate(){
    let amount = document.forms["donateForm"]["amount"].value;
    let currency = document.forms["donateForm"]["currency"].value;
    let name = document.forms["donateForm"]["name"].value;
    let email = document.forms["donateForm"]["email"].value;
    let message = document.forms["donateForm"]["message"].value;

    switch (amount){
        case '1':
            window.document.location.href = "https://dashboard.flutterwave.com/donate/1lmbfjrz5bto";
            break;
        case '2':
            window.document.location.href = "https://dashboard.flutterwave.com/donate/ybft0annqwzd";
            break;
        case '3':
            window.document.location.href = "https://dashboard.flutterwave.com/donate/pntfbacoiei4";
            break;
        case '4':
            window.document.location.href = "https://dashboard.flutterwave.com/donate/fbuza1huqnr8";
            break;
        default:
             window.document.location.href = "#";
             break;
    }

}
