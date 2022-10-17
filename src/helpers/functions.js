import emailjs from "emailjs-com";

export function getCurrentDate() {

    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substr(0, 10);

    return date;
}

export const validatePassword = (password, confirmPassword) => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
        if (password !== confirmPassword) {
            isValid = false
            alert('Passwords does not match')
        }
    }
    return isValid
}

export function refreshPage() {
    window.location.reload(false);
}

export function sendEmail(form) {
    emailjs.sendForm('service_d36x19k', 'template_nzbkoso', form, 'qVjO4xUIn3-VPKDy3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}