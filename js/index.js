const lodUser = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayUniverse(data.data.tools))
}

const displayUniverse = universes =>{
    // console.log(universe);
    const universeContainer = document.getElementById('universe-container');
    universes.forEach(universe => {
        console.log(universe);
        const universeDiv = document.createElement('div');
        universeDiv.classList.add('col');
        universeDiv.innerHTML = `
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        universeContainer.appendChild(universeDiv);
    });
}

lodUser();