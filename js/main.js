"use strict"
$(document).ready(function () {
    // 1.
    $.ajax("data/users.json").done(function (data) {
        var html = "";
        for (var i = 0; i < 3; i++) {
            html += `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${data[i].id}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${data[i].first_name} ${data[i].last_name}</h6>
                            <p class="card-text">${data[0].email}</p>
                        </div>
                     </div>`;
        }
        // set the card html to the inner html of the card-parent div
        $("#card-parent").html(html);
    });

    // 2.
    $('#p-for-hover').hover(
        function() {
            $(this).html("Hovering over a p");
        },
        function() {
            $(this).html("Waiting for a hover!");
        }
    );

    // 3.
    $(".color-button").css("background-color", "orange");
    $(".color-button").click(function () {
        // reset all button colors to orange
        $(".color-button").css("background-color", "orange");
        $(this).css("background-color", "green");
    });

    // 4.
    $("#border-toggle").click(function () {
        $(this).toggleClass("h1-border");
    })

    // 5.
    var rowCounter = 1;
    $("#add-row").click(function () {
        var previousHTML = $("#simple-table-body").html();
        var newHTML = `<tr>
            <td>${rowCounter}</td>
            <td>hello</td>
            <td>world</td>
        </tr>`;
        $("#simple-table-body").html(previousHTML + newHTML);

        rowCounter++;
    })

    // 6.
    var oldLIs = $("#lots-of-list-items").html();
    var newLI = "";
    for(var i = 4; i <= 10; i++) {
        newLI += `<li>Item ${i}</li>`;
    }
    $("#lots-of-list-items").html(oldLIs + newLI)

    // 7.
    $("li").click(function () {
        console.log($(this).text());
    });
})