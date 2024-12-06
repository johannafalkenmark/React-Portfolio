
const sprayCan = document.getElementById("sprayCan-js");
const body = document.getElementById("body-js");

function Changecolor() {
  
  
  
  let counter = 0;

  function clickHandler() {
    counter++;
    console.log(counter);

    body.classList.toggle("beige");
  }

  sprayCan.addEventListener("click", clickHandler);
  
  
  
    return (<></>);

}
export default Changecolor;








