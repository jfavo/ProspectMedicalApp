$(document).ready(function () {

    var windowLocation = $(location).attr('pathname');

    //Navigation
    var $navList = $("#navList");
    var $navListButton = $("#navListButton");

    $navListButton.click(function () {
        $navList.slideToggle(300);
    });

    function NavSizeChange() {
        if ($(window).width() <= 604) {
            $navList.hide();
            $navListButton.show();
        }
        else {
            $navList.show();
            $navListButton.hide();
        }
    }

    $(function () {
        $("#appointmentDate").datepicker({
            beforeShowDay: $.datepicker.noWeekends,
            changeMonth: true,
            minDate: dateToday
        });
    });

    //Home page
    var $homeBanner = $("#banner");
    var $homeBannerFillIn = $("#bannerFillIn");

    function CheckHomePageSizeChange() {
        if ($(window).width() <= 604) {
            $homeBanner.hide();
            $homeBannerFillIn.show();
        }
        else {
            $homeBanner.show();
            $homeBannerFillIn.hide();
        }
    }

    //Contact page
    var $contactOptions = $("#contactOptions");
    var $otherTextbox = $("#otherTextbox");

    $contactOptions.change(function () {
        if ($("#contactOptions option:selected").text() === "Other") {
            $otherTextbox.show();
        }
        else {
            $otherTextbox.hide();
        }

    });

    //Service page

    $(".service-item").click(function () {
        var desc = $(this).find(".service-description");
        var icon = $(this).find(".service-icon");

        if (!desc.is(':visible')) {

            desc.slideDown(300);
            $(this).addClass("service-active");

            if (!icon.hasClass('rotate90'))
                icon.toggleClass('rotate90');
            
        }
        else {

            desc.slideUp(300);
            $(this).removeClass("service-active");

            if (icon.hasClass('rotate90'))
                icon.toggleClass('rotate90');
        }
    });

    //Appointment page

    //Admin page

    var $appointmentForm = $("#newAppointmentForm");
    var $billForm = $("#billForm");

    $("#addAppointmentBtn").click(function () {
        if ($appointmentForm.is(":visible")) {
            $appointmentForm.slideUp(200);
        }
        else {
            $appointmentForm.slideDown(200);
        }

        if ($billForm.is(":visible")) {
            $billForm.slideUp(200);
        }

    });

    $("#updateBillBtn").click(function () {

        if ($billForm.is(":visible")) {
            $billForm.slideUp(200);
        }
        else {
            $billForm.slideDown(200);
        }

        if ($appointmentForm.is(":visible")) {
            $appointmentForm.slideUp(200);
        }

    });

    //Popup forms

    $("#delPatientPopupBtn").click(function () {
        $("#patientDeleteDialog").dialog("open");
    });
    $("#delPatientBackBtn").click(function () {
        $("#patientDeleteDialog").dialog("close");
    });

    $("#patientDeleteDialog").dialog({
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        width: 600,
        height: 250
    });
    $(".ui-dialog-titlebar").hide();

    $("#editPatientPopupBtn").click(function () {
        $("#patientEditDialog").dialog("open");
    });
    $("#editPatientBackBtn").click(function () {
        $("#patientEditDialog").dialog("close");
    });

    $("#patientEditDialog").dialog({
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        width: "90%",
        height: "auto"
    });
    $(".ui-dialog-titlebar").hide();

    $("#payBillPopupBtn").click(function () {
        $("#payBillForm").dialog("open");
    });

    $("#payBillFormBackBtn").click(function () {
        $("#payBillForm").dialog("close");
    });

    $("#payBillForm").dialog({
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        width: "90%",
        height: "auto"
    });
    $(".ui-dialog-titlebar").hide();

    //Check which page user is on and run logic accordingly
    var dateToday = new Date();
    switch (windowLocation) {
        case "/":
            var slideIndex = 0;
            showSlides();

            CheckHomePageSizeChange();

            break;
        case "/contact":
            
            break;
        case "/services":
            break;
        case "/appointment":

            $(function () {
                $("#appointmentDate").datepicker({
                    beforeShowDay: $.datepicker.noWeekends,
                    changeMonth: true,
                    minDate: dateToday
                });

            });
            break;
        case "/main":


            break;
    }


    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slideshow-slides");
        var dots = document.getElementsByClassName("slideshow-dot");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slideshow-active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " slideshow-active";
        setTimeout(showSlides, 5000);
    }

    $(window).on('resize', function () {

        //Only run on home page
        if (windowLocation === "/") {
            CheckHomePageSizeChange();

        }

        NavSizeChange();
    });

    NavSizeChange();

});


