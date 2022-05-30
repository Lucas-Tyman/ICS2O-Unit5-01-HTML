// Created by: Lucas Tyman
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-HTML/sw.js", {
    scope: "/ICS2O-Unit5-01-HTML/",
  })
}

/**
 * This function checks if you guessed the right number.
 */
function check() {
  // input
  const random = Math.floor(Math.random() * 6) + 1
  var guess = parseInt(document.getElementById("slider").value)

  // process and output
  document.getElementById("random").innerHTML = random

  if (guess == random) {
    document.getElementById("answers").innerHTML = "You are correct!"
  }

  if (guess != random) {
    document.getElementById("answers").innerHTML = "You are incorrect!"
  }
}
