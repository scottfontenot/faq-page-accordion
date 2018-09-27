$(".question").click(function () {
    // console.log($("#q1"));
    // $("#a1").fadeToggle("fast");
    // $("#arrow1-down, #arrow1-up").toggleClass("collapse");
    //console.log($(this));
    // console.log($(this).next());
    $(this).next().fadeToggle("fast");
    //console.log($(this).children());
    $(this).children().toggleClass("collapse");
    $(this).next().animate({
        width: "100%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500);

});

// $("#q2").click(function () {
//     $("#a2").fadeToggle("fast");
//     $("#arrow2-down, #arrow2-up").toggleClass("collapse");
// })

// $("#q3").click(function () {
//     $("#a3").fadeToggle("fast");
//     $("#arrow3-down, #arrow3-up").toggleClass("collapse");
// })