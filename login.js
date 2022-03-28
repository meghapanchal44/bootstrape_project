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
// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()
// function myFunction() {
//     var x = document.getElementById("pswd");
//     if (x.type === "password") {
//         x.type = "text";
//     } else {
//         x.type = "password";
//     }
// }