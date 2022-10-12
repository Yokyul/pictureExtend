const ul = document.querySelector("ul")
const lis = document.querySelectorAll("li")
const closeBtns = document.querySelectorAll(".close")
var last = null //上一个选中的对象

// 1.控制初始化图片依次上浮出现
var timer = setTimeout(function () {
  ul.className = ""
}, 200)

// 2.控制点击
lis.forEach(function (li, index) {
  // 2.1 点击展开
  li.onclick = function () {
    ul.setAttribute("id", "activeWrap")

    last && (last.className = "")

    this.className = "active"

    last = this
  }

  // 2.2 点击关闭
  closeBtns[index].onclick = function (ev) {
    ul.removeAttribute("id", "activeWrap")
    lis[index].className = ""

    last = null

    ev.cancelBubble = true //取消事件冒泡
  }
})
