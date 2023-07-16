function register(callback) {
    setTimeout(() => {
        console.log("Registered!");
        callback();
    }, 1000);
}

function sendEmail(callback) {
    setTimeout(() => {
        console.log("Email Sent!");
        callback();
    }, 2000);
}

function login(callback) {
    setTimeout(() => {
        console.log("Logined!");
        callback();
    }, 2000)
}

function getUserData(callback) {
    setTimeout(() => {
        console.log("Got user data");
        callback();
    }, 2000)
}

function displayUserData(callback) {
    setTimeout(() => {
        console.log("Displayed data");
        callback();
    }, 2000)
}


register(function () {
    sendEmail(function () {
        login(function () {
            getUserData(function () {
                displayUserData(function () {
                });
            })
        });
    });
});
