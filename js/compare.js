for (var i = 1; i < product.length; i++) {
  // Add options for select1
  document.getElementById("select1").innerHTML += `
                <option value="${i}">${product[i].title}</option>
            `;
  
  // Add options for select2
  document.getElementById("select2").innerHTML += `
                <option value="${i}">${product[i].title}</option>
            `;
  
  // Add options for select3
  document.getElementById("select3").innerHTML += `
                <option value="${i}">${product[i].title}</option>
            `;
}

function item1(a) {
  var select2 = document.getElementById("select2").value;
  var select3 = document.getElementById("select3").value;

  if (a != select2) {
    // Set the information for item1 if it is not the same as item2
    document.getElementById("img1").src = product[a].image;
    document.getElementById("brand1").innerHTML = product[a].brand;
    document.getElementById("size1").innerHTML = product[a].display_size;
    document.getElementById("tech1").innerHTML = product[a].display_type;
    document.getElementById("chip1").innerHTML = product[a].chipset;
    document.getElementById("storage1").innerHTML = product[a].memory;
    document.getElementById("os1").innerHTML = product[a].os;
    document.getElementById("charg1").innerHTML = product[a].battery;
    document.getElementById("camera1").innerHTML = product[a].main_camera;
    document.getElementById("fcam1").innerHTML = product[a].front_camera;
    document.getElementById("color1").innerHTML = product[a].color;
    document.getElementById("price1").innerHTML = product[a].subtotal;
  } else if (a != select3) {
    // Set the information for item1 if it is not the same as item3
    document.getElementById("img1").src = product[a].image;
    document.getElementById("brand1").innerHTML = product[a].brand;
    document.getElementById("size1").innerHTML = product[a].display_size;
    document.getElementById("tech1").innerHTML = product[a].display_type;
    document.getElementById("chip1").innerHTML = product[a].chipset;
    document.getElementById("storage1").innerHTML = product[a].memory;
    document.getElementById("os1").innerHTML = product[a].os;
    document.getElementById("charg1").innerHTML = product[a].battery;
    document.getElementById("camera1").innerHTML = product[a].main_camera;
    document.getElementById("fcam1").innerHTML = product[a].front_camera;
    document.getElementById("color1").innerHTML = product[a].color;
    document.getElementById("price1").innerHTML = product[a].subtotal;
  } else {
    // Reset the information for item1 if it is the same as item2 or item3
    document.getElementById("img1").src = product[0].image;
    document.getElementById("brand1").innerHTML = "";
    document.getElementById("size1").innerHTML = "";
    document.getElementById("tech1").innerHTML = "";
    document.getElementById("chip1").innerHTML = "";
    document.getElementById("storage1").innerHTML = "";
    document.getElementById("os1").innerHTML = "";
    document.getElementById("charg1").innerHTML = "";
    document.getElementById("camera1").innerHTML = "";
    document.getElementById("fcam1").innerHTML = "";
    document.getElementById("color1").innerHTML = "";
    document.getElementById("price1").innerHTML = "";
  }
}

