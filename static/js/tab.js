function toggleCloudDown() {
  var cloudDownContent = document.getElementById("CloudCoreTab");
  cloudDownContent.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.CloudDown-btn')) {
    var cloudDownContent = document.getElementById("CloudCoreTab");
    if (cloudDownContent.classList.contains("show")) {
      cloudDownContent.classList.remove("show");
    }
  }
}
