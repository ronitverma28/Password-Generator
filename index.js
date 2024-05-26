function generatePassword(){
    var length = document.getElementById("number").value;
    var upper = document.getElementById("upper").checked;
    var lower = document.getElementById("lower").checked;
    var num = document.getElementById("num").checked;
    var sym = document.getElementById("symbols").checked;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    var allchar = "";
    if(upper)
            allchar += uppercaseChars;
    if(lower)
            allchar += lowercaseChars;
    if(num)
            allchar += numberChars;
    if(sym)
            allchar += specialChars;
    if(!upper && !lower && !num && !sym)
        alert("Please check at least one field!");
    else{
        var password = "";
        for(let i = 1;i<=length;i++){
        let res = Math.floor(Math.random() * allchar.length);
        console.log(res);
        password += allchar[res];
        }
        document.getElementById("pass").innerHTML = "Password: \" " + password + " \"";

    }
    
}
