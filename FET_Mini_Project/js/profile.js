
// Add Image and its details to json
$("#add").click(function () {
    let category = $("#category").val();
    let link = $("#link").val();
    let hashtag = $("#hashtag").val();

    var UserDetailsString = sessionStorage.getItem("userdetails");
    console.log(UserDetailsString);
    var user = JSON.parse(UserDetailsString);

    let username = user.name;
    let userid = user.id;

    if (
        (category && link) == ""
    ) {
        alert("Input Fields cannot be Empty!");
    } else {

        //Post User details to users.json
        var image = {

            category: category,
            userid: userid,
            username: username,
            link: link,
            Date: new Date().toLocaleString(),
            hashtag: hashtag

        };
        // console.log(image);
        $.ajax({
            type: "POST",
            dataType: "json",
            async: false,
            url: "http://localhost:3000/image",
            data: image,
            success: (response) => {
                alert("image added Successfully");
                // console.log(response);

            },
            error: () => {
                console.log("some network issue");
            },
            complete: () => {
                console.log("my call completed");
            },
        });
    }
});


// show userName from session storage
var UserDetailsString = sessionStorage.getItem("userdetails");
    console.log(UserDetailsString);
    var user = JSON.parse(UserDetailsString);
    // console.log(user.name);
$(
    '<div><p>' + user.name + '</p></div>'

).appendTo($("#userName"));




// show all images including user's
var ImageDetailsString = localStorage.getItem("imagedetails");
// console.log(ImageDetailsString);
var image = JSON.parse(ImageDetailsString);
$('document').ready(() => {

})
$.ajax({
    url: "http://localhost:3000/image",
    method: "GET",
    success: (response) => {
        $("#mydiv").children().remove();

        for (let i = 0; i < response.length; i++) {
            // id.push(response[i].id);
            $(

                '<div class="image"><p>Uploaded by : ' + '<b>' + response[i].username + '</b>' + '</p><img id="id" src="' + response[i].link + '"><div class="description">'
                + response[i].hashtag +
                '</div><p class="category"> ★ '
                + response[i].category + ' &nbsp;&nbsp;&nbsp;&nbsp; 🕑  ' + response[i].Date +
                '</p><button id="likeButton" onclick="clickCounter()" class="like"><p id="demo">0</p><b><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-like-instagram-flatart-icons-outline-flatarticons.png"/></b></button>&nbsp;&nbsp;<p><a href="../html/comment.html">comment</a></p></div>'
            ).appendTo($("#mydiv"));
        }
        // console.log(response);

    },
    error: () => {
        console.log("problem");
    },
    complete: () => {
        console.log("complete");
    },
});





// like function
function clickCounter() {
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
        sessionStorage.clickcount = 1;
    }
    document.getElementById("demo").innerHTML = sessionStorage.clickcount;

}
console.log(sessionStorage.clickcount);


// logout

$("#logOut").click(function () {

    // sessionStorage.clear();

    window.location.href = "../html/home.html";
    alert("Successfully logged out !");

})

