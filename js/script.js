// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: March 31 2025
// This file contains the JS functions for index.html

"use strict"

function volumeOfPyramid() {
  // Setting the varibles
  const LENGTH_Of_PYRAMID = parseFloat(document.getElementById("length-of-pyramid").value)
  const WIDTH_OF_PYRAMID = parseFloat(document.getElementById("width-of-pyramid").value)
  const HEIGHT_OF_PYRAMID = parseFloat(document.getElementById("height-of-pyramid").value)
  const volumeOfPyramid = (LENGTH_Of_PYRAMID * WIDTH_OF_PYRAMID * HEIGHT_OF_PYRAMID) / 3
  // clacualtoins 
  document.getElementById("Volume").innerHTML = 
  "Volume is: " + volumeOfPyramid.toFixed(2) + " mm³";
}