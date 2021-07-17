"use strict"
$(document).ready(function (){
    // 1.
    $.ajax("data/users.json").done(function(data) {
        var html = "";
        for (let i = 0; i < 3; i++) {
            var user = data[i];
            html += "<div class=\"card\" style=\"width: 18rem;\">\n" +
                "  <div class=\"card-body\">\n" +
                "    <h5 class=\"card-title\">User " + user.id + "</h5>\n" +
                "    <h6 class=\"card-subtitle mb-2 text-muted\">" + user.first_name + " " + user.last_name + "</h6>\n" +
                "    <p class=\"card-text\">Email: " + user.email + "</p>\n" +
                "  </div>\n" +
                "</div>";
        }
        $("#card-parent").html(html);
    });

    // 2.
    $("#p-for-hover").hover(function () {
        $(this).html("Hovering over a p");
    }, function () {
        $(this).html("Waiting for a hover!");
    });

    // 3.
    $(".color-button").click(function () {
        $(".color-button").removeClass("button-green");
        $(this).addClass("button-green");
    });

    // 4.
    $("#border-toggle").click(function () {
        $(this).toggleClass("h1-border");
    });

    // 5.
    var rowCounter = 1;
    $("#add-row").click(function () {
        var html = $("#simple-table-body").html();
        html += "<tr><td>" + rowCounter + "</td>";
        html += "<td>hello</td>";
        html += "<td>world</td></tr>";

        $("#simple-table-body").html(html);
        rowCounter++;
    });

    // 6.
    for (let i = 4; i < 11; i++) {
        var html = $("#lots-of-list-items").html();
        html += "<li>Item " + i + "</li>";
        $("#lots-of-list-items").html(html);
    }

    // 7.
    $("li").click(function () {
        console.log($(this).text());
    });
})