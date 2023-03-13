let foldOutTrigger = document.getElementById("foldout-trigger");
let foldOutText = document.getElementById("foldout-text");

foldOutTrigger.addEventListener("click", () => {
  foldOutText.classList.toggle("show-foldout");

  if (foldOutTrigger.innerHTML == '<i class="fa-solid fa-chevron-down"></i>') {
    foldOutTrigger.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  } else {
    foldOutTrigger.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
  }
});
