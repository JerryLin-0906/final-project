
function goToAnchor(anchor) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var div = document.createElement("div");
  var inputValue = document.getElementById("myInput").value;
  var class1 = document.getElementById('class1').innerText
  var class2 = document.getElementById('class2').innerText
  var class3 = document.getElementById('class3').innerText
  var divchild = document.createElement('div')
  var a = document.createElement('a')
  var t = document.createTextNode(inputValue);
  //div.appendChild(t);
  div.appendChild(divchild);
  div.appendChild(a);
  a.appendChild(t);
  if (inputValue === '' || class1 === '在哪裡?' || class2 === '賣什麼?') {
    alert("請填入餐廳名稱、餐廳地點或餐廳種類");
  } else {
    document.getElementById("restaurants").appendChild(div);
    AddClass(div,"filterDiv filtered show1")
    AddClass(div,class1)
    AddClass(div,class2)
    if (class3 === '還有賣什麼?'){
      AddClass(div,'')
    }else {
      AddClass(div,class3)
    }
  AddClass(divchild,'delete')
  divchild.onclick = unshow
  }
  document.getElementById("myInput").value = "";
  document.getElementById('class1').innerText = '在哪裡?';
  document.getElementById('class2').innerText = '賣什麼?';
  document.getElementById('class3').innerText = '還有賣什麼?';
}

function change(id,name) {
  var x = document.getElementById(id);
  x.innerText = name
}

function unshow() {
  delete event.target.parentElement.remove()
}

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