// Functions item2 and item3 follow a similar structure as item1
function item2(b) {
  var select1 = document.getElementById("select1").value;
  var select3 = document.getElementById("select3").value;

  if (b != select1) {
    // Set the information for item2 if it is not the same as item1
    document.getElementById("img2").src = product[b].image;
    document.getElementById("brand2").innerHTML = product[b].brand;
    document.getElementById("size2").innerHTML = product[b].display_size;
    document.getElementById("tech2").innerHTML = product[b].display_type;
    document.getElementById("chip2").innerHTML = product[b].chipset;
    document.getElementById("storage2").innerHTML = product[b].memory;
    document.getElementById("os2").innerHTML = product[b].os;
    document.getElementById("charg2").innerHTML = product[b].battery;
    document.getElementById("camera2").innerHTML = product[b].main_camera;
    document.getElementById("fcam2").innerHTML = product[b].front_camera;
    document.getElementById("color2").innerHTML = product[b].color;
    document.getElementById("price2").innerHTML = product[b].subtotal;
  } else if (b != select3) {
    // Set the information for item2 if it is not the same as item3
    document.getElementById("img2").src = product[b].image;
    document.getElementById("brand2").innerHTML = product[b].brand;
    document.getElementById("size2").innerHTML = product[b].display_size;
    document.getElementById("tech2").innerHTML = product[b].display_type;
    document.getElementById("chip2").innerHTML = product[b].chipset;
    document.getElementById("storage2").innerHTML = product[b].memory;
    document.getElementById("os2").innerHTML = product[b].os;
    document.getElementById("charg2").innerHTML = product[b].battery;
    document.getElementById("camera2").innerHTML = product[b].main_camera;
    document.getElementById("fcam2").innerHTML = product[b].front_camera;
    document.getElementById("color2").innerHTML = product[b].color;
    document.getElementById("price2").innerHTML = product[b].subtotal;
  } else {
    // Reset the information for item2 if it is the same as item1 or item3
    document.getElementById("img2").src = product[0].image;
    document.getElementById("brand2").innerHTML = "";
    document.getElementById("size2").innerHTML = "";
    document.getElementById("tech2").innerHTML = "";
    document.getElementById("chip2").innerHTML = "";
    document.getElementById("storage2").innerHTML = "";
    document.getElementById("os2").innerHTML = "";
    document.getElementById("charg2").innerHTML = "";
    document.getElementById("camera2").innerHTML = "";
    document.getElementById("fcam2").innerHTML = "";
    document.getElementById("color2").innerHTML = "";
    document.getElementById("price2").innerHTML = "";
  }
}

function item3(c) {
  var select1 = document.getElementById("select1").value;
  var select2 = document.getElementById("select2").value;

  if (c != select1) {
    // Set the information for item3 if it is not the same as item1
    document.getElementById("img3").src = product[c].image;
    document.getElementById("brand3").innerHTML = product[c].brand;
    document.getElementById("size3").innerHTML = product[c].display_size;
    document.getElementById("tech3").innerHTML = product[c].display_type;
    document.getElementById("chip3").innerHTML = product[c].chipset;
    document.getElementById("storage3").innerHTML = product[c].memory;
    document.getElementById("os3").innerHTML = product[c].os;
    document.getElementById("charg3").innerHTML = product[c].battery;
    document.getElementById("camera3").innerHTML = product[c].main_camera;
    document.getElementById("fcam3").innerHTML = product[c].front_camera;
    document.getElementById("color3").innerHTML = product[c].color;
    document.getElementById("price3").innerHTML = product[c].subtotal;
  } else if (c != select2) {
    // Set the information for item3 if it is not the same as item2
    document.getElementById("img3").src = product[c].image;
    document.getElementById("brand3").innerHTML = product[c].brand;
    document.getElementById("size3").innerHTML = product[c].display_size;
    document.getElementById("tech3").innerHTML = product[c].display_type;
    document.getElementById("chip3").innerHTML = product[c].chipset;
    document.getElementById("storage3").innerHTML = product[c].memory;
    document.getElementById("os3").innerHTML = product[c].os;
    document.getElementById("charg3").innerHTML = product[c].battery;
    document.getElementById("camera3").innerHTML = product[c].main_camera;
    document.getElementById("fcam3").innerHTML = product[c].front_camera;
    document.getElementById("color3").innerHTML = product[c].color;
    document.getElementById("price3").innerHTML = product[c].subtotal;
  } else {
    // Reset the information for item3 if it is the same as item1 or item2
    document.getElementById("img3").src = product[0].image;
    document.getElementById("brand3").innerHTML = "";
    document.getElementById("size3").innerHTML = "";
    document.getElementById("tech3").innerHTML = "";
    document.getElementById("chip3").innerHTML = "";
    document.getElementById("storage3").innerHTML = "";
    document.getElementById("os3").innerHTML = "";
    document.getElementById("charg3").innerHTML = "";
    document.getElementById("camera3").innerHTML = "";
    document.getElementById("fcam3").innerHTML = "";
    document.getElementById("color3").innerHTML = "";
    document.getElementById("price3").innerHTML = "";
  }
}
