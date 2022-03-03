//fetch comment
$('document').ready(() => {

})
$.ajax({
    url: "http://localhost:3000/comments",
    method: "GET",
    success: (response) => {
        $("#text").children().remove();

        for (let i = 0; i < response.length; i++) {
            // id.push(response[i].id);
            $(
                '<div class="text"><p>Commented by : ' + '<b>' + response[i].username + '</b>' + '</p><b>' 
                + response[i].Date + '</b>'+'<p>Comment :'
                + response[i].txtcomment +'</p>-----------------------------------</div>'
            ).appendTo($("#text"));
        }
        console.log(response);

    },
    error: () => {
        console.log("problem");
    },
    complete: () => {
        console.log("complete");
    },
});