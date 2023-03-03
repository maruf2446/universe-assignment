// let getData = [];
const universeContainer = document.getElementById("main-div");
const AllData = []
// fetch api loaded
const load = () =>{
    // spinner added
    document.getElementById("spinner").classList.remove("d-none");
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => { dataFile(data.data.tools);
    AllData.push(data.data.tools);
    })
}

// create dynamic card section
const dataFile = (file) =>{
  const btnShow = document.getElementById("btn-show-all")
  
  // container.textContent ='';
    if(file.length > 6){
      file = file.slice(0, 6);
      btnShow.classList.remove("d-none");
    }
    else{
      btnShow.classList.add("d-none");
    }
   file.forEach(elements => {
      console.log(elements);
      const {image, features, name, published_in, id} = elements;
      const createDiv = document.createElement("div");
      createDiv.classList.add("col-lg-4", "mb-4");
      createDiv.innerHTML = `
        <div class="card-div p-3">
          <img src="${image}" alt="" class="img-all">
            <div class="img-details">
               <h2>Features</h2>
                <p>1. ${features[0]}</p>
                <p>2. ${features[1]}</p>
                <p>3. ${features[2] ? features[2] : "No Data"}</p>
              </div>
            <hr>

          <div class="down-section-card d-flex justify-content-between align-items-center">
            <div class="left-card">
              <h2>${name}</h2>
                <div class="flex align-items-center">
                    <img src="images/date.png" alt="">
                    <span>${published_in}</span>
                </div>
            </div>

            <div class="right-card">
                <button class="border-0 rounded-circle" onclick="arrowClick('${id}')">
                    <img src="images/arrow.png" alt="">
                </button>
            </div>
         </div>
        </div>
      `;
      universeContainer.appendChild(createDiv);
      document.getElementById("spinner").classList.add("d-none");
   });
}

const btnShow = document.getElementById("btn-show-all").addEventListener('click', () =>{
  universeContainer.textContent = ''
     showAllFun(AllData[0]);
})

const showAllFun = datas =>{

  datas.forEach(universe =>{
     // const {image, features, name, published_in, id} = elements;
     const createDiv = document.createElement("div");
     createDiv.classList.add("col-lg-4", "mb-4");
     createDiv.innerHTML = `
       <div class="card-div p-3">
         <img src="${ universe.image}" alt="" class="img-all">
           <div class="img-details">
              <h2>Features</h2>
               <p>1. ${universe.features[0]}</p>
               <p>2. ${universe.features[1]}</p>
               <p>3. ${universe.features[2] ? universe.features[2] : "No Data"}</p>
             </div>
           <hr>

         <div class="down-section-card d-flex justify-content-between align-items-center">
           <div class="left-card">
             <h2>${universe.name}</h2>
               <div class="flex align-items-center">
                   <img src="images/date.png" alt="">
                   <span>${universe.published_in}</span>
               </div>
           </div>

           <div class="right-card">
               <button class="border-0 rounded-circle" onclick="arrowClick('${universe.id}')">
                   <img src="images/arrow.png" alt="">
               </button>
           </div>
        </div>
       </div>
     `;
     universeContainer.appendChild(createDiv);
     document.getElementById("spinner").classList.add("d-none");
  }) 

}

const arrowClick = async(dataReceived) =>{
     try{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${dataReceived}`)
        .then(res => res.json())
        .then(data => modalFile(data.data));
     }
     catch(error){
        console.log(error);
     }
}

const modalFile = (modalData) =>{
    const {accuracy, description, pricing, integrations, features, image_link, input_output_examples
    } = modalData;
    const modalContainer = document.getElementById("modal-detail");
    modalContainer.classList.remove("d-none");
    modalContainer.innerHTML = `
    <div class="main-container">
            <img onclick="crossBtn()" src="images/cross.png" alt="" class="delete-div"> 
       <div class="modal-container"> 

            <div class="leftSide-div">
               <p>${description ? description : "NO Bio found"}</p>
               <div class="three-card-div">
                  <div class="all-card">
                     <h3><span class="d-block">${pricing ? pricing[0].price : "free of cost/" }</span><span class="d-block">${pricing ? pricing[0].plan : "Basic"}</span></h3>
                  </div>
                  <div class="all-card">
                     <h3 style="color: #F28927"><span class="d-block">${pricing ? pricing[1].price : "free of cost/"}</span><span class="d-block">${pricing? pricing[1].plan : "Pro"}</span></h3>
                  </div>
                  <div class="all-card">
                     <h3 style="color: #EB5757"><span class="d-block">${pricing ? pricing[2].price : "free of cost/"}</span><span class="d-block">${pricing ? pricing[2].plan : "Enterprise"}</span></h3>
                  </div>
               </div>

               <div class="details-div">
                  <div class="features-div">
                     <h2>Features</h2>
                     <ul>
                        <li>${features[1].feature_name ? features[1].feature_name : "No data Found" }</li>
                        <li>${features[2].feature_name ? features[2].feature_name : "No data Found" }</li>
                        <li>${features[3].feature_name ? features[3].feature_name : "No data Found" }</li>
                     </ul>
                  </div>

                  <div class="Integrations-div">
                     <h2>Integrations</h2>
                     <ul>
                        <li>${integrations ? integrations[0] || "No data Found" : "No data Found"}</li>
                        <li>${integrations ? integrations[1] || "No data Found" : "No data Found"}</li>
                        <li>${integrations ? integrations[2] || "No data Found" : "No data Found"}</li>
                     </ul>
                  </div>
               </div>
            </div>

            <div class="rightSide-div">
              <div class="img-div">
                  <img src="${image_link[0]}" alt="" class="all-img">
                  <span id="main-accuracy" style="font-weight: 500" class="badge text-bg-danger"><span>${accuracy.score ? accuracy.score * 100 : "0"}</span>% accuracy</span>
               </div>
               <h1>${input_output_examples ? input_output_examples[0].input : "No title Here"}</h1>
               <p>${input_output_examples ? input_output_examples[0].output.slice(0,150) + " ..." : "No! Not Yet! Take a break!!!"}</p>
            </div>

          </div>
       </div>
    `;
}

// remove modal remove it
const crossBtn = () =>{
    document.getElementById("modal-detail").classList.add("d-none");
}

// show all click
document.getElementById("btn-show-all").addEventListener("click", function(){
      document.getElementById("spinner").classList.remove("d-none");
      deal();
})

const deal = (dataFile) =>{
   load(dataFile);
}