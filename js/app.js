const bar = document.querySelector(".bar");
//const svg = document.querySelector("svg");
//const circle = svg.querySelector("circle");
//const r = circle.getAttribute("r");
//const circ = 2 * Math.PI * r;

const pages = new Pageable("main", {
    pips: true, // display the pips
    interval: 400, // the duration in ms of the scroll animation
    delay: 50, // the delay in ms before the scroll animation starts
    throttle: 50, // the interval in ms that the resize callback is fired
    orientation: "vertical", // or horizontal
    events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: true, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
    },
    easing: function(currentTime, startPos, endPos, interval) {
        // the easing function used for the scroll animation
        return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
    },
    onInit: function() {
        // do something when the instance is ready
    },
    onUpdate: function() {
        // do something when the instance updates
    },
    onBeforeStart: function() {
        // do something before scrolling begins
    },
    onStart: function() {
        // do something when scrolling begins
    },
    onScroll: function() {
        // do something during scroll
    },
    onFinish: function() {
        // do something when scrolling ends
    },
});

pages.on("scroll", update);

function update(data) {
	const pos = round(1 - (data.max - data.scrolled) / data.max, 3);
	bar.style.transform = `scale(${pos}, 1)`;
}
function round(value, decimals) {
	return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};
