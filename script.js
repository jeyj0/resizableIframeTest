const source = document.getElementById("source");
const iframe = document.getElementById("iframe");
const width = document.getElementById("width");
const height = document.getElementById("height");

const loadSource = () => {
    iframe.src = 'http://' + source.value;
};

const onResize = () => {
    iframe.width = width.value + 'px';
    iframe.height = height.value + 'px';
}

source.addEventListener("change", loadSource);
width.addEventListener("change", onResize);
height.addEventListener("change", onResize);


width.value = 300;
height.value = 300;

source.value = "localhost"
loadSource();