let count = 0;

const render = () => {
    count++;
    console.log(count);
    if (count % 4 == 0) {
        const button = document.createElement("button");
        button.innerText = "Click Me";
        button.setAttribute("onclick", "render()");
        document.getElementsByClassName("container")[0].appendChild(button);
    }
    var allchar = "0123456789ABCDEF";
    color = "";
    for (var i = 0; i < 6; i++) {
        color += allchar[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + color;
};
render();
