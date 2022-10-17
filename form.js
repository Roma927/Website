$(document).ready(function () {


    $(".submit").click(function () {
        if (($(".passw").val() == 123456789) && ($(".mail").val() == "admin@gmail.com"))
            $(".submit").attr("href", "admin.html");
        else
            $(".submit").attr("href", "aftaerlogin.html");


    });



    $("button.color").click(function () {
        $("body").css("background-color", $("input.col").val());
    })

    $(".edbtn").animate({ right: '200px' }, 1000, function () { $(".edbtn").animate({ left: '15px' }, 2000, function () { $(this).fadeTo(1000, 0.7); }); });
    $(".edbtnn").animate({ right: '200px' }, 2000, function () { $(".edbtnn").animate({ left: '15px' }, 2000, function () { $(this).fadeTo(1000, 0.7); }); });
    $(".add").animate({ right: '200px' }, 3000, function () { $(".add").animate({ left: '15px' }, 1000, function () { $(this).fadeTo(1000, 0.7); }); });
    $(".delet").animate({ right: '200px' }, 4000, function () { $(".delet").animate({ left: '15px' }, 1000, function () { $(this).fadeTo(1000, 0.7); }); });
    $(".color").animate({ right: '200px' }, 4000, function () { $(".color").animate({ left: '15px' }, 1000, function () { $(this).fadeTo(1000, 0.7); }); });
    $(".col").animate({ right: '200px' }, 4000, function () { $(".col").animate({ left: '15px' }, 1000, function () { $(this).fadeTo(1000, 0.7); }); });
    $(".edtprice").animate({ right: '200px' }, 4000, function () { $(".edtprice").animate({ left: '15px' }, 1000, function () { $(this).fadeTo(1000, 0.7); }); });


    $(".edbtn").click(function () {
        $(".btn").fadeToggle(2000);

    })
    $(".btn").click(function () {
        $(".number").fadeToggle(2000);
        $(".btn").fadeToggle(2000);
        $(".save").fadeToggle(2000);

    })
    $(".save").click(function () {
        $(".p-min").text($(".number").val());
        $(".save").fadeToggle(2000);
        $(".number").fadeToggle(2000);
    })
    $(".edbtnn").click(function () {
        $(".btnn").fadeToggle(2000);
    })
    $(".btnn").click(function () {
        $(".numberr").fadeToggle(2000);
        $(".btnn").fadeToggle(2000);
        $(".savee").fadeToggle(2000);

    })
    $(".savee").click(function () {
        $(".p-max").text($(".numberr").val());
        $(".savee").fadeToggle(2000);
        $(".numberr").fadeToggle(2000);
    })

    $(".edtprice").click(function () {
        $(".btnprice").fadeToggle(2000);
    })
    $(".btnprice").click(function () {
        $(".numberprice").fadeToggle(2000);
        $(".btnprice").fadeToggle(2000);
        $(".saveprice").fadeToggle(2000);

    })
    $(".saveprice").click(function () {
        $(".p-price").text($(".numberprice").val() + "$");
        $(".saveprice").fadeToggle(2000);
        $(".numberprice").fadeToggle(2000);
    })
    $(".add").click(function () {

    })

});

