import emailjs from "emailjs-com";

export function getCurrentDate() {

    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substr(0, 10);

    return date;
}

export function refreshPage() {
    window.location.reload(false);
}

export function sendEmail(templateID, form) {
    emailjs.sendForm('service_d36x19k', templateID, form, 'qVjO4xUIn3-VPKDy3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}