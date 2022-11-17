function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    // console.log(time);
    // console.log (new Date().getHours() + "h " + new Date().getMinutes() + "m " + new Date().getSeconds() + "s");

    $("#seconds").css("transform", "rotate(" + (getSecondsSinceStartOfDay() % 60 + 30) * (360 / 60) + "deg");
    $("#minutes").css("transform", "rotate(" + (getSecondsSinceStartOfDay() % (60 * 60) + (30 * 60)) * (360 / 60 / 60) + "deg");
    $("#hour").css("transform", "rotate(" + (getSecondsSinceStartOfDay() % (60 * 60 * 12) + (30 * 60 * 12)) * (360 / 60 / 60 / 12) + "deg");
}, 1000);