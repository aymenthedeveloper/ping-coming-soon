const e = document.getElementById('email');
const form = e.parentElement;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

e.addEventListener('input', function(event){
    e.dataset.valid = "false";
    if (e.value == ''){
        form.dataset.error = 'please enter your email!';
    } else if (e.value.match(emailRegex) == null){
        form.dataset.error = 'please enter a valid email!';
    } else {
        form.dataset.error = '';
        e.dataset.valid = 'true';
    }
})