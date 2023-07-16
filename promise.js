function register() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("Registered!");
            reslove();
        }, 2000);
    })
}

function sendEmail() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            // reject("Error email not send")
            console.log("Email Sent!");
            reslove();
        }, 2000);
    })
}

function login() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("Logined!");
            reslove();
        }, 2000)
    })
}

function getUserData() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("Got user data");
            reslove();
        }, 2000)
    })
}

function displayUserData() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log("Displayed data");
            reslove();
        }, 2000)
    })
}


// register(function () {
//     sendEmail(function () {
//         login(function () {
//             getUserData(function () {
//                 displayUserData()
//             })
//         });
//     });
// });


register()
    .then(sendEmail)
    .then(login)
    .then(getUserData)
    .then(displayUserData)


console.log("Other application work");
