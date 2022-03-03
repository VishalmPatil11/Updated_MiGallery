$('document').ready(() => {

})
$.ajax({
    url: "http://localhost:3000/image",
    method: "GET",
    success: (response) => {
        $("#mydiv").children().remove();

        for (let i = 0; i < response.length; i++) {

            $(

                '<div class="image"><p>Uploaded by : ' + response[i].username + '</p><img src="' + response[i].link + '"><div class="description">'
                + response[i].hashtag +
                '</div><p class="category">'
                + response[i].category + ' ' + response[i].Date +
                '</p><button id="likeButton" onclick="alertfunction()" class="likeButton"><b><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-like-instagram-flatart-icons-outline-flatarticons.png"/></b></button>&nbsp;&nbsp;<button onclick="alertfunction()"><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png"/></button></div>'
            ).appendTo($("#mydiv"));
        }
        console.log(response);

        localStorage.setItem("imagedetails", JSON.stringify(response));

    },
    error: () => {
        console.log("problem");
    },
    complete: () => {
        console.log("complete");
    },
});



// Search Box 
$(document).ready(function () {
    $('#txt-search').keyup(function () {

        var ImageDetailsString = localStorage.getItem("imagedetails");
        var user = JSON.parse(ImageDetailsString)
        var searchField = $(this).val();
        if (searchField === '') {
            $('#filter-records').html('');
            return;
        }

        var regex = new RegExp(searchField, "i");
        var output = '<div class="row">';
        var count = 1;
        $.each(user, function (key, val) {
            if ((val.category.search(regex) != -1) || (val.category.search(regex) != -1)) {
                output += '<div class="col-md-12 well">';
                output += '<div class="col-md-12"><img class="img-responsive" src="' + val.link + '" /></div>';
                output += '</div>';
                output += '</div>';
                if (count % 2 == 0) {
                    output += '</div><div class="row">'
                }
                count++;
            }
        });
        output += '</div>';
        $('#filter-records').html(output);
    });
});


//alert for user to use like and comment functionality
function alertfunction() {
    alert("Please log in first");
    window.location.href = ("../html/login.html");
}