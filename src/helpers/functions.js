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