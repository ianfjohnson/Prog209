$(document).ready(function () {
    //Do Not Enter
    function Draw1() {
        let ctx = document.getElementById("Canvas1").getContext("2d");

        ctx.beginPath();
        ctx.arc(100, 100, 99, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.fillRect(10, 85, 180, 30);

        ctx.font = "30px Georgia";
        ctx.fillText("DO NOT", 45, 80);
        ctx.fillText("ENTER", 50, 145);
    };

    function Draw2() {
        //create circle
        let ctx = document.getElementById("Canvas2").getContext("2d");

        ctx.lineWidth = 15;
        ctx.lineJoin = "round";
        ctx.moveTo(10, 100);
        ctx.lineTo(100, 10);
        ctx.lineTo(190, 100);
        ctx.lineTo(100, 190);
        ctx.lineTo(10, 100);
        ctx.lineTo(100, 10);

        ctx.fillStyle = "yellow";
        ctx.stroke();
        ctx.fill();

        ctx.lineWidth = 1;

        ctx.fillStyle = "black";
        ctx.fillRect(80, 40, 40, 120);

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(100, 60, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(100, 100, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(100, 140, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();


    };

    Draw1();
    Draw2();

});
