$('document').ready(function () {
    $('#btn2').click(function (e) {

        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var password = $('#password').val();
        var rep_password = $('#rep_password').val();


        var letters = /^[A-Za-z ]+$/;
        var filter =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        var email_validation = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

        var phoneno = /^\d{10}$/;


        if (name == "" && email == "" && phone == "" && password == "") {
            alert("enter all the details!");
        } else if (name == "" || email == "" || phone == "" || password == "") {
            if (name == "") {
                alert("enter name");
            } else if (!letters.test(name)) {
                alert("name field required only alphabate characters"); //
            } else if (email == "") {
                alert("enter email");
            } else if (!email_validation.test(email)) {
                alert("Invalid email");
            } else if (phone == "") {
                alert("enter phone");
            } else if (!phoneno.test(phone)) {
                alert("enter valid phone no");
            } else if (password == "") {
                alert("enter password");
            } else if (!pwd_expression.test(password)) { //
                alert(
                    "Upper case, Lower case, Special character and Numeric letter are required in Password filed"
                );

            } else if (rep_password == "") {
                alert("enter password again");
            } else if (password != rep_password) { //
                alert("password not matched");
            }
        }
        else {
            $.post(" http://localhost:3000/user",
                {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password
                },
                function (data, status) {
                    alert("Data: " + data + "\nStatus: " + status);
                    window.location.href = ("../html/login.html");
                })
        }
    })
})