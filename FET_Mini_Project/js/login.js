$('document').ready(() => {
    $('#login').click((e) => {
        var username = $('#email').val();
        var userpassword = $('#password').val();

        if (username == "" && userpassword == "") {
            alert("enter both the details!");
        }
        else if (username == "" || userpassword == "") {
            if (username == "") {
                alert("enter username");
            } else if (userpassword == "") {
                alert("enter password");
            }

        }
        else {

            fetch("http://localhost:3000/user")
            .then((response) => response.json())

            .then((data) => {
                $.each(data, function (key, value) {
                    if (username === value.email && userpassword === value.password) {
                         console.log(data);

                        sessionStorage.setItem("userdetails", JSON.stringify(value));

                        window.location.href = ("../html/profile.html");

                        return false;
                    }
                    
                })
            })

        }
    })
})                                                                   