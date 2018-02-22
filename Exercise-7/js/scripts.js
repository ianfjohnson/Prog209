$(document).ready(function () {
    //1. creates a console.log that states: “Welcome to 209” when the document is loaded.
    console.log("Welcome to 209");

    //2. writes your name to the web page using innerHTML or textContent when the document is loaded. 
    $("#name").html("Your name");

    //3. when the user clicks on an the image it will fade out slowly over the span of 1 second.
    $(".left").click(function () {
        $(this).fadeTo(1000, 0)
            .delay(1000)
            .fadeTo(10000, 100);
    })

    //4.mark the first text field as having an error, mark the second text field as required, and mark the third field as being extra good and add a message that says "Good Choice!" when the user enters data
    $("#forms").html("<div id='f1'>Name: <input id='inName' type='text' value='your name'></div>" +
        "<div id='f2'>Phone Number: <input id='inNum' type='text' value='a number'></div>" +
        "<div id='f3'>Favorite Color: <input id='inCol' type='text' value='a color'></div>" +
        "<br/><button id='btn1' type='button'>Submit</button>");

    $("#btn1").click(function () {
        var name = $("#inName").val();
        var num = $("#inNum").val();
        var col = $("#inCol").val();
        var f2class = $("f2").attr("class");

        $('#f1').html(
                "Name: <input id='inName' type='text' value='" + name + "'>"
            )
            .addClass("red")
        $("#f1").append('<p>' + name + ' is an error!</p>');

        $('#f2').html(
                "Phone Number: <input id='inNum' type='text' value='" + num + "'>"
            )
        if (isNaN(num)) {
            $('#f2').addClass("red");
            $("#f2").append('<p>A number is required!</p>');
        } else {
                $('#f2').removeClass("red");    
        }

        $('#f3').html(
                "Favorite Color: <input id='inCol' type='text' value='" + col + "'> GROOVY CHOICE MAN!!!"
            )
    });

    //    5. Reference the Lynda.com jquery tutorial. Convert the image slide show in the tutorial to an autoplaying slide show, Create a fade translation between the slides, have each image last for three seconds, and make the overlay background more transparent. 
    $('#flowers').append("<a href='flowers.html'>Click me to look at flowers!</a>");

    //6. when the user clicks on a button it animates the image across the screen and fades the image to 50%. 

    $("#btn2").click(function () {
        $(".right").animate({
            opacity: .5,
            top: '+=400'
        }, 500, 'swing', function () {
            $(".right").animate({
                opacity: 1,
                top: '-=400'
            })
        })
    });

});
