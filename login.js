$(document).ready(function () {
    $('#myform').validate({
        rules: {
            email: {
                required: true
            },
            messages: {
                email: {
                    required: "enter valid email"
                }

            }
        }
    })
    $('#submit').click(function () {
        $('#myform').submit()
        if ($('#myform').valid()) {
            window.location = "index.html"

        }
    });
});
function myFunction() {
    var x = document.getElementById("pswd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}