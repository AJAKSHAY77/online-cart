let toyRow = []
let totalQuantity = 0;
let totalAmount = 0;
let srNOCounter = 0;


const selectToy = (id) => {
  // when we click on add to cart then what will happen is writter here
  document.querySelector(".bill-book").style.display = "flex";


  creating div element 
  toyRow[id] = document.createElement("div")                                
  toyRow[id].classList.add("creating-content")


  document.querySelector(".price-content").appendChild(toyRow[id]);

  // creating h1 tag for serial number
  toyRow[id].srNo = document.createElement("h3") // db
  toyRow[id].srNo.textContent = (srNOCounter + 1);
  toyRow[id].appendChild(toyRow[id].srNo);

  //addingimg 
toyRow[id].toyImg = document.createElement("img")
toyRow[id].img.src = Toydata[id].toyImg;
toyRow[id].appendChild(toyRow[id].toyImg)

//adding toyname
toyRow[id].ToyName = document.createElement("h3")
toyRow[id].ToyName.textContent = Toydata[id].ToyName
toyRow[id].appendChild(toyRow[id].ToyName)


toyRow[id].quantity = document.createElement("h3")
toyRow[id].quantity.textContent = 1;
toyRow[id].appendChild(toyRow[id].quantity)

// add price
toyRow[id].price = document.createElement("h3")
toyRow[id].price.textContent = `${Toydata[id].toyPrice} *${toyRow[id].quantity.textContent} = ${Number(Toydata[id].toyPrice) * Number(toyRow[id].quantity.textContent)}`
toyRow[id].appendChild(toyRow[id].price)

toyRow[id].hr = document.createElement("hr")
document.querySelector("price-content").appendChild(toyRow[id].hr);






}

