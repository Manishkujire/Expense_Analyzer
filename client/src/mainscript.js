const hamburger = document.querySelector(
    ".header .nav-bar .nav-list .hamburger"
  );
  const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
  const menu_item = document.querySelectorAll(
    ".header .nav-bar .nav-list ul li a"
  );
  const header = document.querySelector(".header.container");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
  
  document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      header.style.backgroundColor = "#29323c";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
  
  menu_item.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobile_menu.classList.toggle("active");
    });
  });
  
  menu_item[4].addEventListener("click", () => {
    while (1) {
      let name = prompt("Enter the password");
      if (name == null) {
        return 0;
      }
      if (name == "manish123") {
        window.location.href = "/upload/index.html";
        return 0;
      } else {
        alert("Wrong Password");
      }
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    countupdate();
  });
  
  function countupdate() {
    const viewcount = document.getElementsByClassName("views");
  
    fetch("https://api.ipify.org?format=json")
      .then((result) => result.json())
      .then(function (data) {
                      console.log(data.ip)
  
        fetch("count.php", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "content-type": "application/json" }
        })
          .then(function (respnce) {
            return respnce.json();
          })
          .then(function (data) {
          viewcount[0].innerHTML = data.count;
  
          })
          .catch(function (error) {
            console.log("error");
          });
      });
  }