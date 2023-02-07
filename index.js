let homeTeamPoints = document.getElementById("home-team-points")
let guestTeamPoints = document.getElementById("guest-team-points")
let homePoints = 0
let guestPoints = 0

function homeAddOne() {
    homePoints += 1
    homeTeamPoints.textContent = homePoints
}

function homeAddTwo() {
    homePoints += 2
    homeTeamPoints.textContent = homePoints
}

function homeAddTree() {
    homePoints += 3
    homeTeamPoints.textContent = homePoints
}

function resetPoints() {
    guestPoints = 0
    homePoints = 0
    homeTeamPoints.textContent = homePoints
    guestTeamPoints.textContent = guestPoints
}

function guestAddOne() {
    guestPoints += 1
    guestTeamPoints.textContent = guestPoints
}

function guestAddTwo() {
    guestPoints += 2
    guestTeamPoints.textContent = guestPoints
}

function guestAddTree() {
    guestPoints += 3
    guestTeamPoints.textContent = guestPoints
}