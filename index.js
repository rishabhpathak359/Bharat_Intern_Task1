let accordians = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordians.length; i++) {
  accordians[i].addEventListener("click", function () {
    for (let j = 0; j < accordians.length; j++) {
      if (j !== i) {
        let content = accordians[j].nextElementSibling;
        content.style.maxHeight = null;
        accordians[j].childNodes[1].classList.remove("fa-times");
        accordians[j].childNodes[1].classList.add("fa-plus");
      }
    }
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
