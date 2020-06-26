
function goToAnchor(anchor) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
}

// 創造新的div
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

// 顯示使用者選項
function change(id,name) {
  var x = document.getElementById(id);
  x.innerText = name
}

//刪除選項
/*function unshow() {
    $('.delete').on('click',$(this).parent().remove());
}
$(function() {
    // still need this outer function to indicate
    // to only bind the handler when the DOM is ready
    $('.delete').;
});
/*
 */
function unshow() {
  event.target.parentElement.remove()
}
/*
$(() => {
  $('.delete').on('click',$(this).parent().remove())
})
*/
//抽籤
function draw() {
  var x, array, j;
  x = document.getElementsByClassName("show1");
  array = Object.values(x)
  result = Math.floor(Math.random() * array.length)
//  name = x[result].innerText

  for (j = 0; j < array.length; j++) {
    RemoveClass(array[j], "show2 show1");
  }
  AddClass(array[result], "show2");
}
//第一列按鈕
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

//第二列按鈕
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

// 顯示通過篩選的項目
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

// 消除無法通過過濾的項目
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

$(() => {
// 將兩層過濾的分開顯示
$('#myBtnContainer .first').on('click', function () {
  $('.active1').removeClass('active1');
  $(this).addClass('active1');
  });
$('#categories .sec').on('click', function () {
  $('.active2').removeClass('active2');
  $(this).addClass('active2');
  });
})

/*
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
*/
