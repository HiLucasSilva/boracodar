function handleplay() {
    if (document.getElementById("girar").classList.contains('active')) {
      document.getElementById("prod-img").src = "./img/image 2.png"
      document.getElementById("action-img").src = "./img/360.png"
      document.getElementById("girar").classList.remove('active')
    } else {
      document.getElementById("prod-img").src = "./img/sofaa.gif"
      document.getElementById("action-img").src = "./img/close.png"
      document.getElementById("girar").classList.add('active')
    }
  }