// Display current date and time
const currentDay = moment().format("llll");
$("#currentDay").html(currentDay);

// Get current time
const currentHour = moment().hour();

const saveBtn = $(".saveBtn");

// Save to Local Storage
// Use notes to explain how this works!
saveBtn.click(function () {
  const value = $(this).siblings(".description").val();
  const time = $(this).parent().attr("id");
  console.log($(this));

  localStorage.setItem(time, value);
});

// Get any data from local storage

const nineAM = $("#input-hour-9");
const tenAM = $("#input-hour-10");
const elevenAM = $("#input-hour-11");
const twelvePM = $("#input-hour-12");
const onePM = $("#input-hour-1");
const twoPM = $("#input-hour-2");
const threePM = $("#input-hour-3");
const fourPM = $("#input-hour-4");
const fivePM = $("#input-hour-5");

const hour9 = 9;
const hour10 = 10;
const hour11 = 11;
const hour12 = 12;
const hour1 = 13;
const hour2 = 14;
const hour3 = 15;
const hour4 = 16;
const hour5 = 17;

//9am
if (currentHour < hour9) {
  nineAM.addClass("future");
} else if (currentHour > hour9) {
  nineAM.addClass("past");
} else if (currentHour == hour9) {
  nineAM.addClass("present");
}

//10am
if (currentHour < hour10) {
  tenAM.addClass("future");
} else if (currentHour > hour10) {
  tenAM.addClass("past");
} else if (currentHour == hour10) {
  tenAM.addClass("present");
}

//11am
if (currentHour < hour11) {
  elevenAM.addClass("future");
} else if (currentHour > hour11) {
  elevenAM.addClass("past");
} else if (currentHour == hour11) {
  elevenAM.addClass("present");
}
//12pm
if (currentHour < hour12) {
  twelvePM.addClass("future");
} else if (currentHour > hour12) {
  twelvePM.addClass("past");
} else if (currentHour == hour12) {
  twelvePM.addClass("present");
}
//1pm
if (currentHour < hour1) {
  onePM.addClass("future");
} else if (currentHour > hour1) {
  onePM.addClass("past");
} else if (currentHour == hour1) {
  onePM.addClass("present");
}
//2pm
if (currentHour < hour2) {
  twoPM.addClass("future");
} else if (currentHour > hour2) {
  twoPM.addClass("past");
} else if (currentHour == hour2) {
  twoPM.addClass("present");
}
//3pm
if (currentHour < hour3) {
  threePM.addClass("future");
} else if (currentHour > hour3) {
  threePM.addClass("past");
} else if (currentHour == hour3) {
  threePM.addClass("present");
}
//4pm
if (currentHour < hour4) {
  fourPM.addClass("future");
} else if (currentHour > hour4) {
  fourPM.addClass("past");
} else if (currentHour == hour4) {
  fourPM.addClass("present");
}
//5pm
if (currentHour < hour5) {
  fivePM.addClass("future");
} else if (currentHour > hour5) {
  fivePM.addClass("past");
} else if (currentHour == hour5) {
  fivePM.addClass("present");
}
