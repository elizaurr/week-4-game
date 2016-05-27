var number = Math.floor((Math.random() * 102) + 19);

var red = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);

var guessTotal = 0;
var wins = 0;
var losses = 0;
var currentStreak = 0;
var longestStreak = 0;

$('.numberdisplay').html(number);

$(".redcrystal").click(function() {
  update(red);
});

$(".bluecrystal").click(function() {
  update(blue);
});


$(".yellowcrystal").click(function() {
  update(yellow);
});


$(".greencrystal").click(function() {
  update(green);
});


$(".dropdown").click(function() {
  $(".instructions").toggle("slow");
});



function reset() {
  number = Math.floor((Math.random() * 102) + 19);

  $(".numberdisplay").html(number);

  red = Math.floor((Math.random() * 12) + 1);
  blue = Math.floor((Math.random() * 12) + 1);
  yellow = Math.floor((Math.random() * 12) + 1);
  green = Math.floor((Math.random() * 12) + 1);

  guessTotal = 0;

  $(".guessdisplay").html(guessTotal);



};


function update(color) {
  guessTotal += color;

  $(".guessdisplay").empty();
  $(".guessdisplay").append(guessTotal);

  if (guessTotal > number) {
    losses++;

    $("#lossesdisplay").html(losses);

    reset();

    if ( currentStreak > longestStreak) {
      longestStreak = currentStreak;
    };

    currentStreak = 0

    $("#currentstreakdisplay").html(currentStreak);
    $("#longeststreakdisplay").html(longestStreak);
  }
  else if (guessTotal === number) {
    wins++;

    $("#winsdisplay").html(wins);

    reset();

    currentStreak++;

    $("#currentstreakdisplay").html(currentStreak);

    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
    };

    $("#longeststreakdisplay").html(longestStreak);
  };
};