const universeContainer = document.getElementById('universe-container');
const AllData = []
const lodUser = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => {
        displayUniverse(data.data.tools);
        AllData.push(data.data.tools);
    })
}

const displayUniverse = datas =>{
    // console.log(universe);
       // display 6 universes card
    let universes = datas?.slice(0, 6);

    universes.forEach(universe => {
        // console.log(universe);
        const universeDiv = document.createElement('div');
        universeDiv.classList.add('col');
        universeDiv.innerHTML = `
        <div class="card h-100">
          <img src="${universe.image}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="">Features</h5>
               <p class="mt-4">${universe.features[0]}</p>
               <p class="">${universe.features[1]}</p>
               <p class="">${universe.features[2]}</p>
            </div>
            <div class="card-footer d-flex justify-content-between p-4">
               <div>
                 <p class="">${universe.name}</p>
                 <p class="">${universe.published_in}</p>
               </div>
               <div>
                 <button><i class="fa-solid fa-arrow-right"></i></button>
               </div>
            </div>
        </div>
        `;
        universeContainer.appendChild(universeDiv);
    });
}

document.getElementById('btn-show-all').addEventListener('click', () =>{
    universeContainer.textContent = ''
     showAllFun(AllData[0]);
})

const showAllFun = datas =>{
    datas.forEach(universe => {
        // console.log(universe);
        const universeDiv = document.createElement('div');
        universeDiv.classList.add('col');
        universeDiv.innerHTML = `
        <div class="card h-100">
          <img src="${universe.image}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="">Features</h5>
               <p class="mt-4">${universe.features[0]}</p>
               <p class="">${universe.features[1]}</p>
               <p class="">${universe.features[2]}</p>
            </div>
            <div class="card-footer d-flex justify-content-between p-4">
               <div>
                 <p class="">${universe.name}</p>
                 <p class="">${universe.published_in}</p>
               </div>
               <div>
                 <button><i class="fa-solid fa-arrow-right"></i></button>
               </div>
            </div>
        </div>
        `;
        universeContainer.appendChild(universeDiv);
    });
}

lodUser();