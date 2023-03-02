const lodUser = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayUniverse(data.data.tools,))
}

const displayUniverse = universes =>{
    // console.log(universe);
    const universeContainer = document.getElementById('universe-container');
    // display 6 universes card
    const showAll = document.getElementById('show-all');
    if(universes.length > 6){
        universes = universes.slice(0, 6);
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none');
    }

    // document.getElementById('btn-show-all').addEventListener('click', function(){
    //     universes();
    // })

    universes.forEach(universe => {
        console.log(universe);
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
            <div class="card-footer">
              <p class="">${universe.name}</p>
              <p class="">${universe.published_in}</p>
            </div>
        </div>
        `;
        universeContainer.appendChild(universeDiv);
    });
}

lodUser();