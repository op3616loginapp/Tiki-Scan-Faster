var buttonClick = document.querySelector(
  ".Userstyle__UserDropDownButton-sc-6e6am-10"
);
var bodyPress = document.querySelector("body");

let debounce;
let myString = "";

bodyPress.addEventListener("keydown", (e) => {
  myString += e.key;

  if (myString !== "") {
    clearTimeout(debounce);
  }

  debounce = setTimeout(() => {
    if (myString === "open") {
      document
        .querySelector(".Userstyle__UserDropDownButton-sc-6e6am-10")
        .click();
      console.log("run new BO");
      myString = "";
      document.querySelectorAll("input")[1].focus();

      clearTimeout(debounce);
    }
    console.log(myString);
    myString = "";
  }, 200);
});
