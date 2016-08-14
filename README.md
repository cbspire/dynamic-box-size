Dynamic box size
===================
Angularjs directive who can automatically resize height of HTML elements


Code usage
-------------

This code make a square boxes based on the container width

    <div class="image" dynamic-box-size>
        <img src="image/image.png" style="width: 100%; height: 100%">
    </div>

This code make a rectangular boxes based on the container width, where height = width * 80%

    <div class="image" dynamic-box-size="80">
        <img src="image/image.png" style="width: 100%; height: 100%">
    </div>


Examples
-------------

Single square image

    <div dynamic-box-size style="background-image: url('image/image.png')">
    </div>

Responsive square images

    <div class="row">
      <div class="col-md-4" dynamic-box-size style="background-image: url('image/image.png')"></div>
      <div class="col-md-4" dynamic-box-size style="background-image: url('image/image.png')"></div>
      <div class="col-md-4" dynamic-box-size style="background-image: url('image/image.png')"></div>
    </div>

