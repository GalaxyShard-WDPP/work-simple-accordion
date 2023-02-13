
const eventsWeekContent = document.getElementById("eventsWeekContent");
const comingUpContent = document.getElementById("comingUpContent");
const pastEventsContent = document.getElementById("pastEventsContent");

const eventsWeekTab = document.getElementById("eventsWeekTab");
const comingUpTab = document.getElementById("comingUpTab");
const pastEventsTab = document.getElementById("pastEventsTab");

function setActive(tab, content) {
    eventsWeekContent.style.display = "none";
    comingUpContent.style.display = "none";
    pastEventsContent.style.display = "none";
    eventsWeekTab.classList.remove("highlight");
    comingUpTab.classList.remove("highlight");
    pastEventsTab.classList.remove("highlight");

    content.style.display = "block";
    tab.classList.add("highlight");
}
setActive(eventsWeekTab, eventsWeekContent);

function selectEventsWeek() {
    setActive(eventsWeekTab, eventsWeekContent);
}
function selectComingUp() {
    setActive(comingUpTab, comingUpContent);
}
function selectPastEvents() {
    setActive(pastEventsTab, pastEventsContent);
}