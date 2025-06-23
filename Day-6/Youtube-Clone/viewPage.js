const iframe = document.getElementsByTagName("iframe")[0];

const searcHquery = window.location.search;

const res = searcHquery.split("=");
const videoId = res[1];

iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
