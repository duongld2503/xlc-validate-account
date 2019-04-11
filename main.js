function checkAccount(str) {
    regAcc = /^[_a-z0-9]{6,}$/;
    if (regAcc.test(str)){
        console.log("true")
    } else {
        console.log("false")
    }
}