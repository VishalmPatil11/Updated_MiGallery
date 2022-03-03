//comment

$('#commentButton').click(function () {

    let txtcomment = $("#comment").val();

    var UserDetailsString = sessionStorage.getItem("userdetails");
    console.log(UserDetailsString);
    var user = JSON.parse(UserDetailsString);

    let username = user.name;
    let userid = user.id;

    if (
        (txtcomment) == ""
    ) {
        alert("Input Fields cannot be Empty!");
    } else {

        //Post User details to comment.json
        var comments = {
            userid: userid,
            username: username,
            Date: new Date().toLocaleString(),
            txtcomment: txtcomment

        };
        // console.log(comments);

        $.ajax({
            type: "POST",
            dataType: "json",
            async: false,
            url: "http://localhost:3000/comments",
            data: comments,
            success: (response) => {
                alert("comment added Successfully");
                console.log(response);
                window.location.href = ("../html/profile.html");
            },
            error: () => {
                console.log("some network issue");
            },
            complete: () => {
                console.log("my call completed");
            },
        })
    }
});
