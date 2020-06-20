
function goToAnchor(anchor) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
}
// Create a "close" button and append it to each list item
/*var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/
// Create a new list item when clicking on the "Add" button
function newElement() {
  var div = document.createElement("div");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  div.appendChild(t);
  if (inputValue === '') {
    alert("請填入餐廳名稱");
  } else {
    document.getElementById("restaurants").appendChild(div);
    AddClass(div,"filterDiv show1")
  }
  document.getElementById("myInput").value = "";
}
/*
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
*/
function draw() {
  var x, array, j;
  x = document.getElementsByClassName("show1");
  array = Object.values(x)
  result = Math.floor(Math.random() * array.length)
  name = x[result].innerText

  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (j = 0; j < array.length; j++) {
    RemoveClass(array[j], "show2 show1");
  }
  AddClass(array[result], "show2");
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show2 show1 flitered");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show1 flitered");
  }
}

function secfilterSelection(d) {
  var x, i;
  x = document.getElementsByClassName("flitered");
  if (d == "all") d = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show1 show2");
    if (x[i].className.indexOf(d) > -1) AddClass(x[i], "show1");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var secbtnContainer = document.getElementById("categories");
var btns = btnContainer.getElementsByClassName("first");
var secbtns = secbtnContainer.getElementsByClassName("sec");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}
for (var i = 0; i < secbtns.length; i++) {
  secbtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
}