document.addEventListener("DOMContentLoaded", function () {
    // 页面加载完成后隐藏加载动画
    var loader = document.getElementById("loader");
    loader.style.display = "none";

    // 在这里加载你的页面内容
    loadContent();
});

function loadContent() {
    // 使用Ajax或其他方法加载你的页面内容
    // 这里使用简单的fetch例子
    fetch('../Main-Cn.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
}
