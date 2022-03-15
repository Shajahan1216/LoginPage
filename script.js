function validate()
{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == "admin" && password) {
        alert("login succesfull!!");
        return false;
    } else {
        alert("login failed!");
    }
}