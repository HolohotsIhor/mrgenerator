$(document).ready(function() {
    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    });

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
        };
    });

    /* Header resize. Height: 100% for ever */
    function heightDetect() {
        $("header").css("min-height", "1100px");
        $("header").css("height", "auto");
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    // Dropdown language switcher
     var displayDrop = 0;
     $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').css('display','block');
    });
     $('html').click(function(){
        $('.dropdown-menu').css('display','none');
    });
});

/* Generator Logic */
$(document).ready(function() {

    $('.form-check-input-m').click(function(){
        $('#randomLatter').html("M");
    });

     $('.form-check-input-f').click(function(){
        $('#randomLatter').html("F");
    });

    //Input birth year
    $(".userBirthYear").keyup(function() {
        var birthLastTwoNumbers = $(".userBirthYear").val();
        if (birthLastTwoNumbers.length == 4) {
            birthLastTwoNumbers = birthLastTwoNumbers.slice(2);
        }
        $('#contenUserYear').text(birthLastTwoNumbers);
    });

    //Input expires year
    $(".userExpiresYear").keyup(function() {
        var ExpiresNumbers = $(".userExpiresYear").val();
        $('#yearExpires').text(ExpiresNumbers);
        if (ExpiresNumbers.length == 4) {
            ExpiresNumbers = ExpiresNumbers.slice(2);
        }
        $('#yearExpiresFull').text(ExpiresNumbers);
    });

    //Input issued year
    $(".userIssedYear").keyup(function() {
        var issuedNumbers = $(".userIssedYear").val();
        $('#yearIssued').text(issuedNumbers);
    });

    //Input birth mounth
    $(".userBirthMounth").change(function() {
        var userMounthFinal = $(".userBirthMounth").val();
        if ($(".userBirthMounth").val() < 10) {
            userMounthFinal = "0" + $(".userBirthMounth").val();
        }
        $('#contenUserMounth').text(userMounthFinal);
    });

    //Input issued mounth
    $(".userIssuedMounth").change(function() {
        var userIssuedMounthFinal = $(".userIssuedMounth").val();
        if ($(".userIssuedMounth").val() < 10) {
            userIssuedMounthFinal = "0" + $(".userIssuedMounth").val();
        }
        $('#mounthIssued').text(userIssuedMounthFinal);
    });

    //Input expires mounth
    $(".userExpiresMounth").change(function() {
        var userExpiresMounthFinal = $(".userExpiresMounth").val();
        if ($(".userExpiresMounth").val() < 10) {
            userExpiresMounthFinal = "0" + $(".userExpiresMounth").val();
        }
        $('#mounthExpires').text(userExpiresMounthFinal);
        $('#mounthExpiresFull').text(userExpiresMounthFinal);
    });

    //Input birth day
    $(".userBirthDay").change(function() {
        var userMounthFinal = $(".userBirthDay").val();
        if ($(".userBirthDay").val() < 10) {
            userMounthFinal = "0" + $(".userBirthDay").val();
        }
        $('#contenUserDay').text(userMounthFinal);
    });

    //Input issued day
    $(".userIssuedDay").change(function() {
        var userIssuedMounthFinal = $(".userIssuedDay").val();
        if ($(".userIssuedDay").val() < 10) {
            userIssuedMounthFinal = "0" + $(".userIssuedDay").val();
        }
        $('#dayIssued').text(userIssuedMounthFinal);
    });

    //Input expires day
    $(".userExpiresDay").change(function() {
        var userExpiresMounthFinal = $(".userExpiresDay").val();
        if ($(".userExpiresDay").val() < 10) {
            userExpiresMounthFinal = "0" + $(".userExpiresDay").val();
        }
        $('#dayExpires').text(userExpiresMounthFinal);
        $('#dayExpiresFull').text(userExpiresMounthFinal);
    });

    //Input first name
    $(".userFirstName").keyup(function() {
        $('#contenFirstName').text($(".userFirstName").val());
        $('#contenFirstNameFinal').text($(".userFirstName").val());
        lineAlignmentMore();
    });
    //Input middle name
    $(".userMiddleName").keyup(function() {
        $('#contenMiddleName').text($(".userMiddleName").val());
        $('#contenMiddleNameFinal').text($(".userMiddleName").val());
        lineAlignmentMore();
    });
    //Input last name
    $(".userLastName").keyup(function() {
        $('#contenLastName').text($(".userLastName").val());
        $('#contenLastNameFinal').text($(".userLastName").val());
        lineAlignmentMore();
    });
    //Input state
    $("#userStateSelect").change(function() {
        $('#contenUserState').html($("#userStateSelect option:selected").val());
    });
    //Changed image
    $("#userStateSelect").change(function() {
        $('#contenUserStateDublicate').html($("#userStateSelect option:selected").val());
        var userState = $("#userStateSelect option:selected").val();
        if (userState == 'Alabama (AL)') {
            PotokClean();
            var issuedDriverLicense = "07/15/2016";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/1.png");
        }
        if (userState == 'Alaska (AK)') {
            PotokClean();
            var issuedDriverLicense = "05/25/2016";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/2.png");
        }
        if (userState == 'Arizona (AZ)') {
            PotokClean();
            var issuedDriverLicense = "01/28/2016";
            var expiresDriverLicense = "02/23/2040";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid());
            $('#drGenerated').html(drNubmGenerator(89999999,10000000));
            $("#document-images").attr("src", "../img/driver-license/3.png");
        }
        if (userState == 'Arkansas (AR)') {
            PotokClean();
            var issuedDriverLicense = "05/03/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/4.png");
        }
        if (userState == 'California (CA)') {
            PotokClean();
            var issuedDriverLicense = "06/14/2016";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid());
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/5.png");
        }
        if (userState == 'Colorado (CO)') {
            PotokClean();
            var issuedDriverLicense = "09/28/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/6.png");
        }
        if (userState == 'Connecticut (CT)') {
            PotokClean();
            var issuedDriverLicense = "03/04/2015";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/7.png");
        }
        if (userState == 'District of Columbia (DC)') {
            PotokClean();
            var issuedDriverLicense = "08/13/2014";
            var expiresDriverLicense = "02/23/2022";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/8.png");
        }
        if (userState == 'Delaware (DE)') {
            PotokClean();
            var issuedDriverLicense = "11/02/2017";
            var expiresDriverLicense = "02/23/2022";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/9.png");
        }
        if (userState == 'Florida (FL)') {
            PotokClean();
            var issuedDriverLicense = "03/25/2017";
            var expiresDriverLicense = "02/23/2023";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid()); 
            $('#drGenerated').html(drNubmGenerator(899999999999,100000000000));
            $("#document-images").attr("src", "../img/driver-license/10.png");
        }
        if (userState == 'Georgia (GA)') {
            PotokClean();
            var issuedDriverLicense = "06/14/2016";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/11.png");
        }
        if (userState == 'Hawaii (HI)') {
            PotokClean();
            var issuedDriverLicense = "11/23/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/12.png");
        }
        if (userState == 'Idaho (ID)') {
            PotokClean();
            var issuedDriverLicense = "09/23/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid()); 
            $('#drLatterFirstSec').html(makeid());
            $('#drLatterSecond').html(makeid()); 
            $('#drGenerated').html(drNubmGenerator(899999,100000));
            $("#document-images").attr("src", "../img/driver-license/13.png");
        }
        if (userState == 'Illinois (IL)') {
            PotokClean();
            var issuedDriverLicense = "05/13/2017";
            var expiresDriverLicense = "02/23/2022";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid()); 
            $('#drGenerated').html(drNubmGenerator(89999999999,10000000000));
            $("#document-images").attr("src", "../img/driver-license/14.png");
        }
        if (userState == 'Indiana (IN)') {
            PotokClean();
            var issuedDriverLicense = "11/11/2017";
            var expiresDriverLicense = "02/23/2023";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(8999999999,1000000000));
            $("#document-images").attr("src", "../img/driver-license/15.png");
        }
        if (userState == 'Iowa (IA)') {
            PotokClean();
            var issuedDriverLicense = "04/28/2016";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/16.png");
        }
        if (userState == 'Kansas (KS)') {
            PotokClean();
            var issuedDriverLicense = "06/09/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/17.png");
        }
        if (userState == 'Kentucky (KY)') {
            PotokClean();
            var issuedDriverLicense = "08/10/2017";
            var expiresDriverLicense = "02/31/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/18.png");
        }
        if (userState == 'Louisiana (LA)') {
            PotokClean();
            var issuedDriverLicense = "05/09/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid()); 
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/19.png");
        }
        if (userState == 'Maine (ME)') {
            PotokClean();
            var issuedDriverLicense = "08/11/2016";
            var expiresDriverLicense = "02/23/2022";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/20.png");
        }
        if (userState == 'Maryland (MD)') {
            PotokClean();
            var issuedDriverLicense = "10/14/2016";
            var expiresDriverLicense = "02/23/2022";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid()); 
            $('#drGenerated').html(drNubmGenerator(899999999999,100000000000));
            $("#document-images").attr("src", "../img/driver-license/21.png");
        }
        if (userState == 'Massachusetts (MA)') {
            PotokClean();
            var issuedDriverLicense = "11/29/2016";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/22.png");
        }
        if (userState == 'Michigan (MI)') {
            PotokClean();
            var issuedDriverLicense = "09/07/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid()); 
            $('#drGenerated').html(drNubmGenerator(899999999999,100000000000));
            $("#document-images").attr("src", "../img/driver-license/23.png");
        }
        if (userState == 'Minnesota (MN)') {
            PotokClean();
            var issuedDriverLicense = "04/29/2016";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid()); 
            $('#drGenerated').html(drNubmGenerator(899999999999,100000000000));
            $("#document-images").attr("src", "../img/driver-license/24.png");
        }
        if (userState == 'Mississippi (MS)') {
            PotokClean();
            var issuedDriverLicense = "02/10/2016";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/25.png");
        }
        if (userState == 'Missouri (MO)') {
            PotokClean();
            var issuedDriverLicense = "04/29/2017";
            var expiresDriverLicense = "04/29/2023";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            ssnGenerator();

            $("#document-images").attr("src", "../img/driver-license/26.png");
        }
        if (userState == 'Montana (MT)') {
            PotokClean();
            var issuedDriverLicense = "01/13/2017";
            var expiresDriverLicense = "02/23/2025";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/27.png");
        }
        if (userState == 'Nebraska (NE)') {
            PotokClean();
            var issuedDriverLicense = "06/27/2017";
            var expiresDriverLicense = "02/23/2022";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            $('#drLatterFirst').html(makeid());
            $('#drGenerated').html(drNubmGenerator(89999999,10000000));
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/28.png");
        }
        if (userState == 'Nevada (NV)') {
            PotokClean();
            var issuedDriverLicense = "10/11/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999999,100000000000));
            $("#document-images").attr("src", "../img/driver-license/29.png");
        }
        if (userState == 'New Hampshire (NH)') {
            PotokClean();
            var issuedDriverLicense = "06/09/2015";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#preNumb').html(drNubmGenerator(89,10));
            $('#drLatterFirstThr').html(makeid());
            $('#drLatterFirstSec').html(makeid());
            $('#drLatterFirst').html(makeid()); 
            $('#drGenerated').html(drNubmGenerator(89999,10000));
            $("#document-images").attr("src", "../img/driver-license/30.png");
        }
        if (userState == 'New Jersey (NJ)') {
            PotokClean();
            var issuedDriverLicense = "01/28/2017";
            var expiresDriverLicense = "02/31/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid());
            $('#drGenerated').html(drNubmGenerator(89999999999999,10000000000000));
            $("#document-images").attr("src", "../img/driver-license/31.png");
        }
        if (userState == 'New Mexico (NM)') {
            PotokClean();
            var issuedDriverLicense = "04/07/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/32.png");
        }
        if (userState == 'New York (NY)') {
            PotokClean();
            var issuedDriverLicense = "02/04/2016";
            var expiresDriverLicense = "02/23/2024";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/33.png");
        }
        if (userState == 'North Carolina (NC)') {
            PotokClean();
            var issuedDriverLicense = "06/06/2015";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999999,100000000000));
            $("#document-images").attr("src", "../img/driver-license/34.png");
        }
        if (userState == 'North Dakota (ND)') {
            PotokClean();
            var issuedDriverLicense = "09/01/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/35.png");
        }
        if (userState == 'Ohio (OH)') {
            PotokClean();
            var issuedDriverLicense = "08/08/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirstSec').html(makeid());
            $('#drLatterFirst').html(makeid()); 
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/36.png");
        }
        if (userState == 'Oklahoma (OK)') {
            PotokClean();
            var issuedDriverLicense = "03/17/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/37.png");
        }
        if (userState == 'Oregon (OR)') {
            PotokClean();
            var issuedDriverLicense = "02/03/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/38.png");
        }
        if (userState == 'Pennsylvania (PA)') {
            PotokClean();
            var issuedDriverLicense = "01/14/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(89999999,10000000));
            $("#document-images").attr("src", "../img/driver-license/39.png");
        }
        if (userState == 'Rhode Island (RI)') {
            PotokClean();
            var issuedDriverLicense = "09/15/2016";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/40.png");
        }
        if (userState == 'South Carolina (SC)') {
            PotokClean();
            var issuedDriverLicense = "01/19/2017";
            var expiresDriverLicense = "02/23/2027";
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/41.png");
        }
        if (userState == 'South Dakota (SD)') {
            PotokClean();
            var issuedDriverLicense = "02/11/2016";
            var expiresDriverLicense = "02/23/2021";
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/42.png");
        }
        if (userState == 'Tennessee (TN)') {
            PotokClean();
            var issuedDriverLicense = "09/01/2016";
            var expiresDriverLicense = "02/23/2024";
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/43.png");
        }
        if (userState == 'Texas (TX)') {
            PotokClean();
            var issuedDriverLicense = "10/29/2016";
            var expiresDriverLicense = "02/23/2021";
            $('#drGenerated').html(drNubmGenerator(89999999,10000000));
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/44.png");
        }
        if (userState == 'Utah (UT)') {
            PotokClean();
            var issuedDriverLicense = "12/23/2016";
            var expiresDriverLicense = "02/23/2021";
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/45.png");
        }
        if (userState == 'Vermont (VT)') {
            PotokClean();
            var issuedDriverLicense = "06/25/2016";
            var expiresDriverLicense = "02/23/2020";
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/46.png");
        }
        if (userState == 'Virginia (VA)') {
            PotokClean();
            var issuedDriverLicense = "09/26/2017";
            var expiresDriverLicense = "02/31/2022";
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/47.png");
        }
        if (userState == 'Washington (WA)') {
            PotokClean();
            var issuedDriverLicense = "08/04/2016";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            $('#drLatterSecond').html(makeid());
            $('#drLatterSecond2').html(makeid());
            $('#drLatterFirst6').html(makeid());
            $('#drLatterFirst5').html(makeid());
            $('#drLatterFirst4').html(makeid());
            $('#drLatterFirstThr').html(makeid());
            $('#drLatterFirstSec').html(makeid());
            $('#drLatterFirst').html(makeid());
            $('#drGenerated').html(drNubmGenerator(899,100));
            ssnGenerator();
            $("#document-images").attr("src", "../img/driver-license/48.png");
        }
        if (userState == 'West Virginia (WV)') {
            PotokClean();
            var issuedDriverLicense = "03/11/2016";
            var expiresDriverLicense = "02/28/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(8999999,1000000));
            $("#document-images").attr("src", "../img/driver-license/49.png");
        }
        if (userState == 'Wisconsin (WI)') {
            PotokClean();
            var issuedDriverLicense = "10/13/2016";
            var expiresDriverLicense = "02/23/2020";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drLatterFirst').html(makeid());
            $('#drGenerated').html(drNubmGenerator(8999999999999,1000000000000));
            $("#document-images").attr("src", "../img/driver-license/50.png");
        }
        if (userState == 'Wyoming (WY)') {
            PotokClean();
            var issuedDriverLicense = "05/09/2017";
            var expiresDriverLicense = "02/23/2021";
            $('#issuedDate').html(issuedDriverLicense);
            $('#expiresDate').html(expiresDriverLicense);
            ssnGenerator();
            $('#drGenerated').html(drNubmGenerator(899999999,100000000));
            $("#document-images").attr("src", "../img/driver-license/51.png");
        }
    });
