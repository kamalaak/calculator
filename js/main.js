function data(){
  contend=  document.getElementById("sometext").value;
    para = document.createElement("p");
    text = document.createTextNode(contend);
    para.appendChild(text)
    my = document.getElementById("div1");
    my.appendChild(para);
}