Dynamic box size 
===================
[![Build Status](https://travis-ci.org/cbspire/dynamic-box-size.svg?branch=master)](https://travis-ci.org/cbspire/dynamic-box-size)

Angularjs directive who can automatically resize width or height of HTML elements

Requirements
----------
- only [AngularJS](https://angularjs.org/)

Installation
----------

		bower install dynamic-box-size --save


Usage
-------------

Add dynamic-box-size attribute at your html element

> **Note:** 
> dynamic-box-size follow angularjs digest cycle


Code usage
-------------

This code make a square boxes based on the container width

    <div class="image" dynamic-box-size>
        <img src="img.png" style="width: 100%; height: 100%">
    </div>

This code make a rectangular boxes based on the container width, where height = width * 80%

    <div class="image" dynamic-box-size="80">
        <img src="img.png" style="width: 100%; height: 100%">
    </div>

Attributes
-------------

- dynamic-box-follow


        [ "width" | "height" ]
		choose if follow width or height for dynamic resize. Width are preselected by default

Examples
-------------

Single square image

    <div dynamic-box-size style="background-image: url('img.png')">
    </div>

Responsive square images

    <div class="row">
      <div class="col-md-4" dynamic-box-size style="background-image: url('img.png')"></div>
      <div class="col-md-4" dynamic-box-size style="background-image: url('img.png')"></div>
      <div class="col-md-4" dynamic-box-size style="background-image: url('img.png')"></div>
    </div>


Single square image based on height watch

    <div dynamic-box-size dynamic-box-follow="height" style="background-image: url('img.png')">
    </div>

Demo
-------------
[Demo](https://cbspire.github.io/dynamic-box-size/)


----------

Contributing
-------------

![Commit software](http://www.commitsoftware.it/signaturelogo.png)

