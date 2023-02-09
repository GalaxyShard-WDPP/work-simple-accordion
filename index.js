
const eventsWeekContent = document.getElementById("eventsWeekContent");
const comingUpContent = document.getElementById("comingUpContent");
const pastEventsContent = document.getElementById("pastEventsContent");

function setActive(content) {
    eventsWeekContent.style.display = "none";
    comingUpContent.style.display = "none";
    pastEventsContent.style.display = "none";

    content.style.display = "block";
}
setActive(eventsWeekContent);

function selectEventsWeek() {
    setActive(eventsWeekContent);
}
function selectComingUp() {
    setActive(comingUpContent);
}
function selectPastEvents() {
    setActive(pastEventsContent);
}