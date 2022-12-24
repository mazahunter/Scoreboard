let homeScore = document.getElementById("homePoints")
let guestScore = document.getElementById("guestPoints")
let displayHomeScore = 0
let displayGuestScore = 0

function onePointHome() {
    displayHomeScore += 1
    homeScore.textContent = displayHomeScore
}

function twoPointHome() {
    displayHomeScore += 2
    homeScore.textContent = displayHomeScore
}

function threePointHome() {
    displayHomeScore += 3
    homeScore.textContent = displayHomeScore
}

function onePointGuest() {
    displayGuestScore += 1
    guestScore.textContent = displayGuestScore
}

function twoPointGuest() {
    displayGuestScore += 2
    guestScore.textContent = displayGuestScore
}

function threePointGuest() {
    displayGuestScore += 3
    guestScore.textContent = displayGuestScore
}

function reset() {
    displayHomeScore = 0
    displayGuestScore = 0
    document.getElementById("homePoints").textContent = displayHomeScore
    document.getElementById("guestPoints").textContent = displayGuestScore
}