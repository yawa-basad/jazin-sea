function closeheader() {
    var x = document.getElementById("war");
    x.style.display = "none";
 }



 $(document).ready(function () {


    setTimeout(function () {
       $('.mobile_display').show()
    }, 7000);


    $("#ada-chat-button").click(function () {
       $('.mobile_display').show();
    });

    $(".gHWUGh").click(function () {
       $('.mobile_display').hide();
    });

 });