/* Random SSN generator function */
function ssnGenerator() {
    var ssnRandomFirstNumber = Math.floor((Math.random() * 899) + 100);
    var ssnRandomSecondNumber = Math.floor((Math.random() * 99) + 10);
    var ssnRandomThirdNumber = Math.floor((Math.random() * 8999) + 1000);
    $('#ssnRandomFirst').html(ssnRandomFirstNumber);
    $('#ssnRandomSecond').html(ssnRandomSecondNumber);
    $('#ssnRandomThird').html(ssnRandomThirdNumber);
};
/* Random NO generator function */
function noGenerator() {
    var onRandomNumber = Math.floor((Math.random() * 89999999) + 10000000);
    $('#noNumber').html(onRandomNumber);
    $('#noNumberFinal').html(onRandomNumber);
};
/* DR generator */
var numbF = 0;
var nambS = 0;
var drGeneratednUMB = 0;
function drNubmGenerator(numbF, numbS){
    drGeneratednUMB = Math.floor((Math.random() * numbF) + numbS);
    return drGeneratednUMB;
};
/* Random NO generator function */
function oneNumberPassport() {
    var onRandomNumberOne = Math.floor((Math.random() * 9) + 1);
    var onRandomNumberSecond = Math.floor((Math.random() * 9) + 1);
    var onRandomNumberThird = Math.floor((Math.random() * 9) + 1);
    var onRandomNumberFourth = Math.floor((Math.random() * 9) + 1);
    $('#oneRandomNumber').html(onRandomNumberOne);
    $('#oneRandomNumberSecond').html(onRandomNumberSecond);
    $('#oneRandomNumberThird').html(onRandomNumberThird);
    $('#oneRandomNumberFourth').html(onRandomNumberFourth);
};
function PotokClean(){
    $('#drLatterSecond').html("");
    $('#drLatterSecond2').html("");
    $('#drLatterFirst6').html("");
    $('#drLatterFirst5').html("");
    $('#drLatterFirst4').html("");
    $('#drLatterFirstThr').html("");
    $('#drLatterFirstSec').html("");
    $('#drLatterFirst').html("");
    $('#preNumb').html("");
    $('#drGenerated').html("");
    $('#drLatterSecond').html("");
    $('#drLatterSecond2').html("");
};
/* Random latter Ganerate */
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXY";
    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
    //Include functions
    noGenerator();
    oneNumberPassport();
    /* Length of strokes function */
    function lineAlignmentMore() {
        var testStrokeFirst = $('#firstInfoStroke').text().length;
        var strokeConstLength = 44;
        if (testStrokeFirst < strokeConstLength) {
            var needAdded = strokeConstLength - testStrokeFirst;
            var newLengthStroke = "<"
            for (var i = 0; i < needAdded - 1; i++) {
                var newLengthStroke = newLengthStroke + "<";
                $('#needToAdd').html(newLengthStroke);
            }
        }
    };
});