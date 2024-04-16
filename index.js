let homePtsEl = document.getElementById("home-pts");
let homePts = 0;
let guestPtsEl = document.getElementById("guest-pts");
let guestPts = 0;

function incbyone() {
    homePts += 1;
    homePtsEl.textContent = homePts;
}

function incbytwo() {
    homePts += 2;
    homePtsEl.textContent = homePts;
}

function incbythree() {
    homePts += 3;
    homePtsEl.textContent = homePts;
}

function inbyone() {
    guestPts += 1;
    guestPtsEl.textContent = guestPts;
}

function inbytwo() {
    guestPts += 2;
    guestPtsEl.textContent = guestPts;
}

function inbythree() {
    guestPts += 3;
    guestPtsEl.textContent = guestPts;
}

function ng() {
    homePtsEl.textContent = 0;
    guestPtsEl.textContent = 0;
}