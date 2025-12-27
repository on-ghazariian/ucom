import "./style.css";

document.querySelector("#app").innerHTML = `
  <div id="header">
    <div id="top-header">
      <div id="category">
        <p id="anh">Անհատներ</p>
        <p id="bzn">Բիզնես</p>
      </div>
      <div id="contacts">
        <i class="fa-solid fa-phone"></i>
        <p id="four">444</p>
        <p id="hamar">011 444 444</p>
        <div id="cont2">
        <i class="fa-solid fa-question"></i>
        <p>Օգնություն</p>
        <p id="mutq">Մուտք</p>
        <i class="fa-solid fa-angle-down"></i>
        <i style="padding-left: 15px;" class="fa-solid fa-globe"></i>
        <p>Հայ</p>
        <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>      
  </div>
`;