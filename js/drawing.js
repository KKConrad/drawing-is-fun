// select random square, want to generate random hex value, set data-color on the random link to be that random hex value

$(document).ready(function () {
    function addColor() {
        return '#' + Math.random().toString(16).slice(2, 8);
    }

    function finalizecolor(persistcolor) {
        $('#randomlink').attr("data-color", persistcolor)
    }

    $("#randomsquare").on("click", function () {
        var persistcolor = addColor();
        $(this).css('background-color', persistcolor);
        $(this).css('box-shadow', "0 0 10px" + addColor());
        $(this).css('z-index', "105");
        console.log("Mouse Enter");
        $(this).onClick(finalizecolor(persistcolor))
    });

    $("#randomsquare").on("mouseleave", function () {
        $(this).css('box-shadow', "none");
        $(this).css('z-index', "0");
        console.log("Mouse Leave");
    });

    $("#eraserbutton").click(function() {
        console.log('clicked');
        $('#colors_sketch').css('background-color', "black");
    });
});

